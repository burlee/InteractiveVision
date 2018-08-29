import React from 'react'
import classes from './Button.scss'

export default (props) => {
  return (
    <button onClick={props.sendMessage} disabled={props.disabled} className={classes.Button}>{props.children}</button>
  )
}
