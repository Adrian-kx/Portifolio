<template>
    <div id="projetos">
        <hr>
        <h1>Projetos</h1>
        <hr>
        <div class="Project_itens">
            <a target="_blank" href="https://qrcode-gules.vercel.app/" class="projects_iten_box">
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
                <p>&nbsp;O site de paisagismo oferece
                    informações sobre serviços de
                    paisagismo, galerias de fotos de projetos realizados, depoimentos de clientes e contato para
                    solicitações de orçamento.
                </p>
            </a>
            <a target="_blank" href="https://counter-design-ejhf.vercel.app/" class="projects_iten_box">
                <img src="./../../assets/contador.png" alt="">
                <h3>Contador</h3>
                <h5>HTML5, CSS3, Javascript, Vue.js</h5>
                <p>&nbsp;O projeto Contador é um exemplo simples de aplicação web.
                    Como o nome sugere, o objetivo do projeto é contar quantas vezes um botão foi clicado, podendo também,
                    utilizar outras operações matemáticas.

                </p>
            </a>
            <a target="_blank" href="https://blog-two-mu-50.vercel.app/" class="projects_iten_box">
                <img src="./../../assets/blogIMG.png" alt="">
                <h3>BlogNews</h3>
                <h5>HTML5 e CSS3</h5>
                <p>&nbsp;O projeto BlogNews, é um template minimalista de um blog de noticiário, com login, cadastro, perfil
                    que postou anotícia, qual o cargo desta pessoa, entre outras funcionalidade.
                </p>
            </a>
            <a target="_blank" href="https://knife-loja.vercel.app/" class="projects_iten_box">
                <img src="./../../assets/knifeStore.png" alt="">
                <h3>Knife Store</h3>
                <h5>HTML5, CSS3, Javascript e Bootstrap</h5>
                <p>&nbsp;O projeto Knife Store é uma template de loja (no estilo Ecommerce), com várias funcionalidades
                    dentro dele, como multi páginas, carrosséis animados, tela de registro e de login, e o design responsvo.

                </p>
            </a>

        </div>
    </div>
</template>
<script setup>
</script>
<style>
#projetos {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    margin: 50px auto 0px auto;
}

#projetos hr {
    width: 50%;
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
    object-fit: cover;
    overflow: hidden;
}

#projetos .Project_itens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px auto;
    width: 80%;

}

#projetos .projects_iten_box {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 20px 15px;
    margin: 25px 15px;
    background: rgb(255, 255, 255);
    background: linear-gradient(210deg, rgba(255, 255, 255, 0.329) 0%, rgba(0, 0, 0, 0.121) 100%);
    border-radius: 25px;
    text-decoration: none;
    color: var(--text);
    align-items: center;
}

#projetos .projects_iten_box:hover {
    box-shadow: 1px 1px 20px 1px rgba(255, 255, 255, 0.396);
}

#projetos .projects_iten_box h3 {
    font-size: 23px;
    margin: 10px 0;
}

#projetos .projects_iten_box h5 {
    font-size: 15px;
    margin: 10px 0;
}

#projetos .projects_iten_box p {
    font-size: 15px;
    margin: 0;
    width: 100%;
}

.projects_iten_box img {
    height: 200px;
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
}

@media (max-width: 600px) {
    #projetos {
        width: 100%;
        margin: 50px auto 0 auto;
    }

    #projetos h1 {
        font-size: 35px;
        margin: 0;
        font-family: 'Courier Prime italic', Courier, monospace;
    }

    #projetos .projects_iten_box {
        margin: 10px;
    }

    #projetos hr {
        width: 90%;
    }
}
</style>