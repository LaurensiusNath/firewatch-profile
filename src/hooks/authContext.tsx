import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import secureLocalStorage from "react-secure-storage";

// Mock user data - replace with your actual user interface
interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  department: string;
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    username: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database - in real app, this would be from your backend
const MOCK_USERS = [
  {
    id: "1",
    username: "admin",
    password: "admin123",
    email: "admin@badaklng.com",
    role: "Administrator",
    department: "HSE",
    fullName: "John Administrator",
  },
  {
    id: "2",
    username: "hse.manager",
    password: "hse2024",
    email: "hse.manager@badaklng.com",
    role: "HSE Manager",
    department: "HSE",
    fullName: "Sarah Johnson",
  },
  {
    id: "3",
    username: "safety.officer",
    password: "safety123",
    email: "safety@badaklng.com",
    role: "Safety Officer",
    department: "HSE",
    fullName: "Mike Wilson",
  },
];

const AUTH_STORAGE_KEY = import.meta.env.AUTH_STORAGE_KEY || "authSession";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = () => {
    try {
      const storedSession = secureLocalStorage.getItem(AUTH_STORAGE_KEY);
      if (storedSession) {
        const sessionData = JSON.parse(`${storedSession}`);
        // Verify session is still valid (you might want to check expiry, etc.)
        if (sessionData.user && sessionData.timestamp) {
          const sessionAge = Date.now() - sessionData.timestamp;
          // Session valid for 24 hours (86400000 ms)
          if (sessionAge < 86400000) {
            setUser(sessionData.user);
          } else {
            // Session expired, remove it
            secureLocalStorage.removeItem(AUTH_STORAGE_KEY);
          }
        }
      }
    } catch (error) {
      console.error("Error checking existing session:", error);
      secureLocalStorage.removeItem(AUTH_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    username: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Find matching user
      const matchedUser = MOCK_USERS.find(
        (u) =>
          u.username.toLowerCase() === username.toLowerCase() &&
          u.password === password
      );

      if (matchedUser) {
        const userData: User = {
          id: matchedUser.id,
          username: matchedUser.username,
          email: matchedUser.email,
          role: matchedUser.role,
          department: matchedUser.department,
          fullName: matchedUser.fullName,
        };

        // Store session data
        const sessionData = {
          user: userData,
          timestamp: Date.now(),
          sessionId: Math.random().toString(36).substr(2, 9),
        };

        secureLocalStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify(sessionData)
        );
        setUser(userData);
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, error: "Invalid username or password" };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: "Login failed. Please try again." };
    }
  };

  const logout = () => {
    secureLocalStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
