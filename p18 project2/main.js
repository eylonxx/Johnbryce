const createSearchbox = () => {
  $('.navbar-collapse').append(`          
  <div class="searchBoxContainer ms-auto">
  <div class="searchBoxWrapper">
    <input class="searchBox" type="text">
    <button class="serachButton">search</button>
    <div class="results">
    </div>
  </div>
</div>`);
};

$('#currencies').click(function (e) {
  const data = $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/',
    success: (response) => {
      storeData(response);
    },
  });

  createSearchbox();

  const searchableContent = [];
  const searchInput = document.querySelector('.searchBox');
  const searchWrapper = document.querySelector('.searchBoxWrapper');
  const resultsWrapper = document.querySelector('.results');

  const storeData = (rawData) => {
    const data = rawData;

    const cardContainer = document.querySelector('.card-container');
    for (let i = 0; i < data.length; i++) {
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
      <div class="card card-cell">
        <div class="card-body">
          <div class="form-check form-switch switch-button position-absolute">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <h5 id="${data[i].symbol}" class="card-title">${data[i].symbol.toUpperCase()}</h5>
          <p class="card-text">${data[i].id}</p>
          <p class="">

          <button class="btn btn-primary moreInfoBtn" id="${
            data[i].id
          }" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${i}" aria-expanded="false" aria-controls="collapseExample">
          More Info
          </button>
          <div class="collapse collapseInfo" id="collapseExample${i}">
               <div class="card card-body moreInfoCard">
               <div class="spinner-border" role="status">
                   <span class="visually-hidden">Loading...</span>
                </div>
               </div>
          </div>

          </p>
          
        </div>
      </div>
`;
      cardContainer.append(newDiv);
      searchableContent.push(data[i].symbol);
    }
    addCollapseEventListener();
  };

  const addCollapseEventListener = () => {
    const moreInfoBtn = document.querySelectorAll('.moreInfoBtn');
    const collapseInfo = document.querySelectorAll('.collapseInfo');
    const moreInfoCard = document.querySelectorAll('.moreInfoCard');

    const displayCardInfo = (card, data) => {
      card.innerHTML = `
    <img class="coin-image" src="${data.image}">
     <p>${data.usd}$</p>
      <p>${data.eur}€</p>
     <p>${data.ils}₪</p>`;
    };

    const checkTwoMins = (date) => Math.floor(Math.abs(new Date() - date) / 1000 / 60) > 2;

    const storeMoreInfoData = (rawData, id) => {
      localStorage.setItem(
        id,
        JSON.stringify({
          usd: rawData.market_data.current_price.usd,
          eur: rawData.market_data.current_price.eur,
          ils: rawData.market_data.current_price.ils,
          image: rawData.image.small,
          updated: new Date(),
        })
      );
    };

    collapseInfo.forEach((item, i) => {
      item.addEventListener('show.bs.collapse', function () {
        const id = moreInfoBtn[i]['id'];
        let data = JSON.parse(localStorage.getItem(id));
        if (!data || checkTwoMins(new Date(data.updated))) {
          $.ajax({
            url: `https://api.coingecko.com/api/v3/coins/${id}`,
            success: function (response) {
              storeMoreInfoData(response, id);
              data = JSON.parse(localStorage.getItem(id));
              displayCardInfo(moreInfoCard[i], data);
            },
          });
        } else {
          displayCardInfo(moreInfoCard[i], data);
        }
      });
    });
  };

  searchInput.addEventListener('keyup', () => {
    let results = '';
    let input = searchInput.value;
    if (input.length) {
      results = searchableContent.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  const renderResults = (results) => {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }

    let content = results
      .map((item) => {
        return `<li><a href="#${item}">${item}</a></li>`;
      })
      .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  };
});

$('#about').click(function (e) {
  $('.card-container').html('');
  $('.searchBoxContainer').html('');
  $('.about-container').html('hi');
});
