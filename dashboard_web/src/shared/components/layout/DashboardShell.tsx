"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { usePathname } from "next/navigation";

export function DashboardShell({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    // Fecha o menu no celular caso a pessoa clique em um link e vá para outra página
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    return (
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar
                isOpen={isSidebarOpen}
                isCollapsed={isCollapsed}
                onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Overlay Escuro para mobile quando a sidebar está aberta */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity cursor-pointer"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Container Principal - flex-1 ocupa o espaço restante */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />

                {/* Área de conteúdo com scroll local */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-50/50 dark:bg-[#020617] p-4 md:p-6 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
