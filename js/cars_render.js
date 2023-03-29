const carsContainer = document.querySelector(".tabs__content");

getCars();

async function getCars() {
  const response = await fetch("./js/cars.json");
  const carsArray = await response.json();
  renderCars(carsArray);
}

function renderCars(carsArray) {
  carsArray.forEach(function (item) {
    const carsHTML = `
    <div class="tabs__content-item">
      <img src="./img/choose/${item.imgSrc}" class="tabs__content-img"></img>
        <h4 class="tabs__content-title">${item.title}</h4>
        <p class="tabs__content-start-price">starting from $ ${item.startPrice}</p>
        <p class="tabs__content-credit">$ ${item.monthPrice}/mo</p>
      <div class="tabs__content-link">
          <a href="#">see details</a>
      </div>                  
    </div>
				`;
    carsContainer.insertAdjacentHTML("beforeend", carsHTML);
  });
}
