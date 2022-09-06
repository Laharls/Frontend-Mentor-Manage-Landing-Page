// function openMobileNavigation(){

    const menuBtn = document.querySelector("#hamburger_logo");
    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
        if(!menuOpen){
            document.getElementsByClassName("mobile-navigation")[0].style.display = "flex";
            document.getElementById("hamburger_logo").src="./images/icon-close.svg"
            menuOpen = true;
        }
        else{
            document.getElementsByClassName("mobile-navigation")[0].style.display = "none";
            document.getElementById("hamburger_logo").src="./images/icon-hamburger.svg"
            menuOpen = false;
        }
    })
// }