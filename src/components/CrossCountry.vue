<template>
  <div class="px-4 md:px-16">
    <div class="breadcrumb">
        <a class="px-2" to="/">Home</a>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
        </svg>
        <a class="px-2" to="/cross-country">Cross Country</a>
    </div>
    <h1 class="px-2 py-1 mb-8 text-4xl font-black font-mono">Cross Country</h1>
    <div
        class="font-sans text-2xl border-t-2 border-b-2 h-20 sticky z-50 bg-white px-16 flex flex-row items-center justify-between">
        <div class="flex flex-initial items-center text-center">
            Filter by Gender
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </div>
        <div class="flex flex-initial items-center text-center">
            Filter by Size
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </div>
        <div class="flex flex-initial items-center text-center">
            Filter by Color
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 x-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </div>
    </div>
    <div class="card__collection clear-fix pt-8">
        <div class="cards cursor-pointer" v-for="item of items" :key="item.id">
          <router-link :to="'items/' + item.id">
            <img :src="item.img" class="w-full h-auto" alt="">
            <span class="cards__rect-1">
                <span class="shadow-1">
                    <p>{{item.label}}</p>
                </span>
            </span>
            <span class="cards__rect-2">
                <span class="shadow-2">
                    <p>{{item.price}} $</p>
                </span>
            </span>
            <span class="cards__rect-3">
                <span class="shadow-1">
                    <p class="">NEW</p>
                </span>

            </span>
            <span class="cards__rect-4">
                <span class="shadow-2">
                </span>
            </span>
            </router-link> 
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CrossCountry',
  data: () => {
    const items = []
    return {items}
  },
  methods: {
    async getData() {
      try {
       const res =  await axios.get('http://localhost:3000/cross-country');
        this.items = res.data; 
      } catch (error) {
        console.error(error)
      }
    }
  },
  created() {
    this.getData()
  }
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
