<template>
  <div class="px-4 md:px-16">
    <div class="breadcrumb">
       <router-link class="px-2" to="/">Home</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
        </svg>
       <router-link class="px-2" to="/cross-country">Cross Country</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
        </svg>
        <a class="px-2">{{item.label}}</a>
    </div>
    <div class="flex flex-row pt-8">
        <div class="flex-1 clear-fix">
            <div class="cards">
             <img :src="item.img" class="w-full h-auto" alt=""> 
            </div>
        </div>
        <div class="flex-1 flex flex-col px-8">
            <h1 class="py-1 mb-8 text-4xl font-black">{{item.label}}</h1>
            <div class="flex mb-4 flex-row text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="px-1 text-gray-500">4</span>
                <span class="px-1 text-gray-500">(14)</span>
            </div>
            <div class="text-3xl my-4">
                {{item.price}} $
            </div>
            <div class="flex flex-row my-4">
                <div class="size-card" 
                v-for="size of sizes" 
                :key="size.id"
                :class="{'ml-0': size.id === 1, 'selected': size.id === sizeSelected}"
                @click="sizeSelected = size.id">{{size.label}}</div>
            </div>
            <button class="my-4 py-4 bg-black hover:bg-green-special rounded-md text-white text-xl text-center w-full mx-1 cursor-pointer transition-all duration-300 ease-in-out">Commander</button>
        </div>
    </div>
</div>
</template>

<script>
import Joris from '../assets/img/joris-meier-U6X0AH1v5Ak-unsplash.jpg';

export default {
  name: 'CrossCountryDetails',
  data: () => {
    const item = {id: 1, img: Joris, label: 'Xtreams backback 2', price: 150};
const sizes = [{ id: 1, label: 'XS' },
  { id: 2, label: 'S' },
  { id: 3, label: 'M' },
  { id: 4, label: 'L' },
  { id: 5, label: 'XL' }]

  const sizeSelected = 0;

return {item, sizes, sizeSelected}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
   .breadcrumb {
    @apply flex flex-row my-8 font-mono;
  }

   .breadcrumb a {
    @apply cursor-pointer;
  }

  .size-card {
    @apply py-4 bg-gray-100 border border-transparent hover:border-green-special rounded-md text-center hover:text-green-special w-16 mx-1 cursor-pointer transition-all duration-300 ease-in-out;
  }

  .size-card.selected {
    @apply bg-green-special text-white;
  }

  .card__collection {
    @apply grid grid-flow-row grid-cols-4 gap-4;
  }

  .cards {
    @apply bg-cover rounded-md overflow-hidden bg-center relative z-10;
  }

  .cards:hover .cards__rect-2:before {
    @apply -left-full;
  }

  .cards:hover .cards__circle {
    @apply scale-100;
  }

  .cards:hover .cards__circle:before {
    @apply scale-90;
  }

  .cards:hover .cards__list li {
    @apply translate-x-0;
  }

  .cards__rect-1 {
    @apply bg-white block absolute -left-full z-10 opacity-90 transition-all duration-500 ease-in-out;
  }

  .cards__rect-1 .shadow-1 p {
    @apply text-lg text-white leading-8;
  }

  .cards__rect-1 .shadow-1 {
    @apply block absolute transition-all flex justify-center items-center font-mono font-bold duration-300 ease-in-out;
  }

  .cards__rect-2 {
    @apply bg-white absolute opacity-90 z-10 transition-all duration-500 ease-in-out;
  }

  .cards__rect-2::before {
    @apply block absolute opacity-100 transition-all duration-300 ease-in-out;
  }

  .cards__rect-2::after {
    @apply block absolute opacity-100 transition-all duration-500 ease-in-out delay-200;
  }

  .cards__rect-2 .shadow-2 {
    @apply block absolute w-full h-full flex justify-center items-center text-white text-2xl font-mono font-bold transition-all duration-500 ease-in-out delay-200;
  }

  .cards__rect-3 {
    @apply bg-white block absolute left-full z-10 opacity-90 transition-all duration-500 ease-in-out;
  }

  .cards__rect-3 .shadow-1 p {
    @apply text-2xl text-white leading-8 font-mono font-bold;
  }

  .cards__rect-3 .shadow-1 {
    @apply block absolute flex justify-start pl-5 items-center transition-all duration-300 ease-in-out;
  }

  .cards__circle {
    @apply absolute bg-white text-white opacity-90 transition-all duration-300 ease-in-out;
  }

  .cards__rect-4 {
    @apply bg-white absolute opacity-90 z-10 transition-all duration-500 ease-in-out;
  }

  .cards__rect-4::before {
    @apply block absolute opacity-100 transition-all duration-300 ease-in-out;
  }

  .cards__rect-4 .shadow-2 {
    @apply block absolute w-full h-full flex justify-center items-center text-white  font-mono font-bold transition-all duration-500 ease-in-out delay-200;
  }

  .cards__list {
    @apply list-none absolute transition-all duration-400 ease-in-out;
  }

  .cards__list li {
    @apply inline-block text-white text-center font-black transition-all duration-300 ease-in-out;
  }

  .cards__list li:nth-child(1) {
    @apply transition delay-200;
  }
  .cards__list li:nth-child(2) {
    @apply transition delay-300;
  }
  .cards__list li:nth-child(3) {
    @apply transition delay-400;
  }
}

.cards:hover .cards__rect-1 {
  left: 10%;
}
.cards:hover .cards__rect-1 .shadow-1 {
  left: -20%;
}
.cards:hover .cards__rect-2 {
  left: 60%;
}
.cards:hover .cards__rect-2:after {
  left: 80%;
}
.cards:hover .cards__rect-2 .shadow-2 {
  left: -10%;
}

.cards:hover .cards__rect-3 {
  left: 60%;
}

.cards:hover .cards__rect-3 .shadow-1 {
  left: -5%;
}

.cards:hover .cards__rect-4 {
  left: 40%;
}

.cards:hover .cards__rect-4 .shadow-2 {
  left: -10%;
}

.cards__rect-1 {
  width: 200px;
  height: 110px;
  transform: skewX(-20deg);
  top: 73%;
}

.cards__rect-1 p {
  transform: skewX(20deg);
}

.cards__rect-1 .shadow-1 {
  background: #9b1308;
  width: 230px;
  height: 100px;
  left: -200%;
  z-index: -1;
}

.cards__rect-2 {
  width: 100px;
  height: 70px;
  top: 65%;
  left: 1000%;
  transform: skewX(-20deg);
}

.cards__rect-2::before {
  content: "";
  width: 50px;
  height: 40px;
  background: #57ccfd;
  left: 500%;
  top: 10%;
}

.cards__rect-2::after {
  content: "";
  width: 50px;
  height: 40px;
  background: #9b1308;
  left: 500%;
  top: 114%;
}

.cards__rect-2 .shadow-2 {
  background: #57ccfd;
  top: -10%;
  left: 500%;
}

.cards__rect-3 {
  width: 180px;
  height: 65px;
  left: 500%;
  transform: skewX(-20deg);
  top: 7%;
}

.cards__rect-3 .shadow-1 {
  background: #9b1308;
  width: 230px;
  height: 60px;
  top: -10%;
  left: 500%;
  z-index: -1;
}

.cards__rect-3 .shadow-1 p {
  transform: skewX(20deg);
}

.cards__rect-4 {
  width: 100px;
  height: 40px;
  top: 17%;
  left: -1000%;
  transform: skewX(-20deg);
}

.cards__rect-4::before {
  content: "";
  width: 50px;
  height: 40px;
  background: #57ccfd;
  left: -500%;
  top: 10%;
}

.cards__rect-4 .shadow-2 {
  background: #57ccfd;
  padding: 0 16px 0 16px;
  top: -10%;
  left: -500%;
}

.cards__rect-4 .shadow-2 p {
  transform: skewX(20deg);
}

</style>
