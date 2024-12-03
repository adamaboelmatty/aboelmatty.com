'use client';

import React from "react";

export function Hero() {
  return (
    <section className="space-y-4 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Hi, I&apos;m Adam.
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I&apos;m a UI/UX Designer focused on creating intuitive interfaces and seamless user experiences. 
        Currently building{" "}
        <a
          href="https://viralvisions.live"
          className="text-primary hover:underline font-medium"
        >
          ViralVisions.live
        </a>
        , a digital agency helping TikTok creators scale their online presence.
      </p>
    </section>
  );
}