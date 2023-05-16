<template>
    <div id="projetos">
        <hr>
        <h1>Projetos</h1>
        <hr>
        <div class="Project_itens">
            <a href="/qrcode" class="projects_iten_box">
                <img src="./../../assets/qrcode.png" alt="">
                <h3>Gerador de QRCode</h3>
                <h5>HTML5, CSS3, Javascript, Vue.js, QRious</h5>
                <p>&nbsp;Este é um projeto de gerador de QR Code que permite ao usuário inserir um texto e selecionar uma
                    cor para o código QR. A imagem gerada pode ser baixada pelo usuário em formato PNG.
                </p>
            </a>
            <a target="_blank" href="https://site-paisagismo.vercel.app/" class="projects_iten_box">
                <img src="./../../assets/site_de_paisagismo.png" alt="">
                <h3>Site de Paisagismo</h3>
                <h5>HTML5, CSS3, Javascript, Vue.js</h5>
                <p>&nbsp;O site de paisagismo é uma plataforma digital, com uma interface limpa e minimalista que oferece
                    informações sobre serviços de
                    paisagismo, galerias de fotos de projetos realizados, depoimentos de clientes e contato para
                    solicitações de orçamento.
                </p>
            </a>
            <a href="/contador" class="projects_iten_box">
                <img src="./../../assets/contador.png" alt="">
                <h3>Contador</h3>
                <h5>HTML5, CSS3, Javascript, Vue.js</h5>
                <p>&nbsp;O projeto Contador é um exemplo simples de aplicação web.
                    Como o nome sugere, o objetivo do projeto é contar quantas vezes um botão foi clicado, podendo também,
                    utilizar outras operações matemáticas.

                </p>
            </a>
            <a target="_blank" href="/SiteAsilo" class="projects_iten_box">
                <img src="./../../assets/asilo_site.png" alt="">
                <h3>Site de um Asilo</h3>
                <h5>HTML5, CSS3, Javascript</h5>
                <p>&nbsp;O projeto de site de um asilo pode ser desenvolvido com HTML, CSS e JavaScript para criar uma
                    experiência de usuário agradável e informativa para os visitantes do site. A escolha das cores e fontes
                    pode ajudar a transmitir uma sensação de tranquilidade e conforto.
                </p>
            </a>
            <a href="/horadodia" class="projects_iten_box">
                <img src="./../../assets/horadodia.png" alt="">
                <h3>Hora Do Dia</h3>
                <h5>HTML5, CSS3, Javascript</h5>
                <p>&nbsp;O projeto Hora do Dia é um exemplo simples da usabilidade do Javascript.
                    Como o nome sugere, o objetivo do projeto é ler a hora atual e retornar um imgame, uma cor de fundo e um
                    texto.

                </p>
            </a>

        </div>
    </div>
</template>
<script setup>
</script>
<style>
#projetos {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    margin: 50px auto 0px auto ;
}

#projetos hr {
    width: 70%;
    color: var(--text);
    border: 1px solid var(--text);
}

#projetos h1 {
    font-size: 50px;
    margin: 0;
    font-family: 'Courier Prime italic', Courier, monospace;
}

#projetos p {
    font-size: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}

#projetos .Project_itens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px auto;
    width: 100%;

}

#projetos .projects_iten_box {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 20px 15px;
    margin: 25px 5px;
    background: rgb(255, 255, 255);
    background: linear-gradient(210deg, rgba(255, 255, 255, 0.329) 0%, rgba(0, 0, 0, 0.121) 100%);
    border-radius: 25px;
    text-decoration: none;
    color: var(--text);
    text-align: left;
}

#projetos .projects_iten_box:hover {
    box-shadow: 1px 1px 20px 1px rgba(255, 255, 255, 0.396);
}

#projetos .projects_iten_box h3 {
    font-size: 23px;
    margin: 10px auto 0 0;
}

#projetos .projects_iten_box h5 {
    font-size: 15px;
    margin: 10px 0;
}

#projetos .projects_iten_box p {
    font-size: 15px;
    margin: 0 !important;
    width: 100% !important;
}

.projects_iten_box img {
    max-height: 200px;
    width: auto;
}

@media (max-width: 600px) {
    #projetos {
        width: 100%;
        margin: 50px auto;
    }

    #projetos h1 {
        font-size: 35px;
        margin: 0;
        font-family: 'Courier Prime italic', Courier, monospace;
    }

    #projetos .projects_iten_box {
        margin: 10px;
    }
}
</style>