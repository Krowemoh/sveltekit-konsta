<script>
    import {
        Page, Navbar, 
        Block, BlockTitle,
        List, ListInput,
        Button,
    } from 'konsta/svelte';
    import { PageTransition } from 'sveltekit-page-transitions'

    import ErrorNotification from '$lib/components/ErrorNotification.svelte';

    export let form;
</script>

<PageTransition>
    <Page>
        <Navbar title="Sign In" />

        <form method="POST" action="">
            <List strongIos insetIos>
                <ListInput label="Username" name="username" type="text" placeholder="Username" />
                <ListInput label="Password" name="password" type="password" placeholder="Password" />
            </List>

            <ErrorNotification {form} />

            <Block>
                <Button large>Login</Button>
            </Block>
        </form>
    </Page>
</PageTransition>
