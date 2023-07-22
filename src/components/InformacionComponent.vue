<template>
    <div id="InformacionComponent">
        <h1>Informacion Component</h1>
        <div v-for="usuario in usuarios" v-bind:key="usuario.id" class="tarjetas">
            <b-card
                v-bind:title="usuario.name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    {{  usuario.age }}
                </b-card-text>

                <b-button href="#" variant="danger" v-on:click.prevent="eliminar(usuario.id)">Eliminar</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default{
    name: 'InformacionComponent',
    data: function(){
        return{
        }
    },
    methods:{
        ...mapActions('informacion',['eliminarInformacion']),
        eliminar:function(id){
            console.log('id: ',id);
            let indiceArreglo = this.usuarios.findIndex( elemento=>elemento.id== id);
            console.log('indiceArreglo', indiceArreglo);
            let respuesta = confirm('¿Desea eliminar el registro?');
            if(respuesta == true){
                this.eliminarInformacion(indiceArreglo);
            }     
        },
    },
    computed:{
        ...mapState('informacion', ['usuarios']),
    },
    watch:{}
}
</script>

<style scoped>
#InformacionComponent{
    background-color:green;
    color: white;
    margin: 3%;
}

.tarjetas{
    display: inline-block;
    margin: 2%;
}
</style>

