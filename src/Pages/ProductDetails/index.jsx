import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RiRobot3Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { GoGitCompare } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import ProductsSlider from '../../components/ProductSlider';




const ProductDelails = () => {

  const [productActionIndex, SetProductActionIndex] = useState(null);
  const [heartVal, setHeartVal] = useState(false);
  const [activeTab, etActiveTab] = useState(0);
  const initialCustomers = [
    {
      id: 1,
      name: "Mahamed Abdi",
      date: "20/02/2026",
      comment: "Good website",
      rating: 5,
      image: "https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg"
    },
    {
      id: 2,
      name: "Ahmed Cumar",
      date: "22/02/2026",
      comment: "You are good website",
      rating: 4,
      image: "https://i.pinimg.com/736x/5d/da/5c/5dda5cb40026b40b2f09d5ec61733cbf.jpg",
    },
  ];

  const toggleHeart = () => {
    setHeartVal((heartVal) => !heartVal);
  };





  const [Customers, setCustomers] = useState(initialCustomers);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(3);

  const handleAddReview = () => {
    if (!newComment) return;

    const newReview = {
      id: Date.now(),
      name: "Anonymous", // Halkan waxaad gelin kartaa input for name
      date: new Date().toLocaleDateString(),
      comment: newComment,
      rating: newRating,
    };

    setCustomers((prev) => [newReview, ...prev]);
    setNewComment("");
    setNewRating(3);
  };



  return (
    <>
      <div className="py-5">
        <div className="container pl-2  ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/" className="link"
            >
              Fation
            </Link>
          </Breadcrumbs>
        </div>


      </div>

      <section className='bg-white py-5'>
        <div className=" container flex  gap-4 items-center">
          <div className="productZoomContainer !w-[40%] ">
            <ProductZoom />
          </div>
          <div className="productcontent !w-[60%] pr-20 ">
            <h1 className='text-[25px] font-[700] !capitalize mb-3'>Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women| saree | sarees</h1>
            <div className="flex items-center">
              <span className='text-gray-400 text-[13px]'>Brands : <span className='font-[500] text-black capitalize opacity-75'>House of Chikankari
              </span></span>
              <Rating name="size-small" defaultValue={5} size="small" readOnly />

              <span className='text-gray-400 text-[13px] cursor-pointer'>{" "} (7) Review</span>
            </div>

            <div className="flex items-center gap-4 my-3">
              <span className="OldPrice line-through text-gray-500 text-[20px] font-[600]">$23.00</span>
              <span className="NewPrice text-[#ff5252] text-[20px] font-[700]">$20.99</span>
              <span className='text-[14px] '>Available In Stock : <span className='text-[14px] font-bold text-green-600'>134 Items</span></span>
            </div>
            <p className='pr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="flex items-center my-3 gap-3">
              <span>Size : </span>

              <Button
                className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 0 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => SetProductActionIndex(0)}
              >
                S
              </Button>

              <Button
                className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 1 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => SetProductActionIndex(1)}
              >
                M
              </Button>

              <Button
                className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 2 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => SetProductActionIndex(2)}
              >
                L
              </Button>
              <Button
                className={`!w-8 h-8 !min-w-8 !font-semibold !border !border-gray-300 ${productActionIndex === 3 ? "!bg-[#ff5252] !text-white" : "!text-black hover:!bg-[#f0631d10]"
                  }`}
                onClick={() => SetProductActionIndex(3)}
              >
                XL
              </Button>
            </div>

            <p>Free Shipping (Est. Delivery Time 1-2 Days)</p>

            <div className="flex items-center mt-2 gap-4 m-auto">
              <div className="qtyBoxWarrber w-[80px] ">
                <QtyBox />

              </div>
              <div className="flex gap-4  ">
                <Button className="btn-org gap-2 !mt-0 "><MdOutlineShoppingCart className="text-[20px]" /> Add To Cart</Button>
                <Button className="!border !border-[#ff5252] p-[5px 15px] !text-black  "> <RiRobot3Line className="text-[30px] !bg-transparent" /></Button>
              </div>

            </div>
            <div className="flex items-center gap-4  mt-3">
              <span
                onClick={toggleHeart}
                className="flex items-center gap-2 text-[14px] font-[500] cursor-pointer link"
              >
                {heartVal ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
                Add To WishList
              </span>
              <span className='flex items-center gap-2 text-[14px] link  font-[500]'><GoGitCompare />Add To Compaire</span>
            </div>

          </div>

        </div>
        <div className="container mt-10">
          <div className="flex items-center gap-8 border-b border-[rgba(0,0,0,0.2)] pb-4">
            <span className={`link text-[18px] p-1 rounded-md cursor-pointer font-[600] ${activeTab === 0 && 'text-[#ff5252] border border-[#ff5252] '}`} onClick={() => etActiveTab(0)}>Description</span>
            <span className={`link text-[18px] p-1 rounded-md cursor-pointer font-[600] ${activeTab === 1 && 'text-[#ff5252] border border-[#ff5252] '}`} onClick={() => etActiveTab(1)}>Product Details</span>
            <span className={`link text-[18px] p-1 rounded-md  cursor-pointer font-[600] ${activeTab === 2 && 'text-[#ff5252] border border-[#ff5252] '}`} onClick={() => etActiveTab(2)}>Revieus (5)</span>
          </div>
          {
            activeTab === 0 && (<div className="shadow-md w-full py-5 px-10 rounded-md">
              <p className='mb-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit blanditiis doloribus deserunt ad excepturi sed animi voluptatum distinctio possimus, ratione, quae explicabo amet cum assumenda deleniti nemo aliquid itaque.</p>
              <h4 className='text-[16px] font-bold text-black'>Lightweight Design</h4>
              <p className='my-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit blanditiis doloribus deserunt ad excepturi sed animi voluptatum distinctio possimus, ratione, quae explicabo amet cum assumenda deleniti nemo aliquid itaque ratione, quae explicabo amet cum assumenda deleniti nemo aliquid itaque.</p>
              <h4 className='text-[16px] font-bold text-black'>Free Shipping & Return</h4>
              <p className='my-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit blanditiis doloribus deserunt ad excepturi sed animi voluptatum distinctio possimus,</p>
              <h4 className='text-[16px] font-bold text-black'>Mony Back Guarentee</h4>
              <p className='my-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit blanditiis </p>
              <h4 className='text-[16px] font-bold text-black'>OnLine Support </h4>
              <p className='my-[10px]'>Lorem ipsum dolor sit amet consectetur </p>
            </div>)
          }
          {activeTab === 1 && (


            <div className="bg-neutral-primary-soft rounded-base">
              <table className="w-full text-sm text-left shadow-lg border-2 border-gray-200 ">
                <tbody>

                  <tr className='bg-blue-200 mt-8'>
                    <th className="px-6  py-3 font-medium">Stand Up</th>
                    <td className="px-6  py-3">35″L x 24″W x 37-45″H (front to back wheel)</td>
                  </tr>

                  <tr className='bg-gray-100'>
                    <th className="px-6 py-3 font-medium">Folded (w/o wheels)</th>
                    <td className="px-6 py-3">32.5″L x 18.5″W x 16.5″H</td>
                  </tr>

                  <tr className=' bg-blue-200 '>
                    <th className="px-6 py-3 font-medium">Folded (w/ wheels)</th>
                    <td className="px-6 py-3">32.5″L x 24″W x 18.5″H</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-3 font-medium">Door Pass Through</th>
                    <td className="px-6 py-3">24″</td>
                  </tr>

                  <tr className=' bg-blue-200 '>
                    <th className="px-6 py-3 font-medium">Frame</th>
                    <td className="px-6 py-3">Aluminum</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-3 font-medium">Weight (w/o wheels)</th>
                    <td className="px-6 py-3">20 LBS</td>
                  </tr>

                  <tr className=' bg-blue-200 '>
                    <th className="px-6 py-3 font-medium">Weight Capacity</th>
                    <td className="px-6 py-3">60 LBS</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-3 font-medium">Width</th>
                    <td className="px-6 py-3">24″</td>
                  </tr>

                  <tr className=' bg-blue-200 '>
                    <th className="px-6 py-3 font-medium">Handle height</th>
                    <td className="px-6 py-3">37-45″</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-3 font-medium">Wheels</th>
                    <td className="px-6 py-3">12″ air / wide track slick tread</td>
                  </tr>

                  <tr className=' bg-blue-200 '>
                    <th className="px-6 py-3 font-medium">Seat back height</th>
                    <td className="px-6 py-3">21.5″</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-3 font-medium">Head room</th>
                    <td className="px-6 py-3">25″</td>
                  </tr>

                  <tr className=' bg-blue-200 '>
                    <th className="px-6 py-3 font-medium">Color</th>
                    <td className="px-6 py-3">Black, Blue, Red, White</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-3 font-medium">Size</th>
                    <td className="px-6 py-3">M, S</td>
                  </tr>

                </tbody>
              </table>
            </div>


          )}
          {activeTab === 2 && (
            <div className="producReveiwContainer flex flex-col gap-4 w-[60%] p-4  border-2 border-gray-300 rounded-md">
              <h2 className="text-[16px] font-[600] border-b pb-2">
                Customer questions & answers
              </h2>

              <div className="max-h-[300px] overflow-y-scroll flex flex-col gap-3">
                {Customers.map((customer) => (
                  <div key={customer.id} className="relative pl-10 shadow-lg py-2  flex items-center gap-4">
                    <div className='w-[70px] h-[70px] overflow-hidden rounded-full shadow-2xl'>
                      <img src={customer.image} alt="Cusomerimge" />
                    </div>
                    <div>
                      <h2 className="text-lg capitalize font-semibold">{customer.name}</h2>
                      <span className="text-sm text-gray-500">{customer.date}</span>
                      <p className="mt-2">{customer.comment}</p>

                      <div className="absolute right-3 top-3">
                        <Rating value={customer.rating} size="small" readOnly />
                      </div>
                    </div></div>
                ))}
              </div>

              {/* Add Review Form */}
              <div className="flex flex-col gap-3 w-full max-w-md mt-4">
                <h3 className="text-lg font-semibold">Add a review</h3>

                <textarea
                  placeholder="Your comment"
                  className="w-full h-44 px-3 py-2 border border-gray-300 rounded-md focus:outline-none resize-none shadow-lg"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />

                <div className="flex items-center gap-2">
                  <span>Rating:</span>
                  <Rating
                    name="review-rating"
                    value={newRating}
                    onChange={(_, newValue) => setNewRating(newValue)}
                    size="small"
                    precision={0.5}
                  />
                </div>

                <Button variant="contained" className="btn-org" onClick={handleAddReview}>
                  Submit Review
                </Button>
              </div>
            </div>

          )}





        </div>
          <div className="Container p-10">
            <h2 className='text-[20px] font-[600]'> Related Products</h2>
            <ProductsSlider items={6} />


          </div>
      </section>
    </>
  )
}

export default ProductDelails