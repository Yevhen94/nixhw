const scrollBtn = document.getElementById("scrollBtn");

const setClasses = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

window.addEventListener("scroll", setClasses);

// When the user clicks on the button, scroll to the top of the document
const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

scrollBtn.addEventListener("click", scrollToTop);

$('[data-toggle="popover"]').popover({
  template:
    '<div class="popover" role="tooltip"><span class="popover-close" aria-hidden="true"><i class="bi bi-x-lg"></i></span><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
});

$('[data-toggle="popover"]').click(() => {
  $('[data-toggle="popover"]').popover("toggle");
  $(".popover-close").click(() => {
    $('[data-toggle="popover"]').popover("hide");
  });
});
