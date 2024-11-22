'use client';

import React from "react";
import { ThemeToggle } from "./(components)/theme-toggle";
import "./globals.css";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
        <body>
            <div
      className="min-h-screen bg-background text-foreground"
    >
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <main>{children}</main>
    </div>
        </body>
    </html>

  );
}
