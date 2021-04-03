import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


//const URL = 'http://localhost:3003/api/todos/'
const URL = 'http://localhost/public/index.php/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props) 
            this.state = {description: '', list: []}

            this.handleSearch = this.handleSearch.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.handleAdd = this.handleAdd.bind(this)
            this.handleRemove = this.handleRemove.bind(this) 
            this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
            this.handleMarkAsPending = this.handleMarkAsPending.bind(this) 
            this.handleClear = this.handleClear.bind(this)

            this.refresh()
        
    }



    refresh(description = '') {

        const urlRefresh = description === '' ? URL : `${URL}/get_desc=${description}`


            axios.get(urlRefresh)
            .then(resp => this.setState({...this.state, description, list:resp.data}))
            //console.log(description)
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        //console.log(this.state.description)
        axios.post(URL + '/description=' + description)
        .then(resp => this.refresh())
    }

    handleMarkAsDone(todo){

        axios.put(`${URL}/up_key=${todo.id}/done=1` )
        //console.log( this.state.done)
            .then(resp => this.refresh(this.state.description))
            //console.log( todo.done)
    }

    handleMarkAsPending(todo){

        axios.put(`${URL}/up_key=${todo.id}/done=0` )
      
            .then(resp => this.refresh(this.state.description))
            //console.log(todo.done)
    }

    handleRemove(todo){
        axios.delete(`${URL}/del_key=${todo.id}`)
        //axios.delete($URL + '/del_key=' + todo.id)
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()

    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'> </PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}  />

                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}  
                    handleRemove={this.handleRemove} />
                   
            </div>

        )
    }
}