import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Credits(){
    const [year, setYear] = useState('');
    const yearUpdate = new Date().getFullYear();

    useEffect(() => {
        return setYear(yearUpdate);    
    },[])
    

    const {t} = useTranslation();    

    return(
        <div className="credits">
            <div className="wrapper">
                <div className="block">
                    <p>{t("credits.title")} <a href="https://github.com/Heymall91" target="_blank">Heymall</a>. {year}</p>
                </div>
            </div>
        </div>
    )
}