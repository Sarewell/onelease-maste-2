import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationData } from '../data/NavigationData'



export default function Navigation() {
  return (
    <div>
        <ul className='flex text-xl space-x-10 toto'>
        {NavigationData.map((item) => (
					<Link to={item.url} key={item.id}>
						<li>{item.name}</li>
					</Link>
				))}
        </ul>
    </div>
  )
}
