<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Hello world">

    </ActionBar>
    <scrollview>
      <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="Cost Price"/>
      <TextField v-model="cost_price" hint="Enter text..." />
      <Label class="body" textWrap=true text="Description"/>
      <TextField v-model="description" hint="Enter text..." />
      <Label class="body" textWrap=true text="imageurl"/>
      <TextField v-model="imageurl" hint="Enter text..." />
      <Label class="body" textWrap=true text="Name"/>
      <TextField v-model="name" hint="Enter text..." />
      <Label class="body" textWrap=true text="Sell Price"/>
      <TextField v-model="sell_price" hint="Enter text..." />
      
      <Button class="btn btn-primary" @tap="enterproduct" text="Save new entry"/>
      <Label text= "Enter all the details" />

      <Button class="btn btn-primary" @tap="showspecials" text="Show next page"/>
    
      </StackLayout>
    </scrollview>

  </Page>
</template>

<script>
import specials from "./specials";
  export default {
    data () {
      return {
        name: "",
        description:"",
        cost_price:"",
        imageurl:"",
        sell_price:"",
        slug:"",
        
      };
    },
    methods: {
      enterproduct: function() {
        let THIS = this;
        console.log('page has loaded');
        let productsCollection = this.$firebase.firestore.collection("products");

        productsCollection.add({
          name: THIS.name,
          description: THIS.description,
          imageurl: THIS.imageurl,
          cost_price: THIS.cost_price,
          sell_price: THIS.sell_price,
          slug: "",
          units_sold: 0
        }).then(documentRef => {
          console.log(`added with auto-generated ID: ${documentRef.id}`);
        });

      },
      showspecials:function(){
        this.$navigateTo(specials);
      }
    }
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
