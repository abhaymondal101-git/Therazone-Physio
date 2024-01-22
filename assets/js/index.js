const navbarSection = document.querySelector(".main-header");
const perfectDriving = document.querySelector(".main-about-section");
window.addEventListener("scroll",()=>{
	if(scrollY>90){
        navbarSection.style.backgroundColor="rgba(0,2,28,1)";
    }
    else{
        navbarSection.style.backgroundColor="transparent";
    }
})
// const {
//     top: t,
//     left: l
//   } = perfectDriving.getBoundingClientRect();
//   if((t-1000)<200){
//       console.log("get");
//         navbarSection.style.backgroundColor="rgba(0,0,0,.9)";
//   }

const hamImg = document.querySelector(".ham-img");
const navUlitem = document.querySelector(".nav-mobile-lower")
hamImg.addEventListener("click",()=>{
  navUlitem.classList.toggle("translateCss");
});

const servicesLink = document.querySelector(".services-link");
const serviceLinksDiv = document.querySelector(".service-links-div");

serviceLinksDiv.style.display="none";

servicesLink.addEventListener("mouseover",()=>{
    serviceLinksDiv.style.display="block";  
})

servicesLink.addEventListener("mouseout",()=>{
    serviceLinksDiv.style.display="none"; 
})

serviceLinksDiv.addEventListener("mouseover",()=>{
    serviceLinksDiv.style.display="block";
})

serviceLinksDiv.addEventListener("mouseout",()=>{
    serviceLinksDiv.style.display="none";
})

  