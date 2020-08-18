(function(){
    const mmenu= document.querySelector(".menu");
    const gnbElem = document.querySelector('.gnb');
    const barcon= document.querySelector(".container");
    const barElem = document.querySelector('.btn_menu');

    // 네비 버튼 클릭하면
    gnbElem.addEventListener("click",function(e){
        // console.log(e.target);
        let target = e.target;
        let index = target.getAttribute("value");
        // console.log(index);
        index = parseInt(index);
        if (index>=0 || index<=2 ){
            mmenu.classList.add("on");
            barElem.style.display="block";
            barcon.classList.add("off");
            // console.log(barcon.children);
            for(let item of barcon.children){
                item.classList.remove("item");
            }
            barcon.children[index].classList.add("item");
        }
    });

    // 메뉴 버튼 클릭하면
    barElem.addEventListener("click",function(){
        // console.log(e.target);
        // let target = e.target;
        // let index = target.getAttribute("value");
        // console.log(index);
        // index = parseInt(index);
            mmenu.classList.remove("on");
            barElem.style.display="none";
            barcon.classList.remove("off");
        
    });
})();
