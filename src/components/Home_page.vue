<template>
  <Page ref="mainPage" class="page" @loaded="loaded">
    <ActionBar class="action-bar" title="Route 65 - Home">

    </ActionBar>
    <scrollview ref="scrollV">
      <sideBar :open="isDrawerOpen" @change="updateDrawer">
        <button text="Open Drawer" @tap="isDrawerOpen = !isDrawerOpen" />
      </sideBar>
    </scrollview>
  </Page>
</template>

<script>
import specials from "./specials";

import sideBar from "./partials/sideBar";

  export default {
    data () {
      return {
        isDrawerOpen: false,

        name: "",
        description:"",
        cost_price:"",
        imageurl:"",
        sell_price:"",
        slug:"",
      }
    },
    methods: {
      updateDrawer: function(value) {
        this.isDrawerOpen = value;
      },
      loaded: function() {
      }
    },
    components: {
      'sideBar': sideBar
    }
  }
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
