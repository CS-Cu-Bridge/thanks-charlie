<script>
    export let text;
</script>



<div class="box">
    {text}
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Plus&display=swap");
    .box {
        font-family: "Gentium Book Plus", serif;
        color: rgba(0, 0, 0, 0.887);
        outline: 2px solid rgba(0, 0, 0, 0.887);
        text-align: center;
        margin:5%;
        width:15em;
        height:fit-content;
    }
    .box:hover {
        color: rgb(3, 78, 165);
        box-shadow: 2px rgb(3, 78, 165);
        outline: 2px solid rgb(3, 78, 165);
        transition: color 1s, box-shadow 2s;
    }
</style>
