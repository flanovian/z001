// Owlcarousel
$(document).ready(function(){
    var owl = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true, // Menonaktifkan center
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    owl.on('changed.owl.carousel', function(event) {
        var items = owl.find('.owl-item');
        items.removeClass('left-item'); // Hapus kelas dari semua item
        var index = event.item.index;
        var itemsCount = items.length;

        // Tambahkan kelas 'left-item' pada item di kiri dari item aktif
        var prevIndex = (index - 1 + itemsCount) % itemsCount;
        items.eq(prevIndex).addClass('left-item');
    });
});

  
$(function() {
    $('.owl-carousel.testimonial-carousel').owlCarousel({
      nav: true,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        750: {
          items: 2,
        }
      }
    });
  });