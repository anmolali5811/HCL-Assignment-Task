import React from 'react'

const Card = ({project, setCurProject}) => {
  return (
    <div className="w-96 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex">
                <div className="grow">
                {project.Title}
                </div>
                <div className="flex-none flex gap-2"> 
                <span onClick={()=>setCurProject(project)} data-modal-target="modal" data-modal-toggle="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </span>
                </div>
            </div>
            <p className="text-gray-700 text-base">
                Technologies
            </p>
            <div className="pt-1 pb-1">
            {project.Technologies?.split(',').map((item ,i) => 
            <span key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-1 mb-1">{item}</span>
            )}
            </div>
            <p className="text-gray-700 text-base">
                Other Information Availability
            </p>
            <p className="text-gray-400 text-base">
                {project.Other_Information_Availability}
            </p>
        </div>
        
    </div>
  )
}

export default Card