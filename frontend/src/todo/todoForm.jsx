import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, search, add } from '../actions/todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyhandler = this.keyhandler.bind(this)
    }

    componentWillMount(){
        this.props.search()

    }

    keyhandler(e){
        const { add, search, description } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }else if (e.key === 'Escape') {

            props.handleClear()
        }
    }

    render(){
        const { add, search, description } = this.props
        return (

            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                       placeholder='Adicione uma tarefa'
                       onChange={this.props.changeDescription}
                       onKeyUp={this.keyhandler}
                       value={this.props.description}></input>
                 </Grid>
        
                 <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                         onclick={ () => add(description) }></IconButton>
        
                    <IconButton style='info' icon='search'
                         onclick={() => search() }></IconButton> 
        
                    <IconButton style='default' icon='close'
                         onclick={this.props.handleClear}></IconButton>                  
                </Grid>    
                
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo_rdc.description})
const mapDispachtToProps = dispatch => bindActionCreators({ changeDescription, search, add }, dispatch)
export default connect(mapStateToProps, mapDispachtToProps)(TodoForm)