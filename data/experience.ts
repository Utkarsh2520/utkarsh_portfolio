export type JourneyEntry = {
  year: string;
  category: string;
  title: string;
  description: string;
  details?: string[];
  technologies?: string[];
  place?: string;
};

export const journey: JourneyEntry[] = [
  {
    year: "2019",
    category: "Foundation",
    title: "Secondary Education",
    place: "Udai Pratap Public School, Varanasi",
    description:
      "Completed secondary education in Varanasi, establishing the academic base that later led into computer science.",
    details: ["Percentage: 62.83%"],
  },
  {
    year: "2021",
    category: "Education",
    title: "Beginning Computer Science Engineering",
    place: "Babu Banarasi Das University, Lucknow",
    description:
      "Started a Bachelor of Technology in Computer Science and Engineering. The same year, completed senior secondary education at Sant Atulanand Convent School, Varanasi (74.2%).",
    details: [
      "B.Tech in Computer Science and Engineering",
      "Focus on software development, problem-solving, and computing fundamentals",
    ],
  },
  {
    year: "2021–2025",
    category: "Engineering",
    title: "Building through a Computer Science degree",
    place: "BBDU, Lucknow",
    description:
      "Spent the degree years on software systems, databases, and modern web technologies — designing applications, APIs, and data-backed solutions rather than treating code as an isolated skill.",
    details: [
      "Graduated with CGPA 7.27",
      "Developed full-stack and applied-AI project work alongside coursework",
    ],
    technologies: ["Python", "JavaScript", "React.js", "SQL", "Git"],
  },
  {
    year: "2025",
    category: "Professional",
    title: "Tech Intern, Four Corners Technologies Pvt. Ltd",
    place: "Bengaluru, India · April 2025 – October 2025",
    description:
      "Joined as a Tech Intern working on Python backend systems, data workflows, validation, and SQL-backed operations with cross-functional teams.",
    details: [
      "Developed Python solutions for data processing and backend tasks",
      "Automated data workflows to improve operational efficiency",
      "Implemented data validation and error handling for processed data",
      "Wrote optimized SQL queries and managed structured data",
      "Refactored scripts to reduce execution time through clearer logic",
      "Collaborated with cross-functional teams on scalable technical solutions",
    ],
    technologies: ["Python", "SQL", "Backend systems"],
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  university: "Babu Banarasi Das University",
  place: "Lucknow, India",
  years: "2021 – 2025",
  cgpa: "7.27",
};
