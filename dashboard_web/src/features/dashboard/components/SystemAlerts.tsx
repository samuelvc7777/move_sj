import { AlertTriangle, Car, Currency, ArrowRight } from "lucide-react";

const getIconBg = (type: "critical" | "warning" | "info") => {
    switch (type) {
        case "critical": return "bg-rose-100/50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 shadow-rose-200 dark:shadow-none";
        case "warning": return "bg-orange-100/50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 shadow-orange-200 dark:shadow-none";
        case "info":
        default: return "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-slate-200 dark:shadow-none";
    }
};

export function SystemAlerts() {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col relative group overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 dark:text-orange-400 shadow-sm border border-orange-100 dark:border-orange-500/20 group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors">
                        <AlertTriangle size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white tracking-tight">Timeline & Alertas</h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold tracking-wide uppercase">Atualizações do Sistema</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-300"></span>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 relative z-10 custom-scrollbar max-h-[400px]">

                {/* Alert Item - Critical */}
                <div className="flex items-start p-4 rounded-2xl border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer bg-rose-50 dark:bg-rose-500/5 border-rose-100 dark:border-rose-500/10 hover:bg-rose-100/30 dark:hover:bg-rose-500/10">
                    <div className="mr-4 mt-1 relative">
                        <span className="absolute -inset-1 rounded-full bg-rose-500/20 blur animate-pulse"></span>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-xl shadow-sm relative z-10 ${getIconBg("critical")}`}>
                            <AlertTriangle size={18} strokeWidth={2.5} />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-rose-800 dark:text-rose-400 tracking-tight truncate">Demanda Extrema</h4>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-rose-400 bg-white/50 dark:bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-100/50 dark:border-rose-500/20">Agora</span>
                        </div>
                        <p className="text-xs text-rose-700/80 dark:text-rose-300/80 font-medium leading-relaxed">Pico de chamados na Zona Sul. Sugestão: aplicar multiplicador dinâmico de <strong className="text-rose-600 dark:text-rose-400">1.6x</strong>.</p>
                    </div>
                </div>

                {/* Alert Item - Info (Approval) */}
                <div className="flex items-start p-4 rounded-2xl border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800/80 relative overflow-hidden group/item">
                    <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    <div className="mr-4 mt-1">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 shadow-sm`}>
                            <Car size={18} strokeWidth={2.5} />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">Novo Motorista (Mário)</h4>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">15 min</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Cadastro finalizado. Fila de moderação: <strong className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">Revisar CNH e CRLV</strong>.</p>
                    </div>
                </div>

                {/* Alert Item - Success/Info */}
                <div className="flex items-start p-4 rounded-2xl border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800/80 relative overflow-hidden group/item">
                    <div className="absolute inset-y-0 left-0 w-1 bg-emerald-400 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    <div className="mr-4 mt-1">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 shadow-sm`}>
                            <Currency size={18} strokeWidth={2.5} />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">Repasse Concluído</h4>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">1 hora</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Lote #499 concluído. Total repassado: <strong className="text-emerald-600 dark:text-emerald-400">R$ 5.430,00</strong> para 12 motoristas.</p>
                    </div>
                </div>

                {/* Fade Out Bottom Edge */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none"></div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 mt-auto rounded-b-3xl">
                <button className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 border border-blue-100 dark:border-blue-500/30 transition-all duration-300">
                    Ver Histórico Completo
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}
