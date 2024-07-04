import React from 'react'
import Input from '../../Input'

const category = () => {
  return (
<div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
          <Input
            value="sneakers"
            title="Cachorro"
            name="test"
          />
           <Input
            value="sneakers"
            title="Gato"
            name="test"
          />

      </div>
</div>
  )
}

export default category
