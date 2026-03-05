import React from 'react'

const Badge = (props) => {
  return (
    <span className={`inline-block py-1 px-3 text-[11px] capitalize rounded-full ${props.status === "Pending" && 'bg-[#ff5252] text-white'} ${props.status === "Confirm" && 'bg-green-500 text-white'} ${props.status === "Delivered" && 'bg-green-700 text-white'} `}>{props.status}</span>
  )
}

export default Badge