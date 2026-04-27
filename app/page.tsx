import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";

export default function Home() {
  return (
    <main className="w-full px-8 md:px-16 lg:px-24">
      {/* Hero */}
      <FadeIn as="section" className="pt-28 pb-24 md:pt-36 md:pb-32">
        <h1 className="text-[64px] md:text-[96px] lg:text-[120px] font-semibold leading-[0.95] tracking-[-0.03em] text-ink">
          RONIT
          <br />
          ANILKUMAR
        </h1>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="text-[16px] leading-[1.6] text-muted max-w-[480px]">
            CSE @ UCLA building distributed systems and ML infrastructure.
          </p>
          <nav className="flex gap-6 text-[14px] text-muted">
            <a
              href="https://github.com/ronitanilkumar"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors duration-200 hover:text-ink"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ronit-anilkumar"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors duration-200 hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ranilkumar@ucla.edu"
              className="transition-colors duration-200 hover:text-ink"
            >
              Email
            </a>
          </nav>
        </div>
      </FadeIn>

      {/* About */}
      <FadeIn as="section" className="py-20">
        <SectionHeading counter="01">About</SectionHeading>
        <div className="space-y-4 text-[17px] leading-[1.8] text-ink max-w-[720px]">
          <p>
            I&apos;m a third year CSE student at UCLA focused on distributed systems and ML infrastructure. I&apos;m currently building CoWrite, a real-time collaborative editor with CRDT-based sync, and Cascade DB, a temporal vector database in Rust. This summer I&apos;m joining the ML team at{" "}
            <a href="https://getseam.ai" target="_blank" rel="noreferrer noopener" className="text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors duration-200">Seam AI</a>
            , and I also research self-supervised learning for medical ultrasound at UCLA&apos;s{" "}
            <a href="https://bair.seas.ucla.edu/" target="_blank" rel="noreferrer noopener" className="text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors duration-200">Biomedical AI Research Lab</a>.
          </p>
          <p>
            Always happy to connect, feel free to reach out!
          </p>
        </div>
      </FadeIn>

      {/* Experience */}
      <FadeIn as="section" className="py-20">
        <SectionHeading counter="02">Experience</SectionHeading>
        <div>
          <ExperienceCard
            org="Seam AI"
            orgHref="https://getseam.ai"
            role="Software Engineer Intern"
            date="June 2026"
            description="Incoming Summer 2026."
            logoSrc="/seamai_logo 1.svg"
          />
          <ExperienceCard
            org="UCLA Biomedical AI Research Lab"
            orgHref="https://bair.seas.ucla.edu/"
            role="Machine Learning Researcher"
            date="2024 - Present"
            description="Co-author on US-JEPA, a self-supervised foundation model for ultrasound cancer detection. 4.73M frames across 49 datasets."
            meta="Submitted to ICML 2026"
            logoSrc="/ucla_logo 1.svg"
            links={[{ label: "arXiv →", href: "https://arxiv.org/abs/2602.19322" }]}
          />
        </div>
      </FadeIn>

      {/* Projects */}
      <FadeIn as="section" className="py-20">
        <SectionHeading counter="03">Projects</SectionHeading>
        <div className="grid gap-4">
          <ProjectCard
            title="CoWrite"
            description="Real-time collaborative editor built on CRDTs. Implements conflict-free concurrent editing across distributed clients with persistent document state and live cursor presence."
            stack={["Yjs", "TipTap", "WebSocket", "SQLite"]}
            links={[
              { label: "GitHub", href: "https://github.com/ronitanilkumar/CoWrite.git" },
            ]}
          />
          <ProjectCard
            title="Cascade DB"
            description="Temporal vector database in Rust with LSM-tree storage, time-partitioned HNSW indexing, and eBPF observability. Currently in active development."
            stack={["Rust", "LSM-tree", "HNSW", "eBPF"]}
            links={[
              { label: "GitHub", href: "https://github.com/ronitanilkumar/cascade-db.git" },
            ]}
          />
          <ProjectCard
            title="Veylor"
            description="Autonomous CI/CD repair system using multi-agent orchestration. Analyzes failing tests, generates patches, and opens pull requests without human intervention."
            stack={["LangGraph", "Docker", "OpenTelemetry", "FastAPI"]}
            links={[
              { label: "GitHub", href: "https://github.com/ronitanilkumar/Veylor.git" },
            ]}
          />
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn
        as="footer"
        className="py-16 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-6 text-[14px]">
          <a
            href="mailto:ranilkumar@ucla.edu"
            className="text-ink transition-colors duration-200 hover:text-muted"
          >
            ranilkumar@ucla.edu
          </a>
          <a
            href="https://github.com/ronitanilkumar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted transition-colors duration-200 hover:text-ink"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ronit-anilkumar"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-200 hover:text-ink"
          >
            <LinkedInIcon />
          </a>
        </div>
      </FadeIn>
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.01 3.25 9.26 7.76 10.76.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.33-5.21 5.61.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.66.79.55 4.5-1.5 7.75-5.75 7.75-10.76C23.34 5.57 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
