document.addEventListener('DOMContentLoaded', function () {
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const scrolling = function () {
    //elements
    const wrap = document.querySelector(`[data-scrolling="wrap"]`);
    const nextWrap = document.querySelector(`[data-scrolling="next-wrap"]`);
    const trigger = wrap;
    const item1 = document.querySelector(`[data-scrolling="item-1"]`);
    const item2 = document.querySelector(`[data-scrolling="item-2"]`);
    const item3 = document.querySelector(`[data-scrolling="item-3"]`);
    const circle1 = document.querySelector(`[data-scrolling="circle-1"]`);
    const circle2 = document.querySelector(`[data-scrolling="circle-2"]`);
    const circle3 = document.querySelector(`[data-scrolling="circle-3"]`);
    const frame1 = document.querySelector(`[data-scrolling="frame-1"]`);
    const frame2 = document.querySelector(`[data-scrolling="frame-2"]`);
    const frame3 = document.querySelector(`[data-scrolling="frame-3"]`);
    //check to make sure elements exist

    if (
      !trigger ||
      !item1 ||
      !item2 ||
      !item3 ||
      !circle1 ||
      !circle2 ||
      !circle3 ||
      !frame1 ||
      !frame2 ||
      !wrap
    )
      return;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: 'bottom bottom',
        ease: 'none',
        markers: false,
        scrub: true,
      },
      defaults: {
        duration: 1,
        ease: 'power1.out',
      },
    });
    // STEP 1 - ANIMATE Circle 1 IN
    // tl.set(item1, { zIndex: 2 });
    tl.to(
      item1,
      {
        width: '100vw',
        height: '100vh',
        margin: '0px 0px 0px 0px',
        borderRadius: '0vw 0vw 0vw 0vw',
      },
      '<'
    );
    tl.to(
      item3,
      {
        x: '120%',
        opacity: 0,
        duration: 0.4,
      },
      '<'
    );
    tl.to(
      item2,
      {
        x: '100%',
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
    tl.to(
      circle1,
      {
        opacity: 0,
        duration: 0.5,
      },
      '<.25'
    );
    tl.to(
      frame1,
      {
        opacity: 1,
        duration: 0.5,
      },
      '<.25'
    );
    // STEP 2 - ANIMATE Circle 1 OUT
    tl.to(frame1, {
      opacity: 0,
      duration: 0.5,
      // scale: 0.8,
      delay: 0.5,
    });
    tl.to(
      item1,
      {
        width: '30vw',
        height: '30vw',
        marginRight: '50%',
        borderRadius: '100vw 100vw 100vw 100vw',
      },
      '<'
    );
    tl.to(
      circle1,
      {
        opacity: 1,
        duration: 0.5,
      },
      '<.25'
    );
    tl.to(
      item2,
      {
        x: '0%',
        opacity: 1,
        duration: 0.75,
      },
      '<'
    );
    tl.to(
      item3,
      {
        x: '0%',
        opacity: 1,
        duration: 0.75,
      },
      '<'
    );
    // STEP 3 - ANIMATE Circle 2 IN
    // tl.set(item2, { zIndex: 3 });
    tl.to(item2, {
      width: '100vw',
      height: '100vh',
      margin: '0px 0px 0px 0px',
      borderRadius: '0vw 0vw 0vw 0vw',
    });
    tl.to(
      item1,
      {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
    tl.to(
      item3,
      {
        x: '100%',
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
    tl.to(
      circle2,
      {
        opacity: 0,
        duration: 0.5,
      },
      '<.25'
    );
    tl.to(
      frame2,
      {
        opacity: 1,
        duration: 0.5,
      },
      '<.25'
    );
    // STEP 4 - ANIMATE Circle 2 OUT
    tl.to(frame2, {
      opacity: 0,
      duration: 0.5,
      // scale: 0.8,
      delay: 0.5,
    });
    tl.to(
      item2,
      {
        width: '30vw',
        height: '30vw',
        marginRight: '0%',
        borderRadius: '100vw 100vw 100vw 100vw',
      },
      '<'
    );
    tl.to(
      circle2,
      {
        opacity: 1,
        duration: 0.5,
      },
      '<.25'
    );

    tl.to(
      item1,
      {
        x: '0%',
        opacity: 1,
      },
      '<'
    );
    tl.to(
      item3,
      {
        x: '0%',
        opacity: 1,
      },
      '<'
    );
    // STEP 5 - ANIMATE Circle 3 IN
    // tl.set(item3, { zIndex: 4 });
    tl.to(item3, {
      width: '100vw',
      height: '100vh',
      margin: '0px 0px 0px 0px',
      borderRadius: '0vw 0vw 0vw 0vw',
    });
    tl.to(
      item1,
      {
        x: '-120%',
        opacity: 0,
        duration: 0.4,
      },
      '<'
    );
    tl.to(
      item2,
      {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
    tl.to(
      circle3,
      {
        opacity: 0,
        duration: 0.5,
      },
      '<.25'
    );
    tl.to(
      wrap,
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
    tl.from(
      nextWrap,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.25,
      },
      '<.25'
    );
  };
  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        //conditional interactions
        if (isDesktop || isTablet) {
          scrolling();
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();
});
