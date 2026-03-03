import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-10 shadow-sm z-10 w-full">
            <div className="relative w-64 md:w-96 hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Buscar motoristas, passageiros, corridas..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        AD
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-gray-700 leading-none">Admin</p>
                        <p className="text-xs text-gray-500 mt-1">Super Usuário</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
