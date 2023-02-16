/* swiper */
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    outoplayTimeout: 1000,
    autoplayHoverPause: true,

    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});