// svg
import hardSk from '../assets/my-competitions/hard-skills/hard-skills.svg'
import softSk from '../assets/my-competitions/soft-skills.svg'
import react from '../assets/my-competitions/hard-skills/react.svg'
import JS from '../assets/my-competitions/hard-skills/JS.svg'
import nodeJS from '../assets/my-competitions/hard-skills/node-js.svg'
import html from '../assets/my-competitions/hard-skills/html.svg'
import scss from '../assets/my-competitions/hard-skills/scss.svg'
import git from '../assets/my-competitions/hard-skills/git.svg'
// translate
import { useTranslation } from 'react-i18next'

export default function MyCompetitions(){
    const {t} = useTranslation();
    return (
        <div className="my__competitions">
            <div className="wrapper">
                <div className="block">
                    <h2>{t("myCompetitions.title")}</h2>
                    <div className="my__competitions__block">
                        <div className="skills hard">
                            <div className="skills__ahead">
                                <img src={hardSk} alt="Hard skills" />
                                <h3>Hard Skills</h3>
                            </div>
                            <ul className="skills__list hard">
                                <li>
                                    <img src={react} alt="react" />
                                    <span>React</span>
                                </li>
                                <li>
                                    <img src={JS} alt="javascript" />
                                    <span>JavaScript</span>
                                </li>
                                <li>
                                    <img src={nodeJS} alt="node js, express" />
                                    <span>Node.js, Express</span>
                                </li>
                                <li>
                                    <img src={html} alt="html" />
                                    <span>HTML, EJS, JSX</span>
                                </li>
                                <li>
                                    <img src={scss} alt="scss" />
                                    <span>SCSS</span>
                                </li>
                                <li>
                                    <img src={git} alt="git" />
                                    <span>git</span>
                                </li>
                            </ul>
                        </div>
                        <div className="block__separate"></div>
                        <div className="skills soft">
                            <div className="skills__ahead">
                                <img src={softSk} alt="Soft skills" />
                                <h3>Soft Skills</h3>
                            </div>
                            <ul className="skills__list soft">
                                <li>{t("myCompetitions.softSkills.one")}</li>
                                <li>{t("myCompetitions.softSkills.two")}</li>
                                <li>{t("myCompetitions.softSkills.three")}</li>
                                <li>{t("myCompetitions.softSkills.four")}</li>
                                <li>{t("myCompetitions.softSkills.five")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block__separate"></div>
        </div>
    )
}