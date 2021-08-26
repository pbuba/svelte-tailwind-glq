<script>
  import Card from "./Card.svelte";

  export let albums;
</script>

{#if $albums.fetching}
  <p>Loading...</p>
{:else if $albums.error}
  <p>Oh no... {$albums.error.message}</p>
{:else}
  <ul class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
    {#each $albums.data.albums.data as album}
      <Card {album} />
    {/each}
  </ul>
{/if}
