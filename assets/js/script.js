 
        const contactModal = document.getElementById('contact-us');
        const submitBtn = document.getElementById('contact-btn');
        const closeButton = document.getElementById('close-button');
        const backdrop =document.getElementById('backdrop')
  

            submitBtn.addEventListener('click', () => {
                contactModal.style.display = 'block';
                backdrop.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });

            closeButton.addEventListener('click', () => {
                // Close the dialog modal
                contactModal.style.display = 'none'
                backdrop.style.display = 'none';
                document.body.style.overflow = 'auto';
            });




// Js for the play button start

document.getElementById('play-button').addEventListener('click', function () {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    var playButton = document.getElementById('play-button');

    videoContainer.style.background = 'none';
    playButton.style.display = 'none';
    video.style.display = 'block';
    video.play();
});

  


        