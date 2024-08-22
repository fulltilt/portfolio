"use client";

import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Poke Trades",
    description: "Site to facilitate global Pokemon card trades",
    image: "/images/projects/poke-trades.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://poke-trades.com",
  },
  {
    id: 2,
    title: "Restaurant Demo",
    description:
      "Demo of restaurant page. Responsive, includes maps and motion effects",
    image: "/images/projects/r1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://restaurant-demo1.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Demo 2",
    description:
      "Second demo restaurant page. This is more basic than the first demo.",
    image: "/images/projects/r2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://restaurant-demo2-lyart.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Coffee Shop",
  //   description: "A demo app done for a coffee shop.",
  //   image: "/images/projects/r3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "https://restaurant-demo3.vercel.app/",
  // },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Projects = () => {
  const ref = useRef(null);
  const [tag, setTag] = useState("All");
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (name: string) => setTag(name);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>
      {/* <div className="text-white flex justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={project.id}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
