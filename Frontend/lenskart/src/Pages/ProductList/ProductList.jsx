import React, { useEffect } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import style from "./ProductList.module.css"
import { Switch, Stack, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { BiSortUp } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux"
import { getData } from '../../Redux/ProductReducer/Product.action';
import { useLocation, useSearchParams } from "react-router-dom"


const ProductList = () => {

  const dispatch = useDispatch()
  const productsData = useSelector((store) => store.ProductReducer.product)
  const isLoading = useSelector((store) => store.ProductReducer.isLoading)
  const isError = useSelector((store) => store.ProductReducer.isError)
  const location = useLocation()
  const [searchParams] = useSearchParams()


  useEffect(() => {
    
    const order = searchParams.get("order")
    
    let paramObj = {
      params: {
        size: searchParams.getAll("size"),
        _sort: order && "product_price",
        _order: order && order
      }
    }
    
    dispatch(getData(paramObj))
    
  }, [location.search])
  
  // console.log(productsData)


  return (
    <>
      <div className={style.Product_List_Main_Container_Shivam}>
        <div className={style.All_Kids_EyeGlass_Main_Section}>

          <div className={style.All_Kids_Section_Inside_H_One_tag}>
            <h1>ALL KIDS EYEGLASSES</h1>
          </div>


          <div className={style.All_Kids_Section_Inside_View_Frames_And_button_Section}>

            <h2>VIEW FRAMES</h2>
            <Stack direction='row'>
              <Switch className={style.Switch_Button} size="lg" colorScheme='teal' />
            </Stack>

            <p>VIEW 3D TRY ON</p>

          </div>


          <div className={style.All_Kids_Section_Inside_Sort_Section}>

            <BiSortUp color='#33b7aa' />
            <h1>Sort By</h1>

            <select>
              <option value="Best Sellers">Best Sellers</option>
              <option value="Price : Hight to Low">Price : Hight to Low</option>
              <option value="Price :  Low to Heigh">Price :  Low to Heigh</option>
            </select>

          </div>



        </div>

        <div className={style.Product_Cart_Main_section_In_Product_List_File}>

          {productsData && productsData.length > 0 && productsData.map((el) => {
            return <ProductCard key={el.id} data={el} />
          })}
        </div>
      </div>
    </>
  )
}

export default ProductList