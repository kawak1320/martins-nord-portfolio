import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ArcticButton } from "./arctic-button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ArcticButton variant="ghost" size="icon">
        <Sun className="h-4 w-4" />
      </ArcticButton>
    );
  }

  return (
    <ArcticButton
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="transition-arctic"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 rotate-0 scale-100 transition-all" />
      ) : (
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </ArcticButton>
  );
}