const hamburder = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header");
const closeall=document.querySelector(".header .nav-list ul");
const header_bc_color=document.querySelector("#header .mainbc");
var vlaue_heading=document.getElementById("wish");
var goup = document.getElementsByClassName('uparrow')
var time =new Date();
var hrs=time.getHours();
console.log(hrs);
if(hrs<12)
{
    vlaue_heading.textContent="good morning";
    console.log("good morning");
}
else if(hrs>12 && hrs<16)
{
    vlaue_heading.textContent="good noon";
    console.log("noon");
}
else if(hrs>=16){
    vlaue_heading.textContent="good evening";
    console.log("good evening");
}
hamburder.addEventListener('click', () => {

    hamburder.classList.toggle('active');

    goup[0].style.transform = 'scale(0)';
    mobile_menu.classList.toggle('active');
})
var scroll_pos = window.scrollY;
if (scroll_pos > 175) {
    goup[0].style.transform = 'scale(1)';
    blur.classList.add('bluring');
    
}
else {
    header.style.backgroundColor = 'transparent';
    goup[0].style.transform = 'scale(0)';
    
}

document.addEventListener('scroll', () => {
    scroll_pos = window.scrollY;
    console.log(scroll_pos);
    if (scroll_pos > 175) {
        // header.style.backgroundColor = '#29323c';
        header.classList.add("bluring");
        // header.style.backgroundColor = '#3c4652';
        goup[0].style.transform = 'scale(1)';
        header_bc_color.style.backgroundColor='rgba(19,26,41, 0.75)';
        
    }
    else {
        header.style.backgroundColor = 'transparent';
        goup[0].style.transform = 'scale(0)';
        header.classList.remove("bluring");
        header_bc_color.style.backgroundColor='transparent';
        
    }
})
// goup.addEventListener('click',()=>{
    // })
    function gotoup() {
        console.log("clicked");
        
    }
    closeall.addEventListener('click',()=>{
        setTimeout(() => {
            console.log("band krr");
            console.log(window.innerWidth);
            var w=window.innerWidth;
            if(w<1190){

                hamburder.click();
            }
        }, 700);
    });
  