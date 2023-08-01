<template>
    <div class="mensagem-container">
        <a>{{ msg }}</a>
    </div>
</template>
<script>

export default {
    name: "MsgView",
    props: {
        msg: String
    }
}
</script>
<style scoped>
    .mensagem-container {
        columns: #004085;
        background-color: #CCE5FF;
        border: 2px solid #B8DAFF;
        color: #222;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>