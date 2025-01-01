 document.addEventListener("DOMContentLoaded", function() {
     const gallery = document.querySelector(".gallery");
     const imagePaths = [
     "../images/img.jpg",
     "../images/img_01.jpg",
     "../images/img_02.jpg",
     "img.jpg",
     "../img.jpg"
     // Add more image paths here
     ];

     imagePaths.forEach(imagePath => {
         const img = document.createElement("img");
         img.src = imagePath;
         img.alt = "Artwork";
         gallery.appendChild(img);
         });
     });
