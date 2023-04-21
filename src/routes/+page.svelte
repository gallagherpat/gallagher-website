<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import {DarkMode} from 'flowbite-svelte';
    import { Carousel } from 'flowbite-svelte';
    import {images} from './imageData/image';
    
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




<Accordion>
    <AccordionItem>
      <span slot="header">My Header 1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">My Header 2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
        <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" >Lorem ipsum</a></li>
        <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank"  class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </AccordionItem>
  </Accordion>
  <DarkMode {btnClass}/>

