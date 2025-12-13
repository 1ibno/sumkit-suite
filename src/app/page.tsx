"use client";

const tools = [
  { name: "TenWordSum", tagline: "Turn any text into exactly 10 words.", url: "https://tenwordsum.app" },
  { name: "SentenceSum", tagline: "Condense any text into one clear sentence.", url: "https://sentencesum.app" },
  { name: "PointSum", tagline: "Distill any text into key bullet points.", url: "https://pointsum.app" },
  { name: "InstructionSum", tagline: "Convert any text into actionable steps.", url: "https://instructionsum.app" },
  { name: "TightSum", tagline: "Distill any text to its core essence.", url: "https://tightsum.app" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 py-6 md:px-20">
      <div className="mx-auto max-w-content">
        <header className="flex h-16 items-center justify-between">
          <div className="font-[family-name:var(--font-crimson)] text-2xl font-semibold text-accent">SumKit</div>
          <a href="/contact" className="flex h-7 items-center rounded-pill border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] px-3 transition-colors hover:border-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.06)]"><span className="text-xs text-text-secondary">Contact</span></a>
        </header>

        <section className="mt-10 text-center">
          <h1 className="font-[family-name:var(--font-crimson)] text-h1 text-[rgba(255,255,255,0.96)]">
            AI-powered text tools. Simple. Fast. Free.
          </h1>
          <p className="mt-3 mx-auto max-w-[560px] text-body text-text-secondary">
            Five focused tools that each do one thing perfectly. No sign-ups, no friction. Just paste your text and get results.
          </p>
          {/* Privacy */}
          <p className="mt-4 text-sm text-text-secondary">
            🔒 All tools process privately using Claude AI. Your text is never stored.
          </p>  
        </section>

        <section className="mt-10">
          <h2 className="text-[13px] font-medium uppercase tracking-wider text-text-secondary">THE SUITE</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="glass-panel rounded-glass p-6 transition-colors hover:bg-[rgba(255,255,255,0.08)] w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                <h3 className="font-[family-name:var(--font-crimson)] text-lg font-semibold text-accent">{tool.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{tool.tagline}</p>
                <div className="mt-4 flex items-center text-xs text-text-muted"><span>Try it free →</span></div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-center justify-center gap-4 pb-8">
          <p className="text-xs text-text-muted">SumKit &bull; Free AI text tools. &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
