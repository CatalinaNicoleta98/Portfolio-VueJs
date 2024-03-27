// modals from about section


import { ref } from 'vue';

export const modals = ref([
  { title: "//Video CV", source: "https://www.youtube.com/embed/3p2HhEIpnqI" },
  { title: "//Download CV", source: "../img/CV.pdf" },
  { title: "//Certificates", source: "../img/Certificates.pdf" },
]);

export const currentSlide = ref(0);
export const images = ref([
  { picture: "../img/read.jpeg", title: "Reading" },
  { picture: "../img/pizza.jpg", title: "Cooking" },
  { picture: "../img/painting.jpg", title: "Painting" },
  { picture: "../img/outdoors.jpg", title: "Outdoors" },
  { picture: "../img/music.png", title: "Music" },
  { picture: "../img/coding.jpeg", title: "Coding" },
]);
