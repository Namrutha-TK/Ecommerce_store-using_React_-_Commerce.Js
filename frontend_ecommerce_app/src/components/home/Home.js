import banner1 from '../../assets/images/ban1.jpg';
import banner2 from '../../assets/images/ban2.jpg';
import banner3 from '../../assets/images/ban.jpg';
function Home() {
    return ( 
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     );
}

export default Home;