// function updateViewport() {
//   const viewport = document.getElementById("viewport");
//   if (window.innerWidth < 800) {
//     viewport.setAttribute(
//       "content",
//       "width=device-width, initial-scale=0.2, maximum-scale=0.2"
//     );
//   } else {
//     viewport.setAttribute(
//       "content",
//       "width=1080px, initial-scale=1.0, maximum-scale=1.0"
//     );
//   }
// }
// window.onload = updateViewport;
// window.onresize = updateViewport;

// function scrollToEarlyAccess() {
//   document.getElementById("early-access").scrollIntoView({
//     behavior: "smooth",
//   });
// }


// function scrollToEarlyAccess() {
//   const section = document.getElementById('early-access');
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }


function scrollToEarlyAccess() {
  const target = document.getElementById('early-access');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('Target section not found!');
  }
}



document.addEventListener("scroll", function() {
  const homeImage = document.querySelector('.home-image img');
  const imagePosition = homeImage.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (imagePosition < screenHeight - 100) { // Adjust this number as per your need
    homeImage.classList.add('visible');
  } else {
    homeImage.classList.remove('visible');
  }
});


// document.getElementById("get-access-btn").addEventListener("click", function() {
//   const emailInput = document.getElementById("main-4-input").value;
//   const popup = document.getElementById("thank-you-popup");

//   // Check if the input field is empty
//   if (emailInput.trim() === "") {
//       popup.innerHTML = "Please enter your email!";
//       popup.style.backgroundColor = "rgba(255, 0, 0, 0.8)";  // Red background for error
//   } else {
//       popup.innerHTML = "Thank You!";
//       popup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";  // Regular background for success
//   }

//   // Show the popup
//   popup.classList.add("show");

//   // Hide the popup after 3 seconds
//   setTimeout(() => {
//       popup.classList.remove("show");
//   }, 3000);
// });





document.getElementById("get-access-btn").addEventListener("click", function() {
  const emailInput = document.getElementById("main-4-input").value;
  const popup = document.getElementById("thank-you-popup");
  const popupText = popup.querySelector(".popup-text");
  const icon = popup.querySelector(".icon");
  const closeIcon = popup.querySelector(".close-icon"); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  popup.classList.remove("success-popup", "error-popup");

  
  if (emailInput.trim() === "") {
      popupText.innerHTML = "Please enter your email!";
      popup.classList.add("error-popup"); 
      icon.innerHTML = `<img src="/Images/cross.png" alt="Cross" class="popup-icon-img">`; 
      icon.style.backgroundColor = "transparent"; 
     
  } else if (!emailRegex.test(emailInput)) {
      popupText.innerHTML = "Please enter a correct email!";
      popup.classList.add("error-popup"); 
      icon.innerHTML = `<img src="/Images/cross.png" alt="Cross" class="popup-icon-img">`;
      icon.style.backgroundColor = "transparent"; 

 
  } else {
      popupText.innerHTML = "Thank You!";
      popup.classList.add("success-popup"); 
      icon.innerHTML = "&#10003;"; 
      icon.style.backgroundColor = "rgba(0, 255, 0, 0.2)";  
      icon.style.color = "green";
  }


  popup.classList.add("show");


  setTimeout(() => {
      popup.classList.remove("show");
  }, 5000);

  closeIcon.addEventListener("click", function() {
    popup.classList.remove("show"); 
  });
});




