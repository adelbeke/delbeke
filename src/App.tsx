import {Header} from "./components/Header.tsx";
import {Presentation} from "./components/Presentation.tsx";
import {Section} from "./components/Section.tsx";
import {Event} from "./components/Event.tsx";
import dict from "./dict.ts";
import {Project} from "./components/Project.tsx";

const AWARDS = ['ces']
const EXPERIENCES = ['smartness', 'lgm', 'happy_dev']
const PROJECTS = ['moodm8', 'shaaare', 'ko', 'livecoworking']
const LINKS = {
    moodm8: 'https://moodm8.com/',
    happy_dev: 'https://happy-dev.fr/en/',
    lgm: 'https://www.lgm.fr/',
    smartness: 'https://smartness.co/',
}

function App() {
    return (
        <main className={"bg-gray-900 min-h-svh h-full flex flex-col"}>
            <div className={"mx-auto max-w-lg w-full p-4 md:p-8"}>
                <Header/>
                <Presentation/>
                <Section title={dict.what_i_want.title}>
                    <p className={"text-gray-50 text-sm"}>
                        {dict.what_i_want.text}
                    </p>
                </Section>
                <Section title={dict.awards.title}>
                    {AWARDS.map(award => {
                        return (
                            <Event
                                // @ts-expect-error ///
                                time={dict.awards[award].time}
                                // @ts-expect-error ///
                                title={dict.awards[award].title}
                                // @ts-expect-error ///
                                description={dict.awards[award].description}
                                key={award}
                            />
                        )
                    })}
                </Section>
                <Section title={dict.experiences.title}>
                    {EXPERIENCES.map(experience => {
                        return (
                            <Event
                                // @ts-expect-error ///
                                time={dict.experiences[experience].time}
                                // @ts-expect-error ///
                                title={dict.experiences[experience].title}
                                // @ts-expect-error ///
                                description={dict.experiences[experience].description}
                                // @ts-expect-error ///
                                href={LINKS[experience]}
                                key={experience}
                            />
                        )
                    })}
                </Section>
                <Section title={dict.projects.title}>
                    {PROJECTS.map(project => {
                        return (
                            <Project
                                // @ts-expect-error ///
                                title={dict.projects[project].title}
                                // @ts-expect-error ///
                                state={dict.projects[project].state}
                                // @ts-expect-error ///
                                description={dict.projects[project].description}
                                // @ts-expect-error ///
                                href={LINKS[project]}
                                key={project}
                            />
                        )
                    })}
                </Section>
            </div>
            <footer className={"bg-gray-950 p-4"}>
                <p className={"whitespace-pre text-center text-xs text-gray-500"}>
                    {dict.footer}
                </p>
            </footer>
        </main>
    )
}

export default App
