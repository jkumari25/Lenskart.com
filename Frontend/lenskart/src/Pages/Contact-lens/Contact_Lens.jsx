import React from 'react'
import style from "./Contact_Lens.module.css"
import { FaGreaterThan } from "react-icons/fa";
import TopNav from '../../Componets/Navbar/TopNav';
import Footer from "../../Componets/Footer/Footer"


const Contact_Lens = () => {
    return (
        <>
           <TopNav />
            <div className={style.Contact_Lens_Main_Section}>

                {/* Order Contact Tab  */}
                <div className={style.Order_Contact_Lens_Main_div}>
                    <p>ORDER WITH CONTACT LENS EXPERT - GIVE MISSED CALL ON <span>+91 847-000-7367</span></p>
                </div>


                {/* Img Section 2nd div */}

                <div className={style.Contact_Lens_Img_section_Sec_Div}>
                    <img src="https://static1.lenskart.com/media/desktop/img/Jan23/aqualenshome.jpg" alt="" />
                </div>



                {/* Contact Lens Section Main Div */}
                <div className={style.Contact_Lens_Four_Section_MainDiv}>

                    {/* DisPoSability  */}
                    <div className={style.DisPosability_Section_Main_div_DisPosability}>

                        <div className={style.Contact_Lens_Four_section_Heading}>
                            <h1>DISPOSABILITY</h1>
                        </div>

                        <div className={style.Contact_Lens_Four_section_Heading_After_Img}>
                            <img src="https://static1.lenskart.com/media/desktop/img/4-July-19/offerstripcl.png" alt="" />
                        </div>


                        {/* Monthly */}

                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/monthly.jpg" alt="" />
                            </div>
                            <div>
                                <p>Monthly</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>

                        {/* Monthly Day Night */}
                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/day-n-night.jpg" alt="" />
                            </div>
                            <div>
                                <p> Day and Night</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Sep20/23Sep/aquadailies.jpg" alt="" />
                            </div>
                            <div>
                                <p>Daily </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/13-Nov-16/aqua1234.jpg" alt="" />
                            </div>
                            <div>
                                <p>Color Lenses </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/yearly.jpg" alt="" />
                            </div>
                            <div>
                                <p>Yearly </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/biweekly.jpg" alt="" />
                            </div>
                            <div>
                                <p>2-Weekly </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                    </div>


                    {/* Brands  */}

                    <div className={style.DisPosability_Section_Main_div_Brands}>

                        <div className={style.Contact_Lens_Four_section_Heading}>
                            <h1>BRANDS</h1>
                        </div>

                        <div className={style.Contact_Lens_Four_section_Heading_After_Img}>
                            <img src="https://static1.lenskart.com/media/desktop/img/4-July-19/offerstripcl.png" alt="" />
                        </div>


                        {/* Monthly */}

                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/aqLogos.png" alt="" />
                            </div>
                            <div>
                                <p>Aqualens</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>

                        {/* Monthly Day Night */}
                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/bausch-and-lomb.jpg" alt="" />
                            </div>
                            <div>
                                <p> Bausch & Lomb</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/soflens.jpg" alt="" />
                            </div>
                            <div>
                                <p>Soflens</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/johnson.jpg" alt="" />
                            </div>
                            <div>
                                <p>Johnson </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/yearly.jpg" alt="" />
                            </div>
                            <div>
                                <p>Iconnect </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/Lenskart-Website-Banners/iconnect.jpg" alt="" />
                            </div>
                            <div>
                                <p>Alcon </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/Acuvue.jpg" alt="" />
                            </div>
                            <div>
                                <p>Acuvue </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/optix.jpg" alt="" />
                            </div>
                            <div>
                                <p>Optix </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/focus.jpg" alt="" />
                            </div>
                            <div>
                                <p>Focus </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/pure.jpg" alt="" />
                            </div>
                            <div>
                                <p>PureVision </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/freshlook.jpg" alt="" />
                            </div>
                            <div>
                                <p>FreshLook</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/dailies.jpg" alt="" />
                            </div>
                            <div>
                                <p>Dailies </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>









                    </div>





                    {/* Power */}


                    <div className={style.DisPosability_Section_Main_div_Power}>

                        <div className={style.Contact_Lens_Four_section_Heading}>
                            <h1>POWER</h1>
                        </div>




                        {/* Monthly */}

                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Sep20/23Sep/aqua4.jpg" alt="" />
                            </div>
                            <div>
                                <p>SPH-Power-0.5</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>

                        {/* Monthly Day Night */}
                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/plus-sph.jpg" alt="" />
                            </div>
                            <div>
                                <p>SPH-Power-0.60</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/cyl.jpg" alt="" />
                            </div>
                            <div>
                                <p>SPH-Power-0.75 </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Sep20/23Sep/aqua2.jpg" alt="" />
                            </div>
                            <div>
                                <p>Toric Power </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.DisPosability_Section_Main_div}>

                            <div className={style.Contact_Lens_Four_section_Heading}>
                                <h1>LENS SOLUTION</h1>
                            </div>



                            {/* Monthly */}

                            <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                                <div>
                                    <img src="https://static.lenskart.com/images/cust_mailer/25-June/aqua.jpg" alt="" />
                                </div>
                                <div>
                                    <p>AquaLens Comfort</p>
                                </div>
                                <div>
                                    <FaGreaterThan color='gray' size="10px" />
                                </div>
                            </div>

                            {/* Monthly Day Night */}
                            <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                                <div>
                                    <img src="https://static.lenskart.com/images/cust_mailer/Lenskart-Website-Banners/bio-2804.jpg" alt="" />
                                </div>
                                <div>
                                    <p> Bio True</p>
                                </div>
                                <div>
                                    <FaGreaterThan color='gray' size="10px" />
                                </div>
                            </div>


                            <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                                <div>
                                    <img src="https://static.lenskart.com/images/cust_mailer/Lenskart-Website-Banners/renu-2804.jpg" alt="" />
                                </div>
                                <div>
                                    <p>Renu Fresh </p>
                                </div>
                                <div>
                                    <FaGreaterThan color='gray' size="10px" />
                                </div>
                            </div>



                            <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                                <div>
                                    <img src="https://static.lenskart.com/images/cust_mailer/Lenskart-Website-Banners/opti-2804.jpg" alt="" />
                                </div>
                                <div>
                                    <p>Opti-Free Replenish </p>
                                </div>
                                <div>
                                    <FaGreaterThan color='gray' size="10px" />
                                </div>
                            </div>

                        </div>











                    </div>




                    {/* Color */}


                    <div className={style.DisPosability_Section_Main_div_Color}>

                        <div className={style.Contact_Lens_Four_section_Heading}>
                            <h1>DISPOSABILITY</h1>
                        </div>



                        {/* Monthly */}

                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/99x53Reviss.png" alt="" />
                            </div>
                            <div>
                                <p>AquaColor Premium</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>

                        {/* Monthly Day Night */}
                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/13-Nov-16/aqua1234.jpg" alt="" />
                            </div>
                            <div>
                                <p> AquaColor</p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static5.lenskart.com/images/cust_mailer/Nov-12th/freshlook_color_blend.jpg" alt="" />
                            </div>
                            <div>
                                <p>FreshLook </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/FinalLilyBlue.jpg" alt="" />
                            </div>
                            <div>
                                <p>ClaLen </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/yearly.jpg" alt="" />
                            </div>
                            <div>
                                <p>Yearly </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>


                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static1.lenskart.com/media/desktop/img/Sep20/23Sep/color.jpg" alt="" />
                            </div>
                            <div>
                                <p>Color With no Power </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>

                        <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                            <div>
                                <img src="https://static.lenskart.com/images/cust_mailer/13-Nov-16/fresh.jpg" alt="" />
                            </div>
                            <div>
                                <p>Color With CYL Power </p>
                            </div>
                            <div>
                                <FaGreaterThan color='gray' size="10px" />
                            </div>
                        </div>



                        {/* Lens Case  */}


                        <div className={style.DisPosability_Section_Main_div}>

                            <div className={style.Contact_Lens_Four_section_Heading}>
                                <h1>Lens Case</h1>
                            </div>


                            {/* Monthly */}

                            <div className={style.Four_section_inside_Imf_Name_Icon_Section}>
                                <div>
                                    <img src="https://static.lenskart.com/images/cust_mailer/10-Oct-Contact-Lenses/monthly.jpg" alt="" />
                                </div>
                                <div>
                                    <p>Lens Case</p>
                                </div>
                                <div>
                                    <FaGreaterThan color='gray' size="10px" />
                                </div>
                            </div>




                        </div>



                    </div>




                </div>

            </div>
         <Footer />
        </>
    )
}

export default Contact_Lens