"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
    const t = useTranslations('');
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "fr" : "en";
        const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
        router.push(newPath || `/${nextLocale}`);
    };

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

    const LinkedInIcon = () => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
    );

    const MailIcon = () => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );

    return (
        <header className="fixed w-full h-[6vh] bg-[var(--navy)] text-[var(--lightest-slate)] font-mono">
            <div className="flex flex-row h-full items-center justify-center">
                <a href="#" className="p-2 hover:text-[var(--green-bright)] mr-6"><b>Nikita Magzoumov</b></a>
                <div className="flex flex-row flex-grow items-center justify-between max-w-[1000px]">
                    <nav className="flex gap-6">
                        <a href="#intro" className="hover:text-[var(--green-bright)]">{t('Intro.title')}</a>
                        <a href="#about" className="hover:text-[var(--green-bright)]">{t('About.navTitle')}</a>
                        <a href="#experience" className="hover:text-[var(--green-bright)]">{t('Experience.title')}</a>
                        <a href="#projects" className="hover:text-[var(--green-bright)]">{t('Projects.title')}</a>
                    </nav>
                    <nav className="flex gap-6">
                        <button
                            onClick={toggleLanguage}
                            className="text-[13px] hover:text-[var(--green-bright)] transition-colors uppercase cursor-pointer"
                        >
                            {locale === "en" ? "FR" : "EN"}
                        </button>
                        <a
                            href="/CV_Nikita_Magzoumov.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="CV_Nikita_Magzoumov.pdf"
                            className="px-2 py-0.5 border border-[var(--lightest-slate)] hover:border-[var(--green-bright)] text-[var(--lightest-slate)] rounded hover:text-[var(--green-bright)] hover:bg-opacity-10 transition-all duration-300 text-[13px] leading-tight"
                        >
                            Resume
                        </a>
                        <Link href="mailto:nikita.magzoumov@gmail.com" target="_blank" rel="noreferrer" className="hover:text-[var(--green-bright)]"><MailIcon /></Link>
                        <Link href="https://www.linkedin.com/in/nikitamagzoumov/" target="_blank" rel="noreferrer" className="hover:text-[var(--green-bright)]"><LinkedInIcon /></Link>
                        <Link href="https://github.com/NikitaMgz" target="_blank" rel="noreferrer" className="hover:text-[var(--green-bright)]"><GithubIcon /></Link>
                    </nav>
                </div>
            </div>
        </header >
    )
}