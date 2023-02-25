import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import style from "./ProductList.module.css"
import { Switch ,Stack} from '@chakra-ui/react'
import { BiSortUp } from "react-icons/bi";



const ProductList = () => {
  return (
    <>
      <div className={style.All_Kids_EyeGlass_Main_Section}>

        <div className={style.All_Kids_Section_Inside_H_One_tag}>
          <h1>ALL KIDS EYEGLASSES</h1>
        </div>


        <div className={style.All_Kids_Section_Inside_View_Frames_And_button_Section}>

          <h2>VIEW FRAMES</h2>
          <Stack direction='row'>
            <Switch className={style.Switch_Button} size="lg" colorScheme='teal'  />
          </Stack>

          <p>VIEW 3D TRY ON</p>

        </div>


        <div className={style.All_Kids_Section_Inside_Sort_Section}>

          <BiSortUp color='#33b7aa'/>
          <h1>Sort By</h1>

          <select>
            <option value="Best Sellers">Best Sellers</option>
            <option value="Price : Hight to Low">Price : Hight to Low</option>
            <option value="Price :  Low to Heigh">Price :  Low to Heigh</option>
          </select>

        </div>



      </div>

      <div className={style.Product_Cart_Main_section_In_Product_List_File}>
        <ProductCard />
      </div>
    </>
  )
}

export default ProductList