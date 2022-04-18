export const getCategoriasStart = ()=>({
    type:"GET_CATEGORIAS_START",
})
export const getCategoriasSuccess = (categorias)=>({
    type:"GET_CATEGORIAS_SUCCESS",
    payload: categorias,
})
export const getCategoriasFailure = ()=>({
    type:"GET_CATEGORIAS_FAILURE",

})
//acctions para post (crear nueva noticia)
export const crearCategoriaStart = ()=>({
    type:"CREAR_CATEGORIA_START",
})
export const crearCategoriaSuccess = (categoria)=>({
    type:"CREAR_CATEGORIA_SUCCESS",
    payload: categoria,
})
export const crearCategoriaFailure = ()=>({
    type:"CREAR_CATEGORIA_FAILURE",

})

//acctions para delete
export const deleteCategoriaStart = ()=>({
    type:"DELETE_CATEGORIA_START",
})
export const deleteCategoriaSuccess = (id)=>({
    type:"DELETE_CATEGORIA_SUCCESS",
    payload: id,
})
export const deleteCategoriaFailure = ()=>({
    type:"DELETE_CATEGORIA_FAILURE",

})
