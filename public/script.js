//Форма отправки
let ch_yes = document.querySelector('.check_yes');
let ch_no = document.querySelector('.check_no');
let check = document.getElementById('checkbox');
let btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', function() {
    if(check.checked === false){
        btn.style.background = '#c7cace';
    }
    else
    btn.style.background = '#397DFF';
    
});
btn.addEventListener('mouseleave', function() {
    if(check.checked === false){
        btn.style.background = '#ECEFF2'; 
        
    }
    else
    btn.style.background = '';
    
});


check.onclick = function() {
    if (check.checked === false) {
        ch_no.style.color = "#F13636";
        ch_yes.style.color = "#191C1F";
        btn.disabled = true;
        btn.style.background = "#ECEFF2";  
        
    }
    else {
        ch_yes.style.color = "#25CD82";
        ch_no.style.color = "#191C1F";
        btn.disabled = false;
        btn.style.background = "#2A6CEA"; 
        
    }
    
};
// Мобильное меню
let menuOpen = document.querySelector('.head_menu_open');
let menuClose = document.querySelector('.head_menu_close');
let menuList = document.querySelector('.menu_list');

function menuOn (){
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    $(".menu_list").show('slow');
    
}

function menuOff(){
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    $(".menu_list").slideUp('slow');
}

function mobileMenu () {
let width = window.innerWidth;
   if (width < 769) {
    menuOpen.addEventListener('click', menuOn);
    menuClose.addEventListener('click', menuOff);
   }else {
    menuOpen.style.display = "";
    menuClose.style.display = "";
    menuList.style.display = "";
   }
}

mobileMenu();
window.addEventListener('resize', mobileMenu);


// Плавность details
$('details summary').each(function() {
	var animationTime = 500; 
   var $Wrapper = $(this).nextAll().wrapAll('<div></div>').parent();
   if(!$(this).parent('details').attr('open'))
      $Wrapper.hide();
   $(this).click(function(Event) {
      Event.preventDefault();
      if($(this).parent('details').attr('open')) {
         $Wrapper.slideUp(animationTime, function() {    
            $(this).parent('details').removeAttr('open');
         });
      } else {
         $(this).parent('details').attr('open', true);
         $Wrapper.slideDown(animationTime);
      }
   });
});




