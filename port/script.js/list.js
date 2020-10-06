const actBtn = document.querySelector('.actBtn')
const toggle = document.querySelector('.toggle')

actBtn.addEventListener('click',()=>{
    toggle.classList.toggle('active');
});