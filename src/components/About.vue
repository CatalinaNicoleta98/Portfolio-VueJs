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

                <div id="modals" class="flex lg:flex-row md:flex-row flex-wrap">
                            <!-- BTN -->

                            <a v-for="(modal, index) in modals" :key="index" @click="openModal(index)" href="#modals" class="mt-11 mr-3 hover:opacity-100 hover:text-rose-300 bg-slate-500 rounded-lg text-orange-200 opacity-70 border border-black p-2">{{modal.title}}</a>
    
                            <!-- Modal -->
                            <div v-if="selectedModal !== null" class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75">
                            <div class="bg-black p-8 rounded-lg">
                                <!-- Close button -->
                                <button @click="closeModal" class="text-2xl text-gray-500 hover:text-red-700">&times;</button>
                                <!-- Player iframe -->
                                <iframe class="w-[80vw] h-[80vh]" :src="modals[selectedModal].source" frameborder="0" allowfullscreen></iframe>
                             </div>
                            </div>
            

                        




                </div>
            
            
            
        </div>



    </div>
</div>


<!-- HOBBIES -->

<h1 class="p-10 my-32 lg:text-7xl md:text-7xl text-5xl text-center">//hobbies</h1>

<h2 class=" px-20 lg:px-10 md:px-10 lg:mx-4 md:mx-4 text-xl font-medium">While my professional focus is on developing, in my free time I have simple yet relatable hobbies that help keeping me busy and entertained.</h2>

<div id="hobbies" class="hobbies m-4 p-10 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap ">
    <!-- hobbies cards -->
    <div v-for="card in cards" :key="card.title" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-center items-center flex-col">
        <img class=" lg:opacity-50 lg:hover:opacity-100 w-80 h-72 " :src="card.image"  alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{card.title}}</h5>
        </div>
    </div>

    
</div>
</div>

<!-- ABOUT ENDS HERE -->
</template>

<script setup>

import { ref } from 'vue'

// modals from about section


const modals = ref([
  { title: "Video CV", source: "https://www.youtube.com/embed/3p2HhEIpnqI" },
  { title: "Download CV", source: "../img/CV.pdf" },
  { title: "Certificates", source: "../img/Certificates.pdf" },
]);

// open-close modal function
const selectedModal = ref(null);

const openModal = (index) => {
  selectedModal.value = index;
};

const closeModal = () => {
  selectedModal.value = null;
};
  

// hobbies cards
const cards = ref([
  { title: "Reading", image: "/public/img/read.jpeg" },
  { title: "Cooking", image: "/public/img/pizza.jpg" },
  { title: "Painting", image: "/public/img/painting.jpg" },
  { title: "Outdoors", image: "/public/img/outdoors.jpg" },
  { title: "Music", image: "/public/img/music.png" },
  { title: "Coding", image: "/public/img/coding.jpeg" },
]);




</script>

<style lang="scss" scoped>

</style>