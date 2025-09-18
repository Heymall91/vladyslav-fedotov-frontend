export default function SocLink({link, title, src, alt}){
    return(
        <div className="social__link">
            <a href={link} title={title} target="_blank">
                <img src={src} alt={alt}/>
            </a>
        </div>
    )
}