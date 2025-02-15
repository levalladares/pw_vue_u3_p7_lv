<template>
  <div class="container">
    <div class="formulario">
      <h2>Formulario Persona</h2>

      <div class="forma">
        <label>{{ id }}</label>
        <input type="text" v-model="datos.id" />
      </div>
      <div class="forma">
        <label>{{ nombre }}</label>
        <input type="text" v-model="datos.nombre" />
      </div>
      <div class="forma">
        <label>{{ apellido }}</label>
        <input type="text" v-model="datos.apellido" />
      </div>
      <div class="forma">
        <label>{{ fecha }}</label>
        <input type="date" v-model="datos.fecha" />
      </div>
      <div class="button-center">
        <button v-on:click="buscar()">Consultar</button>
        <button v-on:click="guardar()">Consultar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerPorIdFachada, insertarFachada } from '@/client/PersonaCliente';
export default {
  mounted() {
    console.log("Antes de llamar al API")
    obtenerPorIdFachada(3)
  },
  data() {
    return {
      id: "ID:",
      nombre: "Nombre:",
      apellido: "Apellido:",
      fecha: "Fecha:",

      datos: {
        id: "",
        nombre: "",
        apellido: "",
        fecha: "",
      },
    };
  },
  methods: {
    async buscar() {
      const data = await obtenerPorIdFachada(this.datos.id)
      this.datos.nombre = data.nombre
      this.datos.apellido = data.apellido
      this.datos.fecha = data.fecha
    },
    async guardar() {
      const bodyPersona={
        nombre: this.datos.nombre,
        apellido: this.datos.apellido,
        fecha: this.datos.fecha
      }
      await insertarFachada(bodyPersona)
    }
}
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.formulario {
  width: 300px;
  padding: 20px;
  border: 4px solid black;
  color: black;
  border-radius: 30px;
  text-align: left;
}

.forma {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  margin-bottom: 10px;
}

input {
  padding: 5px;
  border: 1px solid green;
  border-radius: 5px;
}

.button-center {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: darkgreen;
}
</style>