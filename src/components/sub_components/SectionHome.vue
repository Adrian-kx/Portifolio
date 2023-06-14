<template>
    <div id="home">
        <div class="box_sobre">
            <h3>Adrian Kauã Xavier</h3>
            <p>&nbsp; Olá, eu sou Adrian e sou um Desenvolvedor Front-end. Sou Apaixonado por Desenvolver e tenho
            2 anos de experiência criando projetos pessoais. Desde pequeno, sempre fui fascinado pela Tecnologia e por isso
            decidi seguir uma carreira nesta área.</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
#home {
    background-image: url(../../assets/backHome.png);
    width: 100%;
    padding: 65px 0 75px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--text);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-repeat:repeat;
}

#home .box_sobre {
    width: 30%;
    height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(0, 0, 0);
    padding:0 40px;
    border-radius: 25px;
    box-shadow: 1px 1px 15px 2px rgba(106, 106, 106, 0.21);
}

#home .box_sobre * {
    margin: 0;
}

#home .box_sobre img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;

}

#home .box_sobre hr {
    width: 100%;
}

#home .box_sobre p {
    font-family: 'Courier normal', Courier, monospace;
    font-size: 1.3em;
    text-align: left;
}

#home .box_sobre h3 {
    font-size: 40px;
    margin: 0;
    font-family: 'Courier Prime italic', Courier, monospace;
    color: var(--text);
}

@media (max-width: 1000px) {

    #home .box_sobre {
        width: 45%;
        height: 300px;
    }

    #home .box_sobre img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;

    }

    #home .box_sobre p {
        font-family: 'Courier normal', Courier, monospace;
        font-size: 0.9em;
    }

    #home .box_sobre h3 {
        font-size: 25px;
        margin: 0;
    }

    #home {
        height: 400px;
    }
}

@media (max-width:600px) {
    #home .box_sobre p {
        font-family: 'Courier Prime italic', Courier, monospace;
        font-size: 0.8em;
    }

    #home .box_sobre h3 {
        font-size: 15px;
    }

    #home .box_sobre img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
    }

    #home .box_sobre {
        padding: 5px 20px;
        width: 60%;
    }
}</style>