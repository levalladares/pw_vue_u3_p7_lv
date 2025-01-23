<template>
  <div class="pokemonContainer">
    <img v-show="!mostrarPokemon" class="ocultar" :src="imagenPuente" alt="No se pudo carfar">
    <img v-show="mostrarPokemon" :src="imagenPuente" alt="No se pudo carfar">
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    mostrarPokemon:{
      type: Boolean,
      default: true
    }
  },
  computed: {
    imagenPuente() {
     // return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.pokemonId + ".svg";
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`; // AQUI VA CODIGO JAVASCRIPT 
    }
  },
  methods: {
    metodoPrueba() {
      console.log('se ejecuto el metodo prueba desde el padre');
    }
  },
  data() {
    return {
      propiedadPrueba: 'este texto es prueba'
    }
  }

}
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  height: 200px;
  position: absolute;
  right: 38%;
}

.pokemonContainer {
  height: 200px;
}
</style>