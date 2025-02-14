import axios from "axios";
const obtenerPorId = async (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas/
   const data = await axios.get(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
   console.log(data);
   return data;
}
//metodo fachada
export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}