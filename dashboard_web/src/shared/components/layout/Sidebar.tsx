"use client";

import {
    AlertTriangle,
    LayoutDashboard,
    ClipboardList,
    CarFront,
    Map,
    Building2,
    Users,
    HeartHandshake,
    Handshake,
    PieChart,
    Megaphone,
    CircleDollarSign,
    Settings,
    LogOut,
    MapPin,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, MouseEvent } from "react";

interface SidebarGroupProps {
    title: string;
    isCollapsed: boolean;
    children: React.ReactNode;
}

function SidebarGroup({ title, isCollapsed, children }: SidebarGroupProps) {
    return (
        <div className="mb-4 sm:mb-6">
            <h3 className={`px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 transition-opacity duration-300 ${isCollapsed ? 'md:hidden' : ''}`}>
                {title}
            </h3>

            <div className={`w-6 mx-auto border-t-2 border-slate-200 dark:border-slate-800 mb-3 rounded-full mt-2 ${isCollapsed ? 'hidden md:block' : 'hidden'}`}></div>

            <div className={`space-y-1 sm:space-y-1.5 ${isCollapsed ? 'flex flex-col md:items-center' : 'flex flex-col'}`}>
                {children}
            </div>
        </div>
    );
}

interface SidebarLinkProps {
    href: string;
    icon: React.ElementType;
    label: string;
    isCollapsed: boolean;
}

function SidebarLink({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) {
    const pathname = usePathname();
    const isActive = href !== '#' && (pathname === href || pathname.startsWith(`${href}/`));
    const [tooltipTop, setTooltipTop] = useState(0);

    const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipTop(rect.top + rect.height / 2);
    };

    return (
        <Link
            href={href}
            draggable={false}
            onMouseEnter={handleMouseEnter}
            className={`flex items-center rounded-xl font-medium transition-all duration-300 relative group/link 
            ${isActive
                    ? "text-blue-700 bg-blue-50 dark:text-white dark:bg-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-none"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50"
                } ${isCollapsed ? "gap-3 px-4 py-2.5 md:justify-center md:px-0 md:w-11 md:h-11 md:mx-auto" : "gap-3 px-4 py-2.5"}`}
        >
            {/* Active Indication glow - Side line */}
            {isActive && (
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 rounded-r-md shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all ${isCollapsed ? 'w-1 h-8 md:h-6' : 'w-1 h-8'}`}></div>
            )}

            <Icon className={`flex-shrink-0 transition-transform duration-300 ${isCollapsed ? 'w-[18px] h-[18px] md:w-[20px] md:h-[20px]' : 'w-[18px] h-[18px]'} ${isActive ? "text-blue-600 dark:text-blue-400 scale-110" : "group-hover/link:scale-110 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400"}`} />

            <span className={`text-sm tracking-wide z-10 whitespace-nowrap ${isCollapsed ? 'md:hidden' : ''}`}>{label}</span>

            {/* Premium Tooltip fixed to exact hover coordinate to ignore container scroll context */}
            {isCollapsed && (
                <div
                    className="fixed left-[84px] opacity-0 pointer-events-none group-hover/link:opacity-100 transition-opacity duration-300 z-[9999] hidden md:block"
                    style={{ top: tooltipTop, transform: 'translateY(-50%)' }}
                >
                    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold px-3 py-2 rounded-lg shadow-xl shadow-slate-900/20 dark:shadow-white/10 whitespace-nowrap flex items-center gap-2 border border-slate-700 dark:border-slate-200">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45 border-l border-b border-slate-700 dark:border-slate-200 rounded-sm"></div>
                        <span className="relative z-10 uppercase tracking-wider">{label}</span>
                    </div>
                </div>
            )}
        </Link>
    );
}

interface SidebarProps {
    isOpen: boolean;
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
    onClose: () => void;
}

export function Sidebar({ isOpen, isCollapsed = false, onToggleCollapse, onClose }: SidebarProps) {
    const [logoutTooltipTop, setLogoutTooltipTop] = useState(0);
    const [toggleTooltipTop, setToggleTooltipTop] = useState(0);
    return (
        <aside
            className={`
        fixed inset-y-0 left-0 z-30 h-full bg-white border-r border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex flex-col shadow-2xl 
        transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'w-[280px] md:w-[88px]' : 'w-[280px]'}
        flex-shrink-0
      `}
        >
            <div className={`h-20 flex items-center border-b border-slate-200 dark:border-slate-800/80 flex-shrink-0 relative transition-all duration-300 ${isCollapsed ? 'justify-between px-6 md:justify-center md:px-0' : 'justify-between px-6'}`}>
                {/* Logo Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className={`flex items-center relative z-10 group cursor-pointer gap-3 ${isCollapsed ? 'w-full md:w-auto' : 'w-full'}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800 shadow-md shadow-slate-200/50 dark:shadow-slate-900/50 overflow-hidden border border-slate-100 dark:border-slate-700 transition-all group-hover:shadow-blue-500/20 group-hover:border-blue-200 dark:group-hover:border-blue-800 relative">
                        <Image
                            src="/assets/logo-move-sj.jpg"
                            alt="Logo MoveSJ"
                            width={40}
                            height={40}
                            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className={`whitespace-nowrap transition-all duration-300 flex flex-col justify-center ${isCollapsed ? 'w-auto opacity-100 overflow-hidden flex-1 md:w-0 md:opacity-0 md:overflow-hidden md:flex-none' : 'w-auto opacity-100 flex-1'}`}>
                        <span className="block text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">MoveSJ</span>
                        <span className="block text-[10px] font-black text-orange-500 dark:text-orange-400 tracking-widest uppercase mt-1">Dashboard</span>
                    </div>
                </div>

                {/* Close Button on Mobile */}
                <button
                    onClick={onClose}
                    className="md:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none relative z-10"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Nav Principal. Scrollbar Y ativa, escondemos o scroll-x mas usamos position fixed nos tooltips */}
            <nav className={`flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar transition-all duration-300 ${isCollapsed ? 'px-3 py-6' : 'px-4 py-8'}`}>
                <SidebarGroup title="Urgência" isCollapsed={isCollapsed}>
                    <SidebarLink href="#" icon={AlertTriangle} label="Emergências" isCollapsed={isCollapsed} />
                </SidebarGroup>

                <SidebarGroup title="Visão Global" isCollapsed={isCollapsed}>
                    <SidebarLink href="/" icon={LayoutDashboard} label="Visão Geral" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={MapPin} label="Mapa" isCollapsed={isCollapsed} />
                </SidebarGroup>

                <SidebarGroup title="Operação" isCollapsed={isCollapsed}>
                    <SidebarLink href="#" icon={Map} label="Viagens / Solicitações" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={CarFront} label="Motoristas" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={Users} label="Passageiros" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={Building2} label="Empresas (B2B)" isCollapsed={isCollapsed} />
                </SidebarGroup>

                <SidebarGroup title="Ecossistema" isCollapsed={isCollapsed}>
                    <SidebarLink href="#" icon={HeartHandshake} label="Relacionamentos (SAC)" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={Handshake} label="Parcerias" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={Megaphone} label="Marketing" isCollapsed={isCollapsed} />
                </SidebarGroup>

                <SidebarGroup title="Gestão & Dados" isCollapsed={isCollapsed}>
                    <SidebarLink href="#" icon={CircleDollarSign} label="Financeiro & Acertos" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={PieChart} label="Relatórios & BI" isCollapsed={isCollapsed} />
                    <SidebarLink href="#" icon={ClipboardList} label="Cadastros Básicos" isCollapsed={isCollapsed} />
                </SidebarGroup>

                <SidebarGroup title="Sistema" isCollapsed={isCollapsed}>
                    <SidebarLink href="#" icon={Settings} label="Configurações" isCollapsed={isCollapsed} />
                </SidebarGroup>

                {/* Padding space at bottom for scrolling gracefully */}
                <div className="h-4"></div>
            </nav>

            <div className={`border-t border-slate-200 dark:border-slate-800/80 flex-shrink-0 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md flex flex-col gap-3 z-40 transition-all duration-300 ${isCollapsed ? 'p-4 md:p-3' : 'p-4'}`}>

                {/* Botão de Logout — versão ícone (desktop colapsado) */}
                <button
                    onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setLogoutTooltipTop(rect.top + rect.height / 2);
                    }}
                    className={`hidden rounded-xl text-rose-500 hover:text-white hover:bg-rose-500 dark:text-rose-400 dark:hover:bg-rose-500/20 font-medium transition-all duration-300 group/logout relative ${isCollapsed ? 'md:flex md:items-center md:justify-center md:w-11 md:h-11 md:mx-auto' : ''}`}
                >
                    <LogOut size={18} className="group-hover/logout:-translate-x-1 transition-transform flex-shrink-0" />
                    {isCollapsed && (
                        <div
                            className="fixed left-[84px] opacity-0 pointer-events-none group-hover/logout:opacity-100 transition-opacity duration-300 z-[9999]"
                            style={{ top: logoutTooltipTop, transform: 'translateY(-50%)' }}
                        >
                            <div className="bg-rose-500 text-white text-[11px] font-bold px-3 py-2 rounded-lg shadow-xl shadow-rose-500/20 whitespace-nowrap flex items-center gap-2 border border-rose-600">
                                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-rose-500 rotate-45 rounded-sm border-l border-b border-rose-600"></div>
                                <span className="relative z-10 uppercase tracking-wider">Desconectar</span>
                            </div>
                        </div>
                    )}
                </button>

                {/* Botão de Logout — versão completa (mobile + desktop expandido) */}
                <button
                    className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl text-rose-500 hover:text-white hover:bg-rose-500 dark:text-rose-400 dark:hover:bg-rose-500/20 font-medium transition-all duration-300 group/logout2 relative ${isCollapsed ? 'md:hidden' : ''}`}
                >
                    <LogOut size={18} className="group-hover/logout2:-translate-x-1 transition-transform flex-shrink-0" />
                    <span className="text-sm tracking-wide">Desconectar</span>
                </button>

                {onToggleCollapse && (
                    <button
                        onClick={onToggleCollapse}
                        onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setToggleTooltipTop(rect.top + rect.height / 2);
                        }}
                        className={`hidden md:flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-700 font-medium transition-all group/toggle relative ${isCollapsed ? 'w-11 h-11 mx-auto' : 'px-4 py-2.5 w-full gap-2'}`}
                    >
                        {isCollapsed ? (
                            <ChevronRight size={18} className="group-hover/toggle:translate-x-0.5 transition-transform" />
                        ) : (
                            <>
                                <ChevronLeft size={18} className="group-hover/toggle:-translate-x-0.5 transition-transform" />
                                <span className="text-sm tracking-wide whitespace-nowrap overflow-hidden">Recolher</span>
                            </>
                        )}

                        {isCollapsed && (
                            <div
                                className="fixed left-[84px] opacity-0 pointer-events-none group-hover/toggle:opacity-100 transition-opacity duration-300 z-[9999] hidden md:block"
                                style={{ top: toggleTooltipTop, transform: 'translateY(-50%)' }}
                            >
                                <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-[11px] font-bold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap flex items-center gap-2">
                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-100 dark:bg-slate-800 border-l border-b border-slate-200 dark:border-slate-700 rotate-45 rounded-sm"></div>
                                    <span className="relative z-10 uppercase tracking-wider">Expandir</span>
                                </div>
                            </div>
                        )}
                    </button>
                )}
            </div>

            <style jsx global>{`
        /* Scrollbar padronizada claro/escuro */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1; /* slate-300 para light mode */
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #334155; /* slate-700 para dark mode */
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #94a3b8; /* slate-400 */
        }
        .dark .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #475569; /* slate-600 */
        }
      `}</style>
        </aside>
    );
}
