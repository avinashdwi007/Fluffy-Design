var textBox = document.querySelector(".text-content")

let tl = gsap.timeline();
textBox.addEventListener("mouseenter",() =>{
    tl.from(".line h1", {
        y: 150,
        stagger: 0.5,
        color:"#022463"
    })
    tl.from(".right h2", {
        x: 120,
        stagger: 0.2,
        opacity: 0
    })
})

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let main = document.querySelector(".main")
let page2 = document.querySelector(".page2")
 let video = document.querySelector("video")
 let text = document.querySelectorAll('h1')
 let text2 = document.querySelectorAll('h2')

btn1.addEventListener("click",()=>{
    gsap.from("video", {
        x: -200,
        duration:2,
        opacity:0,
        // scale:0
    })
    video.src="assets/video.mp4"
    btn1.style.color="black"
    btn2.style.color="black"
    page2.style.backdropFilter = "none";
    page2.style.backgroundColor = "transparent";
    main.style.backgroundColor="#151515"
    text.forEach((elem) =>{
        elem.style.display= "none"
    })
    text2.forEach((elem) =>{
        elem.style.display="none"
})
    
})
btn2.addEventListener("click", () => {
    gsap.to(video, {
        x: 100,
        duration: 1,
        opacity: 1,
        scale: 0
    });

    // Set video source to an empty string to stop the video
    video.src = "";
    text.forEach((elem) => {
        elem.style.display = "block"
    })
    text2.forEach((elem) => {
        elem.style.display = "block"
    })
    main.style.backgroundColor = "#8b9bb9"

    btn1.style.color = "";
    btn2.style.color = "";

    // Reset blur effect on page2 to its initial state
    page2.style.backdropFilter = "blur(5px)";
});