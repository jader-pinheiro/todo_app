import axios from 'axios'


const URL = 'http://localhost/public/index.php/api/todos'

export const changeDescription = e =>({

    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value

})

export const search = () => {
    const request = axios.get(URL)
    return {
        type:'TODO_SEARCHED',
        payload: request
    }

}

export const add = (description) => {
    return dispatch => {
        axios.post(URL + '/description=' + description )
             .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data}))
             .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/up_key=${todo.id}/done=1` )
             .then(resp => dispatch(search()))
    }
}

    export const markAsPending = (todo) => {
        return dispatch => {
            axios.put(`${URL}/up_key=${todo.id}/done=0`)
                 .then(resp => dispatch(search()))
        }
    }     
        
        export const remove = (todo) => {
            return dispatch => {
                axios.delete(`${URL}/del_key=${todo.id}`)
                     .then(resp => dispatch(search()))
            }      



    }

