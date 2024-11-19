//Quiz handler
function submitQuiz() {
    const answers = {
      q1: "1",
      q2: "1",
      q3: "1",
      q4: "1",
      q5: "1"
    };
  
    let score = 0;
    for (const [question, correctAnswer] of Object.entries(answers)) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswer) {
        score++;
      }
    }
  
    const result = document.getElementById('result');
    result.textContent = `Your score: ${score} / 5`;
  }
  

  //history
  function toggleFlip(block) {
    block.classList.toggle('flipped');
  }



const teamMembers = document.querySelectorAll('.team-member-review');

teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        document.body.style.background = 'darkred'; 
    });

    member.addEventListener('mouseleave', () => {
        document.body.style.background = '#1a1a1a'; 
    });
});


//Team Members Photo Slider
const slides = document.querySelectorAll('.slide'); 
let currentIndex = 0; 
const intervalTime = 4000; 


function showNextSlide() {
    slides[currentIndex].style.opacity = 0;

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].style.opacity = 1;
}

slides[currentIndex].style.opacity = 1;


setTimeout(() => {
    showNextSlide(); 
    setInterval(showNextSlide, intervalTime); 
}, intervalTime - 1000); 
