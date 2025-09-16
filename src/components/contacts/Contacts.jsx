import { useTranslation } from 'react-i18next';

export default function Contacts(){
    const {t} = useTranslation();
    return(
        <div className="contacts">
            <div className="wrapper">
                <div className="block">
                    <div className="ahead">{t("contacts.title")}</div>
                    <div className="contacts__subblock">
                        <div className="contacts__form">
                            <p>
                                {t("contacts.message")}.
                            </p>
                            <form action="/" method="POST">
                                <input type="email" name="user__email" id="user__email" placeholder={t("contacts.form.email")}/><br/>
                                <input type="text" name="user__theme" id="user__theme" placeholder={t("contacts.form.theme")}/><br/>
                                <textarea name="user__text" id="user__text" placeholder={t("contacts.form.message")}></textarea><br/>
                                <button type="submit">{t("contacts.form.send")}</button>
                            </form>
                        </div>
                        <div className="contacts__links">
                            <h3>{t("contacts.links.title")}:</h3>
                            <div className="contacts__links__list">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}