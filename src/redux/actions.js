import {types} from "./types";

function usersInfoAction (data) {
    return {
        type: types.USERS_INFO,
        payload: data
    }
}

export function getUsersAction () {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(usersInfoAction(data))
    }
}
function getInfoDispatch (data){
    return {
        type: types.MORE_INFO,
        payload: data
    }
}
 export function getInfoAction (params){
    return async (dispatch)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params}`)
        const data = await response.json()
        dispatch(getInfoDispatch(data))
    }
 }



export function addUserAction (data) {
    return async function () {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch('https://jsonplaceholder.typicode.com/ussers',options)
            .then(response => {
                if (response.status === 201) {
                    alert("user registered")
                }else if(response.status === 404) {
                    alert("404 not found")
                }
            })
    }
}