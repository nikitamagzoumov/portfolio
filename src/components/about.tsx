import Link from "next/link"

export default function About() {
    const SKILLS = [
        "C", "Rust", "Python", "Typescript (Next.js, React, Vite)", "Java", "Cobol"
    ]
    return (
        <section id="about" className="flex flex-col min-h-[100vh] items-start justify-center font-sans">
            <div className="mb-2 text-4xl font-bold text-[var(--lightest-slate)]">
                About me
            </div>
            <div className="text-md text-[var(--slate)]">
                <p className="mb-5">
                    I am currently a <b>Computer Science student</b> at the <Link href="https://iutrs.unistra.fr/english/" target="_blank" rel="noreferrer" className="text-[var(--green-bright)]">Robert Schuman IUT</Link>.
                    One of my life goals is to build technologies that revolutionize the world and improve everyone's quality of life.
                    I'm currently focused on improving my low-level programming skills, and my knowledge of system architecture.
                </p>
                <p className="mb-2">
                    Here is a non-exhaustive list of what I've used so far:
                </p>
                <ul className="grid grid-cols-2 mb-5 font-mono">
                    {SKILLS.map((skill) => (
                        <li key={skill}><span className="text-[var(--green-bright)]">{"▹"}</span>{skill}</li>
                    ))}
                </ul>
                <p>
                    Outside of IT, I love music, such as Shoegaze lately, different sports (I love Cycling and Football) and reading (ever heard of Shadow Slave?).
                </p>
            </div>
        </section>
    )
}