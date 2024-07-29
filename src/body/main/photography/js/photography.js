const images = [
    {
        class : "landscape",
        src : "src/body/main/photography/images/graduation-photos/May 1, 2024/crop/R1-03629-0003.jpg",
        alt : "Graduation photo at UNC, the gardens near The Well",
        transform: "translateX(-15%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 1, 2024/crop/R1-03629-0004.jpg",
        alt : "Graduation photo at UNC, The Well",
        transform: "translateY(-10%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 1, 2024/crop/R1-03629-0021.jpg",
        alt : "Graduation photo at UNC, Wilson Library",
        transform: "translateY(-10%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "landscape",
        src : "src/body/main/photography/images/graduation-photos/May 15, 2023/compress/R1-02090-018A.jpeg",
        alt : "Graduation photo at UNC, Kenan Stadium",
        transform: "translateX(-16%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "landscape",
        src : "src/body/main/photography/images/graduation-photos/May 15, 2023/compress/R1-02090-023A.jpg",
        alt : "Graduation photo at UNC, Kenan Stadium",
        transform: "translateX(-15%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 15, 2023/compress/R1-03630-0011.jpg",
        alt : "Graduation photo at UNC, Genome Science Building",
        transform: "translateY(-10%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 29, 2024/R1-04713-0011.jpg",
        alt : "Graduation photo at UNC, Society of Physics Room",
        transform: "translateY(-17%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 29, 2024/R1-04713-0015.jpg",
        alt : "Graduation photo at UNC, The Well",
        transform: "translateY(-8%)",
        city : "Chapel Hill, NC"
    },
    {
        class : "portrait",
        src : "src/body/main/photography/images/graduation-photos/May 29, 2024/R1-04713-0026.jpg",
        alt : "Graduation photo at UNC, Wilson Library",
        transform: "translateY(-8%)",
        city : "Chapel Hill, NC"
    }
];

const wrappers = document.getElementById("photo-gallery").getElementsByClassName("photo-wrapper");
const arr2 = Array.from(Array(wrappers.length).keys());

arr2.map((x) => {
    wrappers[x].innerHTML = renderImg(images[x]);
})

// // function to render div
function renderImg(img) {
    return (
        `<img class="${img.class}"
        src="${img.src}" 
        alt="${img.alt}"
        style="transform:${img.transform};"
        loading="lazy"/>`
    )    
}