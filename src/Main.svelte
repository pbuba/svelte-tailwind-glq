<script>
  import { operationStore, query } from "@urql/svelte";

  const user = operationStore(`
    query {
      users {
        data {
          id
          name
        }
      } 
    }
  `);

  query(user);
</script>

{#if $user.fetching}
  <p>Loading...</p>
{:else if $user.error}
  <p>Oh no... {$user.error.message}</p>
{:else}
  <ul>
    {#each $user.data.users.data as user}
      <li>{user.id} {user.name}</li>
    {/each}
  </ul>
{/if}
