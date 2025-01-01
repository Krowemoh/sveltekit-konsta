<script>
    import {
        Page, Navbar, 
        Block, BlockTitle,
        List, ListInput,
        Button,
    } from 'konsta/svelte';

    import ErrorNotification from '$lib/components/ErrorNotification.svelte';

    export let form;
</script>

<Page>
    <Navbar title="Sign In" />

    <form method="POST" action="">
        <List strongIos insetIos>
            <ListInput outline label="Username" name="username" type="text" placeholder="Username" />
            <ListInput outline label="Password" name="password" type="password" placeholder="Password" />
        </List>

        <ErrorNotification {form} />

        <Block>
            <Button large>Login</Button>
        </Block>
    </form>
</Page>
