const gradImages = [
    {
        class : "landscape",
        src : "src/body/main/photography/images/graduation-photos/May 1, 2024/crop/R1-03629-0003.jpg",
        alt : "Graduation photo at UNC, the gardens near The Old Well",
        transform: "translateX(-15%)",
        city : "Chapel Hill, NC",
        location: "Gardens near The Old Well",
        season: "Summer"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 1, 2024/crop/R1-03629-0004.jpg",
        alt : "Graduation photo at UNC, The Well",
        transform: "translateY(-10%)",
        city : "Chapel Hill, NC",
        location: "The Old Well",
        season: "Summer"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 1, 2024/crop/R1-03629-0021.jpg",
        alt : "Graduation photo at UNC, Wilson Library",
        transform: "translateY(-10%)",
        city : "Chapel Hill, NC",
        location: "Wilson Library",
        season: "Summer"
    },
    {
        class : "landscape",
        src : "src/body/main/photography/images/graduation-photos/May 15, 2023/compress/R1-02090-018A.jpeg",
        alt : "Graduation photo at UNC, Kenan Stadium",
        transform: "translateX(-16%)",
        city : "Chapel Hill, NC",
        location: "Kenan Stadium",
        season: "Summer"
    },
    {
        class : "landscape",
        src : "src/body/main/photography/images/graduation-photos/May 15, 2023/compress/R1-02090-023A.jpg",
        alt : "Graduation photo at UNC, Kenan Stadium",
        transform: "translateX(-15%)",
        city : "Chapel Hill, NC",
        location: "Kenan Stadium",
        season: "Summer"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 15, 2023/compress/R1-03630-0011.jpg",
        alt : "Graduation photo at UNC, Genome Science Building",
        transform: "translateY(-10%)",
        city : "Chapel Hill, NC",
        location: "Genome Science Building",
        season: "Summer"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 29, 2024/R1-04713-0011.jpg",
        alt : "Graduation photo at UNC, Society of Physics Room",
        transform: "translateY(-17%)",
        city : "Chapel Hill, NC",
        location : "Society of Physics Room",
        season : "Summer"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 29, 2024/R1-04713-0015.jpg",
        alt : "Graduation photo at UNC, The Old Well",
        transform: "translateY(-8%)",
        city : "Chapel Hill, NC",
        location: "The Old Well",
        season : "Summer"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 29, 2024/R1-04713-0026.jpg",
        alt : "Graduation photo at UNC, Wilson Library",
        transform: "translateY(-8%)",
        city : "Chapel Hill, NC",
        location : "Wilson Library",
        season : "Summer"
    }
];

const wrappers = document.getElementById("graduation").getElementsByClassName("photo-wrapper");
const arr2 = Array.from(Array(wrappers.length).keys());
const arr2Shuffled = fisherYatesShuffle(arr2);
const modal = document.getElementById("modal")

arr2Shuffled.map((x) => {
    wrappers[x].innerHTML = renderImg(gradImages[arr2Shuffled[x]]);
})

for (let i = 0; i < wrappers.length; i++) {
    wrappers[i].addEventListener("click", () => {
        modal.innerHTML = renderModal(gradImages[arr2Shuffled[i]]);
        modal.style.display = "flex";
    });
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// fisherYates to shuffle array
function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

// function to render div
function renderImg(img) {
    return (
        `<img class="${img.class}"
        src="${img.src}" 
        alt="${img.alt}"
        style="transform:${img.transform};"
        loading="lazy"/>`
    )    
}

//function to render modal
function renderModal(img) {
    return (
        `<figure class="${img.class}">
            <img
            src="${img.src}" 
            alt="${img.alt}"
            loading="lazy"/>

            <figcaption>
                <ul class=${img.class}>
                    <li>${img.city}</li>
                    <li>${img.location}</li>
                    <li>${img.season}</li>
                </ul>
            </figcaption>
        </figure>`
    )  
}