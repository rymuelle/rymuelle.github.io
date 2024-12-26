 document.addEventListener("DOMContentLoaded", function() {
     const gallery = document.querySelector(".gallery");
     const imagePaths = [
     "../images/art1.jpeg",
     "../images/art2.jpeg",
     "../images/art3.jpeg"
     // Add more image paths here
     ];

     imagePaths.forEach(imagePath => {
         const img = document.createElement("img");
         img.src = imagePath;
         img.alt = "Artwork";
         gallery.appendChild(img);
         });
     });
