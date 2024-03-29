import {
  s1,
  s2,
  s3,
  Zoom
} from './imports'


function Slider() {
  
  const images = [
    s1,s2,s3
  ];

  return (
    <div id='slider'>
         <Zoom scale={0.1} className="slider_comp">
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt='promo baner'/>)
          }
        </Zoom> 
    </div>
  )
}

export default Slider
