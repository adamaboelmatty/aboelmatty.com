'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, Code, Brain, PaintBucket, Users } from "lucide-react";

export function About() {
  const interests = [
    {
      icon: Briefcase,
      text: "Started with media and creative direction, evolved into tech entrepreneurship",
    },
    {
      icon: PaintBucket,
      text: "Crafting intuitive and engaging user interfaces, focusing on user-centered design principles",
    },
    {
      icon: Users,
      text: "Passionate about creating digital experiences that solve real user problems through thoughtful design",
    },
    {
      icon: Code,
      text: "Blending design thinking with technical implementation to build seamless user experiences",
    },
    {
      icon: Brain,
      text: "Deeply interested in AI and its potential to transform user interactions",
    },
    {
      icon: Lightbulb,
      text: "Love experimenting with ideas that intersect design, technology, and community growth",
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-6 flex items-start space-x-4">
              <item.icon className="h-6 w-6 text-primary shrink-0" />
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

export default About;