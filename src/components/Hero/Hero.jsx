import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";


const ImageList =[
    {
    id: 1,
    img: Image1,
    title:"Upto 50% off on all Men's Wear",
    description:"lorem his life will forver be changed dolor sit GiAmethyst consectetur adipiscing ElementInternals sed do eiumod tempor i",
    },

    {
    id: 2,
    img: Image2,
    title:"Upto 50% off on all Men's Wear",
    description:"lorem his life will forver be changed dolor sit GiAmethyst consectetur adipiscing ElementInternals sed do eiumod tempor i",
    },


    {
     id: 3,
    img: Image3,
    title:"Upto 50% off on all Men's Wear",
    description:"lorem his life will forver be changed dolor sit GiAmethyst consectetur adipiscing ElementInternals sed do eiumod tempor i",
    },

]
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[350px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* background pattern*/}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

        </div>
        {/*hero section*/}
        <div className="container pb-8 sm:pb-0">
            <div>
                <div  className="grid grid-cols-1 sm:grid-cols-2">
                    {/*text-section*/}
                    <div
                    className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm-text-left
                    order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">lorem ipsum knvkfkjjdmd</h1>
                        <p className="text-sm">mdvjvfojvnfovfjnfonvfon</p>
                        <div>
                            <button
                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2px-4 rounded-full">
                               Order Now 
                            </button>
                        </div>
                    </div>
                     {/*image-section*/}
                     <div  className="">
                        <img src={Image1} alt=""
                        className="w-[800px] h-[800px] sm:h-[450px] sm:w-450px sm:scale-125 object-contain mx-auto"/>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero