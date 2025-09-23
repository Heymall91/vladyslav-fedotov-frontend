export default function UsedTechnologies({techLogo, techName}){
    return(
        <div className="technology__item">
            <div className="technology__item__img">
                <img src={techLogo} alt="technology item" />
            </div>
            <p>{techName}</p>
        </div>
    )
}