import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Printer,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Globe,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const resumeData = {
    name: "JUBILEE NWACHUKWU",
    title: "GRAPHICS DESIGNER",
    summary:
      "I am an innovative graphic designer, all about bringing creativity to life and turning ideas into visual wonders. I leverage a blend of strategic vision and hands-on expertise to steer creative and design teams toward elevating brand aesthetics and delivering impactful design solutions. Let's create something extraordinary together.",
    contact: {
      phone: "+234 813 238 9486",
      email: "jubileenwachukwu@yahoo.com",
      location: "Egbeda, Lagos",
      linkedin: "www.linkedin.com/in/juls-graphics",
    },
    experience: [
      {
        company: "Sunshine Socials",
        title: "Design Lead",
        period: "June 2024 - Present",
        duration: "15+ months",
        responsibilities: [
          "Led the creative direction and visual identity development for multiple client campaigns, resulting in a 35% increase in social media engagement.",
          "Directed and mentored a design team of 4 professionals, establishing design standards and best practices while conducting regular design reviews and feedback sessions.",
          "Conceptualized and executed comprehensive brand refresh for key clients, enhancing brand perception and driving a 28% uplift in campaign performance metrics.",
          "Collaborated with marketing and client teams to translate business objectives into compelling visual content, delivering 50+ design assets monthly across various platforms.",
        ],
      },
      {
        company: "Hustle Africa",
        title: "Design Lead",
        period: "Mar 2023 - May 2024",
        duration: "14 months",
        responsibilities: [
          "Manage the complete creative design process of a team of 3 brand designers, providing direction and support to carry out client objectives.",
          "Boosted visual engagement by 25% through the implementation of a new design strategy, resulting in a 15% increase in customer satisfaction.",
          "Drove a 20% increase in client's sales revenue by leading the redesign of product visuals, enhancing their appeal and marketability.",
          "Facilitated cross-functional collaboration, reducing project delivery time by 30% and enhancing overall team efficiency.",
        ],
      },
      {
        company: "Hustle Africa",
        title: "Graphics Designer",
        period: "Aug 2022 - Feb 2023",
        duration: "7 months",
        responsibilities: [
          "Designed brand identities and developed brand assets for the agency's clients.",
          "Designed marketing and social media content for the agency's clients.",
        ],
      },
    ],
    education: {
      degree: "B.ENG MECHANICAL ENGINEERING",
      institution: "Covenant University",
      period: "2015 - 2020",
    },
    certifications: [
      {
        name: "GOOGLE UX DESIGN PROFESSIONAL CERTIFICATE",
        provider: "Coursera",
        period: "March 2023 - August 2023",
      },
    ],
    skills: [
      "UI/UX",
      "Visual Designing",
      "Wireframe Creation",
      "Video Editing",
      "Prototyping",
      "Engineering Design & Simulation",
      "Project Management",
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Premier Pro",
      "Adobe Lightroom",
      "Figma",
      "Canva",
      "Capcut",
      "Autocad",
      "Inventor Professional",
    ],
    languages: ["English", "German"],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .print-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          body {
            background: white !important;
          }
          .dark-mode-only {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto print-container">
        {/* Action Buttons - Hidden on Print */}
        <div className="no-print flex justify-end gap-3 mb-6">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-gray-300 dark:border-gray-700"
          >
            ← Back to Portfolio
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print / Save as PDF
          </Button>
        </div>

        {/* Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-xl print:shadow-none">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-700 dark:to-purple-600 p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {resumeData.name}
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-6">
                {resumeData.title}
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="hover:underline"
                  >
                    {resumeData.contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{resumeData.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{resumeData.contact.location}</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <a
                    href={`https://linkedin.com/in/${resumeData.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Professional Summary */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Professional Summary
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {resumeData.summary}
                </p>
              </section>

              <Separator className="dark:bg-gray-800" />

              {/* Work Experience */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {resumeData.experience.map((job, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {job.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {job.period} | {job.duration}
                        </p>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 dark:text-gray-300 flex"
                            >
                              <span className="text-purple-600 dark:text-purple-400 mr-2">
                                •
                              </span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="dark:bg-gray-800" />

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Education
                </h2>
                <div className="pl-8 border-l-2 border-purple-200 dark:border-purple-800 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500"></div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {resumeData.education.degree}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {resumeData.education.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {resumeData.education.period}
                  </p>
                </div>
              </section>

              <Separator className="dark:bg-gray-800" />

              {/* Certifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Certifications
                </h2>
                {resumeData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="pl-8 border-l-2 border-purple-200 dark:border-purple-800 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      {cert.provider}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.period}
                    </p>
                  </div>
                ))}
              </section>

              <Separator className="dark:bg-gray-800" />

              {/* Skills & Tools Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Skills */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    Languages
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.languages.map((lang, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-0"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>

              <Separator className="dark:bg-gray-800" />

              {/* Software & Tools */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Software & Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-900/50 px-8 md:px-12 py-6 border-t border-gray-200 dark:border-gray-800 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This resume is part of my interactive portfolio at{" "}
                <span className="text-purple-600 dark:text-purple-400 font-medium no-print">
                  {window.location.origin}
                </span>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Action Button - Hidden on Print */}
        <div className="no-print mt-6 text-center">
          <Button
            onClick={handlePrint}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Download className="w-5 h-5 mr-2" />
            Download as PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
