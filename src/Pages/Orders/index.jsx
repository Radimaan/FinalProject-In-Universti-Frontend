import React, { useState } from 'react'
import AccountSideBar from '../../components/AccounSideBar'
import { Button } from '@mui/material'
import { FaAngleDown } from 'react-icons/fa6'
import Badge from '../../components/Badge'
import { Collapse } from "react-collapse"

const Orders = () => {

  const [openOrder, setOpenOrder] = useState(false)
  const [openOrder2, setOpenOrder2] = useState(false)

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">

        {/* sidebar */}
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        {/* orders */}
        <div className="col2 w-[70%]">

          <h2 className="text-[22px] font-bold">My Orders</h2>
          <p>
            There are <span className="primary font-bold">2</span> Orders
          </p>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">

            <table className="w-full text-sm text-left text-gray-500">

              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>

                  <th className="px-3 py-3"></th>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Payment ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Address</th>
                  <th className="px-6 py-3">Pincode</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">User ID</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>

                </tr>
              </thead>

              <tbody>

                {/* ORDER ROW */}
                <tr className="bg-white border-b">

                  <td className="px-3 py-4">
                    <Button
                      onClick={() => setOpenOrder(!openOrder)}
                      className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                    >
                      <FaAngleDown
                        className={`transition duration-300 ${openOrder ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </td>

                  <td className="px-6 py-4 font-medium">
                    <span className="primary">#12345qwedr345356</span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="primary">PAY-ww56256eg</span>
                  </td>

                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">123-456-7890</td>
                  <td className="px-6 py-4">New York, USA</td>
                  <td className="px-6 py-4">12345</td>
                  <td className="px-6 py-4">$19.99</td>
                  <td className="px-6 py-4">john@example.com</td>

                  <td className="px-6 py-4">
                    <span className="primary">U-102</span>
                  </td>

                  <td className="px-6 py-4">
                    <Badge status="Pending"/>
                  </td>

                  <td className="px-6 py-4">
                    2024-05-01
                  </td>

                </tr>

                {/* COLLAPSE ROW */}
                <tr>
                  <td colSpan={10} className="p-0 bg-[#f8f8f8] pl-10">

                    <Collapse isOpened={openOrder}>

                      <div className="bg-[#f8f8f8] p-4">

                        <table className="w-full text-sm text-left">

                          <thead className="text-xs uppercase">
                            <tr>
                              <th className="px-4 py-2">Product ID</th>
                              <th className="px-4 py-2">Title</th>
                              <th className="px-4 py-2">Image</th>
                              <th className="px-4 py-2">Qty</th>
                              <th className="px-4 py-2">Price</th>
                              <th className="px-4 py-2">Subtotal</th>
                            </tr>
                          </thead>

                          <tbody>

                            <tr className=" border-b">

                              <td className="px-4 py-3">
                                <span className="primary">pr1234647</span>
                              </td>

                              <td className="px-4 py-3">
                                efwjniqergnowergjnv
                              </td>

                              <td className="px-4 py-3">
                                <img
                                  src="https://api.spicezgold.com/download/file_1734529571688_zoom_1-1713900137.webp"
                                  className="w-[40px] h-[40px] rounded-md object-cover"
                                />
                              </td>

                              <td className="px-4 py-3">5</td>
                              <td className="px-4 py-3">$423</td>
                              <td className="px-4 py-3">$1604</td>

                            </tr>

                          </tbody>

                        </table>

                      </div>
                      <div className="bg-[#f8f8f8] p-4">

                        <table className="w-full text-sm text-left">

                          <thead className="text-xs uppercase">
                            <tr>
                              <th className="px-4 py-2">Product ID</th>
                              <th className="px-4 py-2">Title</th>
                              <th className="px-4 py-2">Image</th>
                              <th className="px-4 py-2">Qty</th>
                              <th className="px-4 py-2">Price</th>
                              <th className="px-4 py-2">Subtotal</th>
                            </tr>
                          </thead>

                          <tbody>

                            <tr className=" border-b">

                              <td className="px-4 py-3">
                                <span className="primary">pr1234647</span>
                              </td>

                              <td className="px-4 py-3">
                                efwjniqergnowergjnv
                              </td>

                              <td className="px-4 py-3">
                                <img
                                  src="https://api.spicezgold.com/download/file_1734529571688_zoom_1-1713900137.webp"
                                  className="w-[40px] h-[40px] rounded-md object-cover"
                                />
                              </td>

                              <td className="px-4 py-3">5</td>
                              <td className="px-4 py-3">$423</td>
                              <td className="px-4 py-3">$1604</td>

                            </tr>

                          </tbody>

                        </table>

                      </div>

                    </Collapse>

                  </td>
                </tr>

              </tbody>

            </table>

          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">

            <table className="w-full text-sm text-left text-gray-500">

              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>

                  <th className="px-3 py-3"></th>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Payment ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Address</th>
                  <th className="px-6 py-3">Pincode</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">User ID</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>

                </tr>
              </thead>

              <tbody>

                {/* ORDER ROW */}
                <tr className="bg-white border-b">

                  <td className="px-3 py-4">
                    <Button
                      onClick={() => setOpenOrder2(!openOrder2)}
                      className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                    >
                      <FaAngleDown
                        className={`transition duration-300 ${openOrder2 ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </td>

                  <td className="px-6 py-4 font-medium">
                    <span className="primary">#12345qwedr345356</span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="primary">PAY-ww56256eg</span>
                  </td>

                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">123-456-7890</td>
                  <td className="px-6 py-4">New York, USA</td>
                  <td className="px-6 py-4">12345</td>
                  <td className="px-6 py-4">$19.99</td>
                  <td className="px-6 py-4">john@example.com</td>

                  <td className="px-6 py-4">
                    <span className="primary">U-102</span>
                  </td>

                  <td className="px-6 py-4">
                    <Badge status="Pending"/>
                  </td>

                  <td className="px-6 py-4">
                    2024-05-01
                  </td>

                </tr>

                {/* COLLAPSE ROW */}
                <tr>
                  <td colSpan={10} className="p-0 bg-[#f8f8f8] pl-10">

                    <Collapse isOpened={openOrder2}>

                      <div className="bg-[#f8f8f8] p-4">

                        <table className="w-full text-sm text-left">

                          <thead className="text-xs uppercase">
                            <tr>
                              <th className="px-4 py-2">Product ID</th>
                              <th className="px-4 py-2">Title</th>
                              <th className="px-4 py-2">Image</th>
                              <th className="px-4 py-2">Qty</th>
                              <th className="px-4 py-2">Price</th>
                              <th className="px-4 py-2">Subtotal</th>
                            </tr>
                          </thead>

                          <tbody>

                            <tr className=" border-b">

                              <td className="px-4 py-3">
                                <span className="primary">pr1234647</span>
                              </td>

                              <td className="px-4 py-3">
                                efwjniqergnowergjnv
                              </td>

                              <td className="px-4 py-3">
                                <img
                                  src="https://api.spicezgold.com/download/file_1734529571688_zoom_1-1713900137.webp"
                                  className="w-[40px] h-[40px] rounded-md object-cover"
                                />
                              </td>

                              <td className="px-4 py-3">5</td>
                              <td className="px-4 py-3">$423</td>
                              <td className="px-4 py-3">$1604</td>

                            </tr>

                          </tbody>

                        </table>

                      </div>
                      <div className="bg-[#f8f8f8] p-4">

                        <table className="w-full text-sm text-left">

                          <thead className="text-xs uppercase">
                            <tr>
                              <th className="px-4 py-2">Product ID</th>
                              <th className="px-4 py-2">Title</th>
                              <th className="px-4 py-2">Image</th>
                              <th className="px-4 py-2">Qty</th>
                              <th className="px-4 py-2">Price</th>
                              <th className="px-4 py-2">Subtotal</th>
                            </tr>
                          </thead>

                          <tbody>

                            <tr className=" border-b">

                              <td className="px-4 py-3">
                                <span className="primary">pr1234647</span>
                              </td>

                              <td className="px-4 py-3">
                                efwjniqergnowergjnv
                              </td>

                              <td className="px-4 py-3">
                                <img
                                  src="https://api.spicezgold.com/download/file_1734529571688_zoom_1-1713900137.webp"
                                  className="w-[40px] h-[40px] rounded-md object-cover"
                                />
                              </td>

                              <td className="px-4 py-3">5</td>
                              <td className="px-4 py-3">$423</td>
                              <td className="px-4 py-3">$1604</td>

                            </tr>

                          </tbody>

                        </table>

                      </div>

                    </Collapse>

                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Orders