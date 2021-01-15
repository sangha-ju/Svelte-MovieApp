<script>
    import { querystring } from "svelte-spa-router";
    import qs from "qs";

    console.log($querystring);
    console.log(qs.parse($querystring));

    $: query = qs.parse($querystring);
    $: name = query.name || "Logan Joo";
    $: email = query.email || "tkdgk3817@gmail.com";
    $: blog =
        query.blog ||
        "https://www.notion.so/dc10b7544b1f4c58825f39e909e58274?v=c4e60febcff94e408f70f1796151a962";
    $: phone = query.phone || "+82-10-5531-3966";
</script>

<div class="user-profile">
    <div class="photos">
        <div class="photo">
            <img src="/assets/svelte.png" alt="user" />
        </div>
        <div class="photo">
            <img src="/assets/duck.jpg" alt="user" />
        </div>
    </div>
    <div class="details">
        <div class="name">{name}</div>
        <div class="email">{email}</div>
        <div class="blog">{blog}</div>
        <div class="phone">{phone}</div>
    </div>
</div>

<style lang="scss">
    .user-profile {
        padding: 80px 0;

        .photos {
            display: flex;
            justify-content: center;

            .photo {
                flex-shrink: 0;
                width: 230px;
                height: 230px;
                padding: 30px;
                box-sizing: border-box;
                background-color: $color--area;
                border-radius: 50%;
                border: 12px solid $color--black;
                &:first-child {
                    margin-right: -80px;
                }

                img {
                    width: 100%;
                    border-radius: 30%;
                }
            }
        }

        .details {
            margin-top: 20px;
            text-align: center;

            .name {
                font-size: 40px;
                font-family: "Oswald", sans-serif;
                margin-bottom: 20px;
            }
        }
    }
</style>
