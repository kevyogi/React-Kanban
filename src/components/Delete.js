import React from 'react';

const Delete = ( {handler} ) => {
  return (
    <div>
      <input type="submit" value="Delete" onClick={handler} />
    </div>
  )
}

export default Delete;