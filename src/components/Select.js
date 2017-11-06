import React from 'react';

const Select = ( {list, handler, display, label, state, theValue} ) => {
  return (
    <div className="selector">
      <span className="selectLabel">{label}</span><select onChange={handler} value={theValue}>
        {
          list.map((item) => {
            return(
              <option value={item.id} key={item.id}>{item[display]}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Select;

//remember that the choice doesn't change
//setting some default on the option element instead of the select element??