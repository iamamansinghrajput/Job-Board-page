import React from 'react'

const Applicationbox = ({data}) => {
  const {title,date,status} = data;
  return (
     <div className="bg-white border border-gray-200 rounded-lg p-5 flex justify-between items-start shadow-sm max-w-6xl mx-auto">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span className="mr-2">📅</span>
          <span>Applied on {date}</span>
        </div>
      </div>
      
      <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
        {status}
      </span>
    </div>
  )
}

export default Applicationbox