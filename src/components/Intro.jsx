import Typewriter from 'typewriter-effect'

// svg
import htmlTag from '../assets/intro-svg/html-tag.svg'
import PC from '../assets/intro-svg/pc.svg'
import { useTranslation } from 'react-i18next'


export default function Intro() {
    const { t } = useTranslation();

    return (
        <div className="intro" id="intro">
            <div className="wrapper">
                <div className="block flex">
                    <div className="intro__subblock">
                        <div className="intro__about__me">
                            <div className="intro__ahead">
                                <span className="intro__file__name">
                                    <img src={htmlTag} alt="HTML tag" />
                                </span>
                                <span className="intro__file__name">
                                    about-me.html
                                </span>
                            </div>
                            <div className="intro__text__block">
                                <div className="html__item">
                                    <div>
                                        <span className="arrow__item">{"<"}</span>
                                        article
                                        <span className="arrow__item">{">"}</span>
                                    </div>
                                </div>
                                <span className="html__item">
                                    <span className="arrow__item">{"<"}</span>
                                        h1
                                    <span className="arrow__item">{">"}</span>
                                </span>
                                    <span className="html__hello">
                                        Hello World!
                                    </span>
                                <span className="html__item">
                                    <span className="arrow__item">{"<"}</span>
                                        /h1
                                    <span className="arrow__item">{">"}</span>
                                </span><br />
                                <span className="html__item">
                                    <span className="arrow__item">{"<"}</span>
                                        p
                                    <span className="arrow__item">{">"}</span>
                                </span>
                                <span className="text_typed" style={{ whiteSpace: "pre-line", color: "#fff" }}>
                                    <Typewriter options={{
                                        strings: [t("intro.p")],
                                        autoStart: true,
                                        delay: 90,
                                        loop: false,
                                        deleteSpeed: Infinity,
                                        cursor: '_'
                                    }}/>
                                    
                                </span>
                                <span className="html__item">
                                    <span className="arrow__item">{"<"}</span>
                                        /p
                                    <span className="arrow__item">{">"}</span>
                                </span>
                                <div className="html__item">
                                    <div>
                                        <span className="arrow__item">{"<"}</span>
                                        /article
                                        <span className="arrow__item">{">"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro__pc">
                        <img src={PC} alt="Computer" />
                    </div>
                </div>
            </div>
            <div className="block__separate"></div>
        </div>
    )
}