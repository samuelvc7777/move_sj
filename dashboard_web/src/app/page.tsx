import { Activity, Car, Users, Euro, MapPin, TrendingUp, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Visão Geral</h1>
          <p className="text-gray-500 mt-1">Acompanhe as métricas do MoveSJ em tempo real.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Exportar
          </button>
          <button className="px-4 py-2 bg-indigo-600 border border-transparent text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Gerar Relatório
          </button>
        </div>
      </div>

      {/* Overview Cards */}
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

      {/* Main Grid area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Live Tracking / Mapa Mockado */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm col-span-1 lg:col-span-2 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Mapa ao Vivo</h3>
            <span className="flex items-center gap-2 text-sm text-emerald-600 font-medium px-2.5 py-1 bg-emerald-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Atualizando
            </span>
          </div>
          {/* Map Placeholder */}
          <div className="flex-1 bg-indigo-50/50 min-h-[300px] flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-indigo-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">Integração com Google Maps a caminho</p>
              <p className="text-sm text-gray-400">Atualmente mostrando mock-up</p>
            </div>

            {/* Mock Pointers */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xl"></div>
            <div className="absolute top-1/2 left-2/3 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-xl"></div>
          </div>
        </div>

        {/* Alertas Recentes */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Alertas do Sistema</h3>
          </div>
          <div className="p-4 flex-1 flex flex-col gap-3">

            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100">
              <div className="mt-0.5 text-orange-500">
                <AlertTriangle size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-orange-800">Alta demanda no Centro</p>
                <p className="text-xs text-orange-600 mt-1">Sugerido aplicar tarifa dinâmica de 1.4x nesta região.</p>
                <span className="text-[10px] text-orange-400 font-medium mt-2 block">Há 5 min</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="mt-0.5 text-blue-500">
                <Car size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Motorista Mário cadastrado</p>
                <p className="text-xs text-gray-500 mt-1">Aguardando aprovação de documentos (CNH).</p>
                <span className="text-[10px] text-gray-400 font-medium mt-2 block">Há 15 min</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="mt-0.5 text-emerald-500">
                <Euro size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Repasse concluído</p>
                <p className="text-xs text-gray-500 mt-1">R$ 5.430,00 repassados para 12 motoristas via MercadoPago.</p>
                <span className="text-[10px] text-gray-400 font-medium mt-2 block">Há 1 hr</span>
              </div>
            </div>

          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 w-full text-center">
              Ver todos os alertas
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
