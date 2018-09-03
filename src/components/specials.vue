<template>
  <Page class="page">
    <ActionBar android.icon="res://icon" android.iconVisibility="always" >
      <NavigationButton icon="res://icon1" @tap="onOpenDrawerTap" /> 
      <Image src="res://logo" class="action-image" />

    <StackLayout orientation="horizontal" >
      <Label text="Route 65" fontSize = "44"/>
    </StackLayout> 
  
  
    </ActionBar>


  <scrollview>
      
    </scrollview>
  </Page>
</template>

<script>
import products from "./products";
export default {
  data() {
    return {
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear(),
      created_at: "",
      description: "",
      name: "",
      price: "",
      product_id: "",
      started_at: "",
      stopped_at: ""
    };
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
    showtext: function() {
      let THIS = this;
      console.log("page has loaded");
      // let specialsCollection = this.$firebase.firestore.collection("specials");

      // productsCollection.add({
      // created_at ""
      // description ""
      // name ""
      // price ""
      // product_id ""
      // started_at ""
      // stopped_at ""
      // }).then(documentRef => {
      //   console.log(`added with auto-generated ID: ${documentRef.id}`);
      // });
    },
    showproducts: function() {
      this.$navigateTo(products);
    }
  }
};
</script>

<style scoped>
label {
  color: red;
}
</style>
