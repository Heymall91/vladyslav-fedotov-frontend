import PortfolioItem from "./Portfolio-item"
import data from "./portfolio.json"
import { useTranslation } from 'react-i18next'


export default function Portfolio(){
    
    const {t} = useTranslation();

    return(
        <div className="portfolio">
            <div className="wrapper">
                <div className="block column">
                    <div className="ahead">{t("portfolio.title")}</div>
                    <div className="portfolio__list">
                        {data.map(e => {
                            return(
                                <PortfolioItem
                                    key={e.title}
                                    title={e.title}
                                    logo={e.logo}
                                    img={e.img}
                                    link={e.link}
                                    description={t(e.des)}
                                    tech={e.tech}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="block__separate"></div>
        </div>
    )
}