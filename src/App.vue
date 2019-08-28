<template>
<div class="container-fluid mb-5">
    <div class="d-flex justify-content-center mt-5">
        <div class="card" style="width: 120rem;">
            <div class="card-body form-container form-shadow">

                <div class="d-flex justify-content-center">
                    <p class="logo"><b>Data</b>Unity</p>
                </div>

                <div class="row">
                    <div class="ml-3">
                        <h4 style="font-weight: 200" class="display-4">Lista de Usuario</h4>
                    </div>
                </div>

                <div class="row mb-2 mt-3">
                    <div class="col-sm-2">
                        <p>Filtrar por: </p>
                    </div>
                    <div class="col-md-2">
                        <input class="form-control" type="text" placeholder="CPF">
                    </div>
                
                    <div class="col-md-2">
                        <input class="form-control" type="text" placeholder="Email">
                    </div>
                
                    <div class="col-md-2 mr-2">
                        <input class="form-control" type="text" placeholder="Cidade">
                    </div>

                    <div class="col-md-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-info"></button>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="table-responsive">
                            <table class="table table-sm table-bordered table-hover" id="lista">
                                <thead class="thead-light">
                                    <tr>
                                        <th rowspan="2">Nome
                                            <i class="far fa-calendar-alt"></i>
                                        </th>
                                        <th rowspan="2">CPF
                                            <i class="fas fa-book-open"></i>
                                        </th>
                                        <th colspan="3" class="text-center">Telefones
                                            <i class="fas fa-dollar-sign"></i>
                                        </th>
                                        <th rowspan="2">E-mail
                                            <i class="fas fa-dollar-sign"></i>
                                        </th>
                                        <th rowspan="2">Data de Nascimento
                                            <i class="fas fa-dollar-sign"></i>
                                        </th>
                                        <th class="text-center" colspan="6">Endereço
                                            <i class="fas fa-dollar-sign"></i>
                                        </th>
                                    </tr>

                                    <tr>
                                        <th>
                                            Celular
                                        </th>
                                        <th>
                                            Residencial
                                        </th>
                                        <th>
                                            Comercial
                                        </th>
                                        <th>
                                            Rua
                                        </th>
                                        <th>
                                            Cidade
                                        </th>
                                        <th>
                                            Estado
                                        </th>
                                        <th>
                                            Nº
                                        </th>
                                        <th>
                                            Bairro
                                        </th>
                                        <th>
                                            Complemento
                                        </th>
                                    </tr>
                                </thead>
                    
                                <tbody>
                                    <tr v-for="usuario of usuarios" :key="usuario.id">
                                        <td>{{ usuario.nome }}</td>
                                        <td>{{ usuario.cpf }}</td>
                                        <td>{{ usuario.nCelular }}</td>
                                        <td>{{ usuario.nResidencial }}</td>
                                        <td>{{ usuario.nComercial }}</td>
                                        <td>{{ usuario.email}}</td>
                                        <td>{{ usuario.dtNascimento }}</td>
                                        <td>{{ usuario._embedded.idendereco.rua }}</td>
                                        <td>{{ usuario._embedded.idendereco.cidade }}</td>
                                        <td>{{ usuario._embedded.idendereco.estado }}</td>
                                        <td>{{ usuario._embedded.idendereco.numero }}</td>
                                        <td>{{ usuario._embedded.idendereco.bairro }}</td>
                                        <td>{{ usuario._embedded.idendereco.complemento }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Usuario from './services/usuarios'
import ModalEditar from './components/ModalEditar'

export default {
    components: {'app-modaleditar': ModalEditar},

    data(){
        return {
            // Guardando dados recebido em um array
            usuarios: [],
            usuario: {

            },
        }
    },

    // invocado apos a instacia ter sido criada. Carrega a nossa API
    mounted() {
        Usuario.listar().then(resposta => {
            console.log(resposta.data._embedded.usuarios)
            this.usuarios = resposta.data._embedded.usuarios
        })
    }    
}


</script>

<style>
.form-conatiner{
    padding: 45px 50px; margin-top: 20vh; border-radius: 17px 17px 17px 17px; -moz-border-radius: 17px 17px 17px 17px; -webkit-border-radius: 17px 17px 17px 17px; border: 0px solid #000000;
}

.form-shadow {
    -webkit-box-shadow: 1px 2px 23px 5px rgba(0,0,0,0.75); -moz-box-shadow: 1px 2px 23px 5px rgba(0,0,0,0.75); box-shadow: 1px 2px 23px 5px rgba(0,0,0,0.75);
}

.logo {
    font-size: 50px; font-weight: 300; color:green; padding-bottom: 10px
}

.form-conatiner {
    padding: 45px 50px;
    margin-top: 20vh;
    border-radius: 17px 17px 17px 17px;
    -moz-border-radius: 17px 17px 17px 17px;
    -webkit-border-radius: 17px 17px 17px 17px;
    border: 0px solid #000000;
}

.form-shadow {
    -webkit-box-shadow: 1px 2px 23px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 2px 23px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 2px 23px 5px rgba(0, 0, 0, 0.75);
}

.body {
    background-color: #D3D3D3;
}
</style>