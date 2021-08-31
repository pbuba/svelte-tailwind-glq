<script lang="ts">
  import { operationStore, query } from "@urql/svelte";
  import * as types from "../types.d";
  import CardList from "./CardList.svelte";

  const albums = operationStore<types.GetAlbumsQuery>(types.GetAlbumsDocument);
  query(albums);
  const user = operationStore(types.GetFirstUserDocument);
  query(user);
</script>

<div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-0 py-8">
  <CardList {albums} />
</div>
