<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Card } from 'flowbite-svelte'
    import {DarkMode} from 'flowbite-svelte';
    import { Carousel } from 'flowbite-svelte';
    import {images} from './imageData/image';

    export let data;

    let articles = data.data;
    console.log(articles);
    let showThumbs=false
    let showCaptions=false
    let duration: number = 3000;

    let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>



  <Navbar let:hidden let:toggle rounded color="form" navClass="mx-6 my-1 py-1">
    <NavBrand href="/">
      <img src="./favicon.png" class="mr-3 ml-2 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  
<div class="max-w-4xl mx-auto">
    <Carousel {images} loop {showCaptions} {showThumbs} duration={duration}/>
  </div>


  {#each articles as article}
  <Card href="/cards" class="mx-auto mt-4">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">${article.content}</p>
</Card>
  {/each}


  <DarkMode {btnClass}/>

