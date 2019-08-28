import { http } from './config'

export default {
    listar: () => {
        return http.get('usuarios') // Passamos a endpoint
    },

    salvar:(usuario) => {
        return http.post('usuario')
    }
}