document.addEventListener("DOMContentLoaded", function() {
   var wrappers = document.querySelectorAll('.checkbox-wrapper-60');
 
   wrappers.forEach(function(wrapper) {
     wrapper.addEventListener('click', function() {
       // Deselect all wrappers
       wrappers.forEach(function(wrap) {
         wrap.classList.remove('selected');
       });
       // Select the clicked wrapper
       wrapper.classList.add('selected');
     });
   });
 });
 