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

                <div class="flex lg:flex-row md:flex-row flex-wrap">
                            <!-- VIDEO CV BTN -->

                    <a href="#about" id="openVideoBtn" class="mt-11 mr-3 hover:opacity-100 hover:text-rose-300 bg-slate-500 rounded-lg text-orange-200 opacity-70 border border-black p-2">Video CV</a>
                    <!-- Video Modal -->
                    <div id="videoModal" class="hidden z-10 text-lg fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
                     <div class="bg-black p-8 rounded-lg">
                         <!-- Close button -->
                            <button id="closeVideoBtn" class=" text-2xl text-gray-500 hover:text-red-700">&times;</button>
                    
                            <!-- YouTube player iframe -->
                            <iframe id="videoPlayer" class=" w-[80vw] h-[80vh] " src="https://www.youtube.com/embed/3p2HhEIpnqI" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
            

                        <!-- SEE CV BTN -->


                    <a href="#about" id="openDownloadBtn" class="mt-11 mr-3 hover:opacity-100 hover:text-rose-300 bg-slate-500 rounded-lg text-orange-200 opacity-70 border border-black p-2">Download CV</a>

                    <div id="downloadModal" class="hidden z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
                     <div class="bg-black p-8 rounded-lg">
                            <!-- Close button -->
                            <button id="closeDownloadBtn" class=" text-2xl text-gray-500 hover:text-red-700">&times;</button>
                    
                         <!-- Embedded PDF -->
                            <iframe id="pdfViewer" class=" w-[80vw] h-[80vh] " src="/public/img/CV.pdf"></iframe>
                        </div>
                    </div>


                    <!-- CERTIFICATES BTN -->
 
                    <a href="#about" id="openCertificatesBtn" class=" mt-5 lg:mt-11 md:mt-11 hover:opacity-100 hover:text-rose-300 bg-slate-500 rounded-lg text-orange-200 opacity-70 border border-black p-2">Certificates</a>
 
                    <div id="certificatesModal" class="hidden z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
                        <div class="bg-black p-8 rounded-lg">
                             <!-- Close button -->
                            <button id="closeCertificatesBtn" class=" text-2xl text-gray-500 hover:text-red-700">&times;</button>
         
                            <!-- Embedded PDF -->
                            <iframe id="pdfViewer" class=" w-[80vw] h-[80vh] " src="/public/img/Certificates.pdf"></iframe>
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
    <!-- reading card -->
    <div class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-center items-center flex-col">
        <img class=" lg:opacity-50 lg:hover:opacity-100 w-80 h-72 " src="/public/img/read.jpeg" alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reading</h5>
        </div>
    </div>

    <!-- cooking card -->
    <div class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow  flex justify-center items-center flex-col">
        <img class="lg:opacity-50 lg:hover:opacity-100  w-80 h-72 " src="/public/img/pizza.jpg" alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cooking</h5>
        </div>
    </div>

    <!-- painting card -->
    <div class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow flex justify-center items-center flex-col">
        <img class=" lg:opacity-50 lg:hover:opacity-100 w-80 h-72" src="/public/img/painting.jpg" alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Painting</h5>
        </div>
    </div>

    <!-- discovering the outdoors card -->
    <div class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow flex justify-center items-center flex-col">
        <img class="lg:opacity-50 lg:hover:opacity-100   w-80 h-72 " src="/public/img/outdoors.jpg" alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Outdoors</h5>
        </div>
    </div>
    <!-- listening to music-->
    <div class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow flex justify-center items-center flex-col">
        <img class="lg:opacity-50 lg:hover:opacity-100    w-80 h-72 " src="/public/img/music.png" alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Music</h5>
        </div>
    </div>
    <!-- coding-->
    <div class="max-w-sm  sm:mb-2 bg-transparent p-2 m-2 rounded-lg shadow flex justify-center items-center flex-col">
        <img class="lg:opacity-50 lg:hover:opacity-100  w-80 h-72 " src="/public/img/coding.jpeg" alt="">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coding</h5>
        </div>
    </div>
</div>
</div>

<!-- ABOUT ENDS HERE -->
</template>

<script setup>

// Function to open the video modal


document.addEventListener("DOMContentLoaded", function() {
    const openVideoBtn = document.getElementById('openVideoBtn');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const videoModal = document.getElementById('videoModal');

    // Function to open the video modal
    const openVideoModal = () => {
        videoModal.classList.remove('hidden');
    };

    // Function to close the video modal
    const closeVideoModal = () => {
        videoModal.classList.add('hidden');
        
        // Stop video playback by resetting the src attribute
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = '';
    };

    // Event listeners for button clicks
    openVideoBtn.addEventListener('click', openVideoModal);
    closeVideoBtn.addEventListener('click', closeVideoModal);
});



//CV MODAL

document.addEventListener("DOMContentLoaded", function() {
    const openCertificatesBtn = document.getElementById('openCertificatesBtn');
    const closeCertificatesBtn = document.getElementById('closeCertificatesBtn');
    const certificatesModal = document.getElementById('certificatesModal');

    // Function to open the download modal
    const openCertificatesModal = () => {
        certificatesModal.classList.remove('hidden');
    };

    // Function to close the download modal
    const closeCertificatesModal = () => {
        certificatesModal.classList.add('hidden');
    };

    // Event listeners for button clicks
    openCertificatesBtn.addEventListener('click', openCertificatesModal);
    closeCertificatesBtn.addEventListener('click', closeCertificatesModal);
});



//certificates modal


document.addEventListener("DOMContentLoaded", function() {
    const openDownloadBtn = document.getElementById('openDownloadBtn');
    const closeDownloadBtn = document.getElementById('closeDownloadBtn');
    const downloadModal = document.getElementById('downloadModal');

    // Function to open the download modal
    const openDownloadModal = () => {
        downloadModal.classList.remove('hidden');
    };

    // Function to close the download modal
    const closeDownloadModal = () => {
        downloadModal.classList.add('hidden');
    };

    // Event listeners for button clicks
    openDownloadBtn.addEventListener('click', openDownloadModal);
    closeDownloadBtn.addEventListener('click', closeDownloadModal);
});
</script>

<style lang="scss" scoped>

</style>