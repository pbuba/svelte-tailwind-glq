<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { OperationStore } from "@urql/svelte";

  import Card from "./Card.svelte";
  import type * as types from "../types";
  export let albums: Readable<OperationStore<types.GetAlbumsQuery>>;
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
