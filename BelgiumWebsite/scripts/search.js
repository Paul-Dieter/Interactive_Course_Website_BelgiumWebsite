 // Smooth scrolling for navigation links
 document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


//search bar

// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('search-input');
//     const cards = document.querySelectorAll('.cards');
  
//     function filterIcons(searchQuery) {
//         const nothingfound = document.getElementById("nothing-alert");
//         let number = 0;
//           cards.forEach(function (card) {
//         const name = card.querySelector("h2").textContent.toLowerCase();
  
//         if (name.includes(searchQuery.toLowerCase())) {
//            nothingfound.style.display = "none";
//           card.style.display = "flex";
//           number++;
//         } else {
//           card.style.display = "none";
//         }
//       });
//       if(number == 0){
//           nothingfound.style.display = "block";
//       }
//     }
  
//     searchInput.addEventListener("input", function () {
//       const searchQuery = searchInput.value.trim();
//       filterIcons(searchQuery);
//     });
//   });

//   onclick 
  
//   document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.cards');
//     cards.forEach(card => {
//         card.addEventListener('click', function() {
//             const link = card.getAttribute('data-link');
//             window.location.href = link;
//         });
//     });
// });
// // focus search bar if nac search is clicked
// document.addEventListener('DOMContentLoaded', function () {
//   const navSearch = document.getElementById('navSearch');
//   const searchInput = document.getElementById('search-input');

//   navSearch.addEventListener('click', function (event) {
//     event.preventDefault();
//     searchInput.focus();
//   });
// });


