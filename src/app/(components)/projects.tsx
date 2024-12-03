'use client';

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ExternalLink, Figma, Gamepad2, TestTubes, Boxes, PenTool, Brain, Search, Lightbulb, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  role: string;
  tools: string[];
  process: {
    research: string[];
    ideation: string[];
    testing: string[];
  };
  outcomes: string[];
  link?: string;
  status?: string;
}

export default function Projects() {
  const toolIcons = {
    "Figma": <Figma className="h-3 w-3" />,
    "Adobe XD": <PenTool className="h-3 w-3" />,
    "Maze": <Brain className="h-3 w-3" />,
    "Principle": <Boxes className="h-3 w-3" />,
    "UserTesting": <TestTubes className="h-3 w-3" />,
    "Miro": <Gamepad2 className="h-3 w-3" />,
    "ProtoPie": <PenTool className="h-3 w-3" />,
  };

  const projects: Project[] = [
    {
      title: "SubSwapROI.com",
      description: "A tool for subscription management and optimization.",
      role: "Lead UI/UX Designer",
      tools: ["Figma", "Adobe XD", "Maze"],
      process: {
        research: [
          "Conducted 15 user interviews",
          "Analyzed subscription patterns",
          "Created user personas"
        ],
        ideation: [
          "Developed low-fi wireframes",
          "Created user flow diagrams",
          "Designed information architecture"
        ],
        testing: [
          "Conducted A/B testing",
          "Performed usability studies",
          "Gathered feedback through beta testing"
        ]
      },
      outcomes: [
        "40% reduction in task completion time",
        "35% increase in user satisfaction"
      ],
      link: "https://subswaproi.com",
    },
    {
      title: "GoalGrub.com",
      description: "Helping users set and achieve fitness goals through personalized meal plans.",
      role: "UI/UX Designer & Researcher",
      tools: ["Figma", "Principle", "UserTesting"],
      process: {
        research: [
          "Analyzed user dietary preferences",
          "Conducted competitor analysis",
          "Interviewed nutritionists"
        ],
        ideation: [
          "Created user journey maps",
          "Designed UI components",
          "Developed interactive prototypes"
        ],
        testing: [
          "Ran remote usability tests",
          "Conducted preference testing",
          "Iterative feedback sessions"
        ]
      },
      outcomes: [
        "90% user satisfaction in beta",
        "60% reduction in meal planning time"
      ],
      status: "In Development",
    },
    {
      title: "CreativConnect.app",
      description: "A platform to connect creatives and collaborators for projects.",
      role: "Product Designer",
      tools: ["Figma", "Miro", "ProtoPie"],
      process: {
        research: [
          "Surveyed 100+ creatives",
          "Analyzed collaboration patterns",
          "Conducted market research"
        ],
        ideation: [
          "Sketched core features",
          "Created design system",
          "Developed interaction patterns"
        ],
        testing: [
          "Beta testing with focus groups",
          "Iterative design reviews",
          "Performance testing"
        ]
      },
      outcomes: [
        "50% faster project matching",
        "85% positive UI feedback"
      ],
      status: "In Development",
    },
  ];

  const getToolColor = (tool: string) => {
    const colors = {
      "Figma": "bg-purple-50 text-purple-600 border-purple-200",
      "Adobe XD": "bg-pink-50 text-pink-600 border-pink-200",
      "Maze": "bg-blue-50 text-blue-600 border-blue-200",
      "Principle": "bg-green-50 text-green-600 border-green-200",
      "UserTesting": "bg-orange-50 text-orange-600 border-orange-200",
      "Miro": "bg-yellow-50 text-yellow-600 border-yellow-200",
      "ProtoPie": "bg-red-50 text-red-600 border-red-200",
    };
    return colors[tool as keyof typeof colors] || "bg-gray-50 text-gray-600 border-gray-200";
  };

  const processIcons = {
    research: Search,
    ideation: Lightbulb,
    testing: Code
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">
        UI/UX Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="space-y-6">
              <CardTitle className="flex items-center justify-between">
                <span>{project.title}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </CardTitle>
              <CardDescription className="space-y-6">
                <p>{project.description}</p>
                <div className="space-y-4">
                  <p className="text-sm text-primary font-medium">{project.role}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${getToolColor(tool)}`}
                        >
                          {toolIcons[tool as keyof typeof toolIcons]}
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Process:</p>
                    {Object.entries(project.process).map(([phase, steps]) => {
                      const PhaseIcon = processIcons[phase as keyof typeof processIcons];
                      return (
                        <div key={phase} className="space-y-1">
                          <div className="flex items-center gap-1.5 text-sm text-primary">
                            <PhaseIcon className="h-3.5 w-3.5" />
                            <span className="capitalize">{phase}</span>
                          </div>
                          <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5 ml-5">
                            {steps.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Outcomes:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardDescription>
              {project.status && (
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {project.status}
                </span>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}