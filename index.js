// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

document.querySelectorAll('.letter').forEach(letter => {
  let hoverInterval;
  let jumpHeight = 0; // Initialize jump height

  letter.addEventListener('mouseenter', () => {
    // Reset jump height
    jumpHeight = 0;
    
    // Increase height every 100ms while hovering
    hoverInterval = setInterval(() => {
      if (jumpHeight < 40) {
        jumpHeight += 2; // Increase by 2px per interval
        letter.style.transform = `translateY(-${jumpHeight}px)`;
      }
    }, 100); // Adjust the speed as necessary
  });

  letter.addEventListener('mouseleave', () => {
    // Clear the interval and reset the jump
    clearInterval(hoverInterval);

    // Drop the letter back down
    letter.style.transform = 'translateY(0)';
  if (jumpHeight >=10 ){
  // Add an event listener to trigger shake effect once the transition ends (i.e., when the letter reaches height 0)
    letter.addEventListener('transitionend', () => {
      triggerShakeEffect(letter, jumpHeight);
    }, { once: true }); // The `once: true` ensures the event listener is only triggered once
  }  
  });
});

function triggerShakeEffect(droppedLetter, jumpHeight) {
  const otherLetters = document.querySelectorAll('.letter');
  const shakeIntensity = Math.min(jumpHeight / 10, 4); // Scale shake based on height, max intensity of 4

  otherLetters.forEach(letter => {
    if (letter !== droppedLetter) {
      letter.style.animationDuration = `${0.5 / shakeIntensity}s`; // Control the shake speed based on intensity
      letter.classList.add('shake');

      // Remove the shake effect after a short delay
      setTimeout(() => {
        letter.classList.remove('shake');
      }, 800); // The duration of the shake animation
    }
  });
}


