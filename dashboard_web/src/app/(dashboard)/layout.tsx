import { Sidebar } from "@/shared/components/layout/Sidebar";
import { Header } from "@/shared/components/layout/Header";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                <Header />

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6 lg:p-10">
                    {children}
                </main>
            </div>
        </>
    );
}
