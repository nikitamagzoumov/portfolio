import { useTranslations } from 'next-intl';

interface IntroStruct {
    greeting: string,
    paragraph: string
}

export default function Intro() {
    const t = useTranslations('');
    const text = t.raw("Intro") as IntroStruct;
    return (
        <div id="intro" className="flex min-h-[100vh] items-center justify-center">
            <div>
                <h1 className="text-6xl font-bold text-[var(--lightest-slate)] font-sans">
                    {text.greeting}<span className="text-[var(--green-bright)]">Nikita</span>.
                </h1>
                <p className="text-md text-[var(--slate)]">
                    {text.paragraph}
                </p>
            </div>
        </div>
    )
}