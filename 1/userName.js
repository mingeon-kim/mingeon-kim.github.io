(function(){

    const KEY_USERNAME="username";
    const userContainer = document.querySelector("#view-user");


    function handlerSubmit(e){
        e.preventDefault();
        const inputElem = this.querySelector("input");
        const value = inputElem.value;
        localStorage.setItem(KEY_USERNAME,)
    }




    function printInput(){

        const addForm = document.createElement("form");
        addForm.addEventListener("submit",handlerSubmit);

        const addInput = document.createElement("input");
        addInput.type = "text";
        addInput.placeholder = "your name here";

        userContainer.appendChild(addInput);
        userContainer.appendChild(addForm);

    }



    function printSpan(text){
        const textElem = document.createElement("span");
        textElem.innerText = `hello ${text}`;
        userContainer.appendChild(textElem);
    }

    function loadUserName(){
        const currentName = localStorage.getItem(KEY_USERNAME);
        if(currentName === null){
            //저장된 사용자가 없을떄  
            //input이 보여야함
            printInput();

        }else{

            //저장된 사용자가 있을떄
            //span으로 사용자 이름을 보여줌
            printSpan(currentName);
        }

    }

    loadUserName();
})();