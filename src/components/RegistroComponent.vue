<template>
    <div id="RegistroComponent">
        <h1>Registro Component</h1>

        <form>
        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">
                <b-col col md="6"><label for="txtNombre">Nombre: </label></b-col>
                <b-col col md="6"><input type="text" id="txtNombre" v-model="form.name"></b-col>
            </b-row>

            <b-row class="justify-content-md-center">
                <b-col col md="6"><label for="txtEdad">Edad: </label></b-col>
                <b-col col md="6"> <input type="text" id="txtEdad" v-model="form.age"></b-col>
            </b-row>

            <b-row>
                <b-col col md="12"><b-button variant="warning" v-on:click.prevent="agregar">Agregar Usuario</b-button></b-col>
            </b-row>
        </b-container>
        </form>

        <p>{{ form.nombre }} - {{  form.edad }} </p>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default{
    name: 'RegistroComponent',
    data: function(){
        return{
            form:{
                id:'',
                name:'',
                age:''
            },
        }
    },
    methods:{
        ...mapActions('informacion',['asignarInformacion'] ),
        agregar:function(){
            let nuevoId = this.usuarios.length + 1;
            this.form.id = nuevoId;
            let data = { ...this.form};
            this.asignarInformacion(data);
            this.limpiar();
        },
        limpiar: function(){
            this.form.id='';
            this.form.name='';
            this.form.age='';
        }
    },
    computed:{
        ...mapState('informacion', ['usuarios']),
    },
    watch:{}
}
</script>

<style scoped>
#RegistroComponent{
    background-color:blue;
    color: white;
    margin: 3%;
}
</style>

