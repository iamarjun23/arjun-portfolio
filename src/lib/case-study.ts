/**
 * Every word on /case-study lives here. Components only render it.
 *
 * Source of truth for each fact: the public repo
 * github.com/iamarjun23/construction-ops-multi-agent (file paths noted inline)
 * and the SDE resume. Anything not yet verified is written as a
 * "[bracketed placeholder]" — replace it, don't delete the brackets silently.
 */

export const cs = {
  repo: "https://github.com/iamarjun23/construction-ops-multi-agent",
  // No hosted demo yet. Set a URL here and every "Live demo" button switches on.
  demo: null as string | null,
  quickstart: "https://github.com/iamarjun23/construction-ops-multi-agent#quickstart",

  meta: {
    title: "Case study: Construction Ops Multi-Agent System",
    description:
      "How I designed a supervisor-based multi-agent system that reconciles construction payments, contracts and site progress into one cited answer — with zone access control enforced in SQL.",
  },

  hero: {
    kicker: "CASE STUDY · PERSONAL PROJECT · 2026",
    role: "Software Development Engineer · Backend / Full-stack",
    project: "Construction Ops Multi-Agent System",
    oneLiner:
      "Ask one plain-English question about a construction project and get one reconciled answer from payments, contracts and site logs — with every claim citing the row or clause it came from.",
    outcome: {
      value: "11",
      label: "automated tests prove a contractor can’t read another zone’s data — whatever shape the question takes.",
      source: "tests/access-control.test.ts",
    },
  },

  // 15-second summary — keep each value to one line.
  summary: [
    { k: "Problem", v: "The answer to a payment dispute lives in three places: a payments table, a contract, a site log." },
    { k: "User", v: "Project managers, admins and zone-restricted contractors (roles in the schema)." },
    { k: "Solution", v: "A Supervisor agent routes the question to Payment, Contract and Progress specialists, then an Audit agent checks every claim." },
    { k: "My ownership", v: "Solo project: architecture, backend, data model, tools, tests, React trace UI, Docker setup." },
    { k: "Outcome", v: "Working end-to-end system with cited answers and access control proven by 11 tests. Baseline evaluation in progress." },
  ],

  problem: {
    lead: "“Is the Zone 3 contractor owed for drywall, and can the client withhold payment because inspection photos are missing?”",
    leadNote: "The flagship question from the repo. Answering it needs three sources at once.",
    before: [
      "Check the payments table for amount due and amount paid.",
      "Search the contract for the withholding clause.",
      "Read the site log for completion and inspection photos.",
      "Reconcile by hand — no citations, easy to miss a cap or a date.",
    ],
    after: [
      "One question, one answer, split into Payment / Contract / Progress / Uncertainty.",
      "Every fact carries a source ID back to its row or contract chunk.",
      "Unsupported claims are re-checked once, then removed or caveated.",
      "Contractors only ever see their own zones.",
    ],
    insufficient: [
      {
        t: "One vector search treats everything as prose",
        d: "Amounts owed are arithmetic over rows (SUM of payments vs amount due). Embedding similarity can’t compute that reliably — SQL can.",
      },
      {
        t: "Prompt rules are not permissions",
        d: "Telling a model “only discuss Zone 3” depends on the model obeying. A contractor’s scope has to be enforced where the data is read.",
      },
    ],
    constraints: [
      "Never state an action is “legally valid” — only report what the contract says.",
      "Every claim must cite evidence or be flagged as uncertain.",
      "Self-correction must be bounded — no open-ended agent loops.",
      "Must run fully offline (Ollama) or on Claude + OpenAI, behind one adapter.",
    ],
    why: "Payment disputes on site come from exactly this cross-checking gap. A cited, reconciled answer turns a multi-source investigation into a question.",
    motivation: "[Optional: one line on why you built this — e.g. what you saw while building Nirman]",
  },

  ownership: {
    note: "Personal project. I wrote every part of the repository.",
    columns: [
      {
        t: "Designed",
        items: [
          "Supervisor → specialists → Audit flow with a one-retry bound",
          "Postgres schema: 11 tables incl. zone-scoped access and trace tables",
          "Typed tool contracts (payment_lookup, vector_search, progress_lookup)",
        ],
      },
      {
        t: "Implemented",
        items: [
          "Express API streaming over Server-Sent Events",
          "Parameterized-SQL tools with zone scoping",
          "Contract chunking + embedding ingestion",
          "Claude / Ollama / OpenAI provider adapters",
          "React chat + live trace UI",
          "Docker Compose stack, Vitest suite",
        ],
      },
      {
        t: "Decided",
        items: [
          "Access control in SQL, not prompts",
          "Retry LLM calls, never DB writes",
          "SSE over GET with errors sent as events",
          "Audit verifies only — it never adds new claims",
        ],
      },
      {
        t: "Measured",
        items: [
          "Per-step latency written to trace_steps",
          "LLM + embedding call and token counters (src/llm/usage.ts)",
          "Cross-zone access: 11 tests",
          "Baseline comparison: [in progress]",
        ],
      },
    ],
    collaborators: "None — solo build. Open-source used as-is: pgvector, Express, the Anthropic and OpenAI SDKs, Ollama models.",
  },

  // Architecture explorer. `lane: "flow"` = request path, `lane: "support"` = shared services.
  architecture: {
    intro: "Follow one question from the browser to a cited answer. Select any component.",
    nodes: [
      {
        id: "ui",
        lane: "flow",
        name: "React UI",
        short: "Ask + watch the trace",
        role: "Picks a user and project, sends the question, and renders the live trace, the answer and its evidence list.",
        input: "Question, userId, projectId",
        output: "EventSource on GET /api/ask",
        tech: "React, Vite, native EventSource",
        why: "Showing each agent step as it happens makes a multi-call answer trustworthy instead of a spinner.",
        edges: [
          "Closes any open stream before starting a new question.",
          "Renders ask_error events as a visible error, not a silent hang.",
        ],
        file: "web/src/App.tsx",
      },
      {
        id: "api",
        lane: "flow",
        name: "Express API",
        short: "SSE stream",
        role: "Validates the request, resolves access, opens a trace, then streams step → step → done.",
        input: "Query params: question, userId, projectId",
        output: "SSE events: trace_id, step, done, ask_error",
        tech: "Node.js, Express 5, Server-Sent Events",
        why: "One-way progress streaming is exactly what SSE does, with no client library.",
        edges: [
          "EventSource can’t read a non-200 body, so every failure — including access denial — is sent as an ask_error event.",
          "Named ask_error, not error, to avoid colliding with EventSource’s own connection event.",
        ],
        file: "src/api/server.ts",
      },
      {
        id: "access",
        lane: "flow",
        name: "Access context",
        short: "Who may see what",
        role: "Turns userId + projectId into an AccessContext: role plus the zones this user may read.",
        input: "userId, projectId",
        output: "{ role, projectId, allowedZoneIds: string[] | 'all' }",
        tech: "PostgreSQL, parameterized queries",
        why: "Resolved once per request so no tool ever receives a raw user ID.",
        edges: [
          "Unknown user or no project_access row → AccessDeniedError before any agent runs.",
          "Any ‘full’ grant wins over zone grants.",
        ],
        file: "src/tools/access.ts",
      },
      {
        id: "supervisor",
        lane: "flow",
        name: "Supervisor",
        short: "Plan → delegate → draft",
        role: "Splits the question into per-specialist tasks, runs them, drafts a cited answer and sends it to Audit.",
        input: "Question + AccessContext",
        output: "Draft answer + merged evidence",
        tech: "Claude (or Ollama) with a forced create_plan tool call",
        why: "Forcing the plan through a typed tool gives a machine-readable task list instead of free text to parse.",
        edges: [
          "Unknown agent names in a plan are skipped, not executed.",
          "Drafting prompt forbids calling any action “legally valid”.",
        ],
        file: "src/supervisor/index.ts",
      },
      {
        id: "specialists",
        lane: "flow",
        name: "Specialists",
        short: "Payment · Contract · Progress",
        role: "Each agent owns exactly one typed tool: payment_lookup (SQL totals), vector_search (contract clauses), progress_lookup (site logs + photo flags).",
        input: "One focused instruction + AccessContext",
        output: "Summary + Evidence[] with sourceId, sourceType, specialist",
        tech: "Parameterized SQL, pgvector cosine search",
        why: "Exact numbers come from SQL, clauses from vector search. Small tool surfaces keep each agent predictable.",
        edges: [
          "projectId that doesn’t match the context → AccessDeniedError.",
          "Contractor with no zones → empty result, no query run.",
          "Agents never accept or generate raw SQL.",
        ],
        file: "src/agents/*, src/tools/*",
      },
      {
        id: "audit",
        lane: "flow",
        name: "Audit agent",
        short: "Check every claim",
        role: "Extracts each factual claim from the draft and marks it supported, unsupported or contradicted by the evidence.",
        input: "Draft answer + all evidence",
        output: "Claim verdicts + at most one suggested retrieval",
        tech: "Forced audit_report tool call",
        why: "A separate verifier catches claims the drafter made up. It verifies only — it never adds interpretation.",
        edges: [
          "At most one targeted retry, then re-draft and re-audit.",
          "Claims still unsupported after the retry are rewritten as caveats.",
        ],
        file: "src/agents/audit-agent.ts",
      },
      {
        id: "answer",
        lane: "flow",
        name: "Cited answer",
        short: "Payment · Contract · Progress · Uncertainty",
        role: "The final answer plus its evidence list, sent as the done event.",
        input: "Audited draft",
        output: "Answer text + Evidence[]",
        tech: "SSE done event",
        why: "The answer panel and the evidence list are built from the same source IDs, so they always agree.",
        edges: ["Open questions (e.g. withholding past a 30-day cap) are reported, not guessed."],
        file: "src/supervisor/index.ts",
      },
      {
        id: "db",
        lane: "support",
        name: "Postgres + pgvector",
        short: "Rows, chunks, traces",
        role: "Stores projects, zones, milestones, payments, progress logs, contract chunks with embeddings, and traces.",
        input: "Parameterized queries",
        output: "Scoped rows, top-K chunks",
        tech: "PostgreSQL 16, pgvector, IVFFlat index",
        why: "One database for relational facts and vectors keeps access filters and joins in one place.",
        edges: ["15 s statement_timeout bounds a hung query.", "Writes are never auto-retried (duplicate-data risk)."],
        file: "src/db/schema.sql",
      },
      {
        id: "llm",
        lane: "support",
        name: "LLM providers",
        short: "Claude · Ollama · OpenAI",
        role: "One adapter interface for chat (Claude or Ollama) and embeddings (OpenAI or Ollama).",
        input: "System prompt, messages, tool schema",
        output: "Text + typed tool calls, usage counts",
        tech: "Anthropic SDK, OpenAI SDK, Ollama HTTP",
        why: "Swap cloud for fully local models with an env var — no code change.",
        edges: ["30 s timeout, exponential backoff, retries only on 429 / 5xx / network errors."],
        file: "src/llm/*, src/lib/retry.ts",
      },
      {
        id: "trace",
        lane: "support",
        name: "Trace store",
        short: "Every step, timed",
        role: "Persists each agent call — agent, tool, input, output, latency — as ordered trace steps.",
        input: "Step events from the Supervisor",
        output: "query_traces + trace_steps rows",
        tech: "PostgreSQL JSONB",
        why: "Makes every answer inspectable after the fact, not just while streaming.",
        edges: ["Best-effort: a failed trace write is logged and never breaks the user’s answer."],
        file: "src/trace/store.ts",
      },
    ],
  },

  structures: [
    {
      name: "Zone-ID array + ANY()",
      where: "AccessContext.allowedZoneIds → every tool’s WHERE clause",
      why: "The user’s scope travels as data into SQL: `z.id = ANY($n::uuid[])`. A tagged union (`string[] | 'all'`) makes “no restriction” explicit instead of an empty list.",
      improves: "Filtering to permitted zones inside the query",
      complexity: "O(k) per candidate row, k = zones a user holds (typically 1)",
      alternative: "Prompt instruction, or filtering rows in app code after the query",
      tradeoff: "Every new tool must take the context and repeat the clause — enforced by its type signature, not by the database.",
      scale: "Move the rule into Postgres row-level security so new queries can’t forget it.",
    },
    {
      name: "IVFFlat vector index",
      where: "doc_chunks.embedding (vector_cosine_ops, lists = 100)",
      why: "Top-K cosine search over contract chunks without comparing the query to every stored vector.",
      improves: "Nearest-clause lookup for the Contract agent",
      complexity: "Exact scan O(n·d). IVFFlat ≈ O(lists·d + (probes/lists)·n·d)",
      alternative: "Exact scan (perfect recall), or HNSW (better recall/speed, more memory, slower build)",
      tradeoff: "Approximate recall. With a small corpus, 100 lists is oversized — recall must be checked, or probes raised.",
      scale: "Size lists to roughly rows/1000, or switch to HNSW once the corpus is large.",
    },
    {
      name: "B-tree foreign-key indexes",
      where: "zones.project_id, milestones.zone_id, payments.milestone_id, progress_logs.zone_id, …",
      why: "Every tool joins zones → milestones → payments and filters by project and zone.",
      improves: "Join and filter lookups",
      complexity: "O(log n) per lookup vs O(n) sequential scan",
      alternative: "No secondary indexes (fine at seed-data size)",
      tradeoff: "Small write and storage overhead per insert.",
      scale: "Milestone names use ILIKE, which a B-tree can’t serve — add a pg_trgm index if names get searched at volume.",
    },
    {
      name: "Hash-map agent dispatch",
      where: "AGENT_RUNNERS: Record<SpecialistName, runner>",
      why: "The planner returns agent names as strings; a typed map turns each into its function and skips anything unknown.",
      improves: "Routing a planned task to its specialist",
      complexity: "O(1) lookup",
      alternative: "switch / if-chain",
      tradeoff: "None significant at three agents.",
      scale: "Tasks run sequentially today — run independent specialists with Promise.all to cut latency.",
    },
    {
      name: "Ordered, append-only trace log",
      where: "In-memory TraceEvent[] + trace_steps rows keyed by step_index",
      why: "Each step is appended once, in order, and streamed and stored from the same event.",
      improves: "Replaying and inspecting how an answer was produced",
      complexity: "O(1) append; one INSERT per step",
      alternative: "Unstructured console logging",
      tradeoff: "A synchronous DB write per step adds latency; failures are swallowed so answers never break.",
      scale: "Batch or queue trace writes, or export to OpenTelemetry.",
    },
    {
      name: "Greedy paragraph packing",
      where: "Contract ingestion (src/ingestion/chunk.ts)",
      why: "Keeps whole paragraphs — usually whole clauses — together, up to ~180 words per chunk.",
      improves: "Clause-level retrieval with page citations",
      complexity: "O(n) single pass over the text",
      alternative: "Fixed-size token windows with overlap",
      tradeoff: "No overlap, so a clause split across chunks can lose context. Page numbers are estimated (~400 words/page) on plain-text contracts.",
      scale: "Parse real PDF page boundaries and add overlap between chunks.",
    },
  ],

  decisions: [
    {
      title: "Enforce access in SQL, not in the prompt",
      context: "Contractors may only see their zones, but the model picks tool parameters from free-text questions.",
      options: ["System-prompt rule", "Filter rows in app code after the query", "Resolve scope once, bake it into every parameterized WHERE clause"],
      chosen: "Tools accept an AccessContext — never a raw user ID — and apply the zone filter inside the query. A mismatched projectId throws.",
      reason: "A prompt can be argued with. SQL can’t.",
      cost: "Every new tool must thread the context and repeat the scope clause.",
      result: "11 tests: zero cross-zone rows with an explicit zone, no filter, milestone name only, or the wrong project.",
      scale: "Postgres row-level security, so the database enforces scope even for queries written later.",
    },
    {
      title: "Specialists + a bounded Audit, not one RAG pass",
      context: "Compound questions mix exact numbers, contract prose and site records.",
      options: ["Single vector-search pipeline", "One agent holding every tool", "Supervisor with typed specialists", "Open-ended self-correction loop"],
      chosen: "A Supervisor plans through a forced tool call; three specialists each own one tool; Audit verifies claims and may trigger exactly one targeted retry.",
      reason: "Numbers come from SQL, clauses from vectors, and a hard retry cap keeps cost and latency predictable.",
      cost: "Up to 6 LLM calls per question on the happy path, up to 10 with a retry.",
      result: "Every final claim is either backed by a cited source or rewritten as a caveat.",
      scale: "Run specialists in parallel and use a smaller model for planning and audit.",
    },
    {
      title: "Retry LLM calls — never database writes",
      context: "External model APIs fail transiently (rate limits, 5xx, dropped connections).",
      options: ["Retry everything", "Retry nothing", "Retry only idempotent external calls"],
      chosen: "withRetry: 30 s timeout, 500 ms × 2ⁿ backoff, only on 429, 5xx and network errors. Postgres gets a statement timeout and no retry.",
      reason: "Retrying a non-idempotent INSERT on a transient failure can duplicate data.",
      cost: "A transient DB failure surfaces as an error instead of self-healing.",
      result: "Failures are explicit; no duplicate writes by design.",
      scale: "Idempotency keys so writes can be retried safely, plus jitter and a circuit breaker on model calls.",
    },
    {
      title: "Stream over SSE with errors as events",
      context: "An answer takes several model calls; users need to see progress, not a spinner.",
      options: ["Single JSON response", "WebSockets", "fetch() streaming over POST", "SSE over GET with EventSource"],
      chosen: "GET /api/ask read by the browser’s native EventSource, emitting trace_id, step, done and ask_error.",
      reason: "One-way streaming, zero client dependencies. Errors travel as events because EventSource can’t read a non-200 body.",
      cost: "The question travels in the URL, and EventSource can’t send an Authorization header.",
      result: "The trace panel fills step by step as agents finish.",
      scale: "POST with fetch streaming and an auth header; resume with Last-Event-ID.",
    },
  ],

  challenge: {
    title: "Proving a contractor can never read another zone",
    symptom:
      "The model chooses tool parameters from the wording. The same question can arrive with an explicit zone, no zone, only a milestone name — “Drywall” exists in every zone — or the wrong project.",
    cause: "Any scope applied after the model picks parameters depends on the model behaving.",
    investigation:
      "Listed every parameter shape a phrasing can map to and treated each as an attack path against the seeded data (a Zone 3 contractor, a Zone A contractor, a full-access admin).",
    solution:
      "Resolve an AccessContext once per request. Every tool requires it, adds `z.id = ANY(...)` to its WHERE clause, rejects a mismatched projectId, and returns nothing when the user holds no zones.",
    verification:
      "11 Vitest tests against the seeded database, including an admin regression test so the fix can’t over-block.",
    learned: "Prompts guide behaviour; permissions belong in code the model can’t negotiate with.",
  },

  results: {
    evidence: [
      { v: "11", l: "access-control tests across every tool-parameter shape", src: "tests/access-control.test.ts" },
      { v: "4", l: "agents + Supervisor, each with one typed tool", src: "src/agents, src/supervisor" },
      { v: "1", l: "retry cap on self-correction — the loop cannot run away", src: "src/supervisor/index.ts" },
      { v: "2", l: "provider modes: Claude + OpenAI, or fully offline on Ollama", src: "src/llm" },
    ],
    example: {
      label: "Documented output on seeded, synthetic data (README)",
      lines: [
        { k: "Payment", v: "owed $42,000.00, $0 paid." },
        { k: "Contract", v: "Section 4.2 lets the client withhold for missing photos, capped at 30 days." },
        { k: "Progress", v: "milestone marked complete." },
        { k: "Uncertainty", v: "can the client withhold past the 30-day cap?" },
      ],
    },
    pending: {
      t: "Baseline evaluation — in progress",
      d: "Citation correctness and unsupported-claim rate vs plain-RAG and single-agent baselines. Call and token counters are already in place for it.",
      placeholder: "[Add verified result when the evaluation harness is complete]",
    },
    honesty: "All projects, contracts and payments are synthetic seed data. This is not a client deployment.",
    alsoShipped: [
      { t: "Nirman", d: "Backend lead. Used daily by 30+ contractors and workers across 3 construction firms." },
      { t: "Idyani", d: "Backend lead. Supports 50+ students, 5 teachers and 3 composers." },
    ],
  },

  strengths: [
    { t: "I turn ambiguity into a clear problem", e: "Reframed “payment disputes” as a three-source reconciliation with citations.", href: "#problem" },
    { t: "I make deliberate trade-offs", e: "Four decisions with the options, costs and 10× plans written down.", href: "#decisions" },
    { t: "I think in systems, not components", e: "Access, orchestration, retries, tracing and storage designed as one flow.", href: "#architecture" },
    { t: "I own outcomes end to end", e: "Solo build from schema to Docker Compose to UI.", href: "#ownership" },
    { t: "I test what matters most", e: "The security boundary is the part with automated proof.", href: "#challenge" },
    { t: "I communicate technical ideas clearly", e: "Each agent documented with what it does and what it must never do.", href: "#architecture" },
    { t: "I can name the next bottleneck", e: "Sequential specialists, index tuning, row-level security.", href: "#structures" },
  ],

  cta: {
    title: "Let’s discuss how I approach product and engineering problems.",
    sub: "Open to SDE-1 roles in backend or full-stack engineering · Bangalore, remote, or relocation.",
  },

  sections: [
    { id: "summary", label: "Summary" },
    { id: "problem", label: "Problem" },
    { id: "ownership", label: "Ownership" },
    { id: "architecture", label: "Architecture" },
    { id: "structures", label: "Data structures" },
    { id: "decisions", label: "Decisions" },
    { id: "challenge", label: "Challenge" },
    { id: "results", label: "Results" },
    { id: "hire", label: "Why me" },
  ],
} as const;
