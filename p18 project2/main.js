$(function () {
<<<<<<< HEAD
  const data = $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/',
=======
  $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/list',
>>>>>>> 58aa185d6751d6e164dbcfedd1a0fedbc3b8fe47
    success: (response) => {
      storeData(response);
    },
  });
  //   $("section").on("dblclick", "div", function () {
  //     $(this).append(":-)");
  // });
  const storeData = (rawData) => {
    let data = rawData;
    const cardContainer = document.querySelector('.card-container');
    for (let i = 0; i < 100; i++) {
      // console.log(data[i]);
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
      <div class="card card-cell">
        <div class="card-body">
          <div class="form-check form-switch switch-button position-absolute">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <h5 class="card-title">${data[i].symbol.toUpperCase()}</h5>
          <p class="card-text">${data[i].id}</p>
          <p class="">
          <button class="btn btn-primary moreInfoBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${i}" aria-expanded="false" aria-controls="collapseExample">
          More info
        </button>
          </p>
          <div class="collapse" id="collapseExample${i}">
            <div class="card card-body">
<<<<<<< HEAD
              <img src="${data[i].image.small}">
              <span>${data[i].market_data.current_price.usd}</span
              <span>${data[i].market_data.current_price.eur}</span
              <span>${data[i].market_data.current_price.ils}</span
=======
              Some coin info
>>>>>>> 58aa185d6751d6e164dbcfedd1a0fedbc3b8fe47
              </div>
          </div>
        </div>
      </div>
`;
      cardContainer.append(newDiv);
    }
  };
});
const moreInfo = () => {
  $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/',
    success: function (response) {
      storeMoreInfoData(response);
    },
  });
};

const storeMoreInfoData = (rawData) => {
  const data = rawData;
  console.log(data);
};

$(document).on('click', '.moreInfoBtn', function () {
  moreInfo();
});
