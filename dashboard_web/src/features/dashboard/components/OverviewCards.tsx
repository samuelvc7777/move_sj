import { Activity, Car, Users, Euro, TrendingUp } from "lucide-react";

export function OverviewCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Motoristas Online</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">142</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Car size={20} />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-emerald-600">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+12%</span>
                    <span className="text-gray-400 font-normal ml-2">desde ontem</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Corridas em Andamento</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">56</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <Activity size={20} />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+4%</span>
                    <span className="text-gray-400 font-normal ml-2">desde ontem</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Novos Passageiros</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">1,245</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Users size={20} />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-red-500">
                    <TrendingUp size={16} className="mr-1 rotate-180" />
                    <span>-2%</span>
                    <span className="text-gray-400 font-normal ml-2">este mês</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Faturamento Diário</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">R$ 14.2k</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                        <Euro size={20} />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-emerald-600">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+18%</span>
                    <span className="text-gray-400 font-normal ml-2">vs média fixa</span>
                </div>
            </div>
        </div>
    );
}
