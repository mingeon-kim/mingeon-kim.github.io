(function () {
  const containerElem = document.querySelector(".container");
  const stageElem = document.querySelector(".stage");
  let maxScrollValue = 0;
  const mousePos = { x: 0, y: 0 };

  //windows resize event
  function resizeHandler() {
    //전체 scroll 할 수 있는 범위
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }
  window.addEventListener("resize", resizeHandler);

  window.addEventListener("scroll", function () {
    //현재 스크롤된 정보 : pageYOffset
    // console.log(pageYOffset);
    //maxScrollValue = document.body.offsetHeight - window.innerHeight;

    //스크롤 된 비율 0~1
    const scrollPer = pageYOffset / maxScrollValue;
    //console.log(scrollPer);

    //값에 의하여
    const zMove = scrollPer * 990 - 500;
    stageElem.style.transform = "translateZ(" + zMove + "vw)";
    //resize에 대한 설명이 필요함
  });

  window.addEventListener("mousemove", function (e) {
    //mouse position : e.clinetX, e.clientY
    //console.log( e.clientX , e.clientY )
    //현재 위치값, 마우스가 가운데 있을 때 회전이 안되게, x,y 값이 top, left 가 기준이 되어 있음.
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    //console.log(mousePos.x, mousePos.y);
    containerElem.style.transform =
      "rotateX(" + mousePos.y * 5 + "deg) rotateY(" + mousePos.x * 5 + "deg)";
  });

  resizeHandler();
})();
