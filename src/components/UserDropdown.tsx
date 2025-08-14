import React from "react";
import { useAuth } from "@/hooks/authContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

const UserDropdown = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 h-auto p-2 hover:bg-white/10 transition-colors"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-blue-600 text-white text-sm">
              {getInitials(user.fullName)}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-white">{user.fullName}</p>
            <p className="text-xs text-blue-100">{user.role}</p>
          </div>
          <ChevronDown className="h-4 w-4 text-white/70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border border-gray-200 shadow-lg"
      >
        <DropdownMenuLabel className="px-2 py-1.5">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-gray-900">{user.fullName}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <p className="text-xs text-blue-600 font-medium">
              {user.department} - {user.role}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
          <User className="mr-2 h-4 w-4 text-gray-500" />
          <span className="text-gray-700">Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
          <Settings className="mr-2 h-4 w-4 text-gray-500" />
          <span className="text-gray-700">Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-50 text-red-600 focus:text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
