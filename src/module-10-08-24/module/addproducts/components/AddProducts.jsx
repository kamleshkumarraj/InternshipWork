import Button from "../../products/components/Button"
import Input from "./Input"
import image from '../../../assets/products/Image/product-image.svg'
import { RxCross2 } from "react-icons/rx"
function AddProducts() {
  return (
    <div id="customers" className="bg-[#ffffff] py-[30px] lg:py-[40px] w-full rounded-[10px]">
      <div id="product-header" className="flex items-center justify-between w-full">
        <h1 className="font-[Inter] text-left font-[500] 2xl:text-[23.78px] xl:text-[22px] lg:text-[21px] md:text-[20px] sm:text-[19px] text-[18px] 2xl:leading-[28.78px] xl:leading-[26px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-[18px] px-[20px] lg:px-[30px]" id="header">Add Product</h1>
        
      </div>
      <hr className="my-[30px]"/>

      <div id="add-products-form" className="lg:mt-[70px] sm:mt-[40px] mt-[20px] px-[30px]">
        <form action="" className="w-full p-[20x]">
          <div id="form-body" className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[80px]">
            <div id="left-part" className="flex flex-col gap-[30px]">
              <Input 
              lable={'Title'}
              type={'text'}
            />
            <Input 
              lable={'Price'}
              type={'text'}
            />
            <Input 
              lable={'Category'}
              type={'text'}
            />
            <Input 
              lable={'Slug'}
              type={'text'}
            />
            <Input 
              lable={'SKU'}
              type={'text'}
            />
            <div id="description">
              <label className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]" htmlFor="description">Description</label>
              <textarea rows={8} className="w-full p-[20x] border-[1px] border-[#0000001b] py-[10px] px-[10px] rounded-[8px] font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]" name="description" id="description"></textarea>
            </div>
            <div id="btn" className="w-[50%] my-[30px]">
              <Button />
            </div>
            
            </div>
            
            <div id="right-part" className="flex flex-col gap-[30px] ">
              <Input 
                lable={'Stock status'}
                type={'text'}
              />
              <Input 
                lable={'Available quantity'}
                type={'text'}
              />
              <Input 
                lable={'Images'}
                type={'file'}
              />
              <div id="prod-image" className="grid grid-cols-4 gap-[20px] mt-[20px]">
                <div id="img-1" className="w-full border-[1px] border-[#00000123] py-[5px] grid place-content-center bg-[#00000012] rounded-[5px] relative">
                  <div id="icon" className="absolute p-[5px] rounded-full grid place-content-center bg-[#00000012] right-[-14%] top-[-42%]">
                    <RxCross2 size={'15px'} />
                  </div>
                  <img className="w-[70%]" src={image} alt="image" />
                </div>
                <div id="img-1" className="w-full border-[1px] border-[#00000123] py-[5px] grid place-content-center bg-[#00000012] rounded-[5px] relative">
                  <div id="icon" className="absolute p-[5px] rounded-full grid place-content-center bg-[#00000012] right-[-14%] top-[-42%]">
                    <RxCross2 size={'15px'} />
                  </div>
                  <img className="w-[70%]" src={image} alt="image" />
                </div>
                <div id="img-1" className="w-full border-[1px] border-[#00000123] py-[5px] grid place-content-center bg-[#00000012] rounded-[5px] relative">
                   <div id="icon" className="absolute p-[5px] rounded-full grid place-content-center bg-[#00000012] right-[-14%] top-[-42%]">
                    <RxCross2 size={'15px'} />
                  </div>
                  <img className="w-[70%]" src={image} alt="image" />
                </div>
                
              
              </div>
              <div id="color">
                  <h1 className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]">Colors</h1>
                  <div id="color" className="flex gap-[20px] mt-[10px]">
                    <p className="w-[30px] h-[30px] rounded-full bg-[#A3BEF8]"></p>
                    <p className="w-[30px] h-[30px] rounded-full bg-[#FFD58A]"></p>
                    <p className="w-[30px] h-[30px] rounded-full bg-[#83B18B]"></p>
                    <p className="w-[30px] h-[30px] rounded-full bg-[#4078FF]"></p>
                  </div>
              </div>
              <div id="sizes">
                <h1 className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]">Sizes</h1>
                <div id="size" className="flex gap-[20px]">
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">S</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">M</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">X</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">XL</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">XML</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
  )
}

export default AddProducts
