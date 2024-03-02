// Function to open the modal
const openModal = () => {
    const modal = document.getElementById("videoModal");
    modal.style.display = "block";
  }
  
  // Function to close the modal
  const closeModal = () => {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
    // Stop video when modal is closed
    const iframe = modal.querySelector("iframe");
    iframe.src = iframe.src; // Reloads the iframe content to stop the video
  }

//   Pause the video when modal closed 
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('videoModal');
    modal.addEventListener('hidden.bs.modal', function () {
        var iframe = modal.querySelector('iframe');
        iframe.src = iframe.src; // Pause the video by resetting the src attribute
    });
});