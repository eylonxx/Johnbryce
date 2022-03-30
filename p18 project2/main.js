$(function () {
  const data = $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/',

    success: (response) => {
      storeData(response);
    },
  });
  //   $("section").on("dblclick", "div", function () {
  //     $(this).append(":-)");
  // });
  const searchableContent = [];
  const searchInput = document.querySelector('.searchBox');
  const searchWrapper = document.querySelector('.searchBoxWrapper');
  const resultsWrapper = document.querySelector('.results');

  const storeData = (rawData) => {
    const data = rawData;

    const cardContainer = document.querySelector('.card-container');
    for (let i = 0; i < data.length; i++) {
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

          <button class="btn btn-primary moreInfoBtn" id="${
            data[i].id
          }" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${i}" aria-expanded="false" aria-controls="collapseExample">
          More Info
          </button>
          <div class="collapse collapseInfo" id="collapseExample${i}">
               <div class="card card-body moreInfoCard">
               
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

    collapseInfo.forEach((item, i) => {
      item.addEventListener('show.bs.collapse', function () {
        const id = moreInfoBtn[i]['id'];
        let data = JSON.parse(localStorage.getItem(id));
        if (!data || checkTwoMins(new Date(data.updated))) {
          console.log('hi');
          $.ajax({
            url: `https://api.coingecko.com/api/v3/coins/${id}`,
            success: function (response) {
              storeMoreInfoData(response);
              data = JSON.parse(localStorage.getItem(id));
              console.log(moreInfoCard[i]);
              moreInfoCard[i].innerHTML = `
              <img class="coin-image" src="${data.image}">
               <p>${data.usd}$</p>
                <p>${data.eur}€</p>
               <p>${data.ils}₪</p>`;
            },
          });

          const storeMoreInfoData = (rawData) => {
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
        } else {
          moreInfoCard[i].innerHTML = `
          <img class="coin-image" src="${data.image}">
          <p>${data.usd}$</p>
          <p>${data.eur}€</p>
          <p>${data.ils}₪</p>`;
          console.log(moreInfoCard[i]);
        }
      });
    });
  };

  const checkTwoMins = (date) => {
    const diff = Math.abs(new Date() - date);
    const minutes = Math.floor(diff / 1000 / 60);
    console.log(minutes);
    return minutes > 2;
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
        return `<li><a href="#">${item}</a></li>`;
      })
      .join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  };

  // showevent > check if in local storage, if not >save to localstorage, else nothing
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
};
