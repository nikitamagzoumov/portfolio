export default function Intro() {
    return (
        <div id="intro" className="flex min-h-[100vh] items-center justify-center">
            <div>
                <h1 className="text-6xl font-bold text-[var(--lightest-slate)] font-sans">
                    Hi, I'm <span className="text-[var(--green-bright)]">Nikita</span>.
                </h1>
                <p className="text-md text-[var(--slate)]">
                    I'm an IT student based in Strasbourg, France. I focus on building reliable tools,
                    web platforms and exploring systems programming, with a particular interest in Open Source
                    and technical solutions that drive scientific advancement.
                </p>
            </div>
        </div>
    )
}