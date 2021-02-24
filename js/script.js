var total = 279;
var masonry = document.getElementById("masonry");
let prefix = "https://cdn.jsdelivr.net/gh/Xecades/ACG/image/";
prefix = "https://cdn.jsdelivr.net/npm/chenyfan-happypic/";
(() => {
    for (var i = 1; i < total; i++) {
        masonry.innerHTML += `<div data-fancybox='gallery' class='post-item col-xs-6 col-sm-4 col-md-3 col-lg-2' data-src='${prefix}${i}.webp'><img class='post-item-img lazy' data-original='${prefix}${i}.webp'></div>`;
    }
    
    for (var i = 1; i <= 32; i++) {for (var j = 1; j < 100; i++) {
        prefix = `https://cdn.jsdelivr.net/npm/chenyfan-happypic@${i}/`;
        masonry.innerHTML += `<div data-fancybox='gallery' class='post-item col-xs-6 col-sm-4 col-md-3 col-lg-2' data-src='${prefix}${j}.jpg'><img class='post-item-img lazy' data-original='${prefix}${j}.jpg'></div>`;
    }
    for (var i = 1; i <= 19; i++) {for (var j = 1; j < 100; i++) {
        prefix = `https://cdn.jsdelivr.net/npm/chenyfan-happypic-sex@${i}/`;
        masonry.innerHTML += `<div data-fancybox='gallery' class='post-item col-xs-6 col-sm-4 col-md-3 col-lg-2' data-src='${prefix}${j}.jpg'><img class='post-item-img lazy' data-original='${prefix}${j}.jpg'></div>`;
    }
    // fancybox3
    $(function () {
        $('[data-fancybox="gallery"]').fancybox({
            toolbar: true,
            loop: false,
            smallBtn: false,
            buttons: ["zoom", "fullScreen", "download", "thumbs", "close"],
            iframe: {
                preload: false,
            },
        });
    });

    // lazyload
    $(function () {
        $("img.lazy").lazyload({
            placeholder: "/lazy.gif",
            effect: "fadeIn",
            load: function (ele) {
                var $container = $("#masonry");
                $container.imagesLoaded(function () {
                    $container.masonry({
                        itemSelector: ".post-item",
                        gutter: 0,
                        isAnimated: true,
                    });
                });
            },
        });
    });
})();
