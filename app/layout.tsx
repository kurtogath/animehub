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
                    <main className="">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
