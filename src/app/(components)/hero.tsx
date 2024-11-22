'use client';

import React from "react";

export function Hero() {
  return (
    <section className="space-y-4 pt-16">
      <h1
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        Hi, I&apos;m Adam.
      </h1>
      <p
        className="text-lg text-muted-foreground leading-relaxed"
      >
        I&apos;m passionate about building tools and platforms that empower creators
        and entrepreneurs. Currently, I&apos;m working on{" "}
        <a
          href="https://viralvisions.live"
          className="text-primary hover:underline font-medium"
        >
          ViralVisions.live
        </a>{" "}
        to help TikTok creators maximize their potential.
      </p>
    </section>
  );
}