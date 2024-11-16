'use client';

import React from "react";
import { Hero } from "./(components)/hero";
import { Projects } from "./(components)/projects";
import { About } from "./(components)/about";
import { Connect } from "./(components)/connect";

export default function Home() {
  return (
    <div
      className="container mx-auto px-4 py-8 max-w-4xl space-y-16"
    >
      <Hero />
      <Projects />
      <About />
      <Connect />
    </div>
  );
}
