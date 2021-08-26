<script lang="ts">
  import { initClient } from "@urql/svelte";

  import TailwindCss from "./TailwindCSS.svelte";
  import Header from "./components/Header.svelte";
  import Layout from "./components/Layout.svelte";

  initClient({
    url: "https://graphqlzero.almansi.me/api",
  });
  import Main from "./components/Main.svelte";
</script>

<TailwindCss />

<Layout>
  <Header slot="header" />
  <Main slot="main" />
</Layout>
