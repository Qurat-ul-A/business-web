burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})