import React, { useEffect, useState } from 'react'
import style from "./SideBar.module.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"




const SideBar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const initialState = searchParams.getAll("size")
  const [size, setSize] = useState(initialState || [])
  // console.log(searchParams.getAll("size"))
  const initialOrder = searchParams.get("order")
  const [order, setOrder] = useState(initialOrder || "")



  const handelFilter = (e) => {

    let newSize = [...size]


    if (newSize.includes(e.target.value)) {
      newSize.splice(newSize.indexOf(e.target.value), 1)
    } else {
      newSize.push(e.target.value)
    }

    setSize(newSize)

  }

  const handelSort = (e) => {
    setOrder(e.target.value)
  }

  useEffect(() => {

    const params = {
      size
    }

    order && (params.order = order)

    setSearchParams(params)

  }, [size, order])

// console.log(order);

  return (
    <>

      <div className={style.SideBar_Main_Container}>



        {/* Age Group Filter */}
        <div className={style.Age_Filter_section}>

          <h1>Sort By</h1>


          <div onChange={handelSort}>
            <input type="radio" name='sort_by' value={"asc"}  defaultChecked={order==="asc"} />
            <p>Price : Low to Heigh</p>
          </div>



          <div onChange={handelSort}>
            <input type="radio" name='sort_by' value={"desc"} defaultChecked={order==="desc"} />
            <p>Price : Hight to Low</p>
          </div>


        </div>



        {/* FRAME TYPE  */}
        <div className={style.Frame_Type_Main_section}>
          <h1>FRAME TYPE</h1>


          <div className={style.Frame_Type_Main_section_Main_Div_IMG}>
            <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png" alt="Full-Rim" />
            <h4>Full Rim</h4>
          </div>

        </div>



        {/* FRAME SHAPE  */}
        <div className={style.Frame_Shape_Main_section}>
          <h1>FRAME SHAPE</h1>

          <div className={style.Frame_Shape_Main_section__Main_DIV_Img}>
            <div className={style.Frame_Shape_Main_section_IMG}>
              <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png" alt="rectangle" />
              <h4>Rectangle</h4>
            </div>

            <div className={style.Frame_Shape_Main_section_IMG}>
              <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png" alt="Round" />
              <h4>Round</h4>
            </div>

            <div className={style.Frame_Shape_Main_section_IMG}>
              <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png" alt="Square" />
              <h4>Square</h4>
            </div>

            <div className={style.Frame_Shape_Main_section_IMG}>
              <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png" alt="Cat Eye" />
              <h4>Cat Eye</h4>
            </div>

            <div className={style.Frame_Shape_Main_section_IMG}>
              <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Oval.png" alt="Oval" />
              <h4>Oval</h4>
            </div>

            <div className={style.Frame_Shape_Main_section_IMG}>
              <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png" alt="WayFarer" />
              <h4>Wayfarer</h4>
            </div>

          </div>
        </div>



        {/* FRAME SIZE  */}

        <div className={style.Frame_Size_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> FRAME SIZE</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Size}>
                <input type="checkbox" value={"Medium"} onChange={handelFilter} checked={size.includes("Medium")} />
                <h1>MEDIUM</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Size}>
                <input type="checkbox" value={"Wide"} onChange={handelFilter} checked={size.includes("Wide")} />
                <h1>WIDE</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Size}>
                <input type="checkbox" value={"Narrow"} onChange={handelFilter} checked={size.includes("Narrow")} />
                <h1>NARROW</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Size}>
                <input type="checkbox" value={"Extra Narrow"} onChange={handelFilter} checked={size.includes("Extra Narrow")} />
                <h1>EXTRA-NARROW</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Size}>
                <input type="checkbox" value={"Extra Wide"} onChange={handelFilter} checked={size.includes("Extra Wide")} />
                <h1>EXTRA-WIDE</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>




        {/* FRAME COLOR  */}

        <div className={style.Frame_Color_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}>FRAME COLOR</h1>
                  </Box>
                  <AccordionIcon color="gray.600" />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>BLUE(62)</h3>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>BLACK(59)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>TRANSPARENT(59)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>GREY(20)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>PINK(19)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>PURPLE(19)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>MAROON(10)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>GREEN(8)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>RED(6)</h3>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Color}>
                <input type="checkbox" />
                <h3>ORANGE(3)</h3>
              </AccordionPanel>

            </AccordionItem>


          </Accordion>

        </div>


        {/* BRANDS  */}

        <div className={style.Brands_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> BRANDS</h1>
                  </Box>
                  <AccordionIcon color="gray.600" />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Brands}>
                <input type="checkbox" />
                <h1>HOOPER(200)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Brands}>
                <input type="checkbox" />
                <h1>HOOPER SWITCH</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>





        {/* PRICE  */}


        <div className={style.Price_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> PRICE </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Price}>
                <input type="checkbox" />
                <h1>RS. 500 - RS. 999(195)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Price}>
                <input type="checkbox" />
                <h1>RS. 1500 - RS. 1999(58)</h1>
              </AccordionPanel>




              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Price}>
                <input type="checkbox" />
                <h1>RS. 2500 - RS. 2999(5)</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>



        {/* GENDER  */}


        <div className={style.Gender_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> GENDER </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Gender}>
                <input type="checkbox" />
                <h1>KIDS(258)</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>



        {/* MATERIAL  */}

        <div className={style.Material_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> MATERIAL </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Material}>
                <input type="checkbox" />
                <h1>TR90 (FLEXIBLE LIGHTWEIGHT)</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>




        {/* WEIGHT GROUP  */}

        <div className={style.Weight_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> WEIGHT GROUP </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Weight}>
                <input type="checkbox" />
                <h1>LIGHT (28)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Weight}>
                <input type="checkbox" />
                <h1>AVERAGE (52)</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>



        {/* PRESCRIPTION TYPE  */}


        <div className={style.Prescription_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> PRESCRIPTION TYPE </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Prescription_Type}>
                <input type="checkbox" />
                <h1>BIFOCAL / PROGRESSIVE (194)</h1>
              </AccordionPanel>



            </AccordionItem>


          </Accordion>

        </div>





        {/* SUPPORTED POWERS  */}

        <div className={style.Supported_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> SUPPORTED POWERS </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Supported_Power}>
                <input type="checkbox" />
                <h1>UPTO LOW POWER(194)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Supported_Power}>
                <input type="checkbox" />
                <h1>UPTO MEDIUM POWER(194)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Supported_Power}>
                <input type="checkbox" />
                <h1>UPTO HEIGH POWER(194)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Supported_Power}>
                <input type="checkbox" />
                <h1>UPTO VERY HEIGH POWER(194)</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>



        {/* COLLECTION  */}

        <div className={style.Collection_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> COLLECTION </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Collection}>
                <input type="checkbox" />
                <h1>POPPIN HOOPER(66)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Collection}>
                <input type="checkbox" />
                <h1>FLEXI HOOPER(52)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Collection}>
                <input type="checkbox" />
                <h1>ASTRA HOOPER(40)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Collection}>
                <input type="checkbox" />
                <h1>HOOPER MEMPSHIS(24)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Collection}>
                <input type="checkbox" />
                <h1>GRIPZY HOOPER(194)</h1>
              </AccordionPanel>


            </AccordionItem>


          </Accordion>

        </div>



        {/* GLASS COLOR  */}

        <div className={style.Glass_Color_Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> GLASS COLOR </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Glass_Color}>
                <input type="checkbox" />
                <h1>GREY (22)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Glass_Color}>
                <input type="checkbox" />
                <h1>GREEN (21)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Glass_Color}>
                <input type="checkbox" />
                <h1>BROWN (14)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Glass_Color}>
                <input type="checkbox" />
                <h1>YELLOW (1)</h1>
              </AccordionPanel>




            </AccordionItem>


          </Accordion>

        </div>




        {/* FRAME WIDTH  */}
        <div className={style._Main_section}>


          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Frame_Color_section_heading}> FRAME WIDTH </h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>116 MM(2)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>117 MM(3)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>118 MM(6)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>119 MM(4)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>120 MM(28)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>121 MM(24)</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>122 MM(23)</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Frame_Color_section_Inside_FilterS_By_Frame_Width}>
                <input type="checkbox" />
                <h1>123 MM(30)</h1>
              </AccordionPanel>

            </AccordionItem>


          </Accordion>

        </div>



      </div>


    </>
  )
}

export default SideBar