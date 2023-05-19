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
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    padding: 25px 0 0 0 ;
    box-shadow: 0 -35px 45px 15px rgb(0, 0, 0);
}

#sobre hr {
    width: 50%;
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
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    text-align: left;
}
@media (max-width: 1200px){
    #sobre p {
        font-size: 20px;
        width: 90%;
        margin-top: 20px;
    }
}
@media (max-width: 600px) {
    #sobre h1 {
        font-size: 35px;
    }

    #sobre p {
        font-size: 20px;
        width: 85%;
        margin-top: 20px;
    }
    #sobre hr {
    width: 90%;
}
}</style>