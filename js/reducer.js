import {ADD_DATA}from'./actions'

export function reducer(state={},action){
    switch(action.type){
        case ADD_DATA:
        return Object.assign({},state,{
            formData:{
                firstName:action.data.fName,
                lastName:action.data.lName,
                email:action.data.email
            }
        })
        default: return state
    }
}