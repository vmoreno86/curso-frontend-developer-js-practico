const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu(){
    // if (desktopMenu.classList.contains("inactive")){
    //     desktopMenu.classList.remove("inactive");
    // }else{
    //     desktopMenu.classList.add("inactive");
    // }
   desktopMenu.classList.toggle('inactive');
}