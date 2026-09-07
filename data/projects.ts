export type Project = {
  number: string;
  title: string;
  description: string;
  context: string;
  architecture: string;
  challenges: string[];
  outcome: string;
  technologies: string[];
  visual: "dataset" | "retrieval";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Dataset Cleaner AI",
    description:
      "An intelligent platform that finds duplicate and blurry images in large datasets so machine learning pipelines start with cleaner data.",
    context:
      "Large image collections accumulate near-duplicates and low-quality frames. Manual review does not scale, and noisy data degrades downstream model training.",
    architecture:
      "A React interface handles upload, review, and visualization. A FastAPI service runs quality assessment with OpenCV and perceptual hashing via ImageHash, then returns structured results for filtering and export.",
    challenges: [
      "Detecting visual duplicates without relying on identical filenames or pixels",
      "Assessing blur and quality across varied image conditions",
      "Keeping preprocessing workflows usable as dataset size grows",
    ],
    outcome:
      "Streamlined dataset preprocessing by automatically identifying duplicate and blurry images, reducing manual cleanup and improving data quality for machine learning applications.",
    technologies: ["React.js", "FastAPI", "Python", "OpenCV", "ImageHash", "Tailwind CSS"],
    visual: "dataset",
  },
  {
    number: "02",
    title: "Retrieval-Augmented Generation System",
    description:
      "A document-grounded question answering system that retrieves relevant passages before generating an answer.",
    context:
      "Generic language models guess when they lack source context. Teams need answers grounded in their own PDFs, text files, and Markdown — not unconstrained generation.",
    architecture:
      "Documents are chunked and embedded with Hugging Face models, stored in FAISS for semantic search, then passed to LangChain RetrievalQA with Google Gemini so responses stay tied to retrieved context.",
    challenges: [
      "Chunking mixed document formats without losing meaning",
      "Retrieving passages that actually answer the query",
      "Reducing ungrounded answers through context injection",
    ],
    outcome:
      "Built a RAG pipeline that answers queries from custom documents using semantic retrieval and grounded generation, improving relevance over ungrounded model responses.",
    technologies: [
      "Python",
      "LangChain",
      "Google Gemini API",
      "FAISS",
      "Hugging Face Embeddings",
    ],
    visual: "retrieval",
  },
];
