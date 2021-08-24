import { CREATE_CATEGORY,  DELETE_CATEGORY, GET_CATEGORIES, ERROR } from './types'


export function createCategory(category, token){
    return (dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                ...category
            })
        }
        fetch('http://localhost:3000/categories', dataObject)
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    localStorage.setItem('token', json.token)
                    dispatch({type: CREATE_CATEGORY, payload: json})
               })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })

    }
}

export function deleteCategory(id, token){
    return(dispatch)=> {
        fetch(`http://localhost:3000/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => dispatch({type: DELETE_CATEGORY, payload: json}))
        .catch(error => {
            return dispatch({type: ERROR, payload: error})
        })
    }
}

export function getCategories(){
    return(dispatch) => {
        fetch("http://localhost:3000/categories")
        .then(resp => resp.json())
        .then(json => dispatch({type: GET_CATEGORIES, payload: json}))
        .catch(error => {
            return dispatch({type: ERROR, payload: error})
        })
    }
}

