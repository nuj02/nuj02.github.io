import './about.scss'

const images = require.context('./images/compressed', true)

export default function About() {
    return (
        <>
            <img id={"prof-pic"}
            src={images("./prof-pic.jpg")}
            alt={"Portrait taken in front of a tree"}/>

            <p>My name is Jun Ikeda, I like to take photos with my film camera in my free time.</p>
        </>
    )
}