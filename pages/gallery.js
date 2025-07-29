 document.addEventListener("DOMContentLoaded", function() {
     const gallery = document.querySelector(".gallery");
     const overlay = document.getElementById("overlay");
     const overlayImage = document.getElementById("overlay-image");
     const imagePaths = [
     "../images/img_42.jpg",
     "../images/img.jpg",
     "../images/img_01.jpg",
     "../images/img_02.jpg",
     "../images/img_03.jpg",
     "../images/img_04.jpg",
     "../images/img_05.jpg",
     "../images/img_06.jpg",
     //"../images/img_07.jpg",
     "../images/img_08.jpg",
     //"../images/img_09.jpg",
     "../images/img_10.jpg",
     "../images/img_11.jpg",
     "../images/img_12.jpg",
     "../images/img_13.jpg",
     "../images/img_14.jpg",
     "../images/img_15.jpg",
     "../images/img_16.jpg",
     //"../images/img_17.jpg",
     "../images/img_18.jpg",
     "../images/img_19.jpg",
     "../images/img_20.jpg",
     "../images/img_21.jpg",
     "../images/img_22.jpg",
     //"../images/img_23.jpg",
     "../images/img_24.jpg",
     "../images/img_25.jpg",
     "../images/img_26.jpg",
     "../images/img_27.jpg",
     "../images/img_28.jpg",
     //"../images/img_29.jpg",
     "../images/img_30.jpg",
     "../images/img_31.jpg",
     "../images/img_32.jpg",
     //"../images/img_33.jpg",
     //"../images/img_34.jpg",
     "../images/img_35.jpg",
     //"../images/img_36.jpg",
     //"../images/img_37.jpg",
     "../images/img_38.jpg",
     "../images/img_39.jpg",
     //"../images/img_40.jpg",
     "../images/img_41.jpg",
     //"../images/img_43.jpg",
     "../images/img_44.jpg",
     "../images/img_45.jpg",
     "../images/circus_celestia20250728_0103.jpg"
     // Add more image paths here
     ];

     imagePaths.forEach(imagePath => {
         const img = document.createElement("img");
         img.src = imagePath;
         img.alt = "Artwork";
         img.addEventListener("click", () => {
            overlayImage.src = imagePath;
            overlay.style.display = "flex";
         });
         gallery.appendChild(img);
         });

     overlay.addEventListener("click", (event) => {
         if (event.target.className !== "close-btn") {
             closeOverlay();
         }
     });
});

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}
