import Frame from "../Frame";

const gallery = [
    {
        "className" : "portrait",
        "src" : "./bell-tower.jpg",
        "alt" : "Bell Tower at Night",
        "city" : "Chapel Hill, NC",
        "location": "Bell Tower",
        "season": "Winter"
    },
    {
        "className" : "portrait",
        "src" : "./carmichael-stadium.jpg",
        "alt" : "Carmichael Stadium at Night",
        "city" : "Chapel Hill, NC",
        "location": "Carmichael Stadium",
        "season": "Winter"
    },
    {
        "className" : "portrait",
        "src" : "./smith-center.jpg",
        "alt" : "Game Night at Smith Center",
        "city" : "Chapel Hill, NC",
        "location" : "Dean E. Smith Center",
        "season" : "Winter"
    }
]

const images = require.context('./images/compressed', true)

export default function ChapelHill() {
    return ( 
        <> 
            {
                gallery.map(figure => <Frame 
                    className={figure.className} 
                    src={images(`${figure.src}`)} 
                    alt={figure.alt} 
                    city={figure.city} 
                    location={figure.location} 
                    season={figure.season}
                    />)
            }
        </>
    );
}