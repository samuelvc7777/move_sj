import { LayoutDashboard, Users, Car, MapPin, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col shadow-sm">
            <div className="h-16 flex items-center px-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-indigo-600">
                    <Car className="w-8 h-8" />
                    <span className="text-xl font-bold tracking-tight">MoveSJ Admin</span>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-50 text-indigo-700 font-medium transition-colors">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link href="/passageiros" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
                    <Users size={20} />
                    <span>Passageiros</span>
                </Link>
                <Link href="/motoristas" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
                    <Car size={20} />
                    <span>Motoristas</span>
                </Link>
                <Link href="/corridas" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
                    <MapPin size={20} />
                    <span>Corridas Real-Time</span>
                </Link>
                <Link href="/configuracoes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
                    <Settings size={20} />
                    <span>Configurações</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-red-600 hover:bg-red-50 font-medium transition-colors">
                    <LogOut size={20} />
                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
}
