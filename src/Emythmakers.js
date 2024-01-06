import React, { useEffect } from 'react'
import RouterLink from './RouterLink';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import { scrollTop } from "./components/AllFunctions"

var scrollBtn
function Emythmakers() {
  useEffect(() => {
    window.addEventListener('scroll', scrollToTopBtn);
    scrollBtn = document.querySelector("#back_to_top");
  }, [])

  function scrollToTopBtn() {
    if (window.scrollY > 150) {
      scrollBtn.style.visibility = "visible";
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.visibility = "hidden";
      scrollBtn.style.display = "none";
    }
  }

  return (
    <>
      <SkeletonTheme baseColor="#ddd" highlightColor="#e9e9e9">
        <div id="back_to_top" style={{ visibility: "hidden" }} onClick={scrollTop} className="back_to_top on d-print-none"><span className="go_up"><i className="fas fa-angle-double-up"></i></span></div>
        <RouterLink />
      </SkeletonTheme>
    </>
  );
}

export default Emythmakers;