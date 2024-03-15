<template>
    <div>
<!-- PORTFOLIO PROJECTS STARTS -->


<div id="portfolio" class="portfolio my-72 py-4 w-[100vw] h-auto">

<h1 class="text-7xl mb-32 mx-auto flex justify-center items-center content-center">04//portfolio</h1>

<ul class="flex flex-row text-md mt-7 mx-4 lg:p-10 md:p-10   mb-5">
    <li class="lg:ml-7 mr-6 text-orange-300">Filter by</li>
    <li class="mr-6"><a data-category="all"  class="text-orange-300 hover:text-rose-300" href="#">//All</a></li>
    <li class="mr-6"><a data-category="development"  class="text-orange-300 hover:text-rose-300" href="#">01//Development</a></li>
    <li class="mr-6"><a data-category="ux" class="text-orange-300 hover:text-rose-300" href="#">02//UI/UX</a></li>
    <li class="mr-7"><a data-category="creation" class="text-orange-300 hover:text-rose-300" href="#">03//Content Creation</a></li>
    
</ul>


<div id="mywork" class="portfolio m-4 p-10 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap ">
    <!-- trapholt card -->
    <div>
    <div id="development" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
      <a href="#portfolio" @click="openModal"><img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100" src="/public/img/trapholt.jpg" alt=""></a>
      <div class="p-5">
        <h5 class=" text-2xl font-bold tracking-tight text-white">Trapholt</h5>
        <p class="mb-2 text-sm font-light tracking-tight  text-white">Development</p>
        <!-- open modal btn -->
        <button @click="openModal" class=" hover:text-rose-300 text-orange-200">Show Project</button>
        <!-- Trapholt Modal -->
        <div v-if="trapholtModalVisible" class="fixed inset-0 z-50 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen">
            <!-- Modal content -->
            <div class="bg-black p-8 rounded-lg shadow-lg w-[80vw] h-auto">
              <!-- Close button -->
              <button @click="closeModal" class="text-2xl text-gray-500 hover:text-red-700">&times;</button>
              <!-- Modal content goes here -->
              <div class="flex flex-col justify-center p-5" id="trapholtModalContent">
                <p class="mb-2 text-lg font-semibold text-left">Development</p>
                <p class="text-xl text-left font-medium mb-10 text-rose-300">HTML-CSS-BOOTSTRAP-JavaScript</p>
                <h1>For my first semester exam, I got to work on my biggest project until now. It was a team project, which means that each one of us had it's own area of expertise. I, fortunately, got to do a little bit of everything by helping with the design of the logo, printables and report and  working together with my colleague on the UX research. But the main area I worked in was definitely the coding of the website. Below, you can see a snippet of the final product, but I also invite you to visit the page and experience it.</h1>
                <iframe id="videoViewer" class="w-[100%] lg:h-[80vh] md:h-[50hv] h-[30vh]" src="../img/trapholtweb.mp4" loop></iframe>
                <button><a href="https://danielpincu.com/index.html" class="hover:text-rose-300 text-orange-200 my-5">Visit Page</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- remotely card -->
    <div id="ux" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
        <a href="#portfolio" id="openRemotelyBtn"><img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100   " src="/public/img/remotely.png" alt=""></a>
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">Remotely</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">UI/UX</p>
            <!-- open modal btn -->
            <button id="openRemotelyBtn" class="hover:text-rose-300 text-orange-200">Show Project</button>
            <!-- Remotely Modal -->
            <div id="remotelyModal" class="hidden fixed inset-0 z-50 overflow-y-auto">
                <div class="flex items-center justify-center min-h-screen">
                    <!-- Modal content -->
                    <div class="bg-black p-8 rounded-lg shadow-lg w-[80vw] h-auto">
                        <!-- Close button -->
                        <button id="closeRemotelyBtn" class=" text-2xl text-gray-500 hover:text-red-700">&times;</button>
                        <!-- Modal content goes here -->
                        <div class="flex flex-col justify-center p-5" id="remotelyModalContent">
                            
                            <p class="mb-2 text-lg font-semibold text-left">| UI/UX</p>
                            <p class="text-xl text-left font-medium mb-3 text-rose-300">Adobe XD</p>
                            <h1>In the first semester, our UX mandatory assignment eas creating a mobile app for students looking for remote jobs.There was no coding involved, the project was mostly about UX research and te final product itself was a app mockup.</h1>

                            <iframe id="videoViewer" class=" mt-10 w-[100%] lg:h-[80vh] md:h-[50hv] h-[30vh] " src="/public/img/remotelyweb.mp4" loop></iframe>
                            
                            


                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>

    <!-- mini me card -->
    <div id="creation" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
       <a href="#portfolio" id="openMiniMeBtn"> <img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100    " src="/public/img/mini.png" alt=""></a>
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">Mini Me</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">Content Creation</p>
            <!-- open modal btn -->
            <button id="openMiniMeBtn" class="hover:text-rose-300 text-orange-200">Show Project</button>
            <!-- mini me -->
            <div id="miniMeModal" class="hidden fixed inset-0 z-50 overflow-y-auto">
                <div class="flex items-center justify-center min-h-screen">
                    <!-- Modal content -->
                    <div class="bg-black p-8 rounded-lg shadow-lg w-[80vw] h-auto">
                        <!-- Close button -->
                        <button id="closeMiniMeBtn" class=" text-2xl text-gray-500 hover:text-red-700">&times;</button>
                        <!-- Modal content goes here -->
                        <div class="flex flex-col justify-center p-5" id="miniMeModalContent">
                            
                            <p class="mb-2 text-lg font-semibold text-left">| Content Creation</p>
                            <p class="text-xl text-left font-medium mb-3 text-rose-300">Adobe Illustrator</p>
                            <h1> My first ever design project was creating an illustration of myself, in whatever style I see fit. While it is not my best work, I still want to showcase it as it is my first ever work and I am quite proud to look back on it and see the way I evolved.  </h1>
                            <img src="/public/img/mini.png" class="my-5 " alt="">

                            
                            
                            


                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>

    <!-- $tockhub card -->
    <div id="ux" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
        <img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100   " src="/public/img/stock.png" alt="">
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">$tockHub</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">UI/UX</p>
            <button class="hover:text-rose-300">Show Project</button>
            

        </div>
    </div>
    <!-- starbucks-->
    <div id="creation" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
        <a href="#portfolio" id="openStarbucksBtn"><img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100    " src="/public/img/ad.jpeg" alt=""></a>
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">Starbucks</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">Content Creation</p>
            <!-- open modal btn -->
            <button id="openStarbucksBtn" class="hover:text-rose-300 text-orange-200">Show Project</button>
            <!-- starbucks -->
            <div id="starbucksModal" class="hidden fixed inset-0 z-50 overflow-y-auto">
                <div class="flex items-center justify-center min-h-screen">
                    <!-- Modal content -->
                    <div class="bg-black p-8 rounded-lg shadow-lg w-[80vw] h-auto">
                        <!-- Close button -->
                        <button id="closeStarbucksBtn" class=" text-2xl text-gray-500 hover:text-red-700">&times;</button>
                        <!-- Modal content goes here -->
                        <div class="flex flex-col justify-center p-5" id="starbucksModalContent">
                            
                            <p class="mb-2 text-lg font-semibold text-left">| Content Creation</p>
                            <p class="text-xl text-left font-medium mb-3 text-rose-300">Adobe PremierePro - Adobe AfterEfects</p>
                            <h1> This semester, the first video production assignment we got was imagining, scripting, filming and editing an add for whatever product real or fictional we want. </h1>
                            
                            <iframe class="w-[100%] lg:h-[80vh] md:h-[50hv] h-[30vh] my-10" src="https://www.youtube.com/embed/vPnsn_jS6e8?si=Dghjiwr8DXqXF7CO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            
                            

                            
                            
                            


                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
    <!-- chatognito-->
    <div id="creation" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
        <img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100    " src="/public/img/chatognito.png" alt="">
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">Chatognito</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">Content Creation</p>
            <button class="hover:text-rose-300">Show Project</button>
            

        </div>
    </div>
    <!-- videocv-->
    <div id="creation" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
        <img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100   " src="/public/img/me.jpg" alt="">
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">Video CV</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">Content Creation</p>
            <button class="hover:text-rose-300">Show Project</button>
            

        </div>
    </div>

    <!-- welcome to-->
    <div id="creation" class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-start items-start flex-col">
        <img class="w-72 h-72 lg:opacity-50 lg:hover:opacity-100 md:opacity-50 md:hover:opacity-100   " src="/public/img/welcometo.png" alt="">
        <div class="p-5">
            <h5 class=" text-2xl font-bold tracking-tight text-white">Welcome To</h5>
            <p class="mb-2 text-sm font-light tracking-tight  text-white">Content Creation</p>
            <button class="hover:text-rose-300">Show Project</button>
            

        </div>
    </div>


</div>






</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const trapholtModalVisible = ref(false);

const openModal = () => {
  trapholtModalVisible.value = true;
};

const closeModal = () => {
  trapholtModalVisible.value = false;
};
</script>

<style lang="scss" scoped>

</style>