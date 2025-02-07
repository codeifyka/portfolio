export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Our web development team crafts stunning, responsive websites tailored to your needs. From sleek portfolios to robust e-commerce platforms, we combine cutting-edge technology with creative design to deliver exceptional user experiences. Let us build your digital presence and bring your ideas to life online.",
  },
  {
    title: "Mobile Development",
    description:
      "Our mobile development team excels in creating innovative, user-friendly apps for both iOS and Android platforms. We focus on delivering seamless and engaging mobile experiences, tailored to your specific needs. Whether it's a sophisticated app or a dynamic mobile solution, we're here to bring your ideas to life.",
  },
  {
    title: "Desktop Development",
    description:
      "Our desktop development team is skilled in crafting powerful and efficient software solutions for desktop environments. We build custom applications for various operating systems, tailored to enhance productivity, streamline workflows, and improve user experience. Whether for business or personal use, our team ensures that each application is fast, secure, and optimized to meet your specific requirements.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX Design team specializes in creating intuitive, engaging, and visually stunning designs that enhance user experience. We focus on understanding your users' needs and crafting interfaces that are both aesthetically pleasing and highly functional. From wireframes to final designs, we ensure every interaction feels seamless and enjoyable.",
  },
];

export const projects: Project[] = [
  {
    title: "Code Craft",
    thumbnail_url: "/projects/code_craft/thumbnail.png",
    description:
      "We've created a platform designed to connect companies, clubs, and individuals who are passionate about coding. Think of it as a central hub for coding events, job opportunities, and meaningful discussions. Our goal was to make it user-friendly, with a focus on helping people discover opportunities and assisting companies in finding skilled talent.",
    categories: ["Web Development", "UI UX", "DevOps"],
    skills: [
      "ReactJS",
      "NodeJS",
      "TypeScript",
      "Docker",
      "Git",
      "Socket",
      "Web Socket",
      "Bash Scripting",
      "MySQL",
      "Jest",
    ],
    created_at: "2024",
    preview_url: "https://code-craft-front.vercel.app",
    source_code_url: "https://github.com/code-craft-project",
    other_images: [
      "projects/code_craft/image.png",
      "projects/code_craft/image (1).png",
      "projects/code_craft/image (2).png",
      "projects/code_craft/image (3).png",
      "projects/code_craft/image (4).png",
      "projects/code_craft/image (5).png",
    ],
  },
  {
    title: "Novalance",
    thumbnail_url: "/projects/novalance/thumbnail.png",
    description:
      "A Novalance is an online platform that connects freelancers with clients who need their services. These websites provide a space where freelancers can showcase their skills, and clients can post projects or tasks that they need help with.",
    categories: ["Web Development", "UI UX", "DevOps"],
    skills: [
      "VueJS",
      "Laravel",
      "TypeScript",
      "Docker",
      "Git",
      "Socket",
      "Web Socket",
      "Bash Scripting",
      "MySQL",
      "TailwindCss",
    ],
    created_at: "2023",
    preview_url: "https://novalance-frontend.vercel.app/",
    source_code_url: "https://github.com/codeifyka/novalance-frontend",
    other_images: [
      "/projects/novalance/Chat (FreeLancer).png",
      "/projects/novalance/Create Job Post.png",
      "/projects/novalance/Landing Page.png",
      "/projects/novalance/My Projects (FreeLancer).png",
      "/projects/novalance/My Purchases.png",
      "/projects/novalance/Service.png",
    ],
  },
];

export const blogs: Blog[] = [
  {
    title: "Design Systems",
    description: "Unlock Consistency and Efficiency for Your SaaS UI/UX...",
    author: "salah",
    created_at: "07/04/2024",
  },
  {
    title: "Design Systems",
    description: "Unlock Consistency and Efficiency for Your SaaS UI/UX...",
    author: "salah",
    created_at: "07/04/2024",
  },
  {
    title: "Design Systems",
    description: "Unlock Consistency and Efficiency for Your SaaS UI/UX...",
    author: "salah",
    created_at: "07/04/2024",
  },
  {
    title: "Design Systems",
    description: "Unlock Consistency and Efficiency for Your SaaS UI/UX...",
    author: "salah",
    created_at: "07/04/2024",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Kadik Salah Eddine",
    skills: [
      "Web Development",
      "Mobile Development",
      "Desktop Development",
      "UI UX Design",
    ],
    testimonial: "Salah is an exceptional developer and a valuable team asset!",
    github_url: "https://github.com/kadik23",
    linkedin_url: "https://www.linkedin.com/in/salah-eddine-kadik-6b3889284",
    behance_url: "https://www.behance.net/kadiksalah",
    profile_image_url: "/team_members/salah.jpg",
  },
  {
    name: "Abdelfetah Dev",
    skills: [
      "Web Development",
      "Mobile Development",
      "Desktop Development",
      "Database Systems",
      "Systems Programming",
      "Scripts Programming",
      "UI UX Design",
      "DevOps",
    ],
    testimonial:
      "Abdelfetah is an exceptional developer and a valuable team asset!",
    github_url: "https://github.com/abdelfetah18",
    linkedin_url: "https://www.linkedin.com/in/abdelfetahdev",
  },
];

export const testimonials: testimonials[] = [
  {
    client: "Banquet Hall Owner",
    body: "Salah developed a powerful desktop application for our banquet management needs, and it has completely transformed the way we handle event planning and operations. The system is intuitive, efficient, and tailored perfectly to our requirements.",
    services: "Desktop Development"
  },
  {
    client: "Legal Solutions Hub",
    body: "Salah developed a powerful desktop application for our banquet management needs, We entrusted Salah with creating a web application for our law firm, and he delivered beyond expectations. The platform is user-friendly, secure, and optimized for our daily operations. His dedication and professionalism were evident throughout the project.",
    services: "Web Development",
  },
  {
    client: "Tabibi Project Developer",
    body: "Salah did a fantastic job designing the UI/UX for the Tabibi mobile app. His intuitive designs and smooth user experience flow made it easy for both users and coaches to navigate the app. Thanks to him, we now have a visually appealing and highly functional product.",
    services: "UI UX Design",
  },
];