<template>
     <!-- EXPERTISE STARTS -->

     <div id="expertise" class="expertise mt-72 py-4 w-[100vw] h-auto ">

        <h1 class="lg:text-7xl md:text-7xl text-5xl mx-auto mb-32 flex justify-center items-center content-center">03//expertise</h1>

<!-- content table starts -->


<div class="content m-6 p-6 flex flex-col justify-center items-center lg:flex-row">

    <!-- web development card -->

    <div v-for="table in tables" :key="table" class="w-[90vw] h-[55vh]  sm:mb-2 bg-transparent py-12 m-2  border-8 border-white shadow flex justify-center items-center flex-col">


        <!-- title of first column -->
        <div class="title flex flex-row items-center">
            <img :src="table.image" alt="" style="width: 20%;">
            <div>
                <p class=" mx-6 mt-6 border-b-4 border-rose-300 font-semibold text-xl md:text-3xl">{{table.title1}}</p>
                        
                 <p class=" mx-6  font-semibold text-xl md:text-3xl">{{table.title2}}</p>
            </div>


        </div>

        <!-- content -->
        
        <div class=" p-6 mt-2 mb-5 mx-3 box border-l-4">
            
            <br>
            <p class="text-md md:text-xl flex items-center  font-medium">{{table.content}}</p>

        </div>
        
    </div>

    

</div>



</div>


<!-- EXPERTISE ENDS -->
</template>

<script setup>

import { ref } from 'vue'

const tables = ref(
    [
        {
        image:'../img/webdev.svg',
        title1:'Front-end',
        title2:'Development',
        content:'Enthusiastic web development student adept at HTML, CSS, and JavaScript, with a focus on Vue.js for dynamic and engaging interfaces. Eager to contribute and collaborate on innovative web projects.'

        },


        {
        image:'../img/ux.svg',
        title1:'UI/UX',
        title2:'Design',
        content:'Interested  in UI/UX design, I try creating seamless and intuitive user experiences. Proficient in tools like Adobe XD and Figma, I bring creativity and usability together to craft engaging digital interfaces.'

        },

        {
        image:'../img/adobe.svg',
        title1:'Content',
        title2:'Creation',
        content:"Interested in graphic design and video production, I'm familiar with the Adobe creative suite, including Photoshop, Illustrator, InDesign, PremierePro and AfterEfects. Ready to bring creativity and precision to visual projects."

        },
        


    ]
)




</script>

<style lang="scss" scoped>

</style>