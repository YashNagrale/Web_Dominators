
function showAlert(courseName) {
    alert("You clicked on " + courseName);
}

function handleMouseMove(event) {
    const box = event.currentTarget;
    const { width, height, left, top } = box.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    // Invert the tilt effect
    const tiltX = (yPercent - 50) * -0.2; // Adjust the tilt amount
    const tiltY = (xPercent - 50) * 0.2; // Adjust the tilt amount

    box.style.transform = `perspective(300px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
}

function handleMouseLeave(event) {
    const box = event.currentTarget;
    box.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)';
}

let typed = new Typed("#element", {
    strings: [`Welcome to <span style="color:#0078ff;">GetSkills</span>`],
    typeSpeed: 20,
    showCursor: false,
    startDelay: 900,
  });
