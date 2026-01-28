import Link from "next/link";

export default function Projects() {
    const PROJECTS = [
        {
            title: "Nidoggr",
            techStack: "Rust, Tauri, React Native, Expo",
            description: "A dual-ecosystem logistics suite for the Eurométropole de Strasbourg. Built a Rust backend using Tauri for desktop operations, paired with a React Native mobile client to synchronize security data during city-wide events.",
            githubLink: "https://github.com/NikitaMgz/Nidoggr",
            liveLink: ""
        },
        {
            title: "Esup Stages",
            techStack: "Next.js, NestJS, Express.js, PostgreSQL",
            description: "Full-stack management ecosystem for the IUT Robert Schuman. Engineered to streamline internship tracking and pedagogical workflows, automating document generation and corporate offer indexing.",
            githubLink: "",
            liveLink: ""
        },
        {
            title: "Home Infrastructure & NAS",
            techStack: "Ubuntu, Docker Compose, WireGuard VPN",
            description: "Secure, headless server environment focused on data redundancy and self-hosted microservices. Managed container orchestration via Docker Compose and established encrypted remote access tunnels.",
            githubLink: "",
            liveLink: ""
        }
    ];

    const GithubIcon = () => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );

    const ExternalLinkIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    );

    return (
        <section id="projects" className="py-20 min-h-[100vh]">
            <h2 className="text-4xl font-bold text-[var(--lightest-slate)] mb-10">
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, i) => (
                    <div key={i} className="cursor-default bg-[var(--light-navy)] p-8 rounded hover:-translate-y-2 transition-all hover:bg-[var(--lightest-navy)]">
                        <h3 className="text-xl font-bold text-[var(--lightest-slate)] mb-2">{project.title}</h3>
                        <p className="text-[var(--slate)] text-md mb-4">{project.description}</p>
                        <p className="font-mono text-xs text-[var(--green-bright)]">
                            {project.techStack}
                        </p>
                        <div className="flex gap-2 pt-2">
                            {project.githubLink == "" ? "" : <Link href={project.githubLink} target="_blank" rel="noreferrer" className="text-[var(--lightest-slate)] hover:text-[var(--green-bright)]"><GithubIcon /></Link>}
                            {project.liveLink == "" ? "" : <Link href={project.liveLink} target="_blank" rel="noreferrer" className="text-[var(--lightest-slate)] hover:text-[var(--green-bright)]"><ExternalLinkIcon /></Link>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
