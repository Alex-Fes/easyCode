function getThis() {
    console.log(this);
  }
  
  // getThis();
  // window.getThis();
  // console.log(window.getThis);
  function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
  }
  function getName() {
      console.log(this.name);
      return this;
  };
  const prod1 = {
    name: "Intel",
    price: 100,
    getPrice,
    getName,
    info: {
      information: ["2.3 ghz"],
      getInfo: function () {
        console.log(this);
      },
    },
  };
  
  const prod2 = {
    name: "AMD",
    price: 50,
    getPrice,
  };
  prod2.getName = prod1.getName;
  
  prod1.getPrice();
  prod1.info.getInfo();
  prod2.getPrice();
  prod1.getName();
  prod2.getName();
  
  let str = "Hello world";
  const reversStr = str
  .split("")//разбивает на массив ['H', 'e',...]
  .reverse()//разворачивает в другую сторону ['d', 'l',....]
  .join("");//собирает назад в строку
  console.log(reversStr);
  
  
  const prod3 = {
      name: 'ABM',
      price: 200,
      getPrice,
      // getName,
  }
  
  // prod3.getName().getPrice();
  
  getPrice.call(prod3, '*');
  getPrice.apply(prod3, ['*']);
  
  const getPriceBind = prod3.getPrice.bind(prod3, '*');
  console.log(getPriceBind);
  setTimeout(getPriceBind, 1000);
  
  
  
  
  
  