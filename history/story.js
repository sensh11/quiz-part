// Добавление эффекта появления блоков при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.info-block');
  
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };
  
    const animateBlocks = () => {
      blocks.forEach((block) => {
        if (isVisible(block)) {
          block.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', animateBlocks);
    animateBlocks();
  });
  
  // Функция для переворачивания блока
function toggleFlip(block) {
    block.classList.toggle('flipped');
  }
  