<template>
    <div>
      <!-- PORTFOLIO PROJECTS STARTS -->
      <div id="portfolio" class="portfolio my-72 py-4 w-[100vw] h-auto">
        <h1 class="lg:text-7xl md:text-7xl text-5xl mb-32 mx-auto flex justify-center items-center content-center">04//portfolio</h1>
  
        <ul class="flex lg:flex-row md:flex-row flex-wrap text-md mt-7 mx-4 lg:p-10 md:p-10   mb-5">
                        <li class="lg:ml-7 mr-6 text-orange-300">Filter by</li>
                        <li class="mr-6"><a data-category="all"  class="text-orange-300 hover:text-rose-300" href="#">//All</a></li>
                        <li class="mr-6"><a data-category="development"  class="text-orange-300 hover:text-rose-300" href="#">01//Development</a></li>
                        <li class="mr-6"><a data-category="ux" class="text-orange-300 hover:text-rose-300" href="#">02//UI/UX</a></li>
                        <li class="mr-7"><a data-category="creation" class="text-orange-300 hover:text-rose-300" href="#">03//Content Creation</a></li>
                        
        </ul>
  
        <div id="mywork" class="portfolio m-4 p-10 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
          <div v-for="card in cards" :key="card.title" :id="card.id" class="max-w-sm sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow flex justify-start items-start flex-col">
            <a href="#portfolio" @click="openModal(card)">
              <img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 " :src="card.image" alt="">
            </a>
            <div class="p-5">
              <h5 class=" text-2xl font-bold tracking-tight text-white">{{ card.title }}</h5>
              <p class="mb-2 text-sm font-light tracking-tight text-white">{{ card.category }}</p>
              <button @click="openModal(card)" class="hover:text-rose-300 text-orange-200">{{ card.button }}</button>
              <div v-if="card.modalVisible" class="fixed inset-0 z-50 overflow-y-auto">
                <div class="flex items-center justify-center h-auto">
                  <div class="bg-black p-8 rounded-lg shadow-lg w-[80vw] h-auto">
                    <button @click="closeModal(card)" class="text-2xl text-gray-500 hover:text-red-700">&times;</button>
                    <div class="flex flex-col justify-center p-5">
                      <p class="mb-2 text-lg font-semibold text-left">{{ card.modal.category }}</p>
                      <p class="text-xl text-left font-medium mb-10 text-rose-300">{{ card.modal.tools }}</p>
                      <h1>{{ card.modal.description }}</h1>
                      <iframe class="w-[100%] lg:h-[80vh] md:h-[50hv] h-[30vh]" :src="card.modal.source" loop></iframe>
                      <button><a :href="card.modal.link" class="hover:text-rose-300 text-orange-200 my-5">Visit Page</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>

import { ref } from 'vue';

const cards = ref([
    {    id: 'development',
        image: '../img/trapholt.jpg',
        title: 'Trapholt',
        category: 'Development',
        button: 'Show Project',
        modal:{
            category: '| Development',
            tools: 'HTML-CSS-BOOTSTRAP-JavaScript',
            description: 'For my first semester exam, I got to work on my biggest project until now. It was a team project, which means that each one of us had it\'s own area of expertise. I, fortunately, got to do a little bit of everything by helping with the design of the logo, printables and report and  working together with my colleague on the UX research. But the main area I worked in was definitely the coding of the website. Below, you can see a snippet of the final product, but I also invite you to visit the page and experience it.',
            source: '../img/trapholtweb.mp4',
            link: 'https://danielpincu.com/index.html'
        },
    },

    {   id: 'ux',
        image: '../img/remotely.png',
        title: 'Remotely',
        category: 'UI/UX',
        button: 'Show Project',
        modal:{
            category: '| UI/UX',
            tools: 'Adobe XD',
            description: 'In the first semester, our UX mandatory assignment eas creating a mobile app for students looking for remote jobs.There was no coding involved, the project was mostly about UX research and te final product itself was a app mockup.',
            source: '../img/remotelyweb.mp4'
        },
    },


    {   
        id: 'ux',
        image: '../img/stock.png',
        title: '$tockHub',
        category: 'UI/UX',
        button: 'Show Project',
        modal:{
            category: '| UI/UX',
            tools: 'Adobe XD',
            description: 'In the first semester, our UX mandatory assignment eas creating a mobile app for students looking for remote jobs.There was no coding involved, the project was mostly about UX research and te final product itself was a app mockup.',
            source: '../img/remotelyweb.mp4'
        },
    },

    {      
        id: 'creation',
        image: '../img/ad.jpeg',
        title: 'Starbucks',
        category: 'Content Creation',
        button: 'Show Project',
        modal:{
            category: '| Content Creation',
            tools: 'Adobe PremierePro - Adobe AfterEfects',
            description: 'This semester, the first video production assignment we got was imagining, scripting, filming and editing an add for whatever product real or fictional we want.',
            source: 'https://www.youtube.com/embed/vPnsn_jS6e8?si=Dghjiwr8DXqXF7CO'
        },
    },

    {
        id: 'creation',
        image: '../img/chatognito.png',
        title: 'Chatognito',
        category: 'Content Creation',
        button: 'Show Project',
        modal:{
            category: '| Content Creation',
            tools: 'Adobe Illustrator',
            description: 'My first ever design project was creating an illustration of myself, in whatever style I see fit. While it is not my best work, I still want to showcase it as it is my first ever work and I am quite proud to look back on it and see the way I evolved.',
            source: '../img/mini.png'
        },
    },

    {
        id: 'creation',
        image: '../img/me.jpg',
        title: 'Video CV',
        category: 'Content Creation',
        button: 'Show Project',
        modal:{
            category: '| Content Creation',
            tools: 'Adobe AfterEffects - Adobe PremierePro',
            description: 'This semester, the first video production assignment we got was imagining, scripting, filming and editing an add for whatever product real or fictional we want.',
            source: '../img/trapholtweb.mp4'
        },
    },

    {
        id: 'creation',
        image: '../img/welcometo.png',
        title: 'Welcome To',
        category: 'Content Creation',
        button: 'Show Project',
        modal:{
            category: '| Content Creation',
            tools: 'Adobe Illustrator',
            description: 'My first ever design project was creating an illustration of myself, in whatever style I see fit. While it is not my best work, I still want to showcase it as it is my first ever work and I am quite proud to look back on it and see the way I evolved.',
            source: '../img/mini.png'
        },
    },


   
    
]);















//portfolio filter

document.addEventListener("DOMContentLoaded", function () {
    // Get all filter links and portfolio items
    const filterLinks = document.querySelectorAll('.portfolio ul li a');
    const portfolioItems = document.querySelectorAll('.portfolio .flex .flex-col');

    // Add click event listeners to filter links
    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const filterCategory = link.getAttribute('data-category');

            // Hide all items
            portfolioItems.forEach(function (item) {
                item.style.display = 'none';
            });

            // Show all items if "All" is selected
            if (filterCategory === 'all') {
                portfolioItems.forEach(function (item) {
                    item.style.display = 'flex';
                });
            } else {
                // Show items with the selected category
                const filteredItems = document.querySelectorAll(`#${filterCategory}`);
                filteredItems.forEach(function (item) {
                    item.style.display = 'flex';
                });
            }
        });
    });
});



// modal function
const openModal = (card) => {
  card.modalVisible = true;
};

const closeModal = (card) => {
  card.modalVisible = false;
};
</script>

<style lang="scss" scoped>

</style>