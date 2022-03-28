$(function () {
  const data = $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/list',
    success: (response) => {
      storeData(response);
    },
  });

  const storeData = (rawData) => {
    let data = rawData;
    const cardContainer = document.querySelector('.card-container');
    for (let i = 0; i < 100; i++) {
      console.log(data[i]);
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
      <div class="card card-cell">
        <div class="card-body">
          <div class="form-check form-switch switch-button position-absolute">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].id}</p>
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              More info </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Some coin info </div>
          </div>
        </div>
      </div>
`;
      cardContainer.append(newDiv);
    }
  };
});
