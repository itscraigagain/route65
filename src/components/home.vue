<template>
  <Page ref="mainPage" class="page" @loaded="loaded">
    <ActionBar class="action-bar">
      <StackLayout orientation="horizontal" ref="actionBar">
        <Label class="fa" :text="'fa-bars' | fonticon" width="20%" style="font-size: 22;" @tap="isDrawerOpen = !isDrawerOpen" />
        <Label text="Route 65" width="60%" />
        <Label text="" width="20%" />
      </StackLayout>
    </ActionBar>

    <scrollview ref="scrollV">
      <sideBar :open="isDrawerOpen" @change="updateDrawer">
      </sideBar>
    </scrollview>
  </Page>
</template>

<script>
import specials from "./specials";

import sideBar from "./partials/sideBar";

export default {
  name: "home",
  data() {
    return {
      isDrawerOpen: false,

      name: "",
      description: "",
      cost_price: "",
      imageurl: "",
      sell_price: "",
      slug: ""
    };
  },
  methods: {
    updateDrawer: function(value) {
      this.isDrawerOpen = value;
    },
    loaded: function() {}
  },
  components: {
    sideBar: sideBar
  }
};
</script>

<style scoped>
</style>
