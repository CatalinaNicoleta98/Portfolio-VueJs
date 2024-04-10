//modals from portfolio

import { ref } from 'vue';

export const cards = ref([
    {    id: 'development',
        image: '../img/trapholt.jpg',
        title: 'Trapholt',
        category: 'Development',
        button: 'Show Project',
        modal:{
            category: '| Development',
            tools: 'HTML-CSS-BOOTSTRAP-JavaScript',
            description: 'For my first semester exam, I got to work on my biggest project until now. It was a team project, which means that each one of us had it\'s own area of expertise. I, fortunately, got to do a little bit of everything by helping with the design of the logo, printables and report and  working together with my colleague on the UX research. But the main area I worked in was definitely the coding of the website. Below, I invite you to experience the website.',
            source: 'https://danielpincu.com/index.html',
            link: 'https://danielpincu.com/index.html',
            repository:'https://github.com/DanielPincu/SemesterProject'
            
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
            description: 'In the first semester, our UX mandatory assignment was creating a mobile app for students looking for remote jobs.There was no coding involved, the project was mostly about UX research and te final product itself was a app mockup.',
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
            description: 'Our second semester UX project was creating a mockup for an app based on whatever idea we came with. The most important part of it was the research and the user testing. I chose to create an app that would help people invest in the stock market. Below you can see the final product.',
            source: '../img/stockhub.mp4'
            
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
            description: 'This semester, the first video production assignment we got was imagining, scripting, filming and editing an add for whatever product real or fictional we want. Almost at the same time, we got another assignment to create an Instagram ad and make the presentation about a company and the strategy they use to gain customers. For both of them, we chose Starbucks. Below you can see the final video and the card picture is the exact ad we created for Instagram..',
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
            description: 'Chatognito was a private project, together with my colleague. A try on creating a logo for a fictional app but also on learning a little bit more coding. I wanted to create a logo that would be simple, yet memorable and that would represent the website\'s purpose. I used Adobe Illustrator to create it. Bellow you can interact with the website',
            source: 'https://www.chatognito.com/',
            link: 'https://www.chatognito.com/'
        },
    },

    {
        id: 'creation',
        image: '../img/international.jpeg',
        title: 'International Day',
        category: 'Content Creation',
        button: 'Show Project',
        modal:{
            category: '| Content Creation',
            tools: 'Adobe AfterEffects - Adobe PremierePro',
            description: 'At EASV, we celebrate International Day every year, by having the students bring a taste of their home. In my first semester as a multimedia designer, one of our assignmnts was creating a poster promoting this. Fortunately for me, my design was the winner and I got to see it displayed all around the school for a few days, which was a great feeling.',
            source: '../img/international.pdf'
            
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
            tools: 'Adobe Illustrator - Adobe InDesign',
            description: 'In the first semester, we got to create a digital interactive info-folder presenting a district of our choice from Esbjerg. It was a team project, and we got to work with InDesing and Illustrator more in depth. We decided to present Sædding, bellow you can see the final product.',
            source: 'https://indd.adobe.com/view/87244edc-9900-46de-b2a3-469e5bea84c4?fbclid=IwAR2_wZCjakJ5VtgfenHROkGvsMfPMAxUnLIvssxdJz4hsRY-oEuJC_1HV5s_aem_AWqwF3nqIPIXr5vVqgMLKbuV7qi6Abpp1mNzjWci7-dv-F9sPMhXksoe2bRh9Bgsg7MzoiWAYqA6FpufkDoyn5al',
            link:'https://indd.adobe.com/view/87244edc-9900-46de-b2a3-469e5bea84c4?fbclid=IwAR2_wZCjakJ5VtgfenHROkGvsMfPMAxUnLIvssxdJz4hsRY-oEuJC_1HV5s_aem_AWqwF3nqIPIXr5vVqgMLKbuV7qi6Abpp1mNzjWci7-dv-F9sPMhXksoe2bRh9Bgsg7MzoiWAYqA6FpufkDoyn5al'
          
            
        },
    },


   
    
]);