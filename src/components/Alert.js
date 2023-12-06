import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // if props.alert is null then baad wala fxn execute nhi hoga wo fxn me tabhi jayega jab props.alert null nhi hoga
    // if props.alert null ho gaya then props.alert.type/msg becomes undefined
                                         // here we have to give JS so that alert can get the type when varied
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
  </div>
  )
}
