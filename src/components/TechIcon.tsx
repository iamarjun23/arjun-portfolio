import type { IconType } from "react-icons";
import { FiDatabase, FiGlobe, FiGrid, FiLayers, FiLock, FiRadio, FiRefreshCw, FiUsers } from "react-icons/fi";
import {
  SiDart,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRazorpay,
  SiReact,
  SiTypescript,
} from "react-icons/si";

// Brand logos from Simple Icons, concepts from Feather (same pack as ThemeToggle).
// No color = inherits text color (for black logos that vanish on dark bg).
const techs: Record<string, [IconType, string | undefined, string]> = {
  JavaScript: [SiJavascript, "#F7DF1E", "https://developer.mozilla.org/docs/Web/JavaScript"],
  TypeScript: [SiTypescript, "#3178C6", "https://www.typescriptlang.org"],
  Python: [SiPython, "#3776AB", "https://www.python.org"],
  Dart: [SiDart, "#0175C2", "https://dart.dev"],
  "Node.js": [SiNodedotjs, "#5FA04E", "https://nodejs.org"],
  Express: [SiExpress, undefined, "https://expressjs.com"],
  Flask: [SiFlask, undefined, "https://flask.palletsprojects.com"],
  "REST APIs": [FiGlobe, "#0EA5E9", "https://developer.mozilla.org/docs/Glossary/REST"],
  SSE: [FiRadio, "#F97316", "https://developer.mozilla.org/docs/Web/API/Server-sent_events"],
  React: [SiReact, "#61DAFB", "https://react.dev"],
  "Next.js": [SiNextdotjs, undefined, "https://nextjs.org"],
  Flutter: [SiFlutter, "#02569B", "https://flutter.dev"],
  Electron: [SiElectron, "#47848F", "https://www.electronjs.org"],
  PostgreSQL: [SiPostgresql, "#4169E1", "https://www.postgresql.org"],
  MongoDB: [SiMongodb, "#47A248", "https://www.mongodb.com"],
  Firebase: [SiFirebase, "#FFCA28", "https://firebase.google.com"],
  Firestore: [FiDatabase, "#FFA000", "https://firebase.google.com/docs/firestore"],
  LangChain: [SiLangchain, undefined, "https://www.langchain.com"],
  Pinecone: [FiLayers, "#8B5CF6", "https://www.pinecone.io"],
  Embeddings: [FiGrid, "#EC4899", "https://platform.openai.com/docs/guides/embeddings"],
  "Multi-agent": [FiUsers, "#10B981", "https://langchain-ai.github.io/langgraph/concepts/multi_agent/"],
  Docker: [SiDocker, "#2496ED", "https://www.docker.com"],
  "Auth & roles": [FiLock, "#EAB308", "https://owasp.org/www-project-top-ten/"],
  Razorpay: [SiRazorpay, "#3395FF", "https://razorpay.com"],
  "Real-time sync": [FiRefreshCw, "#22C55E", "https://firebase.google.com/docs/firestore/query-data/listen"],
};

export function TechChip({ name }: { name: string }) {
  const tech = techs[name];
  const cls = "inline-flex items-center gap-1.5 border border-line bg-bg px-2.5 py-1 text-sm";
  if (!tech) return <span className={cls}>{name}</span>;
  const [Icon, color, url] = tech;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:border-brand`}>
      <Icon aria-hidden className="size-3.5 shrink-0" style={color ? { color } : undefined} />
      {name}
    </a>
  );
}
