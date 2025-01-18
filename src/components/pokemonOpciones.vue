<template>
  <div class="contenedorOpciones">
    <ul>
      <li @click="seleccionado()" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Object,
      required: true,
    },
  },
  methods: {
    seleccionado() {
      console.log('hizo click');
    },
  },
}
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  width: 350px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center ;
}

li:hover {
  background: rgb(0, 0, 0, 0.05);
}

.contenedorOpciones {
  display: flex;
  justify-content: center;
}
</style>