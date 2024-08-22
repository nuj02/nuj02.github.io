import Frame from '../Frame'

const green = [
    {
        "className" : "landscape",
        "src" : "./sarah-p-gardens.jpg",
        "alt" : "Sarah P. Gardens at Duke University during the spring",
        "city" : "Durham, NC",
        "location" : "Sarah P. Gardens",
        "season": "Spring"
    },
    {
        "className" : "landscape",
        "src" : "./kenan-quad.jpg",
        "alt" : "Kenan Quad at UNC Chapel Hill on a foggy day",
        "city" : "Chapel Hill, NC",
        "location" : "Kenan Quad",
        "season" : "Winter"
    },
    {
        "className" : "landscape",
        "src" : "./hokokuji.jpg",
        "alt" : "Hokokuji Bamboo Forest in Kamakura, Japan",
        "city" : "Kanagawa, Japan",
        "location" : "Hokokuji Bamboo Forest",
        "season" : "Winter"
    }
]

const images = require.context('./images/compressed', true)

export default function Green() {
    return ( 
        <> 
            {
                green.map(figure => <Frame 
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