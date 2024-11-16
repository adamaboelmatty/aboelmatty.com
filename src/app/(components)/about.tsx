'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, Code, Brain } from "lucide-react";

export function About() {
  const interests = [
    {
      icon: Briefcase,
      text: "Started with media and creative direction, evolved into tech entrepreneurship",
    },
    {
      icon: Lightbulb,
      text: "Love experimenting with ideas that intersect technology, community, and growth",
    },
    {
      icon: Code,
      text: "Passionate about blending creativity with technology to solve real-world problems",
    },
    {
      icon: Brain,
      text: "Deeply interested in AI and its potential to transform industries",
    },
  ];

  return (
    <section className="space-y-6">
      <h2
        className="text-2xl font-bold tracking-tight"
      >
        About Me
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {interests.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow"
          >
            <CardContent
              className="p-6 flex items-start space-x-4"
            >
              <item.icon
                className="h-6 w-6 text-primary shrink-0"
              />
              <p className="text-muted-foreground">
                {item.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
