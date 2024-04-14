<script setup>
import {ref} from 'vue'
import sampleData from '../lib/currencyDefinitions.json'; // Import the JSON file

const sampa = ref(sampleData.sample);

</script>

<template>
  <div class="columns-1">
    <article class="prose lg:prose-xl" >
    <h1>Dashboard</h1>
    <p>
        Lorem Ispetem
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere 
        adipisci,iusto, <b> {{ sampa }}</b>
        voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum 
        maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, 
        voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
        </p>
    </article>
</div>
</template>

