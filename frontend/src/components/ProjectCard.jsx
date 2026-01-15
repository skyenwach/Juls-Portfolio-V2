import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group overflow-hidden cursor-pointer border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
        onClick={handleCardClick}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-white font-medium">View Details</span>
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.category.map((cat, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                style={{ backgroundColor: `${project.color}20`, color: project.color }}
                className="border-0"
              >
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
            {project.subtitle}
          </p>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
            {project.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;