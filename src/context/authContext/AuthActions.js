
//LOGIN
export const loginStart = ()=>({
    type:"LOGIN_START",
})
export const loginSucces = (user)=>({
    type:"LOGIN_SUCCES",
    payload: user
})
export const loginFailure = ()=>({
    type:"LOGIN_FAILURE",

})

//LOGOUT

export const logout = ()=>({
    type:"LOGOUT",
})