// ファーストビュー背景・スライダー(splide)
const fixedSlider = document.querySelector('#fixed__splide');
if (fixedSlider) {
  new Splide("#fixed__splide", {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    focus: 'center',
    autoplay: true,
    gap: 0,
    interval: 0,
    speed: 60000,
    pauseOnHover: false, 
    pauseOnFocus: false,
    arrows: false,
    pagination: false,
  }).mount();
}

// 製品使用・スライダー(splide)
const productSlider = document.querySelector('#product__splide');
if (productSlider) {
    new Splide("#product__splide", {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      focus: 'center',
      autoplay: true,
      interval: 4000,
      pauseOnHover: false,   // ← ホバーしても止まらない
      pauseOnFocus: false,   // ← フォーカスでも止まらない
      arrows: false,
      pagination: true,
    }).mount();
};

// FAQアコーディオン
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.faq__accordion-titlebox');

  buttons.forEach((button, index) => {
    const content = button.nextElementSibling;

    // ▼ 最初のアコーディオンを開いた状態にする
    if (index === 0) {
      content.classList.add('open');
      button.classList.add('close');
    }

    // ▼ クリックしたときの動作
    button.addEventListener('click', () => {

      if (content.classList.contains('open')) {
        // 閉じる
        content.classList.remove('open');
        button.classList.remove('close');
      } else {
        // 開く
        content.classList.add('open');
        button.classList.add('close');
      }
    });
  });
});

// aos.js
AOS.init({
    easing: "ease-out-quad",
    duration: 800,
    delay: 8000,
    once: true,
});


const feadIn = document.querySelector('.fead-in');

const keyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};
const options = {
  duration: 3000,
  easing: 'ease',
};

feadIn.animate(keyframes, options);