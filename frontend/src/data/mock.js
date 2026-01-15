// Mock data for portfolio - Replace with backend API calls later

export const personalInfo = {
  name: "Nwachukwu Jubilee",
  title: "Brand & Graphic Designer // UI/UX Designer",
  email: "jubileenwachukwu@yahoo.com",
  phone: "+2348132389486",
  tagline: "Crafting Visual Stories That Connect",
  logo: "/assets/logo.png", // Replace with your logo in /public/assets/
  profileImage: "/assets/profile.jpg", // Replace with your professional headshot in /public/assets/
  heroImage: "/assets/hero.jpg", // Replace with your hero image in /public/assets/
  introduction:
    "Welcome to my portfolio. I believe that every design has a story to tell. Through this portfolio, you'll journey through my creative process, understanding the unique challenges and solutions for each project. Join me as I showcase a few of my favorite projects, highlighting not just the final designs but the stories behind them.",
  aboutLong:
    "I'm a passionate Brand & Graphic Designer with expertise in UI/UX design, dedicated to creating meaningful visual experiences that resonate with audiences. With years of experience working with diverse clients, from real estate consultancies to luxury fashion brands, I bring a unique blend of creativity and strategic thinking to every project. My approach combines thorough research, creative exploration, and meticulous attention to detail to deliver designs that not only look stunning but also achieve business objectives.",
  resumeUrl: "/assets/Jubilee_Resume.pdf", // Replace with your resume PDF in /public/assets/
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/juls-graphics",
    twitter: "https://twitter.com/jubilee_design",
    instagram: "https://instagram.com/jubilee.designs",
  },
};

export const projects = [
  {
    id: 1,
    title: "Duncrest & Partners",
    subtitle: "Real Estate Consultancy",
    category: ["Branding", "Graphic Design"],
    description:
      "Complete brand overhaul for a leading real estate consultancy firm",
    image: "/assets/project-1-main.jpg", // Replace in /public/assets/
    clientBackground:
      "Duncrest & Partners is a leading real estate consultancy firm known for its innovative approach to property management.",
    overview:
      "Complete brand overhaul to reflect their modern, sophisticated approach. Created a new logo mark, brand pattern, icon variants, and social media ads.",
    challenges: [
      "Creating a modern, unique logo that stands out in the competitive real estate market",
      "Designing a cohesive brand pattern and icons that reflect the firm's values",
      "Ensuring consistency across digital and print media",
    ],
    outcome:
      "Successfully positioned Duncrest & Partners as a modern and trustworthy firm. Increased brand recognition and engagement on social media.",
    deliverables: [
      {
        name: "Logo Design",
        images: [
          "/assets/project-1-logo-1.jpg", // Replace in /public/assets/
          "/assets/project-1-logo-2.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Brand Pattern",
        images: [
          "/assets/project-1-pattern.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Icon Variants",
        images: [
          "/assets/project-1-icons.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Social Media Ads",
        images: [
          "/assets/project-1-social-1.jpg", // Replace in /public/assets/
          "/assets/project-1-social-2.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Print Materials",
        images: [
          "/assets/project-1-print.jpg", // Replace in /public/assets/
        ],
      },
    ],
    color: "#7C3AED",
  },
  {
    id: 2,
    title: "Bistro Oma's Pot",
    subtitle: "Restaurant & Bistro",
    category: ["Branding", "Graphic Design"],
    description: "Distinctive brand identity for a beloved home-style bistro",
    image: "/assets/project-2-main.jpg", // Replace in /public/assets/
    clientBackground:
      "Oma's Pot is a popular bistro known for its home-style cooking and vibrant atmosphere.",
    overview:
      "Created a distinctive brand identity, including logo marks, print media branding, and social media ads.",
    challenges: [
      "Reflecting the bistro's warm, welcoming atmosphere in the branding",
      "Ensuring consistency across various media",
      "Creating designs that work for both traditional and digital platforms",
    ],
    outcome:
      "The new branding effectively communicated the bistro's unique charm and atmosphere, attracting more customers and enhancing the overall dining experience.",
    deliverables: [
      {
        name: "Logo Design",
        images: [
          "/assets/project-2-logo.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Menu Design",
        images: [
          "/assets/project-2-menu-1.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Print Media",
        images: [
          "/assets/project-2-print.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Social Media Branding",
        images: [
          "/assets/project-2-social-1.jpg", // Replace in /public/assets/
          "/assets/project-2-social-2.jpg", // Replace in /public/assets/
        ],
      },
    ],
    color: "#F59E0B",
  },
  {
    id: 3,
    title: "Moda Vivace",
    subtitle: "Luxury Fashion & Cosmetics",
    category: ["Branding", "UI/UX"],
    description:
      "Enhanced brand identity for a luxury fashion and cosmetics brand",
    image: "/assets/project-3-main.jpg", // Replace in /public/assets/
    clientBackground:
      "Moda Vivace is a luxury fashion and cosmetics brand known for its avant-garde designs and high-quality products.",
    overview:
      "Enhanced brand identity through distinct logo marks and product showcases.",
    challenges: [
      "Creating a logo that embodies the brand's luxury and innovative spirit",
      "Designing a product showcase that highlights the quality and uniqueness of Moda Vivace's products",
      "Maintaining elegance while being bold and contemporary",
    ],
    outcome:
      "Successfully conveyed Moda Vivace's luxury and innovation. Distinct logo marks and elegant product showcases received positive feedback, enhancing brand perception and market presence.",
    deliverables: [
      {
        name: "Logo Design",
        images: [
          "/assets/project-3-logo.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Product Showcase",
        images: [
          "/assets/project-3-showcase-1.jpg", // Replace in /public/assets/
          "/assets/project-3-showcase-2.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Marketing Materials",
        images: [
          "/assets/project-3-marketing-1.jpg", // Replace in /public/assets/
          "/assets/project-3-marketing-2.jpg", // Replace in /public/assets/
        ],
      },
    ],
    color: "#EC4899",
  },
  {
    id: 4,
    title: "iDoc Health Center",
    subtitle: "Healthcare Services",
    category: ["UI/UX", "Web Design"],
    description:
      "Modern, trustworthy landing page for a comprehensive healthcare facility",
    image: "/assets/project-4-main.jpg", // Replace in /public/assets/
    clientBackground:
      "iDoc Health Center is a trusted medical facility offering comprehensive healthcare services with a focus on professionalism and patient care.",
    overview:
      "Designed a clean, modern, and trustworthy landing page. Key objectives included effective communication of services, encouraging actions like scheduling appointments, and catering to patients, caregivers, and healthcare professionals.",
    challenges: [
      "Balancing professionalism and warmth to build trust",
      "Ensuring accessibility and ease of navigation",
      "Highlighting key services and CTAs effectively",
    ],
    outcome:
      "Effectively communicated iDoc Health Center's services, building trust and encouraging user engagement. Received positive feedback, enhancing the center's online presence and increasing patient appointments.",
    deliverables: [
      {
        name: "Landing Page Design",
        images: [
          "/assets/project-4-landing-1.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "UI/UX Design",
        images: [
          "/assets/project-4-ui-ux.jpg", // Replace in /public/assets/
        ],
      },
      {
        name: "Responsive Design",
        images: [
          "/assets/project-4-mobile.jpg", // Replace in /public/assets/
        ],
      },
    ],
    color: "#10B981",
  },
];

export const categories = [
  "All",
  "Branding",
  "Graphic Design",
  "UI/UX",
  "Web Design",
];

export const skills = [
  "Brand Identity Design",
  "Logo Design",
  "UI/UX Design",
  "Web Design",
  "Print Design",
  "Social Media Design",
  "Typography",
  "Color Theory",
  "Adobe Creative Suite",
  "Figma",
  "Prototyping",
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Adeyemi",
    role: "CEO, Duncrest & Partners",
    company: "Duncrest & Partners",
    text: "Jubilee transformed our brand identity completely. The new logo and branding materials positioned us as the modern, trustworthy firm we aspired to be. Our client engagement increased by 40% after the rebrand!",
    rating: 5,
  },
  {
    id: 2,
    name: "Chioma Chukwudi",
    role: "Owner, Bistro Oma's Pot",
    company: "Oma's Pot",
    text: "Working with Jubilee was an absolute pleasure. He captured the warm, welcoming essence of our bistro perfectly. The branding feels like home, and our customers love it. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Alexandra Rousseau",
    role: "Creative Director, Moda Vivace",
    company: "Moda Vivace",
    text: "Jubilee's understanding of luxury branding is exceptional. He created a visual identity that perfectly embodies our avant-garde spirit while maintaining elegance. His attention to detail is remarkable.",
    rating: 5,
  },
  {
    id: 4,
    name: "Adedoyin Omotara",
    role: "Founder & Coach",
    company: "Adoniaa Collective",
    text: "Jubilee transformed our brand identity with a visual language that authentically represents our mission. His ability to blend professionalism with warmth perfectly captures our coaching philosophy. Highly recommended!",
    rating: 5,
  },
];

export const services = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Complete brand creation from concept to execution, including logo design, color palettes, and brand guidelines.",
    icon: "Palette",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "User-centered digital experiences that are intuitive, accessible, and visually stunning across all devices.",
    icon: "Smartphone",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Eye-catching visual content for print and digital media, including marketing materials and social media assets.",
    icon: "Image",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Modern, responsive websites that convert visitors into customers while reflecting your brand's unique personality.",
    icon: "Monitor",
  },
];

export const stats = [
  { label: "Projects Completed", value: "50+", icon: "Briefcase" },
  { label: "Happy Clients", value: "35+", icon: "Users" },
  { label: "Years Experience", value: "5+", icon: "Award" },
];

export const tools = [
  { name: "Figma", icon: "Figma", level: "Expert" },
  { name: "Canva", icon: "Palette", level: "Expert" },
  { name: "Affinity Designer", icon: "Pen", level: "Advanced" },
];
