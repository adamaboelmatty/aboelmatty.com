'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export function Connect() {
  const connections = [
    {
      icon: TwitterIcon,
      label: "Twitter",
      href: "https://x.com/AdamAboelmatty",
      username: "@AdamAboelmatty",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adamaboelmatty/",
      username: "adamaboelmatty",
    },
    {
      icon: MailIcon,
      label: "Email",
      href: "mailto:adam@viralvisions.live",
      username: "adam@viralvisions.live",
    },
  ];

  return (
    <section className="space-y-6">
      <h2
        className="text-2xl font-bold tracking-tight"
      >
        Let's Connect
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {connections.map((connection, index) => (
          <a
            key={index}
            href={connection.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent
                className="p-6 flex items-center space-x-4"
              >
                <connection.icon
                  className="h-6 w-6 text-primary"
                />
                <div>
                  <div className="font-medium">
                    {connection.label}
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                  >
                    {connection.username}
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}