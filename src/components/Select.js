import React from 'react';

const Select = ( {list, handler, display, label} ) => {
  return (
    <div className="selector">
      <span className="selectLabel">{label}</span><select onChange={handler}>
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