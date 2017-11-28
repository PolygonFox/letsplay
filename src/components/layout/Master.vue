<template>
    <div>
        <md-app>
            <md-app-toolbar class="md-accent">
                <span class="md-title">Let's Play!</span>
            </md-app-toolbar>
      <md-app-content>
            <router-view></router-view>
      </md-app-content>
        </md-app>

               <md-bottom-bar class="md-accent bottomBar" @md-changed="checkNewPosts" md-sync-route>
                <md-bottom-bar-item md-label="Dashboard" md-icon="home" to="/"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="Profile" md-icon="account_box" to="/profile"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="Let's Play!" md-icon="videogame_asset" to="/play"></md-bottom-bar-item>
            </md-bottom-bar>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                newPosts: 3
            }
        },
        methods: {
            checkNewPosts(){

            },
            clearNewPosts(){

            },

        }
    }
</script>

<style lang="sass">

    .bottomBar 
        position: fixed
        bottom: 0
    

    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme('default', (theme: dark));

    @import "~vue-material/dist/theme/all"; // Apply the theme


</style>
