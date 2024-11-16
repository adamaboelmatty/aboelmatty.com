'use client';

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SubSwapROI.com",
      description: "A tool for subscription management and optimization.",
      link: "https://subswaproi.com",
    },
    {
      title: "GoalGrub.com",
      description:
        "Helping users set and achieve fitness goals through personalized meal plans.",
      link: "https://goalgrub.com",
      status: "In Development",
    },
    {
      title: "CreativConnect.app",
      description:
        "A platform to connect creatives and collaborators for projects.",
      status: "In Development",
    },
  ];

  return (
    <section className="space-y-6">
      <h2
        className="text-2xl font-bold tracking-tight"
      >
        Current Projects
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle
                className="flex items-center justify-between"
              >
                <span>{project.title}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink
                      className="h-4 w-4"
                    />
                  </a>
                )}
              </CardTitle>
              <CardDescription>
                {project.description}
              </CardDescription>
              {project.status && (
                <span
                  className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  {project.status}
                </span>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
