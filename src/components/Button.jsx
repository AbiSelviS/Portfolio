import React from 'react'

const Button = (props) => {
  return (
    <div>
        <a href={props.links} >
      <button className={props.className} style={{color:props.colrs,backgroundColor:props.bg,borderRadius:props.br,fontSize:props.fs,border:props.bd,padding:props.pd,marginLeft:props.ml,fontWeight:props.fw ,cursor:props.c,display:props.di}}>{props.name}</button>
      </a>
    </div>
  )
}

export default Button
