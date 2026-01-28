export default function Experience() {
    const JOBS = [
        {
            company: "ICube",
            title: "Research & Development Intern",
            dates: "April 2025 - June 2025",
            techStack: "Python, Google Earth Engine, Scikit-Learn",
            description: ["Built an automated pipeline for the acquisition and processing of satellite imagery via the Sentinel API and Google Earth Engine.", "Trained classification models to identify and categorize agricultural parcels at scale."],
            link: "https://icube.unistra.fr/en/"
        },
    ];
    return (
        <div id="experience" className="flex flex-col min-h-[100vh] items-start justify-center font-sans">
            <div className="mb-2 text-4xl font-bold text-[var(--lightest-slate)]">
                Experience
            </div>
            {JOBS.map((job, i) => (
                <div key={i} className="mb-12">
                    <h3 className="text-2xl font-bold text-[var(--light-slate)]">
                        {job.title} <span className="text-[var(--green-bright)]">@ <a href={job.link} target="_blank" rel="noreferrer">{job.company}</a></span>
                    </h3>
                    <p className="font-mono text-[var(--slate)] mb-4">{job.dates}</p>

                    <ul className="pl-10 mb-2">
                        {job.description.map((point, i) => (
                            <li key={i} className="gap-2 text-[var(--slate)]">
                                <span className="text-[var(--green-bright)]">▹</span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div className="pl-10 text-sm text-[var(--green-bright)]">
                        {job.techStack}
                    </div>
                </div>
            ))}
        </div>
    )
}