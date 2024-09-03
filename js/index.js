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

//---------- TIN NOI BAT -----------------------------------------------------------//
    let listImg = document.querySelector(".listImg")
    let imageGT = document.querySelectorAll(".gallery .image")
    let gallery = document.querySelector(".gallery")
    var current = 0;
    var w = gallery.offsetWidth;
    console.log(w);
    const changeImg = function() {
        if (current == imageGT.length-1) {
            listImg.style.transition = 'transform 0s';
            listImg.style.transform = `translateX(${0}px)`;
            current = 0; 
        }
        else {
            current++;
            listImg.style.transform = `translateX(${-w * current}px)`;
        }
    }
    let clear = setInterval(() => { changeImg()}, 2500);
    let prev = document.querySelector(".btnGT .prev")
    let next = document.querySelector(".btnGT .next")
    console.log(prev, next)
        prev.onclick = function() {
            clearInterval(clear);
            if (current == 0) {
                current = imageGT.length-1; 
                listImg.style.transition = 'transform 0s';
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            else {
                current--;
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            clear = setInterval(() => { changeImg()}, 2500); 
        }
        next.onclick = function() {
            clearInterval(clear);
            changeImg();
            clear = setInterval(() => { changeImg()}, 2500);
        }
}    