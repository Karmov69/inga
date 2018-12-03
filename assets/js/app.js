$(".latest-work__container").owlCarousel({
  loop: false,
  margin: 0,
  nav: true,

  dots: true,
  autoplay: false,
  autoWidth: false,
  responsiveClass: true,
  navText: false,
  responsive: {
    0: {
      items: 1.25
    },
    600: {
      items: 1.25
    },
    1000: {
      items: 3
    }
  }
});


$(".review__container").owlCarousel({
  loop: false,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: false,
  autoWidth: false,
  pagination: false,
  responsiveClass: true,
  navText: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


$(".project__images").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  autoplay: false,
  autoWidth: false,
  pagination: false,
  responsiveClass: true,
  navText: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1.25
    }
  }
});


if (document.querySelector(".header-mobile")) {
  let hamburger = document.querySelector(".mobile-humburger");
  let close = document.querySelector(".mobile-close");
  let menu = document.querySelector(".nav-mobile");

  function menuToggle() {
    hamburger.classList.toggle("active");
    close.classList.toggle("active");
    menu.classList.toggle("active");
  }

  hamburger.addEventListener("click", menuToggle);
  close.addEventListener("click", menuToggle);
  menu.addEventListener("click", menuToggle);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChcIi5sYXRlc3Qtd29ya19fY29udGFpbmVyXCIpLm93bENhcm91c2VsKHtcclxuICBsb29wOiBmYWxzZSxcclxuICBtYXJnaW46IDAsXHJcbiAgbmF2OiB0cnVlLFxyXG5cclxuICBkb3RzOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiBmYWxzZSxcclxuICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICBuYXZUZXh0OiBmYWxzZSxcclxuICByZXNwb25zaXZlOiB7XHJcbiAgICAwOiB7XHJcbiAgICAgIGl0ZW1zOiAxLjI1XHJcbiAgICB9LFxyXG4gICAgNjAwOiB7XHJcbiAgICAgIGl0ZW1zOiAxLjI1XHJcbiAgICB9LFxyXG4gICAgMTAwMDoge1xyXG4gICAgICBpdGVtczogM1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuJChcIi5yZXZpZXdfX2NvbnRhaW5lclwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgbG9vcDogZmFsc2UsXHJcbiAgbWFyZ2luOiAwLFxyXG4gIG5hdjogdHJ1ZSxcclxuICBkb3RzOiBmYWxzZSxcclxuICBhdXRvcGxheTogZmFsc2UsXHJcbiAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgbmF2VGV4dDogdHJ1ZSxcclxuICByZXNwb25zaXZlOiB7XHJcbiAgICAwOiB7XHJcbiAgICAgIGl0ZW1zOiAxXHJcbiAgICB9LFxyXG4gICAgNjAwOiB7XHJcbiAgICAgIGl0ZW1zOiAxXHJcbiAgICB9LFxyXG4gICAgMTAwMDoge1xyXG4gICAgICBpdGVtczogMVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuJChcIi5wcm9qZWN0X19pbWFnZXNcIikub3dsQ2Fyb3VzZWwoe1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbWFyZ2luOiAwLFxyXG4gIG5hdjogdHJ1ZSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiBmYWxzZSxcclxuICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcclxuICBuYXZUZXh0OiB0cnVlLFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIDA6IHtcclxuICAgICAgaXRlbXM6IDFcclxuICAgIH0sXHJcbiAgICA2MDA6IHtcclxuICAgICAgaXRlbXM6IDFcclxuICAgIH0sXHJcbiAgICAxMDAwOiB7XHJcbiAgICAgIGl0ZW1zOiAxLjI1XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbW9iaWxlXCIpKSB7XHJcbiAgbGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLWh1bWJ1cmdlclwiKTtcclxuICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1jbG9zZVwiKTtcclxuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LW1vYmlsZVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudVRvZ2dsZSk7XHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVUb2dnbGUpO1xyXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVUb2dnbGUpO1xyXG59Il19
