<template>
      <!-- HERE STARTS about SECTION -->

  <div id="about" class="about mt-72 pt-4 w-[100vw] h-auto ">

              <h1 class="lg:text-7xl md:text-7xl text-5xl mb-32 mx-auto flex justify-center items-center content-center">02//about</h1>


      <!-- ABOUT ME -->

      <div class="about my-2">
          <div class="flex flex-col p-10 lg:flex-row md:flex-row justify-center">

              <div class="photo mx-4 w-[50%] mb-5"><img src="/public/img/cartoon.jpg" alt="">
              </div>

              <div class="mx-4 mb-3 w-[100%] lg:w-[50%] md:w-[50%]">
                  <p class="text-xl mb-11">My name is Catalina and I am a 25 year old multimedia-design student, focusing on learning skills that will help me become a front-end developer.
                  I grew up in Romania, but I have been calling Denmark home for the past couple of years.
                  I am passionate about coding, design and learning new things. <br>I love reading and immersing myself in fantastical worlds as well as recreating nature on canvas as seen through my eyes. <br>I am a very curious person and I love to explore new places and cultures. One of my good traits is that, while i thrive working independently, I am also a good team player. As a professional, I appreaciate a calm and organized working space, but I discovered that I do some of my best work under pressure.
                  <br>I believe we could collaborate and create something amazing together! 
                  </p>

                      <div id="modals" class="flex lg:flex-row md:flex-row flex-row">
                                  <!-- BTN -->

                                  <a v-for="(modal, index) in modals" :key="index" @click="openModal(index)" href="#modals" class="mt-11 lg:mr-5 md:mr-5 mr-2 font-bold  hover:text-rose-300 text-orange-200 ">{{modal.title}}</a>
          
                                  <!-- Modal -->
                                  <div v-if="selectedModal !== null" class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75">
                                  <div class="bg-black p-8 rounded-lg">
                                      <!-- Close button -->
                                      <button @click="closeModal" class="text-2xl text-gray-500 hover:text-red-700">&times;</button>
                                      <!--iframe -->
                                      <iframe class="w-[60vw] h-[60vh]" :src="modals[selectedModal].source" frameborder="0" allowfullscreen></iframe>
                                  </div>
                                  </div>
                  

                              




                      </div>
                  
                  
                  
              </div>



          </div>
  </div>


  <!-- HOBBIES -->

  <h1 class="p-10 my-32 lg:text-7xl md:text-7xl text-5xl text-center">//hobbies</h1>

  <h2 class=" px-20 lg:px-10 md:px-10 lg:mx-4 md:mx-4 text-xl font-medium">While my professional focus is on development, in my free time I have simple yet relatable hobbies that help keeping me busy and entertained.</h2>


  <!--  carousel -->



      <div class="flex justify-center items-center h-96 md:h-[70vh] lg:h-screen">
          <div class="mt-3 w-[80vw] lg:h-[80vh] md:h-[50vh] h-[30vh] relative overflow-hidden">
            <div class="flex" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-full relative">
                <h1 class=" absolute font-blackabsolute inset-0 flex justify-center items-center text-white font-bold text-4xl lg:text-8xl md:text-6xl shadow-lg">{{ image.title }}</h1>
                <img :src="image.picture" alt="Carousel Slide" class="w-[80vw] lg:h-[80vh] md:h-[50vh] h-[30vh]">
                
              </div>
            </div>
            <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-35 hover:bg-opacity-80 p-2 rounded-full shadow-md">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-35 hover:bg-opacity-80 p-2 rounded-full shadow-md">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
      </div>

</div>

<!-- ABOUT ENDS HERE -->
</template>

<script setup>

import { ref } from 'vue'

// modals from about section


const modals = ref([
  { title: "//Video CV", source: "https://www.youtube.com/embed/3p2HhEIpnqI" },
  { title: "//Download CV", source: "../img/CV.pdf" },
  { title: "//Certificates", source: "../img/Certificates.pdf" },
]);

// open-close modal function
const selectedModal = ref(null);

const openModal = (index) => {
  selectedModal.value = index;
};

const closeModal = () => {
  selectedModal.value = null;
};
  




// carousel

const currentSlide = ref(0);
const images = ref([
  {picture: "../img/read.jpeg", title: "Reading"},
  {picture: "../img/pizza.jpg", title: "Cooking"},
  {picture: "../img/painting.jpg", title: "Painting"},
  {picture: "../img/outdoors.jpg", title: "Outdoors"},
  {picture: "../img/music.png", title: "Music"},
  {picture: "../img/coding.jpeg", title: "Coding"},
  
]);

let intervalId = null;

const prevSlide = () => {
  clearInterval(intervalId); // Stop automatic sliding
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  clearInterval(intervalId); // Stop automatic sliding
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

// Automatically switch to the next slide every 3 seconds
intervalId = setInterval(() => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
}, 3000);




</script>

<style lang="scss" scoped>

</style>