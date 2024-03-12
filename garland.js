const createGarland = () => {
    const garland = document.createElement("div");
    garland.classList.add("garland", "garland_1");
  
    document.body.append(garland);
  
    const style = document.createElement("style");
    style.textContent = `
    body {
      position: relative;
    }
  
    body:after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url(https://methed.ru/garland/elka.png);
      background-position: 0 0;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: 9999;
    }
  
    .garland {
      position: fixed;
      top: 5px;
      left: 0;
      right: 0;
      height: 36px;
      background-image: url(https://methed.ru/garland/christmas.png);
      pointer-events: none;
      z-index: 9998;
    }
  
    .garland_1 {
      background-position: 0 0;
    }
  
    .garland_2 {
      background-position: 0 -36px;
    }
  
    .garland_3 {
      background-position: 0 -72px;
    }
  
    .garland_4 {
      background-position: 0 -108px;
    }
  `;
    document.head.append(style);
  
    let order = 1;
  
    setInterval(() => {
      switch (order) {
        case 1:
          garland.classList.add("garland_2");
          garland.classList.remove("garland_1");
          order = 2;
          break;
        case 2:
          garland.classList.add("garland_3");
          garland.classList.remove("garland_2");
          order = 3;
          break;
        case 3:
          garland.classList.add("garland_4");
          garland.classList.remove("garland_3");
          order = 4;
          break;
        case 4:
          garland.classList.add("garland_1");
          garland.classList.remove("garland_4");
          order = 1;
          break;
      }
    }, 1000);
  };
  
  createGarland();