import { Section } from "./Section";

type Token = { text: string; tone?: "purple" | "bright" };

const code: Token[][] = [
  [{ text: "async function ", tone: "purple" }, { text: "retrieveContext", tone: "bright" }, { text: "(query: string) {" }],
  [{ text: "  const " , tone: "purple" }, { text: "vector = " }, { text: "await ", tone: "purple" }, { text: "embed(query);" }],
  [{ text: "  const ", tone: "purple" }, { text: "matches = " }, { text: "await ", tone: "purple" }, { text: "pinecone.query({ vector, topK: 8 });" }],
  [{ text: "  const ", tone: "purple" }, { text: "ranked = mmrRerank(matches, { lambda: 0.7 });" }],
  [{ text: "  return ", tone: "purple" }, { text: "ranked.slice(0, 5);" }],
  [{ text: "}" }],
];

const tones = {
  purple: "text-brand2",
  bright: "text-ink",
} as const;

export function Proof() {
  return (
    <Section labelledBy="proof-heading">
      <div className="reveal grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="font-mono text-xs leading-[1.5] text-dim">
          <h2 id="proof-heading" className="mb-2 text-[13px] font-medium text-brand2">
            ENGINEERING PROOF
          </h2>
          retrieval.ts
          <br />
          RAG Legal Assistant
        </div>

        <figure className="m-0 overflow-hidden rounded-[10px] border border-line bg-s1 lg:col-span-9 lg:col-start-4">
          <figcaption className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs text-muted">
            <span className="flex items-center gap-2">
              <span aria-hidden className="size-[7px] rounded-full bg-[#6ee7b7]" />
              retrieval.ts
            </span>
            <span>TypeScript</span>
          </figcaption>
          <pre className="overflow-x-auto p-[clamp(20px,3vw,42px)] font-mono text-[11px] leading-[1.9] text-muted sm:text-[14px]">
            <code>
              {code.map((line, i) => (
                <span key={i}>
                  {line.map((token, j) => (
                    <span key={j} className={token.tone ? tones[token.tone] : undefined}>
                      {token.text}
                    </span>
                  ))}
                  {"\n"}
                </span>
              ))}
            </code>
          </pre>
        </figure>
      </div>
    </Section>
  );
}
