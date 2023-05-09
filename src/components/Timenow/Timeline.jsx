import React,{useState} from 'react'
import "./Timeline.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CakeIcon from '@mui/icons-material/Cake';
import p1 from "./p1.jpeg"
import p2 from "./p2.jpeg"
import { TypeAnimation } from 'react-type-animation';
const Timeline = () => {

  function reveal() {
 
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
 
  
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal2 = () => {
    setShowModal2(true);
  };
  const closeModal2 = () => {
    setShowModal2(false);
  };
  const openModal3 = () => {
    setShowModal3(true);
  };
  const closeModal3 = () => {
    setShowModal3(false);
  };
  return (
    <div >
      <VerticalTimeline className="vertical">
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    animate={true}
    icon={<CakeIcon />}
  >
    <Card sx={{ maxWidth: 700 }} >
    <Typography gutterBottom variant="h5" component="div">
        <div className="event">
            Fresher Party 
        </div>
          <div className="date">
            21 th april ,2014
          </div>

          <div className="time">
            6.30 pm (IST)
          </div>
          <div className="location">
            SAC Auditorium ,NIT DGP
          </div>
          
        </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image={p1}
      
      />
      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div className="details">
            lots of lots of people and Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint quasi qui vitae at, illum adipisci itaque, tempore fugit facere, nisi quaerat non consequatur perspiciatis atque. Quisquam voluptas perferendis non.
          </div>
        </Typography>
      </CardContent>
      <CardActions>
      
      <Button onClick={openModal3}>Open Gallery</Button>
      {showModal3 && (
        <div className="modals-container">
          <div className="modals">
            <div className="close" onClick={closeModal3}  style={{backgroundColor:'white', height:'2rem',width:'3rem'}}>
            close
            </div>
            <div id="carouselExampleDark" class="carousel carousel-white slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={p2} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>CSS FULL FAMILY</h5>
        <p style={{backgroundColor:'black'}}>
        <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Sometimes it is the people no one can  imagine anything of who do the things no one can imagine.',
    1000,
  
   
    ]}
    speed={1} // Custom Speed from 1-99 - Default Speed: 20
    style={{ fontSize: '3vh' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
        </p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={p1} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>Second slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={p2} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>Third slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




          </div>
        </div>
      )}
        
      </CardActions>
    </Card>


    
    

  </VerticalTimelineElement>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    animate={true}
    icon={<CakeIcon />}
  >
    <Card sx={{ maxWidth: 700 }} class="reveal">
    <Typography gutterBottom variant="h5" component="div">
        <div className="event">
            Fresher Party 
        </div>
          <div className="date">
            21 th april ,2014
          </div>

          <div className="time">
            6.30 pm (IST)
          </div>
          <div className="location">
            SAC Auditorium ,NIT DGP
          </div>
          
        </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image={p1}
      
      />
      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div className="details">
            lots of lots of people and Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint quasi qui vitae at, illum adipisci itaque, tempore fugit facere, nisi quaerat non consequatur perspiciatis atque. Quisquam voluptas perferendis non.
          </div>
        </Typography>
      </CardContent>
      <CardActions>
      
      <Button onClick={openModal2}>Open Gallery</Button>
      {showModal2 && (
        <div className="modals-container">
          <div className="modals">
            <div className="close" onClick={closeModal2}  style={{backgroundColor:'white', height:'2rem',width:'3rem'}}>
            close
            </div>
            <div id="carouselExampleDark" class="carousel carousel-white slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={p2} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>First slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={p1} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>Second slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={p2} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>Third slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




          </div>
        </div>
      )}
        
      </CardActions>
    </Card>


    
    

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    animate={true}
    icon={<CakeIcon />}
  >
    <Card sx={{ maxWidth: 700 }} class="reveal">
    <Typography gutterBottom variant="h5" component="div">
        <div className="event">
            Fresher Party 
        </div>
          <div className="date">
            21 th april ,2014
          </div>

          <div className="time">
            6.30 pm (IST)
          </div>
          <div className="location">
            SAC Auditorium ,NIT DGP
          </div>
          
        </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image={p1}
      
      />
      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div className="details">
            lots of lots of people and Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint quasi qui vitae at, illum adipisci itaque, tempore fugit facere, nisi quaerat non consequatur perspiciatis atque. Quisquam voluptas perferendis non.
          </div>
        </Typography>
      </CardContent>
      <CardActions>
      
      <Button onClick={openModal}>Open Gallery</Button>
      {showModal && (
        <div className="modals-container">
          <div className="modals">
            <div className="close" onClick={closeModal}  style={{backgroundColor:'white', height:'2rem',width:'3rem'}}>
            close
            </div>
            <div id="carouselExampleDark" class="carousel carousel-white slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={p2} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>First slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={p1} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>Second slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={p2} class="d-block w-150 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{backgroundColor:'black'}}>Third slide label</h5>
        <p style={{backgroundColor:'black'}}>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




          </div>
        </div>
      )}
        
      </CardActions>
    </Card>


    
    

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
   <p class="reveal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi, deserunt magni dolores aut itaque corrupti. Harum, porro inventore! Maiores velit accusantium facere voluptas voluptatibus ut nihil, rem magni reprehenderit?
    </p> 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
   <p class="reveal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi, deserunt magni dolores aut itaque corrupti. Harum, porro inventore! Maiores velit accusantium facere voluptas voluptatibus ut nihil, rem magni reprehenderit?
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
   <p class="reveal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi, deserunt magni dolores aut itaque corrupti. Harum, porro inventore! Maiores velit accusantium facere voluptas voluptatibus ut nihil, rem magni reprehenderit?
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <p class="reveal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi, deserunt magni dolores aut itaque corrupti. Harum, porro inventore! Maiores velit accusantium facere voluptas voluptatibus ut nihil, rem magni reprehenderit?
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
   <p class="reveal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi, deserunt magni dolores aut itaque corrupti. Harum, porro inventore! Maiores velit accusantium facere voluptas voluptatibus ut nihil, rem magni reprehenderit?
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi, deserunt magni dolores aut itaque corrupti. Harum, porro inventore! Maiores velit accusantium facere voluptas voluptatibus ut nihil, rem magni reprehenderit?
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
  />
</VerticalTimeline>
    </div>
  )
}

export default Timeline
