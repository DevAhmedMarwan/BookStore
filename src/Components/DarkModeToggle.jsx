import { useEffect } from "react";
import useDarkModeToggle from "@/Store/DarkModeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, setTheme, applyTheme } = useDarkModeToggle();

  useEffect(() => {
    applyTheme();

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme, applyTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={"!px-3 cursor-pointer"}>
          <Moon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 !p-2.5">
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer w-full !p-0.5 text-start !pb-2"
        >
          🌙 Dark
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer w-full !p-0.5 text-start !pb-2"
        >
          ☀️ Light
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer w-full !p-0.5 text-start"
        >
          💻 System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
