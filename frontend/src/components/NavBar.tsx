import { useEffect, useState } from "react";
import { User} from "lucide-react";
import { Button } from "./ui/Button";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-10 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Pinko DashBoard
        </h1>

        {/* Right-side buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Button
            variant="outline"
            size="sm"
            icon={User}
            className="border-gray-300 dark:border-gray-700"
          >
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};
