import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { TbArrowsDownUp } from "react-icons/tb"
import TableRowCustomer from "./TableRowCustomer"

function CustomerTable() {
  return (
    <div className="w-full mt-[40px] " id="order-table">
    <table className="w-full x py-[10px]">
      <thead >
         <tr className="gap-[25px] w-full py-[10px] px-[40px] border-[1px] border-[#00000030] grid grid-cols-7 justify-items-start mb-[20px]">
          <td><h1 className="font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x]  text-center flex justify-center"><TbArrowsDownUp size={'20px'}/></h1></td>
          <td ><h1 className="font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x]  text-center flex justify-center ">Name</h1></td>
          <td className="col-start-3 col-end-5"><h1 className="font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x]  text-center flex justify-center">Email</h1></td>
          <td className="col-start-5 col-end-7"><h1 className="font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x]  text-center flex justify-center">Shipping Address</h1></td>
          <td><h1 className="font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x]  text-center flex justify-center">Actions</h1></td>
          </tr>
      </thead>
      <tbody>
          <TableRowCustomer />
          <TableRowCustomer />
          <TableRowCustomer />
          <TableRowCustomer />
          <TableRowCustomer />
          <TableRowCustomer />
          <TableRowCustomer />
          <TableRowCustomer />
      </tbody>
      
    </table>

    <div id="table-footer" className="flex justify-end w-full mt-[40px]">
      <div id="page-range" className="flex gap-[20px] items-center ml-auto pr-[140px] font-[Inter] font-[500] 2xl:text-[15.86px] xl:text-[15px] lg:text-[14.5px] md:text-[14px] sm:text-[13.5px] text-[13px]">
          <div id="icons"><MdKeyboardArrowLeft size={'24px'} /></div>
          <p className="bg-[#00000027] px-[15px] py-[5px] rounded-[5px]">1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <div id="icons"><MdKeyboardArrowRight size={'24px'} /></div>
      </div>
    </div>
  </div>
  )
}

export default CustomerTable
