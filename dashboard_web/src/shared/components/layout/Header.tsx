import { Bell, Menu } from "lucide-react";
import { ThemeToggle } from "@/shared/components/theme/ThemeToggle";

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-slate-200/60 dark:bg-slate-900/70 dark:border-slate-800/60 flex items-center justify-between px-4 lg:px-10 z-10 w-full flex-shrink-0 sticky top-0 transition-colors duration-300">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors md:hidden"
                >
                    <Menu size={20} />
                </button>
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <ThemeToggle />
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 dark:hover:text-blue-400 rounded-full transition-all duration-300 relative hidden sm:block">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 sm:border-l border-slate-200 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20 truncate ring-2 ring-white dark:ring-slate-900 cursor-pointer hover:scale-105 transition-transform">
                        S
                    </div>
                    <div className="hidden md:block cursor-pointer group">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Samuel</p>
                        <p className="text-[10px] uppercase font-bold text-orange-500 mt-1 tracking-wider">Super Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
