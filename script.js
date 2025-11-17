// SPLASH SCREEN TEXT ROATATION
const splashPhrases = [
    "just one more microcontroller",
    "I feel at peace with these buckets of nuts n bolts",
    "a fingerbreak/shear could change my life",
    "ROS...",
    "meet me at the hardware table <3",
    "guys can we play outside", 
    "no hear me out, a leadscrew could fix this",
    "someone give the makerspace some Cash Money"
];

// Select a random phrase on page load
document.addEventListener('DOMContentLoaded', function() {
    const headerTopContent = document.querySelector('.header-top-content');
    
    if (headerTopContent) {
        const randomIndex = Math.floor(Math.random() * splashPhrases.length);
        headerTopContent.textContent = splashPhrases[randomIndex];
    }
});