<script>
    import {
        Block,
    } from 'konsta/svelte';

    export let form;
</script>

{#if form?.error }
    <Block>
        <div class="p-3 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400 font-bold" role="alert">
            {form.error}
        </div>
    </Block>
{/if}
