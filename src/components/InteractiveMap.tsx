import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Globe } from "lucide-react";

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // PT Badak LNG coordinates in Bontang, East Kalimantan
  const badakLngCoordinates: [number, number] = [117.4851, 0.1347];

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: badakLngCoordinates,
      zoom: 13,
      pitch: 45,
      bearing: -17.6,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-left');

    // Create custom marker for PT Badak LNG
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.backgroundImage = 'url(data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#DC2626" stroke="#fff" stroke-width="3"/>
        <circle cx="20" cy="20" r="8" fill="#fff"/>
        <circle cx="20" cy="20" r="4" fill="#DC2626"/>
      </svg>
    `) + ')';
    markerElement.style.width = '40px';
    markerElement.style.height = '40px';
    markerElement.style.backgroundSize = 'cover';
    markerElement.style.cursor = 'pointer';

    // Add marker to map
    const marker = new mapboxgl.Marker(markerElement)
      .setLngLat(badakLngCoordinates)
      .addTo(map.current);

    // Create popup
    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: true,
      closeOnClick: false
    }).setHTML(`
      <div style="padding: 16px; min-width: 250px;">
        <h3 style="font-weight: bold; font-size: 18px; margin-bottom: 8px; color: #1f2937;">
          PT Badak LNG
        </h3>
        <p style="color: #6b7280; margin-bottom: 12px; font-size: 14px;">
          Bontang, Kalimantan Timur, Indonesia
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 14px;">
            <span style="color: #dc2626;">📍</span>
            <span>Jl. Badak LNG, Bontang Utara</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 14px;">
            <span style="color: #dc2626;">🏭</span>
            <span>Natural Gas Processing Facility</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 14px;">
            <span style="color: #dc2626;">🌐</span>
            <span>www.badaklng.co.id</span>
          </div>
        </div>
        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
          <button 
            onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${badakLngCoordinates[1]},${badakLngCoordinates[0]}', '_blank')"
            style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;"
          >
            Get Directions
          </button>
        </div>
      </div>
    `);

    marker.setPopup(popup);

    // Show popup on load
    setTimeout(() => {
      popup.addTo(map.current!);
    }, 1000);

    // Add 3D buildings layer
    map.current.on('style.load', () => {
      if (!map.current) return;

      map.current.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      });

      map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

      // Add 3D buildings
      const layers = map.current.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout?.['text-field']
      )?.id;

      map.current.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTokenSubmit();
    }
  };

  if (showTokenInput) {
    return (
      <Card className="border-0">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-accent p-4 rounded-2xl">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Interactive Map
              </h3>
              <p className="text-muted-foreground mb-6">
                Enter your Mapbox access token to view PT Badak LNG location in Bontang, Kalimantan Timur
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <Input
                type="password"
                placeholder="Enter Mapbox access token..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-border"
              />
              <Button 
                onClick={handleTokenSubmit}
                disabled={!mapboxToken.trim()}
                className="w-full bg-accent hover:bg-accent/90"
              >
                <Globe className="h-4 w-4 mr-2" />
                Load Map
              </Button>
              <p className="text-sm text-muted-foreground">
                Get your free token at{' '}
                <a 
                  href="https://mapbox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div ref={mapContainer} className="h-80 w-full" />
          <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <div>
                <div className="font-semibold text-foreground">PT Badak LNG</div>
                <div className="text-muted-foreground">Bontang, Kalimantan Timur</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;