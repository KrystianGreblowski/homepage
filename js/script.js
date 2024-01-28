{
  const changeBackgroundColor = () => {
    const bodyElement = document.querySelector(".js-body");

    bodyElement.classList.toggle("body--special");
  };

  const changeThemeName = () => {
    const bodyElement = document.querySelector(".js-body");
    const themeNameElement = document.querySelector(".js-themeName");

    themeNameElement.innerText = bodyElement.classList.contains("body--special")
      ? "jasne"
      : "ciemne";
  };

  const toggleBackground = () => {
    changeBackgroundColor();
    changeThemeName();
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", toggleBackground);
  };

  init();
}
