import { MapPin } from "lucide-react";

export function LiveRouteMap() {
    return (
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
    );
}
