import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'


const QtyBox = () => {

  const [QtyVal, setQtyVal] = useState(1)

  const PlusQty =()=>{
    setQtyVal(QtyVal+1)
    if (QtyVal === 999){
      setQtyVal(999)

    }
    else{
      setQtyVal(QtyVal+1)

    }
  }
  const minusQty =()=>{
    if (QtyVal === 1){
      setQtyVal(1)
    }
    else{
    setQtyVal(QtyVal-1)
    }

  }
  return (
    <div className='QtyBox flex items-center relative overflow-hidden'>
      <input type="number" name="" id="" className='w-full h-[45px] p-2 text[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md font-bold pl-3 ' value={QtyVal}
       
         />

      <div className="flex items-center flex-col absolute top-0 right-0 border-l border-[rgba(0,0,0,0.2)] ">
        <Button className=' !min-w-[20px] !text-black !h-[23px] !rounded-none hover:!bg-[#f1f1f1]' onClick={PlusQty}><FaAngleUp  className='!text-[12px] !opacity-55'/></Button>
        <Button className=' !min-w-[20px] !text-black !h-[23px] !rounded-none hover:!bg-[#f1f1f1]' onClick={minusQty}><FaAngleDown  className='!text-[12px] !opacity-55'/></Button>
      </div>
      
    </div>
  )
}

export default QtyBox