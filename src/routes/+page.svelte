<script>
    import { browser } from "$app/env";
    import { base } from "$app/paths";
    import Box from "../components/box.svelte";
</script>

<h1>From the Columbia Computer Science Bridge Students!</h1>
<h2>Thank you Charlie!</h2>

<div class="container">
    <div class="row">
        <div class="col">
            Thanks for your time today Charlie; your experiences are a helpful
            reference as we navigate our CS careers/interests! - Joe Rebagliati
        </div>
        <div class="col">
            It's really helpful to hear from someone that was once in our shoes,
            so thank you so much for both your time and giving us such
            thoughtful advice! - Ryan Soeyadi
        </div>
        <div class="col">
            Appreciate your time and insightful sharings, Charlie! You
            demystified many industry jargons and career options, bridging the
            gaps for many CS students who aspire to become software engineers!
            Will take your offer and look forward to connecting in person when
            you are on campus! - Jacky Wong
        </div>
        <div class="col">
            Charlie, hearing about your experience in building a tech career was
            truly inspiring. It was great to learn about the various roles
            within the industry and what they each demand. Thank you for your
            time and advice! - Tomas Pasiecznik
        </div>
    </div>
    <div class="row">
        <div class="col">
            Thank you very much for sharing your experience and the detailed
            information for the questions we asked! It helped me a lot and made
            everything much more clear now! - Yuhao Dong
        </div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
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
    <a href="https://sveltesaas.com/articles/sveltekit-github-pages-guide/"
        >here</a
    >
    and
    <a href="https://github.com/duckdb-wasm-examples/sveltekit-typescript"
        >here</a
    >.
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
    }

    p {
        font-family: "Gentium Book Plus", serif;
        font-size: small;
        margin-top: 20%;
        width: 100%;
        padding: 10%;
        margin-top: 10%;
        margin-bottom: 0%;
        text-align: center;
    }
    .col:hover {
        color: rgb(3, 78, 165);
        transition: color 1s, box-shadow 2s;
    }
</style>
