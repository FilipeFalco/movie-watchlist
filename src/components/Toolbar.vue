<template>
  <div class="toolbar">
    <v-app-bar
      color="#111"
      dark
    >  
      <v-toolbar-title class="toolbar--title">Movie Wachlist</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        Minha lista
      </v-btn>

      <v-btn text>
        Já assistidos
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
    export default {
        name: 'Toolbar',
    }
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.toolbar {
    color: $background-color;
  .toolbar--title {
    font-family: 'Roboto';
  }
}
  
</style>