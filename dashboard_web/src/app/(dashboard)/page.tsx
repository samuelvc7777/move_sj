// 1. IMPORTAÇÕES DE MÓDULOS DE NEGÓCIO (Nossas Features)
// Perceba que esta página está extremamente "limpa". Ela não tem milhares de linhas desenhando quadrados e botões.
// Ao invés disso, ela age apenas como um "Montador de Peças de Lego".
// Importamos os componentes que construímos na pasta `src/features/dashboard/...`
import { OverviewCards } from "@/features/dashboard/components/OverviewCards";
import { LiveRouteMap } from "@/features/dashboard/components/LiveRouteMap";
import { SystemAlerts } from "@/features/dashboard/components/SystemAlerts";

// 2. COMPONENTE DA PÁGINA (A "Rota")
// O Next.js sempre procura por um "export default function" dentro de arquivos "page.tsx" para exibir na tela.
// Como este arquivo está em "src/app/(dashboard)/page.tsx", ele responde à URL raiz (http://localhost:3000/) 
// e automaticamente está envolvido e cercado pelo menu lateral que definimos no `layout.tsx` da mesma pasta.
export default function DashboardHome() {
  return (
    // "space-y-6" é uma classe do Tailwind que injeta uma margem vertical uniforme entre TUDO o que estiver aqui dentro.
    // Assim, o cabeçalho "Visão Geral", os Cards numéricos e o Mapa ficam com o mesmo espaçamento vertical automaticamente.
    <div className="space-y-6">

      {/* 3. CABEÇALHO DA TELA (TÍTULO E AÇÕES BÁSICAS) */}
      {/* flex-col no mobile, flex-row em telas maiores que (sm) para alinhar os elementos lado a lado. */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Visão Geral</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Acompanhe as métricas do MoveSJ em tempo real.</p>
        </div>

        {/* Futuros botões para exportar dados para relatórios em PDF/CSV */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            Exportar
          </button>
          <button className="px-4 py-2 bg-blue-600 border border-transparent text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors shadow-sm">
            Gerar Relatório
          </button>
        </div>
      </div>

      {/* 4. CARDS DE MÉTRICAS (VISÃO GERAL) */}
      {/* Aqui estamos chamando a primeira "Peça de Lego" (que está no arquivo OverviewCards.tsx). */}
      {/* No futuro, poderemos passar propriedades (props) para este componente, como: <OverviewCards limit={4} dateRange="today" /> */}
      <OverviewCards />

      {/* 5. ÁREA DE CONTEÚDO PRINCIPAL DIVIDIDA (GRID) */}
      {/* Grid: Define 1 coluna no celular (grid-cols-1) e 3 colunas em telas de notebook (lg:grid-cols-3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* COMPONENTE DO MAPA: Ocupa 2 das 3 colunas da grid. */}
        {/* Isso é definido lá dentro do próprio componente, veja a classe lá: col-span-1 lg:col-span-2 */}
        <LiveRouteMap />

        {/* FEED DE ALERTAS: Ocupa 1 coluna (o espaço que sobrou) na direita. */}
        {/* Ideal para mostrar motoristas aguardando aprovação ou pagamentos do Mercado Pago travados */}
        <SystemAlerts />
      </div>
    </div>
  );
}