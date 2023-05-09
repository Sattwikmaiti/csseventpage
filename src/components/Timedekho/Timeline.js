import React ,{useState}from 'react'
import "./Timeline.css"
import Event from "./Event.jsx"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.avif"
import  {  useEffect } from 'react';

import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';

import { TypeAnimation } from 'react-type-animation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CakeIcon from '@mui/icons-material/Cake';
const Timelines = () => {
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
    const [age, setAge] = React.useState(2023);

    const handleChange = (event) => {
      setAge(event.target.value);
    };

   
    const data= [
        {event:"Fresher party", year:2022,date:"6th september",
     images:[
     {
        src:{p1},
         title:"Fresher party"
     }
, 

{
    src:{p2},
     title:"Freshers party"
 }
, 
     ]
    },
        {event:"Farewell party", year:2023,date:"6th september",     images:[
            {
               src:{p1},
                title:"Fresher party"
            }
       , 
       
       {
           src:{p2},
            title:"Freshers party"
        }
       , 
            ]},
        {event:"after party", year:2021,date:"6th september",     images:[
            {
               src:{p1},
                title:"Fresher party"
            }
       , 
       
       {
           src:{p2},
            title:"Freshers party"
        }
       , 
            ]},
        {event:"Fresherss party", year:2022,date:"6th september",     images:[
            {
               src:{p1},
                title:"Fresher party"
            }
       , 
       
       {
           src:{p2},
            title:"Freshers party"
        }
       , 
            ]},
        {event:"Fresher party", year:2022,date:"6th september",     images:[
            {
               src:{p1},
                title:"Fresher party"
            }
       , 
       
       {
           src:{p2},
            title:"Freshers party"
        }
       , 
            ]},

    ]


    const dati=[{
        srcs:{p1},
        title:"Fresher"
    },{
        srcs:{p2},
        title:"Fresher"
    }]
    const filtered=data.filter((year)=>{
        return year.year===age;

    })


window.addEventListener("scroll", reveal);
function Qs({ selector, all = false }) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}


  const [sections, setSections] = useState([]);
  const [timeline, setTimeline] = useState(null);
  const [line, setLine] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [full, setFull] = useState(false);
  const [setVal, setSetVal] = useState(0);
  const [targetY, setTargetY] = useState(window.innerHeight * 0.8);

  useEffect(() => {
    setSections(Qs({ selector: '.section', all: true }));
    setTimeline(Qs({ selector: '.timeline' }));
    setLine(Qs({ selector: '.line' }));

    // Set initial line position
    if (line) {
      line.style.bottom = `calc(100% - 20px)`;
    }
  }, [line]);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      setUp(scrollY < prevScrollY);
      setDown(!up);

      if (timeline && line) {
        const timelineRect = timeline.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();
        const dist = targetY - timelineRect.top;

        console.log(dist);

        if (down && !full) {
          setSetVal(Math.max(setVal, dist));
          line.style.bottom = `calc(100% - ${setVal}px)`;
        }

        if (dist > timeline.offsetHeight + 50 && !full) {
          setFull(true);
          line.style.bottom = '-50px';
        }
      }

      if (sections.length > 0) {
        sections.forEach(item => {
          const rect = item.getBoundingClientRect();

          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
          }
        });
      }

      setPrevScrollY(scrollY);
    };

    // Call scrollHandler on mount
    scrollHandler();

    if (line) {
      line.style.display = 'block';
    }

    window.addEventListener('scroll', scrollHandler);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [sections, timeline, line, prevScrollY, up, down, full, setVal, targetY]);

    const allImages = data.flatMap((event) => event.images.map((image) => image.src));
     console.log(allImages)
  return (
 <>

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
    </Box>
     <div className="timeline">
     <div className="line">
       
       </div>
       
       <div className="section">
       {
        filtered.map((e)=>{
          return (<Event event={e.event} date={e.date} year={e.year} images={e.images}/>)
        })
       }
       <div className="bead">
       
       </div>
       <div className="content">
       
      </div>
      </div>
      </div>

    </>
  )
}

export default Timelines
