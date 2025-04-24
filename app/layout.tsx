import Footer from "@/components/design/Footer";
import Header from "@/components/design/Headers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/main.scss";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anime HUB",
    description: "Hub of animes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                <div className="min-h-screen p-8 sm:p-20">
                    <main className="">
                        <div className="grid grid-cols-1 justify-items-center gap-8 px-8 py-0 md:grid-cols-2 xl:grid-cols-3">
                            {children}
                        </div>
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
