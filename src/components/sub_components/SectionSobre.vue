<template>
    <div id="sobre">
        <hr>
        <h1>Sobre Mim</h1>
        <hr>
        <p>
            &nbsp; Minha jornada profissional começou em Abril de 2023, trabalhando como Estágio de integração, na empresa
            Magazord
            e desde então, tenho
            me dedicado a aprender cada vez mais sobre desenvolvimento. Atualmente, estou cursando Sistemas de Informação,
            no centro universitário Unidavi. Além disso, gosto de me manter
            atualizado sobre as últimas tendências e tecnologias da minha área, participando de cursos, e
            eventos relacionados.
            <br><br>
            &nbsp; Além do trabalho, também sou proativo, o que me ajuda a ter uma visão mais
            ampla e criativa em relação aos projetos que trabalho. Meus principais valores são Respeito, Caráter,
            responsabilidade, os quais busco aplicar em todas as minhas atividades.
        </p>
    </div>
</template>
<script>
export default {

}
</script>
<style>
#sobre {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    margin-top: 40px;
}

#sobre hr {
    width: 70%;
    color: var(--text);
    border: 1px solid var(--text);
}

#sobre h1 {
    font-size: 50px;
    margin: 0;
    font-family: 'Courier Prime italic', Courier, monospace;
}

#sobre p {
    font-size: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    text-align: left;
}

@media (max-width: 600px) {
    #sobre h1 {
        font-size: 35px;
    }

    #sobre {
        width: 85%;
    }

    #sobre p {
        font-size: 20px;
        width: 100%;
        margin-top: 20px;
    }
}</style>