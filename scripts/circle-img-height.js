window.onload = function() {
    var circlesHeight = document.querySelector('.buy-sell .container').offsetHeight; // Get the height of the circles
    var img = document.querySelector('.buy-sell img'); // Get the image element
    img.style.minHeight = circlesHeight + 'px'; // Set the minimum height of the image to the height of the circles
    img.style.maxHeight = circlesHeight + 'px'; // Set the minimum height of the image to the height of the circles
};