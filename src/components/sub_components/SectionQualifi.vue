<template>
    <div id="qualificacoes">
        <hr>
        <h1>Qualificações</h1>
        <hr>
        <div class="icon_qualifi">
            <p>
                <img src="../../icons/html5.png" alt="">
                HTML5
            </p>
            <p>
                <img src="../../icons/css3.png" alt="">
                CSS3
            </p>
            <p>
                <img src="../../icons/js.png" alt="">
                JavaScript
            </p>
            <p>
                <img src="../../icons/vue-js.png" alt="">
                Vue.Js
            </p>
            <p>
                <img src="../../icons/git.png" alt="">
                Git
            </p>
            <p>
                <img src="../../icons/github.png" alt="">
                github
            </p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
#qualificacoes {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    margin: 50px 0;
}

#qualificacoes hr {
    width: 50%;
    color: var(--text);
    border: 1px solid var(--text);
}

#qualificacoes h1 {
    font-size: 50px;
    margin: 0;
    font-family: 'Courier Prime italic', Courier, monospace;
}

#qualificacoes .icon_qualifi {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 60%;
}

#qualificacoes img {
    width: 120px;
    height: 120px;
    margin: 40px;
}

#qualificacoes .icon_qualifi p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Courier Prime Italic';
    font-size: 20px;
    position: relative;
    color: var(--text);
    text-decoration: none;
    font-size: 20px;
}

.icon_qualifi p::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: var(--text);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}

.icon_qualifi p:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}

@media (max-width:600px) {
    #qualificacoes {
        width: 90%;
        margin: 50px 0;
    }
    #qualificacoes img {
        width: 120px;
        height: 120px;
        margin: 15px;
    }

    #qualificacoes .icon_qualifi p {
        margin: 0px;
    }

    #qualificacoes h1 {
        font-size: 35px;
    }
    #qualificacoes .icon_qualifi {
    width: 100%;
}
#qualificacoes hr {
    width: 90%;
}
}</style>