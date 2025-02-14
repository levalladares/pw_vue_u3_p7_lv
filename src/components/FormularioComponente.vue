<template>
  <h1>FORMULARIO PERSONA</h1>
  <div class="container">
    <h1>Formulario Persona</h1>
    <div class="formulario">
      <p type="Nombre:"><input type="text" /></p>
      <p type="Apellido:"><input type="text" /></p>
      <p type="Fecha Nacimiento:"><input type="text" /></p>
    </div>
    <button>Agregar</button>
  </div>
</template>

<script>
import { obtenerPorIdFachada } from '../client/PersonaCliente'
export default {
  mounted
}
</script>

<style>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.formulario {
  display: grid;
  flex-direction: center;
  border: solid 1px black;
  padding: 10px;
  border-radius: 5px;
}

p::before {
  content: attr(type);
  width: 100px;
}
</style>