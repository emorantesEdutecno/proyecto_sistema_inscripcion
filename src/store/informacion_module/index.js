const informacion = {
    namespaced: true,
    state:{
        usuarios:[
            {id:1, name:'Oleg', age:20},
            {id:2, name:'Alex', age:21},
            {id:3, name:'Igor', age:22},
                ],
    },
    getters:{},
    mutations:{
        ASIGNAR_INFORMACION: (state, datos)=>{
            state.usuarios.push(datos);
        },
        ELIMINAR_INFORMACION: (state, indice)=>{
            state.usuarios.splice(indice,1);
        },
    },
    actions:{
        asignarInformacion:(context, info)=>{
            context.commit('ASIGNAR_INFORMACION', info);
        },
        eliminarInformacion:(context,elindice)=>{
            context.commit('ELIMINAR_INFORMACION', elindice);
        },
    },
    modules:{}
};

export default informacion;