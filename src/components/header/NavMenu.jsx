// react-select
import Select, {components} from "react-select";
import { useEffect } from "react";

// i18n
import i18n from 'i18next'
import  options from '/src/utils/Options.jsx'
import { useTranslation } from "react-i18next";

export default function NavMenu({flag, setFlag}) {

    const DropdownIndicator = (props) => (
        <components.DropdownIndicator {...props}>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.19526 5.73859C3.93491 5.97964 3.93491 6.37051 4.19526 6.61156L7.45673 9.62847C7.97753 10.1102 8.82139 10.11 9.34193 9.6281L12.6021 6.60933C12.8625 6.36828 12.8625 5.97742 12.6021 5.73636C12.3418 5.49529 11.9197 5.49529 11.6593 5.73636L8.86893 8.32007C8.60859 8.56119 8.18646 8.56112 7.92613 8.32007L5.13807 5.73859C4.87772 5.49752 4.45561 5.49752 4.19526 5.73859Z" fill="#5D78BC" />
            </svg>
        </components.DropdownIndicator>
    );

    const { t } = useTranslation();

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if(savedLang){
            const findLang = options.find(opt => opt.value === savedLang);

            if(findLang){
                i18n.changeLanguage(findLang.value);
                setFlag(findLang);
            }
        }
    }, []);

    const changeHandler = (opt) => {
        i18n.changeLanguage(opt.value);
        setFlag(opt);
        localStorage.setItem('lang', opt.value);
    };

    return (
        <nav className="menu">
            <ul>
                <li><a href="#intro">{t('header.aboutMe')}</a></li>
                <li><a href="#my__competitions">{t('header.mySkills')}</a></li>
                <li><a href="#portfolio">{t('header.portfolio')}</a></li>
                <li><a href="#contacts">{t('header.contacts')}</a></li>
            </ul>
            <Select
                className="language_select"
                classNamePrefix="language_select"
                value={flag}
                onChange={
                    (opt) => {
                        changeHandler(opt);
                    }
                }
                isSearchable={false}
                components={{
                    IndicatorSeparator: null,
                    DropdownIndicator
                }}
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: 'rgba(0,0,0,0)',
                        border: '3px solid #2A3E70',
                        borderRadius: 16,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                    }),
                    indicatorsContainer: (base) => ({
                        ...base,
                        margin: -5
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        marginLeft: -8
                    }),
                    menu: (base) => ({
                        ...base,
                        borderRadius: 16,
                    }),
                    menuList: (base) => ({
                        ...base,
                        borderRadius: 14,
                        backgroundColor: '#2A3E70'
                    }),
                    option: (base) => ({
                        ...base,
                        backgroundColor: '#2A3E70',
                        textAlign: 'center',
                    })
                }}
                options={options}
            />
        </nav>
    )
}