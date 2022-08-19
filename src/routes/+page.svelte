<script>
    import { browser } from "$app/env";
    import { base } from "$app/paths";
    import Box from "../components/box.svelte";
    import { Row, Col, Grid, Item } from 'svelte-layouts';
</script>

<h1>From the Columbia Computer Science Bridge Students!</h1>
<h2>Thank you Charlie!</h2>

<div class="comments">
    <Row>
        <Box text = "Thanks for your time today Charlie; your experiences are a helpful reference as we navigate our CS careers/interests! - Joe R."></Box>
    </Row>

</div>


<p>
    This webpage was made by the community of students who are currently in or
    are alumni of the Columbia University CS Bridge Program. This page is not an
    official website of the University of Columbia nor is it endorsed by
    Columbia. To learn more about the Bridge program visit <a
        href={"https://www.cs.columbia.edu/ms-bridge/"}>here</a
    >. This webpage was built on
    <a href="https://kit.svelte.dev/">Svelte-kit</a>. Certain configuration
    details to make Svelte-kit workable with Github pages are from
    <a href="https://sveltesaas.com/articles/sveltekit-github-pages-guide/">here</a
    >
    and
    <a href="https://github.com/duckdb-wasm-examples/sveltekit-typescript">here</a>.
</p>



<style>
    @import url("https://fonts.googleapis.com/css2?family=Gentium+Book+Plus&display=swap");

    h1 {
        font-family: "Gentium Book Plus", serif;
        text-align: center;
    }
    h2 {
        font-family: "Gentium Book Plus", serif;
        text-align: center;
    }
    div {
        font-family: "Gentium Book Plus", serif;
        font-size: 12px;
        margin-left: 40%;
        width: 20%;
        padding:25%;
        margin-top: 10%;
        margin-bottom: 0%;

    }

    p {
        font-family: "Gentium Book Plus", serif;
        font-size: small;
        margin-top: 20%;
        width: 50%;
        padding:25%;
        margin-top: 10%;
        margin-bottom: 0%;
        text-align: center;
    }
    .comments{
        padding:5%;
        margin:5%;

    }
</style>
