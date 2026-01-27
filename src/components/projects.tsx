export default function Projects() {
    const PROJECTS = [
        {
            title: "Nidoggr",
            techStack: ["Rust", "React Native", "Expo", "React"],
            description: "Cross-platform desktop and mobile applications for the Eurométropole de Strasbourg. Developed to coordinate logistics and security operations for city-wide sporting events.",
            link: ""
        },
        {
            title: "Esup",
            techStack: ["Next.js", "NestJS", "Express.js"],
            description: "Full-stack management platform for IUT Robert Schuman. Automates student internship tracking, corporate offer indexing, and pedagogical document workflows.",
            link: ""
        },
    ];
    return (
        <div id="projects" className="flex flex-col gap-12 min-h-[100vh] items-center justify-center">
            {PROJECTS.map((project) => (
                <div key={project.title}>
                    <h2 className="text-xl font-mediums">
                        {project.title}
                    </h2>
                    <div className="flex gap-2 mt-1">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-zinc-400">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        {project.description}
                    </p>
                </div>
            ))}
        </div>
    )
}