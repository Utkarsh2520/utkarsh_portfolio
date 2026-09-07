export const principles = [
  {
    id: "quality",
    title: "Data Quality",
    summary:
      "Treating validation, error handling, and preprocessing as first-class engineering — not afterthoughts.",
    flow: ["Raw inputs", "Validation", "Cleaning", "Structured data", "Downstream use"],
    process: [
      "Define what correctness looks like",
      "Catch invalid records early",
      "Automate repeatable cleanup",
      "Keep outputs inspectable",
    ],
    snippet: `# validate before transform
if not record.is_complete():
    raise DataError(record.id)
clean = normalize(record)`,
  },
  {
    id: "backend",
    title: "Backend Engineering",
    summary:
      "Python services, REST APIs, and SQL-backed workflows that stay reliable under real operational load.",
    flow: ["Client", "API layer", "Business logic", "Database", "Response"],
    process: [
      "Design clear API contracts",
      "Keep data access explicit",
      "Handle failure paths",
      "Refactor for execution time",
    ],
    snippet: `@app.post("/process")
def process(payload: Payload):
    validated = validate(payload)
    return run_workflow(validated)`,
  },
  {
    id: "vision",
    title: "Computer Vision",
    summary:
      "Using OpenCV and perceptual hashing to judge image quality and detect duplicates at dataset scale.",
    flow: ["Image set", "Hashing", "Quality checks", "Dedup", "Clean corpus"],
    process: [
      "Measure visual similarity, not filenames",
      "Score blur and quality",
      "Surface results for review",
      "Feed cleaner data to ML",
    ],
    snippet: `hash_a = imagehash.phash(img_a)
hash_b = imagehash.phash(img_b)
duplicate = hash_a - hash_b < threshold`,
  },
  {
    id: "retrieval",
    title: "Retrieval Systems",
    summary:
      "Grounding generation in retrieved documents so answers come from evidence, not guesswork.",
    flow: ["Documents", "Chunking", "Embeddings", "FAISS", "LLM answer"],
    process: [
      "Chunk for retrieval, not aesthetics",
      "Embed with a consistent model",
      "Search before generating",
      "Inject context into the prompt",
    ],
    snippet: `docs = vectorstore.similarity_search(query)
answer = qa_chain.invoke({
  "query": query,
  "context": docs,
})`,
  },
  {
    id: "product",
    title: "Product Engineering",
    summary:
      "Full-stack interfaces that make pipelines usable — React frontends connected to FastAPI backends.",
    flow: ["Interface", "API", "Processing", "Visualization", "Decision"],
    process: [
      "Make the workflow visible",
      "Keep the UI responsive",
      "Expose status, not just results",
      "Ship something people can operate",
    ],
    snippet: `const res = await fetch("/api/clean", {
  method: "POST",
  body: formData,
})
setResults(await res.json())`,
  },
] as const;
