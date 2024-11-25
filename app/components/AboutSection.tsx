"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { div } from "framer-motion/client";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Node</li>
          <li>NextJS</li>
        </ul>
        <ul className="list-disc ml-12">
          <li>Tailwind</li>
          <li>Postgres</li>
          <li>Web3</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Computer Science, San Jose State University</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Intel</li>
        <li>Cisco (via Advantis Global)</li>
        <li>Harman</li>
        <li>Apple (via Advantis Global)</li>
        <li>Zypmedia</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="imac"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, React, Redux, Node.js, Express, Mongo, MySQL, HTML, CSS
            and Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 flex">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8 max-h-4">
            {tabData.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
