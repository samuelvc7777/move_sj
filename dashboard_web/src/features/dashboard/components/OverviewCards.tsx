import { Activity, Car, Users, CircleDollarSign, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ElementType;
    trend: "up" | "down";
    trendValue: string;
    trendLabel: string;
    colorScheme: "emerald" | "blue" | "rose" | "orange";
}

const colorStyles = {
    emerald: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-500",
        border: "border-emerald-500/20",
        glow: "group-hover:shadow-emerald-500/10",
    },
    blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        border: "border-blue-500/20",
        glow: "group-hover:shadow-blue-500/10",
    },
    rose: {
        bg: "bg-rose-500/10",
        text: "text-rose-500",
        border: "border-rose-500/20",
        glow: "group-hover:shadow-rose-500/10",
    },
    orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-500",
        border: "border-orange-500/20",
        glow: "group-hover:shadow-orange-500/10",
    },
};

function StatCard({ title, value, icon: Icon, trend, trendValue, trendLabel, colorScheme }: StatCardProps) {
    const isUp = trend === "up";
    const styles = colorStyles[colorScheme];

    return (
        <div className={`group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${styles.glow}`}>
            {/* Background Soft Glow */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-100 ${styles.bg}`}></div>

            <div className="flex justify-between items-start relative z-10">
                <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">{title}</p>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">{value}</h3>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${styles.bg} ${styles.text} ${styles.border}`}>
                    <Icon size={24} strokeWidth={2.5} />
                </div>
            </div>

            <div className="mt-5 flex items-center text-sm font-medium relative z-10">
                <div className={`flex items-center px-2 py-1 rounded-md ${isUp ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
                    {isUp ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                    <span>{trendValue}</span>
                </div>
                <span className="text-slate-400 dark:text-slate-500 font-medium ml-3 text-xs uppercase tracking-wider">{trendLabel}</span>
            </div>
        </div>
    );
}

export function OverviewCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard
                title="Motoristas Online"
                value="142"
                icon={Car}
                trend="up"
                trendValue="+12%"
                trendLabel="desde ontem"
                colorScheme="emerald"
            />
            <StatCard
                title="Viagens em Andamento"
                value="56"
                icon={Activity}
                trend="up"
                trendValue="+4%"
                trendLabel="desde ontem"
                colorScheme="blue"
            />
            <StatCard
                title="Novos Passageiros"
                value="1,245"
                icon={Users}
                trend="down"
                trendValue="-2%"
                trendLabel="este mês"
                colorScheme="rose"
            />
            <StatCard
                title="Faturamento Diário"
                value="R$ 14.2k"
                icon={CircleDollarSign}
                trend="up"
                trendValue="+18%"
                trendLabel="vs média fixa"
                colorScheme="orange"
            />
        </div>
    );
}
