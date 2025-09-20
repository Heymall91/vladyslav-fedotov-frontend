import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import Input from './Input';
import SocLink from './SocialLink';
import contacts from './contacts.json';

export default function Contacts(){
    const [email, removeEmail] = useState("");
    const [theme, removeTheme] = useState("");
    const [text, removeText] = useState("");
    

    const {t} = useTranslation();
    return(
        <div className="contacts">
            <div className="wrapper">
                <div className="block">
                    <div className="ahead">{t("contacts.title")}</div>
                    <div className="contacts__subblock">
                        <div className="contacts__form">
                            <p>
                                <Trans
                                    i18nKey="contacts.message"
                                    values={{ask: t("contacts.ask"), partnership: t("contacts.partnership")}}
                                    components={{span: <span/>}}
                                />
                            </p>
                            <form action="/" method="POST">
                                <div className="form__input">
                                    <Input
                                        type={"email"}
                                        name={"user__email"}
                                        id={"user__email"}
                                        placeholder={t("contacts.form.email")}
                                        value={email}
                                        onChange={(e)=>{removeEmail(e.target.value)}}
                                        maxLength={"20"}
                                    />
                                    {email && (
                                    <div className="remove__cross" onClick={() => { removeEmail("") }}>
                                        <svg fill="#31C04B" width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"> 
                                                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> 
                                            </g>
                                        </svg>
                                    </div>)}
                                </div>
                                <div className="form__input">
                                    <Input
                                        type={"text"}
                                        name={"user__theme"}
                                        id={"user__theme"}
                                        placeholder={t("contacts.form.theme")}
                                        value={theme}
                                        onChange={(e)=>{removeTheme(e.target.value)}}
                                        maxLength={"20"}
                                    />
                                    {theme &&
                                        (<div className="remove__cross" onClick={() => { removeTheme("") }}>
                                            <svg fill="#31C04B" width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier"> 
                                                    <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> 
                                                </g>
                                            </svg>
                                        </div>)
                                    }
                                </div>
                                <div className="form__textarea">
                                    <textarea 
                                        name="user__text" 
                                        id="user__text" 
                                        placeholder={t("contacts.form.message")} 
                                        value={text}
                                        onChange={(e) => {removeText(e.target.value)}}
                                    >
                                    </textarea>
                                    {
                                        text && (
                                        <div className="remove__cross" onClick={() => { removeText("") }}>
                                            <svg fill="#31C04B" width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier"> 
                                                    <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> 
                                                </g>
                                            </svg>
                                        </div>
                                        )
                                    }
                                </div>
                                <button type="submit">{t("contacts.form.send")}</button>
                            </form>
                        </div>
                        <div className="block__separate"></div>
                        <div className="contacts__links">
                            <h3>{t("contacts.links.title")}:</h3>
                            <div className="contacts__links__list">
                                {contacts.map(e => {
                                    return <SocLink
                                        key={e.link}
                                        classItem={e.classItem}
                                        link={e.link}
                                        title={e.title}
                                        src={e.src}
                                        alt={e.alt}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}