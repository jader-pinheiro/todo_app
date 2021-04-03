import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'

//import { markAsDone } from '../actions/todoActions'
import { markAsDone, markAsPending, remove } from '../actions/todoActions'


const TodoList = props => {

    const renderRows = () => {
        //const { markAsDone, markAsPending, remove } = this.props
        const list = props.list || []

      return list.map(todo => (
        <tr key={todo.id}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>
                <IconButton style='success' icon='check' hide={todo.done} 
                    onclick={() => props.markAsDone(todo)}></IconButton>

                <IconButton style='warning' icon='undo' hide={!todo.done}
                    onclick={() => props.markAsPending(todo)}></IconButton> 

                <IconButton style='danger' icon='trash-o' hide={!todo.done}
                    onclick={() => props.remove(todo)}></IconButton>
            </td>
        </tr>
      )) 
                  
 }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>    
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}

const mapStateToProps = state => ({list: state.todo_rdc.list})
const mapDispachtToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispachtToProps)(TodoList)