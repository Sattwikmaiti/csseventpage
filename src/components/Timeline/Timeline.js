import React from "react";
import "./Timeline.css";
import p1 from "../images/p1.jpg"
 

import  { useState, useEffect } from 'react';
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

window.addEventListener("scroll", reveal);
function Qs({ selector, all = false }) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

function Timeline() {
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

  return <div>   <div class="container">
  <div class="top-section">
      <h1>Animated TimeLine</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt distinctio, 
          necessitatibus inventore dolorum fugit rerum 
          dolore accusamus nesciunt voluptates? Eum modi consectetur velit 
          distinctio aliquam, aut quisquam nemo adipisci.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt distinctio, 
          necessitatibus inventore dolorum fugit rerum 
          dolore accusamus nesciunt voluptates? Eum modi consectetur velit 
          distinctio aliquam, aut quisquam nemo adipisci
      </p>
  </div>
  <div class="timeline">
      <div class="line"></div>
      <div class="section">
          <div class="bead"><img src={p1} style={{height:'3rem',width:'3rem',borderRadius:'10rem',position:'absolute',zIndex:'99'}}  /></div>
          <div class="content reveal">
              <h2>Web Development</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
              </p>
          </div>
      </div>

      <div class="section">
          <div class="bead"></div>
          <div class="content reveal">
              <h2>Web Development</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
              </p>
          </div>
      </div>

      <div class="section">
          <div class="bead"></div>
          <div class="content reveal">
              <h2>Web Development</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
              </p>
          </div>
      </div>

      <div class="section">
          <div class="bead"></div>
          <div class="content reveal">
              <h2>Web Development</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
              </p>
          </div>
      </div>

      <div class="section">
          <div class="bead"></div>
          <div class="content reveal">
              <h2>Web Development</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Animi ab repellendus pariatur? Maxime eius excepturi
                    soluta doloremque, rerum vitae
                   similique cumque, numquam voluptatibus exercitationem 
                   quod accusantium quo asperiores et reprehenderit!
              </p>
          </div>
      </div>
  </div>
</div>
</div>;
}




export default Timeline;
