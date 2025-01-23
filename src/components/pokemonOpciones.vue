<template>
  <div class="contenedorOpciones">
    <ul>
      <li @click="seleccionado(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
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
    seleccionado(id) {
      console.log('hizo click');
      console.log(id);  
      const objetoEnviado= {
        identificador: id,
        valor2: true,
        valor3: 'Ejemplo3'
      }
      this.$emit('seleccion', objetoEnviado); // emitir un evento, en el segundo parametro se puede enviar un valor
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