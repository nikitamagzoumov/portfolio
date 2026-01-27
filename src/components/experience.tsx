export default function Experience() {
    const JOBS = [
        {
            title: "Internship at Icube",
            dates: "April 2025 - June 2025",
            techStack: ["Python"],
            description: "Built an automated pipeline for the acquisition and processing of satellite imagery via the Sentinel API and Google Earth Engine. Developed and trained classification models to identify and categorize agricultural parcels at scale.",
            link: ""
        },
    ];
    return (
        <div id="experience" className="flex min-h-[100vh] items-center justify-center flex-col gap-12">
            {JOBS.map((job) => (
                <div key={job.title}>
                    <h2 className="text-xl font-mediums">
                        {job.title}
                    </h2>
                    <div className="flex gap-2 mt-1">
                        {job.techStack.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-zinc-400">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        {job.description}
                    </p>
                </div>
            ))}
        </div>
    )
}