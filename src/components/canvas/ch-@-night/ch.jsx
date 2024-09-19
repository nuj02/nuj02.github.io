import Frame from "../Frame";
import museum from "./museum.json";

const images = require.context('./images/compressed', true)

export default function ChapelHill() {
    return ( 
        <> 
            {
                museum.gallery.map(figure => <Frame 
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