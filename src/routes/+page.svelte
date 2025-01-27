<script>
    import {
        Page,
        Navbar,
        Block,
        Link,
        Button,
    } from 'konsta/svelte';

    import { PageTransition } from 'sveltekit-page-transitions'

    export let data;
    let { session } = data;
</script>

<PageTransition>
    <Page>
        <Navbar title="My App">
            <div slot="left"></div>
            <div slot="right">
                {#if session.active}
                    <form action="/logout" method="POST">
                        <Button type="submit" clear>
                            Logout
                        </Button>
                    </form>
                {:else}
                    <Link href="/login" navbar>Login</Link>
                {/if}
            </div>
        </Navbar>

        <Block strong>
            <h1 class="text-blue-600 mb-4 text-lg">
                {#if session.active}
                Hello {session.username}, here is svelte, tailwind and Konsta bundled up.
                {:else}
                Here is svelte, tailwind and Konsta bundled up.
                {/if}
            </h1>
        </Block>
    </Page>
</PageTransition>
