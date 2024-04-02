
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        perPage: 5,
        rewind: true,
        gap: 5,
        breakpoints: {
            768: {
                perPage: 2
            },
            576: {
                perPage: 1
            }
        }
    });

    splide.mount()
});

