export const types = ["embedding", "llm"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type
}

export const models: Model<ModelType>[] = [
  {
    id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
    name: "nomic-embed-text",
    description:
      "nomic-embed-text is a large context length text encoder that surpasses OpenAI text-embedding-ada-002 and text-embedding-3-small performance on short and long context tasks.",
    type: "embedding",
    strengths:
      "Fast Embeddings, increased accuracy",
  },
  {
    id: "464a47c3-7ab5-44d7-b669-f9cb5a9e8465",
    name: "llama3",
    description: "Meta Llama 3, a family of models developed by Meta Inc. are new state-of-the-art , available in both 8B and 70B parameter sizes (pre-trained or instruction-tuned).",
    type: "llm",
    strengths:
      "decoder-only transformer architecture, scaling laws for downstream benchmark evaluations",
  }
]
