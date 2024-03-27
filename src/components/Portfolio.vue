<template>
    <div>
     
      <div id="portfolio" class="portfolio my-72 py-4 w-[100vw] h-auto">
         <!-- PORTFOLIO PROJECTS STARTS -->
        <h1 class="lg:text-7xl md:text-7xl text-5xl mb-32 mx-auto flex justify-center font-black text-orange-400 items-center content-center">04//portfolio</h1>
  
        <ul class="flex lg:flex-row md:flex-row flex-wrap text-md mt-7 mx-4 lg:p-10 md:p-10 mb-5">
              <li class="lg:ml-7 mr-6 text-orange-300">Filter by</li>
              <li class="mr-6"><a @click.prevent="filterItems('all')" data-category="all" class="text-orange-300          hover:text-rose-300" href="#">//All</a></li>
              <li class="mr-6"><a @click.prevent="filterItems('development')" data-category="development" class="text-orange-300          hover:text-rose-300" href="#">01//Development</a></li>
              <li class="mr-6"><a @click.prevent="filterItems('ux')" data-category="ux" class="text-orange-300          hover:text-rose-300" href="#">02//UI/UX</a></li>
              <li class="mr-7"><a @click.prevent="filterItems('creation')" data-category="creation" class="text-orange-300          hover:text-rose-300" href="#">03//Content Creation</a></li>
        </ul>
  
  
        <div id="mywork" class="portfolio m-4 p-10 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
          <div v-for="card in filteredCards" :key="card.title" :id="card.id" class="w-[80vw] border-2 mt-4  border-orange-300 h[80vh] lg:w-[25vw] md:w-[40vw] bg-gray-900 sm:mb-2  p-2 m-2 rounded-lg shadow flex justify-start items-start flex-col">
            <a href="#portfolio" @click="openModal(card)">
              <img class="lg:w-[100vw] lg:h-[48vh] md:w-[50vw] md:h-[30vh] w-[100vw] h-[38vh] lg:opacity-50 lg:hover:opacity-100 " :src="card.image" alt="">
            </a>
            <div class="p-5">
              <h5 class=" text-3xl mt-4 font-black tracking-tight text-white">{{ card.title }}</h5>
              <p class="mb-2 text-md font-light tracking-tight text-white">{{ card.category }}</p>
              <button @click="openModal(card)" class=" mt-5  hover:text-rose-300 text-orange-200 text-xl ">{{ card.button }}</button>
              <div v-if="card.modalVisible" class="fixed m-5 border-orange-300 border-2 inset-0 z-50 overflow-y-auto">
                <div class="flex items-center justify-center h-auto">
                  <div class="bg-black p-8 rounded-lg shadow-lg w-[95vw] h-auto">
                    <div class="flex flex-col justify-center p-5">
                      <p class="mb-2 text-lg font-semibold text-left">{{ card.modal.category }}</p>
                      <p class="text-xl text-left font-medium mb-10 text-rose-300">{{ card.modal.tools }}</p>
                      <h1 class="mb-10">{{ card.modal.description }}</h1>
                      
                      <div class="flex justify-center items-center"><iframe class="w-[100vw] lg:h-[80vh] md:h-[50hv] h-[40vh]" :src="card.modal.source" loop></iframe></div>
                      <div class="flex justify-center items-center" v-if="card.modal.link">
                        <button><a :href="card.modal.link" class="font-bold hover:text-rose-300 text-orange-200 my-10">//See Project</a></button>
                      </div>
                      <div v-else=""></div>
                      <button @click="closeModal(card)" class="text-xl font-bold mt-5 hover:text-rose-300 text-orange-200">//Close</button>
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

import { ref, computed } from 'vue';

//import the portfolio cards from the portfolio.js module

import { cards } from '@/modules/portfolio.js';




//portfolio filter

const filteredCards = computed(() => {
  if (selectedCategory.value === 'all') {
    return cards.value;
  } else {
    return cards.value.filter(card => card.id === selectedCategory.value);
  }
});

// Define a ref for selected category
const selectedCategory = ref('all');

// Function to filter items based on category
const filterItems = (category) => {
  selectedCategory.value = category;
};



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