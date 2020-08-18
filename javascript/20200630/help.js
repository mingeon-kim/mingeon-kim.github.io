// 객체가져오기
let imgTag = document.querySelectorAll("img");
// console.log(imgTag)



                // 반복문(for)
// for(let i=0; i<imgTag.length; i++){
//     imgTag[i].addEventListener("click", function(){
//         imgTag[i].style.border = "3px solid red";
//     });
// }


                //   하나씩

// imgTag[0].addEventListener("click", function(){
//     imgTag[0].style.border = "3px solid red";
// });

// imgTag[1].addEventListener("click", function(e){
//     // console.log(e.currentTarget);
//     // console.log(e.target);
//     // console.log(this);
//     let target = e.target;
//     // target.style.border = "3px solid red";
//     target.classlist.toggle("newborder");
// });

let container = document.querySelector("#wrapper");
console.log(container);

let pretarget = null;
container.addEventListener("click", function(e){
    // console.log(e.currentTarget);
    // console.log(e);
    // console.log(this);
    let target = e.target;
    if(pretarget !=null){
        pretarget.classlist.remove("newborder");
    }
    pretarget. = target;
    // target.style.border = "3px solid red";
    target.classlist.toggle("newborder");
});