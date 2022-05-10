import{Carousel} from "react-bootstrap";
import Cards from "./Cards";


const HomePage=()=>{
    return(
        <>
        <Carousel fade>
  <Carousel.Item className="imagee">
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/flatlay-of-people-eating-food-from-delivery-service-at-home-picture-id1306193455"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className="imagee">
    <img
      className="d-block w-100"
      src="https://cdn.create.vista.com/api/media/medium/399747946/stock-photo-top-view-delicious-italian-pizza?token="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="imagee">
    <img
      className="d-block w-100"
      src="https://assets.wallpaperbison.com/preview/food/artistic-food-wallpapers/15460-thumb-fast-food-hd-wallpaper.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
     <Cards/>  
        
        </>
    )
}
export default HomePage;