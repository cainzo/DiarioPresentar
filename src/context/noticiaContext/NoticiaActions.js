export const getNoticiasStart = ()=>({
    type:"GET_NOTICIAS_START",
})
export const getNoticiasSuccess = (noticias)=>({
    type:"GET_NOTICIAS_SUCCESS",
    payload: noticias,
})
export const getNoticiasFailure = ()=>({
    type:"GET_NOTICIAS_FAILURE",

})
//acctions para post (crear nueva noticia)
export const crearNoticiaStart = ()=>({
    type:"CREAR_NOTICIA_START",
})
export const crearNoticiaSuccess = (noticia)=>({
    type:"CREAR_NOTICIA_SUCCESS",
    payload: noticia,
})
export const crearNoticiaFailure = ()=>({
    type:"CREAR_NOTICIA_FAILURE",

})
//acctions para update
export const updateNoticiaStart = ()=>({
    type:"UPDATE_NOTICIA_START",
})
export const updateNoticiaSuccess = (noticia)=>({
    type:"UPDATE_NOTICIA_SUCCESS",
    payload: noticia,
})
export const updateNoticiaFailure = ()=>({
    type:"UPDATE_NOTICIA_FAILURE",

})
//acctions para delete
export const deleteNoticiaStart = ()=>({
    type:"DELETE_NOTICIA_START",
})
export const deleteNoticiaSuccess = (id)=>({
    type:"DELETE_NOTICIA_SUCCESS",
    payload: id,
})
export const deleteNoticiaFailure = ()=>({
    type:"DELETE_NOTICIA_FAILURE",

})

