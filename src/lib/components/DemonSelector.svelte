<script lang="ts">
  import type { CompendiumInstance } from "$lib/data/demonCompendium";
  import { compendiumMap } from "$lib/data/demonCompendium";
  export let compendium_id: CompendiumInstance;
  const compendium = compendiumMap.get(compendium_id);
  if (compendium == undefined) {
    throw "compendium id doesnt exist in the map!";
  }
  let menuOpen = true;
  let searchedVal = "";
  let test = "";
  $: console.log(searchedVal);

  const menuItems = compendium.map((demon) => {
    return demon.name;
  });
  let filteredItems: String[] = [];
  const handleInput = () => {
    console.log("Handling input");
    return (filteredItems = menuItems.filter((item) =>
      item.toLowerCase().match(searchedVal.toLowerCase()),
    ));
  };
  const handleClick = () => {
    console.log("dropdown clicked");
    menuOpen = true;
  };
</script>

<button on:click={handleClick}></button>
<input bind:value={test} />
<p>Test {test}</p>
<section class="dropdown">
  <input
    bind:value={searchedVal}
    on:input={handleInput}
    on:click={handleClick}
  />
  <div class:show={menuOpen} class="dropdown-content" id="myDropdown">
    {#if filteredItems.length > 0}
      {#each filteredItems as item}
        <p>{item}</p>
      {/each}
    {:else}
      {#each menuItems as item}
        <p>{item}</p>
      {/each}
    {/if}
  </div>
</section>

<style>
</style>
