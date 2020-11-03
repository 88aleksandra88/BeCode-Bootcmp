// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
       
     
      
        document.getElementById("next").addEventListener("click", () => {
            let galleryIndex = 1;
            function changeImage() {
                gallery.setAttribute("src", gallery[galleryIndex]);
                imageIndex++;
                if (galleryIndex > 4) {galleryIndex = 0;}
                

            }
        
    //pas fini
       
       
        
    

})()});
