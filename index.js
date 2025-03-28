document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', function() {
        const answerId = this.getAttribute('data-answer');
        const answer = document.getElementById(answerId);
        if (answer) {
            answer.classList.toggle('active');
        }
    });
});