"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { FutureverseAuthProvider, FutureverseWagmiProvider } from '@futureverse/auth-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { futureverseAuthClient } from '@/config/futureverse';
import { useState } from 'react';
import { createConfig, http } from 'wagmi';
import { root } from '@futureverse/wagmi-connectors';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  const getWagmiConfig = async () => {
    return createConfig({
      chains: [root],
      connectors: [],
      transports: {
        [root.id]: http(),
      },
    });
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <QueryClientProvider client={queryClient}>
          <FutureverseWagmiProvider getWagmiConfig={getWagmiConfig}>
            <FutureverseAuthProvider authClient={futureverseAuthClient}>
              <Navbar />
              <main className="pt-16">
                {children}
              </main>
            </FutureverseAuthProvider>
          </FutureverseWagmiProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
