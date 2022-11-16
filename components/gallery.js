import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../public/img/photos/photos";
import { gbphoto } from "../public/img/greenbelt/gb"
import { hobbyphoto  } from "../public/img/hobby/hobby"


function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [menuSelect, setMenuSelect] = useState(0)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const menuData=(mdata)=>{
      if(mdata===0){
          return photos;
          className=""
      } else if (mdata ===1){
          return gbphoto;
      }
      else if (mdata ===2){
        return hobbyphoto;
    }

  }

  var pics = menuData(menuSelect);
  console.log(pics);
 
  return (
      <div className="bg-gray-900">
      <div className="bg-transparent py-8">
      
      
      <div className='text-center mt-4   w-full lg:py-4 lg:mx-28 xl:mx-2 lg:mt-8 text-lg px-8 bg-transparent md:text-4xl shadow-xl  text-white rounded-2xl xl:px-10 py-5'>Gallery</div>
      </div>
      <div className="text-center py-8">
      <div className={ menuSelect===1 ?"inline-block text-lg md:text-2xl px-8 mr-8 py-2 underline underline-offset-5 text-white " :"inline-block text-lg md:text-2xl px-8 mr-8 py-2 text-white " } onClick={()=>setMenuSelect(1)}>Green Belt Training</div>
       <div className={ menuSelect===0 ?"inline-block text-lg md:text-2xl px-8 mr-8 py-2 underline underline-offset-5 text-white " :"inline-block text-lg md:text-2xl px-8 mr-8 py-2 text-white " } onClick={()=>setMenuSelect(0)}>Farewell</div>
       <div className={ menuSelect===2 ?"inline-block text-lg md:text-2xl px-8 mr-8 py-2 underline  underline-offset-5 text-white " :"inline-block text-lg md:text-2xl px-8 mr-8 py-2 text-white " } onClick={()=>setMenuSelect(2)}>Hobby Photos</div>
     
      </div>
   
    <div className="mx-2 lg:mx-28 ">
      <Gallery photos={pics} onClick={openLightbox} />
      <div className="ml-96">
      <ModalGateway >
        {viewerIsOpen ? (
            
          <Modal  onClose={closeLightbox}>
            <Carousel 
              currentIndex={currentImage}
              Isfullscreen='false'
              views={pics.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
          
        ) : null}
      </ModalGateway>
      </div>
    </div>
</div>
 
  );
}
export default PhotoGallery;