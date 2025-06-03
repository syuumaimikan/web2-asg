window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 2; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // 星を500個生成
  for (let i = 0; i < 500; i++) {
    createStar();
  }

  function create_shooting() {
    const shootingStar = document.createElement("span");
    shootingStar.className = "shooting-star";
    const minSize = 5; // 星の最小サイズを指定
    const maxSize = 10; // 星の最大サイズを指定

    const left = Math.random() * 100;
    shootingStar.style.top = `0vh`;
    shootingStar.style.left = `${left}vw`;
    const size = Math.random() * (maxSize - minSize) + minSize;
    shootingStar.style.width = `${size}px`;
    shootingStar.style.height = `${size}px`;
    document.body.appendChild(shootingStar);

    // 10秒後に流れ星を消す
    setTimeout(() => {
      shootingStar.remove();
    }, 10000);
  }
  setInterval(() => {
    create_shooting();
  }, Math.random() * 1000 + 1000);
});
