<template>
    <h2>Adivina el pokemon de la imagen</h2>
    <pokemonImagen />
    <pokemonOpciones />
</template>

<script>
import pokemonImagen from '../components/pokemonImagen.vue'
import pokemonOpciones from '@/components/pokemonOpciones.vue'  // otra forma de importar
export default {
    components: {
        pokemonImagen,
        pokemonOpciones
    }

}
</script>

<style></style>