import { Link } from "react-router-dom";


const PanerBoxV2 = (props)=>{
  return(
   <div className="panerboxv2 w-full h-[200px] overflow-hidden rounded-md group relative border-2 border-[#ff5252]">
      <img src={props.image} alt="" className="w-full transition-all duration-300 group-hover:scale-105"/>

      <div className={`info absolute top-0 ${props.info === "left" ? 'left-0' : 'right-0 '} w-[50%] h-[100%] z-50 p-5  flex flex-col gap-2`}>
        <h2 className="text-[20px] font-[800]">Samsung Gear VR Camera</h2>
        <span className="text-[25px] font-[800] text-[#ff5252]">$129.99</span>

        <Link to='/me' className="hover:underline text-[16px] font-[600] link w-24">SHOP NOW</Link>
      </div>
     
   </div>
  )
}
export default PanerBoxV2;