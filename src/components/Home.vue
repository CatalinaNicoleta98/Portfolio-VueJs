<template>
   <div id="home" class="header">

<!-- NAVIGATION, MAKE STICKY -->
 <nav class="flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center justify-start mx-auto w-[100%]  bg-slate-500 bg-opacity-50 z-10 fixed">
     
         <ul class=" hidden md:flex lg:flex flex-row text-md mt-7 mb-5">
             <li class="ml-7 mr-6"><a class="text-orange-300 hover:text-rose-300" href="#home">01//home</a></li>
             <li class="mr-6"><a class="text-orange-300 hover:text-rose-300" href="#about">02//about</a></li>
             <li class="mr-6"><a class="text-orange-300 hover:text-rose-300" href="#expertise">03//expertise</a></li>
             <li class="mr-11"><a class="text-orange-300 hover:text-rose-300" href="#portfolio">04//portfolio</a></li>
         </ul>



         <!-- burger menu -->
         <div class="lg:hidden md:hidden">
             <button class="navbar-burger flex items-center text-orange-300 hover:text-rose-300 p-3">
                 <i class="fa-solid fa-bars text-4xl"></i>
             </button>
         </div>

         <div class="navbar-menu relative z-50 hidden">
 
             <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-[80vw] h-[50vh] py-6 px-6 bg-slate-500 bg-opacity-50">
                 <div class="flex items-center mb-8">
                     <a class="mr-auto text-3xl font-bold leading-none" href="#">
                         <svg class="h-12" alt="logo" viewBox="0 0 10240 10240">
                             <!-- SVG Path for the logo -->
                         </svg>
                     </a>
                     <button class="navbar-close">
                         <i class=" text-2xl text-red-600 fa-solid fa-x"></i>
                         
                     </button>
                 </div>
                 <div>
                     <ul class="flex flex-col">
                         <li class="mb-1">
                             <a class=" text-xl  text-orange-300 hover:text-rose-300" href="#home">01//home</a>
                         </li>
                         <li class="mb-1">
                             <a class=" text-xl  text-orange-300 hover:text-rose-300" href="#about">02//about</a>
                         </li>
                         <li class="mb-1">
                             <a class=" text-xl  text-orange-300 hover:text-rose-300" href="#expertise">03//expertise</a>
                         </li>
                         <li class="mb-1">
                             <a class=" text-xl  text-orange-300 hover:text-rose-300" href="#portfolio">04//portfolio</a>
                         </li>
                         
                     </ul>
                 </div>
                 
             </nav>
         </div>
     
 </nav>
 

 <div class="center flex flex-col justify-center items-center  ">

     <!-- THIS IS NAME SVG -->

     <div class=" name flex justify-center items-center mt-72 lg:mt-56 md:mt-60">

         <!-- <h1 class=" text-gray-900 text-5xl lg:text-8xl md:text-7xl font-extrabold"><span class="mr-1 font-outline-2">Catalina</span> <span class="ml-1">Vrinceanu</span></h1>
         <h2 class=" text-xl lg:text-4xl md:text-2xl font-medium mt-4">Front-End Developer | Multimedia Designer</h2> -->




         <svg class="w-50" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.38 78.69"><defs></defs><text class="cls-2" transform="translate(44.97 20.9)"><tspan x="0" y="0">Catalina</tspan><tspan class="cls-3" x="95.01" y="0"> </tspan><tspan x="100.82" y="0">Vrinceanu</tspan></text><text class="cls-1" transform="translate(31.61 38.31)"><tspan x="0" y="0">Front-End Developer || Multimedia Designer</tspan></text></svg>
         
         
     </div>

     <!-- THIS IS THE ARROW MOUSE SVG -->

         <a class="flex justify-center items-baseline animate-bounce" href="#about">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-11 h-11 mt-32 lg:mt-20 md:mt-20" viewBox="0 0 24 24"><path class="down" d="M12 2c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6s-6-2.691-6-6v-8c0-3.309 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8c0-4.418-3.582-8-8-8zm0 9c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5 1.5.672 1.5 1.5-.671 1.5-1.5 1.5z"fill="#FFCDAB"/></svg>
         
         </a>
     

 </div>




</div>
</template>


<!-- scoped style only for this component -->
<style scoped>.cls-1{fill:#ffffff;font-family:SpaceGrotesk-Regular, 'Space Grotesk';font-size:12px;font-variation-settings:'wght' 400;stroke:#000000;stroke-width:.5px;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#fef0b6;font-family:SpaceGrotesk-Medium, 'Space Grotesk';font-size:24px;font-variation-settings:'wght' 500;font-weight:500;stroke:#be5b5d;}.cls-3{letter-spacing:-.01em;}

/* image background css */

.header{
    width: 100vw;
    height: 100vh;
    background-image: url('../img/lo-fi.png');
    background-size: cover;
    background-position: center;
    
  
  };


</style>


<!-- global style -->
<style>
body{
  font-family: 'Space Grotesk', sans-serif;
}

</style>

<script setup>
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



</script>