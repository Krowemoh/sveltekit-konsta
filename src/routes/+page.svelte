<script>
    import {
        Page,
        Navbar,
        Block,
        Button,
    } from 'konsta/svelte';

    export let data;
    let { session } = data;
</script>

<Page>
    <Navbar title="My App" />

    <Block strong>
        <h1 class="text-blue-600 mb-4 text-lg">
            {#if session.active}
            Hello {session.username}, here is svelte, tailwind and Konsta bundled up.
            {:else}
            Here is svelte, tailwind and Konsta bundled up.
            {/if}
        </h1>

        {#if session.active}
            <form action="/logout" method="POST">
                <Button type="submit" large>
                    Logout
                </Button>
            </form>
        {:else}
            <Button href="/login" large>
                Login
            </Button>
        {/if}
    </Block>
</Page>

