{
    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const themeNameElement = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("body--special");
        themeNameElement.innerText = bodyElement.classList.contains("body--special") ? "jasne" : "ciemne";
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", toggleBackground);
    }

    init();
}