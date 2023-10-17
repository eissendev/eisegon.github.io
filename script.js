const videoContainers = document.querySelectorAll('.video'); // Select all video containers

        videoContainers.forEach((videoContainer) => {
            const video = videoContainer.querySelector('.thevideo');

            videoContainer.addEventListener('mouseenter', function() {
                video.play();
            });

            videoContainer.addEventListener('mouseout', function() {
                video.pause();
            });
        });


     