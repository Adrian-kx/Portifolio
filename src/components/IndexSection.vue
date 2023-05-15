<template>
    <section>
        <Home/>
        <Sobre/>
        <Qualificacoes/>
        <Projetos/>
        <Contato/>
    </section>
</template>
<script>
import Home from './sub_components/SectionHome.vue'
import Sobre from './sub_components/SectionSobre.vue'
import Qualificacoes from './sub_components/SectionQualifi.vue'
import Projetos from './sub_components/SectionProjetos.vue'
import Contato from './sub_components/SectionContato.vue'

export default {
    components:{
        Home,
        Sobre,
        Qualificacoes,
        Projetos,
        Contato

    }
    
}
</script>
<style>
    section{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100% !important;
    }
</style>