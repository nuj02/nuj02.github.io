import Frame from '../Frame'

const gallery = [
    {
        "className" : "landscape",
        "src" : "./2023/kenan-stadium-field.jpg",
        "alt" : "Graduation photo at UNC, Kenan Stadium",
        "city" : "Chapel Hill, NC",
        "location": "Kenan Stadium",
        "season": "Summer"
    },
    {
        "className" : "portrait",
        "src" : "./2024/wilson-library-1.jpg",
        "alt" : "Graduation photo at UNC, Wilson Library",
        "city" : "Chapel Hill, NC",
        "location": "Wilson Library",
        "season": "Summer"
    },
    {
        "className" : "landscape",
        "src" : "./2023/kenan-stadium-stands.jpg",
        "alt" : "Graduation photo at UNC, Kenan Stadium",
        "city" : "Chapel Hill, NC",
        "location": "Kenan Stadium",
        "season": "Summer"
    },
    {
        "className" : "portrait",
        "src" : "./2024/wilson-library-2.jpg",
        "alt" : "Graduation photo at UNC, Wilson Library",
        "city" : "Chapel Hill, NC",
        "location" : "Wilson Library",
        "season" : "Summer"
    },
    {
        "className" : "portrait",
        "src" : "./2023/genome.jpg",
        "alt" : "Graduation photo at UNC, Genome Science Building",
        "city" : "Chapel Hill, NC",
        "location": "Genome Science Building",
        "season": "Summer"
    },
    {
        "className" : "portrait",
        "src" : "./2024/the-old-well.jpg",
        "alt" : "Graduation photo at UNC, The Well",
        "city" : "Chapel Hill, NC",
        "location": "The Old Well",
        "season": "Summer"
    },
    {
        "className" : "portrait",
        "src" : "./2024/sop.jpg",
        "alt" : "Graduation photo at UNC, Society of Physics Room",
        "city" : "Chapel Hill, NC",
        "location" : "Society of Physics Room",
        "season" : "Summer"
    },
]

const images = require.context('./images/compressed', true)

export default function GradPhotos() {
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