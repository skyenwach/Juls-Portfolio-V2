// Mock data for portfolio - Replace with backend API calls later

export const personalInfo = {
  name: "Nwachukwu Jubilee",
  title: "Brand & Graphic Designer // UI/UX Designer",
  email: "jubileenwachukwu@yahoo.com",
  phone: "+2348132389486",
  tagline: "Crafting Visual Stories That Connect",
  logo: "/assets/logo.png", // Placeholder - Replace with your logo
  heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop", // Placeholder - Creative workspace
  introduction: "Welcome to my portfolio. I believe that every design has a story to tell. Through this portfolio, you'll journey through my creative process, understanding the unique challenges and solutions for each project. Join me as I showcase a few of my favorite projects, highlighting not just the final designs but the stories behind them.",
  aboutLong: "I'm a passionate Brand & Graphic Designer with expertise in UI/UX design, dedicated to creating meaningful visual experiences that resonate with audiences. With years of experience working with diverse clients, from real estate consultancies to luxury fashion brands, I bring a unique blend of creativity and strategic thinking to every project. My approach combines thorough research, creative exploration, and meticulous attention to detail to deliver designs that not only look stunning but also achieve business objectives.",
  resumeUrl: "/assets/Jubilee_Resume.pdf", // Placeholder - user will replace
  socialLinks: {
    linkedin: "https://linkedin.com/in/jubilee-nwachukwu",
    twitter: "https://twitter.com/jubilee_design",
    instagram: "https://instagram.com/jubilee.designs"
  }
};

export const projects = [
  {
    id: 1,
    title: "Duncrest & Partners",
    subtitle: "Real Estate Consultancy",
    category: ["Branding", "Graphic Design"],
    description: "Complete brand overhaul for a leading real estate consultancy firm",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", // Placeholder - Modern office building
    clientBackground: "Duncrest & Partners is a leading real estate consultancy firm known for its innovative approach to property management.",
    overview: "Complete brand overhaul to reflect their modern, sophisticated approach. Created a new logo mark, brand pattern, icon variants, and social media ads.",
    challenges: [
      "Creating a modern, unique logo that stands out in the competitive real estate market",
      "Designing a cohesive brand pattern and icons that reflect the firm's values",
      "Ensuring consistency across digital and print media"
    ],
    outcome: "Successfully positioned Duncrest & Partners as a modern and trustworthy firm. Increased brand recognition and engagement on social media.",
    deliverables: [
      {
        name: "Logo Design",
        images: [
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop", // Placeholder - Logo mockup
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop", // Placeholder - Logo variations
        ]
      },
      {
        name: "Brand Pattern",
        images: [
          "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop", // Placeholder - Pattern design
        ]
      },
      {
        name: "Icon Variants",
        images: [
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop", // Placeholder - Icons
        ]
      },
      {
        name: "Social Media Ads",
        images: [
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop", // Placeholder - Social media mockup
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop", // Placeholder - Social media design
        ]
      },
      {
        name: "Print Materials",
        images: [
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop", // Placeholder - Business cards
        ]
      }
    ],
    color: "#7C3AED"
  },
  {
    id: 2,
    title: "Bistro Oma's Pot",
    subtitle: "Restaurant & Bistro",
    category: ["Branding", "Graphic Design"],
    description: "Distinctive brand identity for a beloved home-style bistro",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", // Placeholder - Restaurant interior
    clientBackground: "Oma's Pot is a popular bistro known for its home-style cooking and vibrant atmosphere.",
    overview: "Created a distinctive brand identity, including logo marks, print media branding, and social media ads.",
    challenges: [
      "Reflecting the bistro's warm, welcoming atmosphere in the branding",
      "Ensuring consistency across various media",
      "Creating designs that work for both traditional and digital platforms"
    ],
    outcome: "The new branding effectively communicated the bistro's unique charm and atmosphere, attracting more customers and enhancing the overall dining experience.",
    deliverables: [
      {
        name: "Logo Design",
        images: [
          "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop", // Placeholder - Restaurant logo
        ]
      },
      {
        name: "Menu Design",
        images: [
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop", // Placeholder - Menu mockup
          "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop", // Placeholder - Menu design
        ]
      },
      {
        name: "Print Media",
        images: [
          "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&h=600&fit=crop", // Placeholder - Print materials
        ]
      },
      {
        name: "Social Media Branding",
        images: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop", // Placeholder - Social media
        ]
      }
    ],
    color: "#F59E0B"
  },
  {
    id: 3,
    title: "Moda Vivace",
    subtitle: "Luxury Fashion & Cosmetics",
    category: ["Branding", "UI/UX"],
    description: "Enhanced brand identity for a luxury fashion and cosmetics brand",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop", // Placeholder - Luxury fashion
    clientBackground: "Moda Vivace is a luxury fashion and cosmetics brand known for its avant-garde designs and high-quality products.",
    overview: "Enhanced brand identity through distinct logo marks and product showcases.",
    challenges: [
      "Creating a logo that embodies the brand's luxury and innovative spirit",
      "Designing a product showcase that highlights the quality and uniqueness of Moda Vivace's products",
      "Maintaining elegance while being bold and contemporary"
    ],
    outcome: "Successfully conveyed Moda Vivace's luxury and innovation. Distinct logo marks and elegant product showcases received positive feedback, enhancing brand perception and market presence.",
    deliverables: [
      {
        name: "Logo Design",
        images: [
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop", // Placeholder - Fashion logo
        ]
      },
      {
        name: "Product Showcase",
        images: [
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop", // Placeholder - Product display
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop", // Placeholder - Cosmetics
        ]
      },
      {
        name: "Brand Guidelines",
        images: [
          "https://images.unsplash.com/photo-1586281380614-a52dc0ab7e6e?w=800&h=600&fit=crop", // Placeholder - Brand guide
        ]
      },
      {
        name: "Marketing Materials",
        images: [
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop", // Placeholder - Marketing
        ]
      }
    ],
    color: "#EC4899"
  },
  {
    id: 4,
    title: "iDoc Health Center",
    subtitle: "Healthcare Services",
    category: ["UI/UX", "Web Design"],
    description: "Modern, trustworthy landing page for a comprehensive healthcare facility",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop", // Placeholder - Healthcare/medical
    clientBackground: "iDoc Health Center is a trusted medical facility offering comprehensive healthcare services with a focus on professionalism and patient care.",
    overview: "Designed a clean, modern, and trustworthy landing page. Key objectives included effective communication of services, encouraging actions like scheduling appointments, and catering to patients, caregivers, and healthcare professionals.",
    challenges: [
      "Balancing professionalism and warmth to build trust",
      "Ensuring accessibility and ease of navigation",
      "Highlighting key services and CTAs effectively"
    ],
    outcome: "Effectively communicated iDoc Health Center's services, building trust and encouraging user engagement. Received positive feedback, enhancing the center's online presence and increasing patient appointments.",
    deliverables: [
      {
        name: "Landing Page Design",
        images: [
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", // Placeholder - Website mockup
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop", // Placeholder - Web design
        ]
      },
      {
        name: "UI/UX Design",
        images: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop", // Placeholder - UI design
        ]
      },
      {
        name: "Responsive Design",
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop", // Placeholder - Mobile mockup
        ]
      },
      {
        name: "Accessibility Features",
        images: [
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop", // Placeholder - Accessibility
        ]
      }
    ],
    color: "#10B981"
  }
];

export const categories = ["All", "Branding", "Graphic Design", "UI/UX", "Web Design"];

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
  "Prototyping"
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO, Duncrest & Partners",
    company: "Duncrest & Partners",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop", // Placeholder
    text: "Jubilee transformed our brand identity completely. The new logo and branding materials positioned us as the modern, trustworthy firm we aspired to be. Our client engagement increased by 40% after the rebrand!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Owner, Bistro Oma's Pot",
    company: "Oma's Pot",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", // Placeholder
    text: "Working with Jubilee was an absolute pleasure. She captured the warm, welcoming essence of our bistro perfectly. The branding feels like home, and our customers love it. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Alexandra Rousseau",
    role: "Creative Director, Moda Vivace",
    company: "Moda Vivace",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", // Placeholder
    text: "Jubilee's understanding of luxury branding is exceptional. She created a visual identity that perfectly embodies our avant-garde spirit while maintaining elegance. Her attention to detail is remarkable.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. James Okafor",
    role: "Director, iDoc Health Center",
    company: "iDoc Health Center",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", // Placeholder
    text: "The website Jubilee designed for us strikes the perfect balance between professionalism and approachability. Patient appointments increased by 65% in the first quarter. Outstanding work!",
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Complete brand creation from concept to execution, including logo design, color palettes, and brand guidelines.",
    icon: "Palette"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered digital experiences that are intuitive, accessible, and visually stunning across all devices.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Eye-catching visual content for print and digital media, including marketing materials and social media assets.",
    icon: "Image"
  },
  {
    id: 4,
    title: "Web Design",
    description: "Modern, responsive websites that convert visitors into customers while reflecting your brand's unique personality.",
    icon: "Monitor"
  }
];

export const stats = [
  { label: "Projects Completed", value: "50+", icon: "Briefcase" },
  { label: "Happy Clients", value: "35+", icon: "Users" },
  { label: "Years Experience", value: "5+", icon: "Award" },
  { label: "Design Awards", value: "8", icon: "Trophy" }
];

export const tools = [
  { name: "Figma", icon: "Figma", level: "Expert" },
  { name: "Canva", icon: "Palette", level: "Expert" },
  { name: "Affinity Designer", icon: "Pen", level: "Advanced" }
];