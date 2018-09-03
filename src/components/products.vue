<template>
  <Page class="page" @loaded="loaded">
    <ActionBar class="action-bar">
      <StackLayout orientation="horizontal" ref="actionBar">
        <Label class="fa" :text="'fa-arrow-left' | fonticon" width="20%" style="font-size: 22;" @tap="$navigateBack" />
        <Label text="" width="60%" />
        <Label class="fa" :text="'fa-shopping-basket' | fonticon | contact(' ') | concat(orders.length)" width="20%" style="font-size: 22;" @tap="goToOrders" />
      </StackLayout>
    </ActionBar>

    <scrollview ref="scrollV">
      <sideBar :open="isDrawerOpen" @change="updateDrawer">
        <RadListView for="product in products" pullToRefresh="true" @pullToRefreshInitiated="onPullToRefreshInitiated" @itemTap="productTap">
          <ListViewGridLayout v-tkListViewLayout scrollDirection="Vertical" itemHeight="200" spanCount="1" itemInsertAnimation="Slide" />

          <v-template>
            <GridLayout class="list-group-item" rows="auto" columns="100, *">
              <Image row="0" col="0" src="~/images/burger.jpg" />
              <StackLayout row="0" col="1" style="padding-left: 20;">
                  <Label :text="product.name" />
                  <Label :text="product.description" />
              </StackLayout>
            </GridLayout>
          </v-template>

        </RadListView>
      </sideBar>
    </scrollview>

  </Page>
</template>

<script>
import sideBar from "./partials/sideBar";

import ordersPage from "./orders";

export default {
  name: "products",
  data() {
    return {
      products: [],
      orders: [],
      ordersPage: ordersPage
    };
  },
  methods: {
    loaded: function() {
      let THIS = this;
      let productsCollection = this.$firebase.firestore.collection("products");
      // console.log(THIS.products);

      productsCollection
        .get()
        .then(querySnapshot => {
          return querySnapshot.forEach(doc => {
            console.log(doc.data());
            THIS.products.push(doc.data());
            return this;
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        })
        .then(data => {
          console.log(THIS.products);
        });
    },
    productTap: function(event) {
      // console.log(event.index);
      // console.log(event.item);
      this.orders.push(event.item);
      // console.log(this.orders);
    },
    goToOrders: function() {
      this.$store.commit("updateModel", { orders: this.orders });
      this.$navigateTo(ordersPage);
    },
    updateDrawer: function(value) {
      this.isDrawerOpen = value;
    },
    onPullToRefreshInitiated(args) {
      const listView = args.object;
      console.log("pull to refresh");
      setTimeout(() => {
        this.items = ["abc", "def", "lol"];
        listView.notifyPullToRefreshFinished();
      }, 2000);
    }
  },
  components: {
    sideBar: sideBar
  }
};
</script>

<style scoped>
</style>
