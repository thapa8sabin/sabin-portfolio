import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrainsMono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
    title: "Sabin Thapa",
    description: "Hello I'm Sabin Thapa.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${jetbrainsMono.variable}`}
            >
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    );
}
