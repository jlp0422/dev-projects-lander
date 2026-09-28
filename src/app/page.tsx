import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-[28rem]" aria-hidden />

      <main className="relative mx-auto w-full max-w-4xl flex-1 px-6 py-20 sm:py-28">
        <header className="mb-14">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 font-mono text-xs text-foreground/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {projects.length} projects live
          </p>
          <h1 className="text-gradient text-5xl font-semibold tracking-tight sm:text-6xl">
            jeremyphilipson<span className="text-foreground/40">.dev</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-foreground/60">
            A collection of side projects, experiments, and things I build for fun.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.url}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col rounded-xl border border-foreground/10 bg-background/60 p-6 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-foreground/30 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
                <h2 className="text-lg font-medium">{project.name}</h2>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-foreground/60">
                  {project.description}
                </p>
                <p className="mt-5 font-mono text-xs text-foreground/40 transition group-hover:text-foreground/70">
                  {new URL(project.url).host}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className="relative mx-auto w-full max-w-4xl px-6 pb-10 font-mono text-xs text-foreground/40">
        © {new Date().getFullYear()} Jeremy Philipson
      </footer>
    </div>
  );
}
