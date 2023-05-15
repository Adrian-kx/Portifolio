<template>
    <footer>
        <div class="by">
            <p>
                Direitos Reservados 2023 © Adrian Kauã Xavier
            </p>
            <hr class="no_responsive">
            <p>
                <a target="_blank" href="https://icons8.com/"> icons by Icons8</a>
            </p>

        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style>
footer .by  {
    display: flex;
    flex-direction: row;
    background-color: rgb(0, 0, 0);
    height: 100px;
    justify-content: center;
    box-shadow: 1px 1px 20px -5px  rgba(255, 255, 255, 0.779);
    color: var(--text);
    display: flex;
    justify-content: space-evenly;
    text-align: center;
}
footer p{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 50px;
}
footer p a{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
}
footer hr {
    height: 60%;
    color: var(--text);
    border: 1px solid var(--text);
    display: flex;
    margin: auto 0;
    align-items: center;
    justify-content: center;

}
@media (max-width: 1000px){
    footer .by{
        flex-direction: column;
        height: 150px;
    }
    footer hr {
    display: none;
}
footer p{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
}
}
</style>