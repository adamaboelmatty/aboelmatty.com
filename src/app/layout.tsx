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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div className="min-h-screen bg-background text-foreground">
          <div className="absolute right-4 top-4">
            <ThemeToggle />
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}