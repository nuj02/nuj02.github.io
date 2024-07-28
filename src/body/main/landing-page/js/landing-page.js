// // animate what slide is shown on landing page
const figures = [
    {
        id : "Sarah P. Gardens",
        src : "src/body/main/landing-page/images/compressed/IMG_2835.jpg",
        alt : "Sarah P. Gardens at Duke University during the sprin",
        city : "Durham, NC",
        name : "Sarah P. Gardens"
    },
    {
        id : "Kenan-Quad",
        src : "src/body/main/landing-page/images/compressed/R1-03630-0025.jpg",
        alt : "Kenan Quad at UNC Chapel Hill on a foggy day",
        city : "Chapel Hill, NC",
        name : "Kenan Quad"
    },
    {
        id : "Hokokuji Bamboo Forest",
        src : "src/body/main/landing-page/images/compressed/000018.jpg",
        alt : "Hokokuji Bamboo Forest in Kamakura, Japan",
        city : "Kanagawa, Japan",
        name : "Hokokuji Bamboo Forest"
    },
];

// define DOM variables
const slides = document.getElementsByClassName("landing-page-slide");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// define math variables
const arr = Array.from(Array(slides.length).keys());
const modulo = slides.length;

let modArr = arr;

// next animation
nextButton.addEventListener("click",() => {
    // animate center slide
    slides[1].classList.add("anim-next-slide");
    slides[1].onanimationend = () => {
        slides[1].classList.remove("anim-next-slide");
    }
    
    //animate right slide
    slides[2].classList.add("anim-next-slide");
    slides[2].onanimationend = () => {
        slides[2].classList.remove("anim-next-slide");
        modArr = modArr.map((x) => (x+1)%modulo);
        arr.map((i) => slides[i].innerHTML = renderFigure(figures[modArr[i]]));
    }
});

// show previous figure
prevButton.addEventListener("click",() => {
    // animate center slide
    slides[1].classList.add("anim-prev-slide");
    slides[1].onanimationend = () => {
        slides[1].classList.remove("anim-prev-slide");
    }

    // animate right slide
    slides[0].classList.add("anim-prev-slide");
    slides[0].onanimationend = () => {
        slides[0].classList.remove("anim-prev-slide");
        modArr = modArr.map((x) => (x+2)%modulo);
        console.log(modArr);
        arr.map((i) => slides[i].innerHTML = renderFigure(figures[modArr[i]]));
    }
});

// function to render figure
function renderFigure(figure) {
    return (
        `<img class="landing-page-img" id="${figure.id}"
        src="${figure.src}" alt="${figure.alt}"/>
        <figcaption>
            <span class="city">${figure.city}</span>
            <span class="name">${figure.name}</span>
        </figcaption>`
    )    
}