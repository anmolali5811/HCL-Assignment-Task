import React from 'react'
import Card from './Card'

function List({projects, setCurProject}) {
  return (
    <div className='px-10 my-5 flex flex-wrap justify-between'>
        {projects?.map((project) => <Card setCurProject={setCurProject} key={project._id} project={project} />)}
    </div>
  )
}

export default List