
let ourgallary = document.querySelectorAll(".gallary img");

ourgallary.forEach(Img=>{

    Img.addEventListener('click', (e)=>{

     let overlay = document.createElement("div");

      overlay.className = 'popup-overlay';

      document.body.appendChild(overlay);

      let popupbox = document.createElement("div");

      popupbox.className= 'popup-box';

      let popupimage = document.createElement("img");

      popupimage.src = Img.src;

      popupbox.appendChild(popupimage)

      document.body.appendChild(popupbox )

      if(Img.alt !== null){

      let imgHeading = document.createElement("h3");

      let imgText = document.createTextNode(Img.alt);
        
      imgHeading.appendChild(imgText);

      popupbox.appendChild(imgHeading);
      }

      let closebutton = document.createElement("span")

      let closebuttontext = document.createTextNode("x")

      closebutton.appendChild(closebuttontext)

      closebutton.className = 'close-button'

      popupbox.appendChild(closebutton);

     



    } );
})


//bullets

const allbullets = document.querySelectorAll(".nav-bullets .bullet")

allbullets.forEach(bullet =>{

bullet.addEventListener("click", (e) => {

  document.querySelector(e.target.dataset.section).scrollIntoView({

   behavior: 'smooth'

  })

});
});