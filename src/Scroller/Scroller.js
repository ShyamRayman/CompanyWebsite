import React, { useEffect } from "react";
import "./Scroller.css";

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");

        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });

          scrollerInner.addEventListener("mouseenter", () => {
            scrollerInner.style.animationPlayState = "paused";
          });
          scrollerInner.addEventListener("mouseleave", () => {
            scrollerInner.style.animationPlayState = "running";
          });
        }
      });
    }
  }, []);

  return (
    <div className="Scrollerbody">
      <h2 style={{ textAlign: "center" }} className="fw-bold">Our Clients</h2>
      <h6 className="text-center h6scroller">
        Our clients aren't just clients; they are valued partners in progress.
        We take pride in understanding their unique needs, tailoring solutions,
        and fostering long-term relationships.
      </h6>

      <div className="scroller" data-speed="fast">
        <div className="scroller__inner">
          <a href="https://srays.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://idacreations.com/img/logos/srays.jpg"
              alt="SRays"
            />
          </a>
          <a
            href="https://oneyes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/oneyes.jpg"
              alt="OneYes"
            />
          </a>
          <a
            href="https://linessofttech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/linessofttech.jpg"
              alt="Linessofttech"
            />
          </a>
          <a href="https://wowhr.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://idacreations.com/img/logos/wowhr.jpg"
              alt="WowHR"
            />
          </a>
          <a
            href="https://vulturelines.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/vulturelines.jpg"
              alt="VultureLines"
            />
          </a>
          <a
            href="https://thozhil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/thozhil_img.jpg"
              alt="Thozhil"
            />
          </a>
          <a href="https://digitallyvibed.com">
            <img
              src="https://idacreations.com/img/logos/digitallyvibed.jpg"
              alt="Digitally Vibed"
            />
          </a>
          <a
            href="https://example.com/bltzwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/bltzwork.jpeg"
              alt="Bltzwork"
            />
          </a>
          <a
            href="https://bigeyeglobal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/bigeyeglobal.jpg"
              alt="BigEyeGlobal"
            />
          </a>
          <a
            href="https://winwinweb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/Winwinweb.jpg"
              alt="WinWinWeb"
            />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://idacreations.com/img/logos/Exatech.jpg"
              alt="Exatech"
            />
          </a>
        </div>
      </div>

      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          {/* <a href="https://digitallyvibed.com">
            <img src="https://idacreations.com/img/logos/digitallyvibed.jpg" alt="Digitally Vibed" />
          </a>
          <a href="https://example.com/bltzwork" target="_blank" rel="noopener noreferrer">
            <img src="https://idacreations.com/img/logos/bltzwork.jpeg" alt="Bltzwork" />
          </a>
          <a href="https://bigeyeglobal.com" target="_blank" rel="noopener noreferrer">
            <img src="https://idacreations.com/img/logos/bigeyeglobal.jpg" alt="BigEyeGlobal" />
          </a>
          <a href="https://winwinweb.com" target="_blank" rel="noopener noreferrer">
            <img src="https://idacreations.com/img/logos/Winwinweb.jpg" alt="WinWinWeb" />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src="https://idacreations.com/img/logos/Exatech.jpg" alt="Exatech" />
          </a>
          <a href="https://1iiec.com" target="_blank" rel="noopener noreferrer">
            <img src="https://idacreations.com" alt="1IIEC" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Scroller;
