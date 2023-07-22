<template>
    <div id="InscripcionView">
        <h1>Inscripcion View</h1>
        <h2><strong>Sistema de Inscripción de Usuarios</strong></h2>
        <RegistroComponent></RegistroComponent>
        <InformacionComponent></InformacionComponent>
    </div>
</template>

<script>
import RegistroComponent from '@/components/RegistroComponent.vue';
import InformacionComponent from '@/components/InformacionComponent.vue';
export default{
    name: 'InscripcionView',
    components:{
        RegistroComponent,
        InformacionComponent
    },
    data: function(){
        return{

        }
    },
    methods:{},
    computed:{},
    watch:{}
}
</script>

<style scoped>
#InscripcionView{
    background-color:darkseagreen;
    color:white;
}
</style>

