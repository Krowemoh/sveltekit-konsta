<script>
    import "../app.css";
    import { App } from 'konsta/svelte';
    import { PageTransitionController, cover } from 'sveltekit-page-transitions'
</script>

<App theme="ios">
    <PageTransitionController transition={cover}>
        <slot />
    </PageTransitionController>
</App>
