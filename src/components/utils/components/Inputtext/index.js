import React from 'react'

export default function Inputtext(props) {
  return (<input type={props?.type} className={props?.className} name={props.name} value={props.text} placeholder={props?.placeholder} onChange={props?.handleChangeText} required/>);
}
