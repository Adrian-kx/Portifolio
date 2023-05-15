<template >
  <header>
    <p>{}</p>
      <ul>
        <li><a class="link_iten" href="#sobre">Sobre</a></li>
        <li><a class="link_iten" href="#qualificacoes">Qualificações</a></li>
        <li><a class="link_iten" href="#projetos">Projetos</a></li>
        <li><a class="link_iten" href="#contato">Contato</a></li>
      </ul>
  </header>
</template>
<script>
export default {
  
};
</script>
<style >
  header{
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secundary-color);
    font-family: 'Courier Prime Italic';
  }
  header ul{
    list-style: none;
    color: var(--text);
    display: flex;
    margin-right: 50px;
  }
  .link_iten {
    font-size: 19px;
    width: 100%;
    height: 100%;
    position: relative;
    color: var(--text);
    font-style: none;
    list-style: none;
    text-decoration: none;
    margin: 20px;
    font-size: 20px;
}

.link_iten::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color:var(--text);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}

.link_iten:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}

header p{
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  font-size: 50px;
}

@media(max-width: 1000px){
  header{
    justify-content: center;
  }
  header ul{
    display: none;
  }
  header p{
    align-items: center;
    margin: 0;
  }
}

</style>