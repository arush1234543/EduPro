const day = document.querySelector(".day");
const night = document.querySelector(".night");
const Mode = document.querySelector(".colormode");
const header = document.querySelector(".head");
const bgSection = document.querySelector(".bg1");

Mode.addEventListener("click", () => {
    day.classList.toggle("none");
    night.classList.toggle("none");
    document.body.classList.toggle("dark-theme");

    if (bgSection) {
        if (document.body.classList.contains("dark-theme")) {
            bgSection.style.backgroundImage = "url('images/Dark Mode.png')";
        } else {
            bgSection.style.backgroundImage = "url('images/Background.png')";
        }
    }
});
