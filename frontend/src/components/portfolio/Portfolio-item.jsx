import { useTranslation } from 'react-i18next';
import UsedTechnologies from "./Used-technologies";

export default function PortfolioItem({title, logo, img, link, description, tech}){

    const {t} = useTranslation();

    return(
        <div className="portfolio__item">
            <a href={link} target="_blank" className="portfolio__image__link">
                <div className="portfolio__ahead">
                    {logo && <img src={logo}  alt="Website logo" />}
                    <p>{title}</p>
                </div>
                <div className="portfolio__img__block">
                    <img src={img} alt="Website image"/>
                </div>
            </a>
            <div className="portfolio__des">
                <div className="portfolio__des__ahead">
                    <h3>{title}</h3>
                    <p>{t("portfolio.click")}</p>
                </div>
                <div className="portfolio__des__main">
                    <p>{t("portfolio.des")}:</p>
                    <p>{description}</p>
                </div>
                <div className="portfolio__des__technology">
                    <h4>{t("portfolio.technologies")}:</h4>
                    <div className="portfolio__des__technology__list">
                        {!tech || tech?.map(e => {
                            return <UsedTechnologies
                                key={e.techName}
                                techName={e.techName}
                                techLogo={e.techLogo}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}