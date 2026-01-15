import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { projects } from "../data/mock";
import "../styles/ProjectDetail.css";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [expandedImage, setExpandedImage] = useState(null);

  const project = projects.find((p) => p.id === parseInt(projectId));
  const projectIndex = projects.findIndex((p) => p.id === parseInt(projectId));
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate("/#projects")}
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>

            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {project.subtitle}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat, idx) => (
                <span
                  key={idx}
                  className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Client Background */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            About the Client
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.clientBackground}
          </p>
        </div>

        {/* Main Image */}
        {project.image && (
          <div className="mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl shadow-lg object-cover"
              style={{ maxHeight: "500px" }}
            />
          </div>
        )}

        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Challenges
          </h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 dark:bg-purple-500">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {challenge}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="mb-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Project Outcome</h2>
          <p className="text-lg leading-relaxed">{project.outcome}</p>
        </div>

        {/* Deliverables - Images by Category */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Project Deliverables
          </h2>

          <div className="space-y-16">
            {project.deliverables.map((deliverable, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {deliverable.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {deliverable.images.map((image, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer"
                      onClick={() => setExpandedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${deliverable.name} ${imgIdx + 1}`}
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow object-cover"
                        style={{ aspectRatio: "16/10" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.img
            src={expandedImage}
            alt="Expanded"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Navigation to Other Projects */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Explore Other Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous Project */}
            {prevProject ? (
              <motion.button
                whileHover={{ x: -10 }}
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="text-left group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ChevronLeft className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:-translate-x-2 transition-transform" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Previous Project
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {prevProject.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {prevProject.subtitle}
                </p>
              </motion.button>
            ) : (
              <div />
            )}

            {/* Next Project */}
            {nextProject ? (
              <motion.button
                whileHover={{ x: 10 }}
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="text-right group"
              >
                <div className="flex items-center justify-end gap-4 mb-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Next Project
                  </span>
                  <ChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-2 transition-transform" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {nextProject.subtitle}
                </p>
              </motion.button>
            ) : (
              <div />
            )}
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <Button
              onClick={() => navigate("/")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
