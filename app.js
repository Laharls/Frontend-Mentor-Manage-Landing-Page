    const menuBtn = document.querySelector("#hamburger_logo");
    const inboxBtn = document.querySelector("#inbox_button");
    let inboxInput = document.querySelector("#inbox_input");
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

    inboxBtn.addEventListener("click", () => {
        if(inboxInput.value.length === 0){
            alert("Input empty");
            return 
        }

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inboxInput.value))){
            alert("Email not valid");
            return
        }

        alert("Valid email, can proceed further");
    })