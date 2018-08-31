<template>
    <StackLayout @loaded="loaded">
        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent class="drawerContent">
                <StackLayout height="56" style="text-align: center; vertical-align: center;">
                    <Label text="Navigation Menu" />
                </StackLayout>
                <StackLayout :height="pageHeight - 56 - 56" class="pageHeadings">
                    <Label text="Products" @tap="goToProducts" />
                    <Label text="Specials" @tap="goToSpecials" />
                </StackLayout>
                <StackLayout height="56">
                    <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
                </StackLayout>
            </StackLayout>

            <StackLayout :height="pageHeight" ~mainContent>
                <slot></slot>
            </StackLayout>
        </RadSideDrawer>
    </StackLayout>
</template>

<script>
import product from "../product";
import specials from "../specials";

export default {
    data() {
        return {
            isDrawerOpen: false,
            pageHeight: "400",
        }
    },
    props: {
        open: {
            type: Boolean,
            default: false
        },
    },
    watch: {
        open: function(bool) {
            if (bool) this.onOpenDrawerTap(); //if true 
            else this.onCloseDrawerTap();
        }
    },
    methods: {
        goToProducts: function() {
            this.$navigateTo(product);
        },
        goToSpecials: function() {
            this.$navigateTo(specials);
        },
        onOpenDrawerTap() {
            this.$refs.drawer.nativeView.showDrawer();
            this.$emit('change', true);
        },
        onCloseDrawerTap() {
            this.$refs.drawer.nativeView.closeDrawer();
            this.$emit('change', false);
        },
        loaded: function() {
            let THIS = this;

            const platformModule = require("tns-core-modules/platform");
            setTimeout(function() {
                THIS.pageHeight = platformModule.screen.mainScreen.heightDIPs - 80; //action bar
            }, 50);
        }
    }
}
</script>

<style lang="scss">
.pageHeadings {
    Label {
        height: 40;
        color: white;
        font-size: 20;
        font-weight: bold;
    }
}

.drawerContent {
    height: 100%;
    StackLayout {

        background-color: black;
    }
}
</style>
