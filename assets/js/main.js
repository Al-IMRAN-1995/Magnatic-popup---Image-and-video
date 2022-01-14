    // portfolio view event start
    $(document).ready(function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]

            },
            callbacks: {

                elementParse: function (item) {

                    if (item.el[0].className == 'video') {
                        item.type = 'iframe';
                    } else {
                        item.type = 'image';
                    }
                }
            },
            mainClass: 'mfp-with-zoom',

            zoom: {
                enabled: true,

                duration: 600,
            },
        });
    });
    // portfolio view event end
