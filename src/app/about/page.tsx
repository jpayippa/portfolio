// File: src/app/about/page.tsx

import { motion } from "framer-motion";
import Image from "next/image";
import headshot from "@/assets/headshot.jpeg";
import { Skills } from "@/data/skills";
import { Tools } from "@/data/tools";
import SkillCard from "@/components/SkillCard";
import ToolCard from "@/components/ToolCard";

export const revalidate = 60;

export const metadata = {
  title: "About | Joel Payippara Shibu",
  description: "Learn more about Joel's background, education, and the tools he uses as a software engineer.",
};


export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start gap-8 mb-16"
      >
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl w-full md:w-2/3">
          <h1 className="text-3xl font-semibold mb-4">My Journey</h1>
          <p className="mb-3">
            My programming journey began in Grade 9 in India, where I was introduced to <strong>C</strong> and <strong>C++</strong>. The pivotal moment came in Grade 10, after moving to Canada, when I developed my first game in <strong>Java</strong> — that experience sparked a deep passion for software development.
          </p>
          <p className="mb-3">
            I recently graduated with a <strong>Bachelor’s degree in Software Engineering</strong> from <strong>Western University</strong> in Ontario, Canada. Throughout my academic journey, I explored a wide range of technologies including full-stack web development, cloud infrastructure, and AI-powered systems.
          </p>
          <p className="mb-3">
            Outside of code, I find inspiration through <strong>reading</strong>, <strong>PC gaming</strong>, <strong>travel</strong>, and <strong>fishing</strong> — activities that help me stay creative and grounded.
          </p>
        </div>
        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="rounded-full overflow-hidden w-40 h-40 md:w-52 md:h-52 shadow-2xl"
        >
          <Image src={headshot} alt="Joel Payippara Shibu" className="object-cover" />
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Professional Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Tools I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
