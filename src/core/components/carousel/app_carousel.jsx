import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
 
export const AppCarousel =(props)=> {
  const data =props.data;

  
  return (
    <Carousel className="" autoplay={true} loop={true} 

    navigation={()=>{}}     //No queria los puntitos porque aparecian arriba del logout
     transition={{type: 'object','duration': 0.8 }}>
      {data?.map((item)=>(<div className="relative h-full w-full" key={item.id}>
        <img
          src={item.backdrop}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="hidden  lg:ml-6 absolute inset-0 lg:grid h-full w-full items-end bg-black/65 ">
          <div className="w-3/4   text-start md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              {item.title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-sm md:text-lg lg:text-xl"
            >
             {item.description}
            </Typography>
            <div className="flex justify-start gap-2">
              <Button size="lg" color="white" variant="text">
                Detalles
              </Button>
              <Button size="lg" color="red">
                Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>))}
      
    </Carousel>
  );
}