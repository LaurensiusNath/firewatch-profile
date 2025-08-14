import React, { useState } from "react";
import { useAuth } from "@/hooks/authContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Loader2, Shield } from "lucide-react";

const SignInPage = () => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    const result = await login(formData.username, formData.password);
    if (!result.success) {
      setError(result.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute top-1/2 -left-10 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-lg"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Company Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Badak_NGL_new_logo_%28since_2018%29.svg/640px-Badak_NGL_new_logo_%28since_2018%29.svg.png"
              alt="Badak LNG Logo"
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            HSE Department
          </h1>
          <p className="text-gray-600">Badak LNG Portal</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Sign In
            </CardTitle>
            <CardDescription className="text-gray-600">
              Enter your credentials to access the HSE system
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Demo credentials info */}
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <p className="font-medium text-blue-800 mb-1">
                  Demo Credentials:
                </p>
                <div className="text-blue-700 space-y-1">
                  <p>
                    <strong>Admin:</strong> admin / admin123
                  </p>
                  <p>
                    <strong>Manager:</strong> hse.manager / hse2024
                  </p>
                  <p>
                    <strong>Officer:</strong> safety.officer / safety123
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>&copy; 2024 Badak LNG. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
