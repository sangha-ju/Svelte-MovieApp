<footer>
    <div>
        <a href="https://github.com/sangha-ju/Svelte-MovieApp">Github Repo.</a>
    </div>
    <div>
        <a
            href="https://www.notion.so/dc10b7544b1f4c58825f39e909e58274?v=c4e60febcff94e408f70f1796151a962">
            @{new Date().getFullYear()}
            Logan Joo
        </a>
    </div>
</footer>

<style lang="scss">
    footer {
        padding: 70px;
        text-align: center;

        a {
            color: $color--white-10;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
