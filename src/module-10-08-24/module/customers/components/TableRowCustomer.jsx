
function TableRowCustomer() {
  return (
    <tr className="gap-[25px] w-full py-[15px] px-[40px] font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x] items-center border-b-[1px] border-b-[#00000030] grid grid-cols-7 justify-items-start flex-wrap">
        <td><p className="px-[15px] py-[10px] bg-[#00000012] text-[blue] rounded-[8px]">KK</p></td>
        <td ><p>Esther Howard</p></td>
        <td className="w-full col-start-3 col-end-5"><p>esther.howard@gmail.com</p></td>
        <td className="col-start-5 col-end-7"><p>8642 Yule Street, Arvada CO 80007</p></td>
        <td>...</td>
    </tr>
  )
}

export default TableRowCustomer
