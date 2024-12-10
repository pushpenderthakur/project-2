$(".categories-btn").click(function(){
    $(".categories-list").toggle();
  });
  // Hide the categories list when an inner link is clicked
$(".categories-list").on("click", "a", function () {
    $(".categories-list").hide();
  });
  $(".toggle-box").click(function(){
    $(".sub-categories").toggle();
  });
     // Wait for the DOM to fully load
     document.addEventListener("DOMContentLoaded", function () {
      // Select the buttons
      const listViewButton = document.querySelector(".list-view");
      const gridViewButton = document.querySelector(".grid-view");

      // Select the container to toggle classes
      const productBoxes = document.querySelector(".product-boxes");

      // Add click event for the List View button
      listViewButton.addEventListener("click", function () {
          productBoxes.classList.add("list-layout");
          productBoxes.classList.remove("grid-layout");
      });

      // Add click event for the Grid View button
      gridViewButton.addEventListener("click", function () {
          productBoxes.classList.add("grid-layout");
          productBoxes.classList.remove("list-layout");
      });
  });

  $(".menu-toggle").click(function(){
    $(".nav").toggle();
  });

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
    });
});