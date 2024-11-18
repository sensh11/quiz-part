function submitQuiz() {
    const answers = {
      q1: "3",
      q2: "2",
      q3: "3",
      q4: "3",
      q5: "2"
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
  