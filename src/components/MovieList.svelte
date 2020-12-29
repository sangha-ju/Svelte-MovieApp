<script>
    import { movies, loading } from "~/store/movie";
    import MovieCard from "./MovieCard.svelte";
    import Loader from "./Loader.svelte";
</script>

<style lang="scss">
    .movie-list {
        margin-top: 30px;
        padding: 10px;
        background-color: $color--area;
        border-radius: 4px;
        text-align: center;

        .movies {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>

<div class="movie-list">
    {#if $loading}
        <Loader />
    {/if}
    <div class="movies">
        {#each $movies as movie (movie.imdbID)}
            <MovieCard {movie} />
        {/each}
    </div>
</div>
