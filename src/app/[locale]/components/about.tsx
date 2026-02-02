import Link from "next/link"
import { useTranslations } from "next-intl"

export default function About() {
    const SKILLS = [
        "C", "Rust", "Python", "Typescript (Next.js, React, Vite)", "Java", "Cobol"
    ]
    const t = useTranslations('About');
    return (
        <section id="about" className="flex flex-col min-h-[100vh] items-start justify-center font-sans">
            <div className="mb-2 text-4xl font-bold text-[var(--lightest-slate)]">
                {t('title')}
            </div>
            <div className="text-md text-[var(--slate)]">
                <p className="mb-5">
                    {t('intro')} <b>{t('status')}</b> {t('at')} <Link href={t('link')} target="_blank" rel="noreferrer" className="text-[var(--green-bright)]">{t('school')}</Link>.
                    {t('goals')}
                </p>
                <p className="mb-2">
                    {t('techsIntro')}
                </p>
                <ul className="grid grid-cols-2 mb-5 font-mono">
                    {SKILLS.map((skill) => (
                        <li key={skill}><span className="text-[var(--green-bright)]">{"▹"}</span>{skill}</li>
                    ))}
                </ul>
                <p>
                    {t('hobbies')}
                </p>
            </div>
        </section>
    )
}