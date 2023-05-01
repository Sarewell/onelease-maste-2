import React from 'react'

export default function ButtonParts({title} ) {
  return (
<button className='text-white border-2 border-purple-600 bg-purple-600 hover:bg-white hover:text-purple-600 text-xl uppercase px-12 py-2 rounded-lg shadow-xl m-6'>
{title}
</button>
  )
}
