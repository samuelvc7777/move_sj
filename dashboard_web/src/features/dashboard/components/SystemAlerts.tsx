import { AlertTriangle, Car, Euro } from "lucide-react";

export function SystemAlerts() {
    return (
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
    );
}
