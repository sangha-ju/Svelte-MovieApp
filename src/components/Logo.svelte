<script>
    import { link } from "svelte-spa-router";
</script>

<a use:link href="/">
    <span>OMDbAPI</span>.COM
</a>


<style lang="scss">
    a {
        display: block;
        font-family: "Oswald", sans-serif;
        font-size: 30px;
        text-decoration: none;
        color: $color--white-50;
    }

    span {
        color: $color--primary;
    }
</style>