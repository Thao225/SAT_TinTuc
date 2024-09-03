window.onload = function () {
    //---------- GO TO TOP --------------------------------------------------------------------//
    let goTop =document.getElementById("gotoTop")
    goTop.onclick = function() {
        //cuộn trang đến một phần tử cụ thể mượt hơn
        document.documentElement.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

//---------- RESPONSIVE THANHMENU -----------------------------------------------------------//
    
    const sidebarMenu = document.getElementById('sidebarMenu');
    let btn = document.querySelector("#menuBtn")
    btn.addEventListener('click', function() {
        sidebarMenu.classList.toggle('show');
    });
    let closemenu = document.getElementById("closeMenu")
    closemenu.onclick = function () {
        sidebarMenu.classList.remove("show");
    } 
}    