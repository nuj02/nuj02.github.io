export default function Frame({className, src, alt, city, location, season}) {
    return (
        <figure>
            <img className={`${className === 'landscape' ? 'max-w-3xl' : 'max-w-3xl'}`}
            src={src}
            alt={alt}/>
            <figcaption class='flex justify-between'>
                <span className="city">{city}</span>
                <span className="name">{location}</span>
                <span className="season">{season}</span>
            </figcaption>
        </figure>
    );
}