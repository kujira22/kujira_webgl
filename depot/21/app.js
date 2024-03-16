gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis({
  duration: 1.1, 
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  direction: 'vertical', 
  smooth: true,
  infinite: false,
  smoothTouch: false,
  touchMultiplier: 1.5,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)  

////////////// image parallax 

function imageParallax(container) {
  container.querySelectorAll('.image-p').forEach(img => {
    // This function will be called both initially and on image load
    function adjustMaskAndInitParallax() {
      // Calculate the desired mask height as 96% of the image height (4% smaller)
      const maskHeight = img.offsetHeight * 0.92; // Assuming img.offsetHeight is the full height
      img.parentElement.style.height = `${maskHeight}px`;

      // The initial position of the image should be set to align with the mask's bottom
      // This can be done via CSS, ensuring img is positioned absolutely within its parent
      // and aligned to the bottom. If needed, adjust here.

      initParallax(img, maskHeight);
    }

    if (img.complete) {
      adjustMaskAndInitParallax();
    } else {
      img.onload = adjustMaskAndInitParallax;
    }
  });

  function initParallax(img, maskHeight) {
    const movementDistance = maskHeight * 0.08; 

    gsap.fromTo(img, {
      y: 0,
    }, {
      y: `${movementDistance}px`, 
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        //markers: true,
        scrub: 1.5,
      }
    });
  }
}
  
function fixedImageParallax() {
    gsap.utils.toArray('.image-p-fixed').forEach(img => {
        gsap.to(img, {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                start: "top bottom", 
                end: "bottom top", 
                scrub: 1.5, 
            }
        });
    });
}
  
///// function to reset imported page specific scripts y'all
  
function filterScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  script.onload = callback;
  document.head.appendChild(script);
}
  

/////////////////////////Font stuff  
  
  
function runTextFunctions () { 
 
////Here are the functions for taking italic text in rich elements and swaping it for the script font

document.querySelectorAll('.rich-s h3').forEach(h3 => {
  if (h3.innerHTML.includes('<em>')) {
    h3.querySelectorAll('em').forEach(em => {
      let span = document.createElement('span');
      span.className = 'h3-italic';
      span.innerHTML = em.innerHTML;
      em.parentNode.replaceChild(span, em);
    });
  }
});


document.querySelectorAll('.rich-s p').forEach(p => {
  p.querySelectorAll('em').forEach(em => {
    let span = document.createElement('span');
    span.className = 'body-italic';
    span.innerHTML = em.innerHTML;
    em.parentNode.replaceChild(span, em);
  });
});


document.querySelectorAll('.rich-s h2').forEach(h2 => {
  h2.querySelectorAll('em').forEach(em => {
    let span = document.createElement('span');
    span.className = 'h2-large-script';
    span.innerHTML = em.innerHTML;
    em.parentNode.replaceChild(span, em);
  });
});
  

document.querySelectorAll('.rich-s-studio h1').forEach(h1 => {
  h1.querySelectorAll('em').forEach(em => {
    let span = document.createElement('span');
    span.className = 'h1-script-studio';
    span.innerHTML = em.innerHTML;
    em.parentNode.replaceChild(span, em);
  });
});  
  
  
  document.querySelectorAll('.rich-s-studio h2').forEach(h2 => {
  h2.querySelectorAll('em').forEach(em => {
    let span = document.createElement('span');
    span.className = 'h2-script-studio';
    span.innerHTML = em.innerHTML;
    em.parentNode.replaceChild(span, em);
  });
});  

  
}
  

/////////////////////////Menu Stuff  
  
  
function menuAnimations() {
    console.log("menu functions running");

    splitTextToSpans('.menu-nav-item, .menu-nav-item-script');
    animateRestingText();
    animateHoverText();
    attachMenuEventListeners();

    function splitTextToSpans(selector) {
        document.querySelectorAll(selector).forEach(item => {
            let html = '';
            const text = item.textContent;
            const words = text.split(' ');
            words.forEach((word, index) => {
                const letters = word.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
                html += `<span class="word">${letters}</span>`;
                if (index < words.length - 1) html += `<span class="space"> </span>`;
            });
            item.innerHTML = html;
        });
    }

    function introAnimation() {
        console.log("menu open clicked");
        lenis.stop();
        const masks = document.querySelectorAll('.menu-nav-item-mask');
        
        masks.forEach((mask, index) => {
            const restingLetters = mask.querySelector('.menu-nav-item').querySelectorAll('.letter');
            gsap.fromTo(restingLetters,
                {yPercent: 100},
                {
                    duration: 0.6,
                    yPercent: 0,
                    ease: "power4.out",
                    stagger: 0.013,
                    delay: index * 0.1,
                });
        });
    }

    function attachMenuEventListeners() {
        // Use event delegation to handle clicks on dynamically added elements
        document.addEventListener('click', function(event) {
            if (event.target.closest('.menu-button.open')) {
                introAnimation();
            } else if (event.target.closest('#menu-close')) {
                console.log("menu close clicked");
                lenis.start();
            }
        });
    }

    function animateRestingText() {
        document.querySelectorAll('.menu-nav-item-mask').forEach(mask => {
            const restingLetters = mask.querySelector('.menu-nav-item').querySelectorAll('.letter');
            
            mask.addEventListener('mouseenter', () => {
                gsap.to(restingLetters, {
                    duration: 0.6, 
                    yPercent: -102, 
                    stagger: 0.013, 
                    ease: "power4.inOut",
                });
            });

            mask.addEventListener('mouseleave', () => {
                gsap.to(restingLetters, {
                    duration: 0.6, 
                    yPercent: 0, 
                    stagger: 0.013, 
                    ease: "power4.inOut",
                });
            });
        });
    }

    function animateHoverText() {
        document.querySelectorAll('.menu-nav-item-mask').forEach(mask => {
            mask.addEventListener('mouseenter', () => {
                const hoverLetters = mask.querySelector('.menu-nav-item-script').querySelectorAll('.letter');
                gsap.fromTo(hoverLetters,
                    {yPercent: 100},
                    {
                        duration: 0.6, 
                        yPercent: -100, 
                        stagger: 0.013, 
                        ease: "power4.inOut",
                    });
            });

            mask.addEventListener('mouseleave', () => {
                const hoverLetters = mask.querySelector('.menu-nav-item-script').querySelectorAll('.letter');
                gsap.to(hoverLetters, {
                    duration: 0.6, 
                    yPercent: 100, 
                    stagger: 0.013, 
                    ease: "power4.inOut",
                });
            });
        });
    }
}


///////////////////// modal set up /////////////////
  
function modalsetup(){

function openModal() {
  lenis.stop();
  $('body').css({ overflow: 'hidden' });

  $('.scroll-panel').css({
    'overflow-y': 'scroll',
    'max-height': '100vh',
  }).attr("onwheel", "event.stopPropagation()");

  // Use 'absolute' positioning as a workaround
  $('.side-modal').css({
    display: 'flex',
    position: 'absolute',
    top: $(window).scrollTop() + 'px', // Position modal at the current scroll position
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: 9999
  });

  // Ensure modal stays fixed relative to the viewport on scroll and resize
  function adjustModalPosition() {
    $('.side-modal').css('top', $(window).scrollTop() + 'px');
  }

  // Attach handlers to adjust modal position on scroll and resize
  $(window).on('scroll resize', adjustModalPosition);

  // Cleanup function to remove the attached handlers
  window.modalCleanup = function() {
    $(window).off('scroll resize', adjustModalPosition);
  };
}

function closeModal() {
  lenis.start();
  $('body').css({ overflow: '' });
  $('.scroll-panel').removeAttr("onwheel").css({
    'overflow-y': '',
    'max-height': '',
  });

  $('.side-modal').hide();
  // Call cleanup function to remove scroll and resize handlers
  if (window.modalCleanup) window.modalCleanup();
}
  
  
$(document).ready(function() {
  // When the "project-info" button is clicked, open the modal
  $('#project-info').click(function() {
    openModal();
  });

  // When the "close-modal" button is clicked, close the modal
  $('#close-modal, #close-modal-2, #close-modal-3').click(function() {
    closeModal();
  });
});
  
}

function updateCurrentClass() {
  $(".page_link").removeClass("w--current");
  $(".page_link").each(function() {
    if ($(this).attr("href") === window.location.pathname) {
      $(this).addClass("w--current");
    }
  });
}

function updatePage() {
  //$(window).scrollTop(0);
  $(".overlay").css("opacity", "0");
}


function resetWebflow(data) {
    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, "text/html");
    let webflowPageId = $(dom).find("html").attr("data-wf-page");
    $("html").attr("data-wf-page", webflowPageId);
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
}  
  
///Intro clicker
  
function triggerClickOnIntro() {
  
  setTimeout(() => {
        const introTrigger = document.querySelector('.trigger-intro');
        if (introTrigger) {
            introTrigger.click();
            console.log('.trigger-intro clicked programmatically after 0ms');
        }
    }, 0);
}
  
function triggerClickOnIntroInvert() {
  
  setTimeout(() => {
        const introTriggerInvert = document.querySelector('.trigger-intro-invert');
        if (introTriggerInvert) {
            introTriggerInvert.click();
            console.log('.trigger-intro-Invert clicked programmatically after 0ms');
        }
    }, 0);
}  

////// Outro clicker  
  
function triggerClickOnOutro() {
  
  setTimeout(() => {
        const outroTrigger = document.querySelector('.trigger-outro');
        if (outroTrigger) {
            outroTrigger.click();
            console.log('.trigger-outro clicked');
        }
    }, 0);
}
  
/////////New intros

function workDetailIntro(container) {
    const backbtn = container.querySelectorAll('.back-button-holder-work');
    gsap.to(backbtn, {
        opacity: 1,
        duration: 0.3, 
        ease: "power4.out",
    });
}

function newsDetailIntro(container) {
    const backbtnnews = container.querySelectorAll('.back-button-holder-news');
    gsap.to(backbtnnews, {
        opacity: 1,
        duration: 0.3, 
        ease: "power4.out",
    });
}
  

function pageIntro(container) {
    console.log('new intros triggered');

    // Intro mask animations
    const introMasks = container.querySelectorAll('.intro-mask');
    introMasks.forEach(mask => {
        gsap.fromTo(mask,
            { height: '100%' },
            {
                height: '0%',
                duration: 1.6,
                ease: "power4.out",
            }
        );
    });

    // Image fixed opacity animation
    const imagePFixed = container.querySelectorAll('.image-p-fixed');
    imagePFixed.forEach(image => {
        gsap.to(image, {
            opacity: 1,
            duration: 0,
            ease: "none"
        });
    });

    // Intro reveal set to opacity 1
    gsap.set(container.querySelectorAll('.intro-reveal'), { opacity: 1 });

    // Page title animations
    const pageTitles = container.querySelectorAll('.intro-reveal');
    pageTitles.forEach(title => {
        wrapTextNodesAndPreserveSpan(title);
        const letters = title.querySelectorAll('.letter, .space');
        gsap.fromTo(letters, { yPercent: 110 }, {
            yPercent: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.02,
            delay: 0.4
        });
    });

    function wrapTextNodesAndPreserveSpan(node) {
        Array.from(node.childNodes).forEach(child => {
            if (child.nodeType === 3 && child.textContent.trim()) {
                const textSpan = document.createElement('span');
                textSpan.innerHTML = child.textContent.split('').map(char =>
                    char === ' ' ? `<span class="space">&nbsp;</span>` : `<span class="letter" style="display: inline-block; opacity: 1;">${char}</span>`
                ).join('');
                child.replaceWith(textSpan);
            } else if (child.nodeType === 1) {
                // Recursively process child nodes
                wrapTextNodesAndPreserveSpan(child);
            }
        });
    }

    if (container.querySelector('#work-detail')) {
        gsap.to(container.querySelectorAll('.back_button_holder-work'), {
            opacity: 1,
            duration: 0.3,
            delay: 0.2,
            ease: "power4.out",
        });
    }

    if (container.querySelector('#news-detail')) {
        gsap.to(container.querySelectorAll('.back_button_holder-news'), {
            opacity: 1,
            duration: 0.3,
            delay: 0.2,
            ease: "power4.out",
        });
    }
}





  
function extraLines(container) {
  gsap.set(container.querySelectorAll('.intro-reveal-line, .intro-reveal-line-l'), { opacity: 1 });

  container.querySelectorAll('.intro-reveal-line').forEach(textContainer => {
      processTextContainer(textContainer, 'line-mask', 'line');
  });

  container.querySelectorAll('.intro-reveal-line-l').forEach(textContainer => {
      processTextContainer(textContainer, 'line-mask-l', 'line-l');
  });
}

function processTextContainer(textContainer, maskClass, lineClass) {
  wrapWordsInSpans(textContainer);
  let lines = createLinesFromSpans(textContainer);
  createLineMasks(textContainer, lines, maskClass, lineClass);
  animateLines(`.${lineClass}`);
}

function wrapWordsInSpans(container) {
  let words = container.innerText.split(' ');
  container.innerHTML = ''; 
  words.forEach(word => {
      let wordSpan = document.createElement('span');
      wordSpan.innerText = word + ' ';
      container.appendChild(wordSpan);
  });
}

function createLinesFromSpans(container) {
  let spans = container.querySelectorAll('span');
  let lines = [];
  let currentLine = [];
  let lastTopOffset = spans[0].offsetTop;

  spans.forEach(span => {
      if (span.offsetTop > lastTopOffset) {
          lines.push(currentLine);
          currentLine = [];
          lastTopOffset = span.offsetTop;
      }
      currentLine.push(span.innerText);
  });
  lines.push(currentLine);

  return lines;
}

function createLineMasks(container, lines, maskClass, lineClass) {
  container.innerHTML = ''; 

  lines.forEach(line => {
      let maskDiv = document.createElement('div');
      maskDiv.classList.add(maskClass);

      let lineDiv = document.createElement('div');
      lineDiv.classList.add(lineClass);
      lineDiv.innerText = line.join(' ');

      maskDiv.appendChild(lineDiv);
      container.appendChild(maskDiv);
  });
}

function animateLines(selector) {
  gsap.to(selector, {
      rotation: 0,
      y: '0%',
      duration: 1,
      delay: 0.2,
      stagger: 0.05, 
      ease: 'power4.out',
  });
}


function attachFilterButtonListeners() {

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filter');
    const filterAllButton = document.getElementById('filter-all');

    if (filterButton) {
        filterButton.addEventListener('click', () => {
            imageParallax(document.body);
            console.log('filterbtnclicked');
            
        });
    }

    if (filterAllButton) {
        filterAllButton.addEventListener('click', () => {
            imageParallax(document.body);
            console.log('filterallbtnclicked');
        });
    }
});

}

//////////////////// BARBA
  

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "opacity-transition",
      
      once(data) {
        
        
      if ($('#work-filters').length > 0) {
            filterScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js', function() {
                    console.log('filter script loaded');
                  });
            }

       if ($('#news-filters').length > 0) {  
                filterScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js', function() {
                        console.log('news filter script loaded');
                      });
                     
            }      
        
      if ($('#work-detail').length > 0) {
           modalsetup();  
           console.log('work detail modal function running');
             
        }   
      
      if ($('#expertise-page').length > 0) {
           $('.w-dyn-empty').parents('.awards-year-block').each(function(){ $(this).hide()})
           console.log('removed empty years');
             
        }

     triggerClickOnIntroInvert();
     triggerClickOnIntro();
     pageIntro(data.next.container);
     extraLines(data.next.container);
                                       
                                       
      runTextFunctions(); 
      menuAnimations();
      imageParallax(data.next.container);
      fixedImageParallax();
      
      },
      
      
      beforeLeave(data) {
        
        triggerClickOnOutro();
        $(data.current.container).css({
          position: 'absolute',
          zIndex: 1
        });
        return gsap.to(data.current.container, {
          opacity: 1 
        });

        ScrollTrigger.getAll().forEach(st => st.kill());
      },
      
//////////////////// LEAVE
      
      leave(data) {
   
        gsap.to(data.current.container.firstElementChild, { scale: 1 });
        return gsap.to(".overlay", {
          opacity: 0.1,
          duration: 0.2,
          ease: "power2.in"
        });
        lenis.scrollTo(0, {
        duration: 0,
        immediate: true
        });
      },
      
      
//////////////////// ENTER

      
enter(data) {
  runTextFunctions();

  if (data.next.container.querySelector('#home-page')) {
    gsap.to(data.next.container.querySelectorAll('.hero-heading-container'), {
        opacity: 1,
        duration: 0.1,
        delay: 0,
    });
  }
  
  setTimeout(() => {
    resetWebflow(data);
    
  }, 0);
  
  setTimeout(() => {
  pageIntro(data.next.container);  
  }, 0);
  setTimeout(() => {
  extraLines(data.next.container);
  }, 0);
 
  gsap.set(data.next.container.querySelectorAll(".page-mask"), {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh'
  });

  const tl = new gsap.timeline({
    onComplete: function() {
      updateCurrentClass();
      updatePage();
      
      lenis.scrollTo(0, {
        duration: 0,
        immediate: true
      });
      lenis.start();
      
      $(data.next.container).css({
        position: '',
        top: ''
      });
      
      $(data.next.container.querySelectorAll(".page-mask")).css({
        position: 'static',
        height: ''
      });
    }
  });

  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  $(data.next.container).css({
    position: 'absolute',
    top: `${scrollY}px`,
  });


  tl.from(data.next.container, {
    yPercent: 10,
    rotationZ: 3,
    duration: 1.2,
    ease: "power4.out",
  });

  tl.fromTo(data.next.container.querySelectorAll(".page-mask"), {
    scale: 0.3,
  }, {
    scale: 1,
    duration: 1.2,
    ease: "power4.out",
  }, "<");

  tl.fromTo(data.next.container.querySelectorAll(".page-group"), {
    scale: 2,
  }, {
    scale: 1,
    duration: 1.2,
    ease: "power4.out",
  }, "<");
  
  tl.fromTo(data.next.container.querySelectorAll(".page-intro-backing"), {
  height: "0%",
  }, {
  height: "100%",
  duration: 0.6, 
  ease: "power4.out",
  }, "<"); 

  return tl;  

  
  
},

/////// After Enter

afterEnter(data) {
        
         menuAnimations();
         triggerClickOnIntroInvert();
         triggerClickOnIntro();
         imageParallax(data.next.container);
         
         
         fixedImageParallax();
         
          if ($('#expertise-page').length > 0) {
           $('.w-dyn-empty').parents('.awards-year-block').each(function(){ $(this).hide()})
           console.log('removed empty years');
             
        }
        
        if ($('#work-detail').length > 0) {
            modalsetup();  
            console.log('work detail modal function running & back button is visible');
              
         }  
 
        if ($('#work-filters').length > 0) {  
        filterScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js', function() {
                console.log('work filter script loaded');
              });
        }

        if ($('#news-filters').length > 0) {  
            filterScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js', function() {
                    console.log('news filter script loaded');
                  });
                 
            }
        
      }
    }
  ]
});