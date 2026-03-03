"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Evita Hydration Mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 text-slate-400 rounded-full w-9 h-9 flex items-center justify-center pointer-events-none">
                <span className="opacity-0">.</span>
            </button>
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 dark:hover:text-blue-400 rounded-full transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Alternar tema escuro/claro"
        >
            {isDark ? (
                <Sun size={20} className="transition-transform rotate-0 scale-100" />
            ) : (
                <Moon size={20} className="transition-transform rotate-0 scale-100" />
            )}
        </button>
    );
}
