import React from 'react'

import If from '../utils/if'

export default props => (

   <If test={!props.hide}>
        <button className={'btn btn-'+ props.style} onClick={props.onclick}>
             <i className={'fa fa-'+ props.icon}></i>
        </button>
    </If>
)

