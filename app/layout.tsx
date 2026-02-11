import "./globals.css";
import Link from "next/link";

export const metadata = {
    title: "HDN Books",
    description: "Nền tảng đọc sách online hiện đại",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
        <body className="min-h-screen flex flex-col bg-white text-zinc-900">

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
                    >
                        📚 HDN Books
                    </Link>

                    <Link
                        href="/book"
                        className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
                    >
                        Thư viện sách
                    </Link>
                </div>

                <div className="flex gap-3">
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-100 transition text-sm font-medium"
                    >
                        Đăng nhập
                    </Link>

                    <Link
                        href="/register"
                        className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-medium shadow"
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
            {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-zinc-500">
                © 2026 HDN Books. All rights reserved.
            </div>
        </footer>

        </body>
        </html>
    );
}
