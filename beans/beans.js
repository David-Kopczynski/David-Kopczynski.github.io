window.addEventListener("load", function () {
  const bean = "./beans/bean.png";
  const target = document.querySelector("#bean");

  const count = Math.random() * 15 + 15;
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = bean;

    img.style = `
        transform: rotate(${Math.random() * 360}deg) scale(${
      Math.random() * 0.5 + 0.5
    });
        left: ${Math.random() * 100}%;
        position: absolute;
        width: 4rem; 
        height: 4rem;
        top: -2rem; 
        animation: beanAnimation ${Math.random() * 20 + 20}s linear -${
      Math.random() * 25
    }s infinite;
        filter: brightness(${Math.random() * 0.5 + 0.75});
    `;
    target.appendChild(img);
  }
});
