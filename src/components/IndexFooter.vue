<template>
    <footer>
        <div class="by">
            <p>
                Direitos Reservados 2023 © Adrian Kauã Xavier
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