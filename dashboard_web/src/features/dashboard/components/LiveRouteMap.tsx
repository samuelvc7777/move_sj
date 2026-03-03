import { MapPin, Navigation2, Zap } from "lucide-react";

export function LiveRouteMap() {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 col-span-1 lg:col-span-2 overflow-hidden flex flex-col relative group">

            {/* Header Overlay */}
            <div className="absolute top-0 w-full z-10 px-6 py-5 bg-gradient-to-b from-white/90 dark:from-slate-900/90 to-transparent backdrop-blur-sm flex justify-between items-center pointer-events-none">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-500/20">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white tracking-tight">Mapa Dinâmico</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide border-t-0">VISÃO EM TEMPO REAL</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-500/20 shadow-sm pointer-events-auto cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 dark:bg-emerald-400"></span>
                    </span>
                    <span className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold tracking-wide">AO VIVO</span>
                </div>
            </div>

            {/* Map Area Mockup */}
            <div className="flex-1 min-h-[400px] relative bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center justify-center">

                {/* Modern Grid Background */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10"
                    style={{
                        backgroundImage: "linear-gradient(currentColor 1.5px, transparent 1.5px), linear-gradient(90deg, currentColor 1.5px, transparent 1.5px)",
                        backgroundSize: "40px 40px",
                        color: "var(--tw-colors-slate-400)"
                    }}>
                </div>

                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-orange-500/5 dark:from-blue-500/10 dark:to-orange-500/10"></div>

                <div className="text-center z-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/50 dark:border-slate-800/50 shadow-xl transition-transform group-hover:scale-105 duration-500 max-w-sm mx-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                        <Navigation2 className="text-white w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Integração em Andamento</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Conectando APIs de parceiros logísticos para visualização em 60FPS.</p>
                </div>

                {/* Animated Map Pointers - Drivers (Blue) */}
                <div className="absolute top-[20%] left-[15%] group">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                    <div className="relative w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 shadow-xl z-10 transition-transform hover:scale-150 cursor-pointer"></div>
                </div>

                <div className="absolute top-[60%] left-[75%] group">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-40 animate-pulse delay-150"></div>
                    <div className="relative w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 shadow-xl z-10 transition-transform hover:scale-150 cursor-pointer"></div>
                </div>

                {/* Animated Map Pointers - High Demand (Rose/Orange) */}
                <div className="absolute top-[40%] right-[30%] group">
                    <div className="absolute -inset-4 bg-rose-500/20 rounded-full blur-lg animate-pulse"></div>
                    <div className="relative w-5 h-5 rounded-full bg-rose-500 border-2 border-white dark:border-slate-900 shadow-[0_0_15px_rgba(244,63,94,0.5)] z-10 flex items-center justify-center cursor-pointer transition-transform hover:scale-125">
                        <Zap size={10} className="text-white" />
                    </div>
                </div>
            </div>

            {/* Footer Summary */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex-1 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Região Ativa</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">São José dos Campos, SP</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Demanda</p>
                        <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">Alta (1.2x)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
