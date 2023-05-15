<script>
import Header from './components/IndexHeader.vue'
import Section from './components/IndexSection.vue'
import Footer from './components/IndexFooter.vue'
export default{
  name: 'HomeView',
  components: {
    Header, Section, Footer
  }
}
</script>

<template>
    <Header />
    <Section />
    <Footer />
</template>


<style>

@font-face {
  font-family: Courier Prime;
  src: url(./src/fonts/CourierPrime-Bold.ttf);
}

@font-face {
  font-family: Courier Prime Italic;
  src: url(./src/fonts/CourierPrime-Italic.ttf);
}

:root {
  --primary-color: rgb(0, 0, 0);
  --secundary-color: rgb(0, 0, 0);
  --text: rgba(255, 255, 255, 0.374);
}

* {
  font-family: 'Courier Prime', Courier, monospace;
}

body{
  font-family: 'Courier Prime', Courier, monospace;
  background-color: var(--primary-color);
}</style>

