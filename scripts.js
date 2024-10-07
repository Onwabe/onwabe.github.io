function typeEffect(elementId, texts, index, isDeleting) {
    const element = document.getElementById(elementId);
    const currentText = texts[index];
    const typingSpeed = isDeleting ? 50 : 100; // Speed for deleting vs typing
    const pauseTime = 100; // Pause after completing each text

    if (isDeleting) {
        element.textContent = currentText.substring(0, element.textContent.length - 1);
        if (element.textContent.length === 0) {
            isDeleting = false; // Switch to typing the next text
            index = (index + 1) % texts.length; // Move to the next text
            setTimeout(() => typeEffect(elementId, texts, index, isDeleting), pauseTime);
        } else {
            setTimeout(() => typeEffect(elementId, texts, index, isDeleting), typingSpeed);
        }
    } else {
        element.textContent += currentText.charAt(element.textContent.length);
        if (element.textContent.length === currentText.length) {
            isDeleting = true; // Switch to deleting after finishing the text
            setTimeout(() => typeEffect(elementId, texts, index, isDeleting), pauseTime);
        } else {
            setTimeout(() => typeEffect(elementId, texts, index, isDeleting), typingSpeed);
        }
    }
}

// This is the fucntion to start typing Your name and Role
window.onload = function() {
    const texts = ["I'm Onwabe Sisusa", "A Java Developer", "A Full Stack Developer"];
    typeEffect("typed-name", texts, 0, false); // I used the h1 ID and Remove H2 It was too big
};
