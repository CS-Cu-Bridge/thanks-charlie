<script>
    export let text;
</script>

<div>
    {text}
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Plus&display=swap");
    div {
        font-family: "Gentium Book Plus", serif;
        color: rgba(0, 0, 0, 0.887);
        outline: 2px solid rgba(0, 0, 0, 0.887);
        text-align: center;

    }
    div:hover {
            color: rgb(3, 78, 165);
            box-shadow: 2px rgb(3, 78, 165);
            outline: 2px solid rgb(3, 78, 165);
            transition: color 1s, box-shadow 2s;
            

        }
</style>
