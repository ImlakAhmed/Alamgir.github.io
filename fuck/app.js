var ham = document.querySelector(".ham");
var navlink = document.querySelector(".navlinks");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");

ham.addEventListener("click", () => {
    navlink.classList.toggle("show");
    one.classList.toggle("oneo");
    two.classList.toggle("twoo");
    three.classList.toggle("threeo");
    
  })


  var item = document.querySelectorAll(".five-item");

  item.forEach(item => {
     item.addEventListener("click" , () => {
       item.classList.toggle("active")
     })
    
  });

  
 window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop')
  scroll.classList.toggle("active", window.scrollY > 500)
})


function scrollToTop(){
  window.scrollTo({
      top:0,
      behavior:'smooth'
  })
}