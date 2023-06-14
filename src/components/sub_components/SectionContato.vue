<template>
    <div id="contato">
        <hr>
        <h1>Contatos</h1>
        <hr>
        <div  class="contato_iten">
            <a target="_blank" href="https://github.com/Adrian-kx" class="contato_box">
                <img src="../../icons/github.png" alt="">
                <p>GitHub</p>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/adrian-xavier-85ab81201/" class="contato_box">
                <img src="../../icons/linkedin.png" alt="">
                <p>Linkedin</p>
            </a>
            <a target="_blank" href="https://instagram.com/adrian_kxavier" class="contato_box">
                <img src="../../icons/instagram.png" alt="">
                <p>Instagram</p>
            </a>
            <a target="_blank" href="mailto:adriankxavier@gmail.com" class="contato_box">
                 <img src="../../icons/gmail.png" alt="">
                <p>E-Mail</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style>
#contato {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    margin: 50px auto;
}

#contato hr {
    width: 50%;
    color: var(--text);
    border: 1px solid var(--text);
}

#contato h1 {
    font-size: 50px;
    margin: 0;
    font-family: 'Courier Prime italic', Courier, monospace;
}
#contato .contato_iten{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px auto;
    width: 80%;


}
#contato .contato_iten a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Courier Prime Italic';
    position: relative;
    color: var(--text);
    text-decoration: none;
    margin: 0px;
    font-size: 20px;
}
#contato img {
    width: 121px;
    height: 121px;
    margin: 30px;
    display: inline-block;
  transition: transform 0.5s;
}
#contato .contato_iten a:hover img {
  animation: spin 0.5s linear 1;
}
@keyframes spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
@media (max-width:600px){
    #contato {
    width: 100%;
    margin: 0px auto 50px auto;
}
#contato svg {
    width: 80px;
    height: 80px;
    margin: 10px;
}
.contato_iten a {
    margin: 10px;
}
#qualificacoes h1 {
    font-size: 35px;
}
#contato hr {
    width: 90%;
}
}
</style> 