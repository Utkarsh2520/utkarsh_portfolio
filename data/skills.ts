export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["FastAPI", "Flask", "RESTful APIs", "API Integration"],
  },
  {
    id: "data",
    label: "Data & Databases",
    items: ["MySQL", "Pandas", "NumPy"],
  },
  {
    id: "ai",
    label: "Applied AI",
    items: [
      "OpenCV",
      "LangChain",
      "ImageHash",
      "FAISS",
      "Hugging Face Embeddings",
      "Google Gemini API",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git"],
  },
] as const;
