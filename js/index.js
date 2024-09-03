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
        let btn = document.querySelector("#menuBtn")
        let thanhMenu = document.querySelector(".thanhmenu")
        btn.onclick = function () {
            thanhMenu.classList.toggle("show");
            document.documentElement.scrollIntoView({ 
                behavior: 'smooth' 
            });
    
        }
        let closemenu = document.getElementById("closeMenu")
        closemenu.onclick = function () {
            thanhMenu.classList.remove("show");
        } 
}    