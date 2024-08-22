export default function Frame({className, src, alt, city, location, season}) {
    return (
        <figure>
            <img className={className}
            src={src}
            alt={alt}/>
            <figcaption>
                <span className="city">{city}</span>
                <span className="name">{location}</span>
                <span className="season">{season}</span>
            </figcaption>
        </figure>
    );
}