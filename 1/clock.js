(function(){


    const clockElem = document.querySelector("#view-clock>h1");
    // 현재 시간 알아내기
    function getTime(){
        const date = new Date();
        const hours = date.getHours(); //시
        const min = date.getMinutes();// 분
        const sec = date.getSeconds();// 초
        console.log(hours , min , sec);

       
        setViewClock(hours,min,sec);
    }

    function setViewClock(h,m,s){

        let strS = `${s<10 ? `0${s}` : s}`
        let strM = `${m<10 ? `0${m}` : m}`
        let strH = `${h<10 ? `0${h}` : h}`


        // let strS =  s;
        // if( s < 10){
        //     strS = "0"+s;
        // }
        clockElem.innerText = `${strH} : ${strM} : ${strS}`;
    }
    

    getTime();
    setInterval(getTime , 1000 );
})();