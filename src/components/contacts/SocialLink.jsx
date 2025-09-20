export default function SocLink({classItem, link, title, src, alt}){
    return(
        <a className={classItem} href={link} title={title} target="_blank">
            <img src={src} alt={alt}/>
        </a>
    )
}