const createSearchbox = () => {
  //check if a searchbox exists already
  if (!$('.searchBoxContainer').length) {
    $('.navbar-collapse').append(`          
  <div class="searchBoxContainer ms-auto">
  <div class="searchBoxWrapper">
    <input class="searchBox" type="text">
    <button id="searchBtn" class="searchButton">Search</button>
    <div class="results">
    </div>
  </div>
</div>`);
  }
};

const loadMain = () => {
  $('.realtime-container').html('');
  $('.about-container').html('');
  $('#parallax').addClass('parallax');
  const data = $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/',
    success: (response) => {
      storeData(response);
    },
  });

  createSearchbox();
  let searchboxFlag = true;
  const storeData = (rawData) => {
    const data = rawData;
    //checks if there any coins already
    if (!$('#btc').length) {
      for (let i = 0; i < data.length; i++) {
        $('.card-container').append(`<div id=card${i}></div>`);
        $(`#card${i}`).html(`
        <div class="card card-cell">
          <div class="card-body">
            <div class="form-check form-switch switch-button position-absolute">
              <input class="form-check-input" id="rtcheck${i}" type="checkbox" id="flexSwitchCheckDefault">
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
  `);
        searchableContent.push(data[i].symbol);
      }
    }

    addCollapseEventListener();
  };

  //moreinfo
  const addCollapseEventListener = () => {
    const moreInfoBtn = $('.moreInfoBtn');
    const collapseInfo = document.querySelectorAll('.collapseInfo');
    //must use vanilla js queryselector since i have to use for each to iterate over the info
    //because im using the Bootstrap show event for the collapse
    const moreInfoCard = $('.moreInfoCard');

    const displayCardInfo = (card, data) => {
      $(card).html(`
      <img class="coin-image" src="${data.image}">
       <p>${data.usd}$</p>
        <p>${data.eur}€</p>
       <p>${data.ils}₪</p>`);
    };

    //check if two minutes passed
    const checkTwoMins = (date) => Math.floor(Math.abs(new Date() - date) / 1000 / 60) >= 2;

    const storeMoreInfoData = (rawData, id) => {
      //store to local storage
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

  //searchbox
  const searchableContent = [];

  $('.searchBox').keyup(function (e) {
    let results = '';
    let input = $('.searchBox').val();
    if (input.length) {
      results = searchableContent.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }

    //on searchbutton click go to the first result
    const searchBtnClick = (results) => {
      document.querySelector(`#${results[0]}`).scrollIntoView();
      $('.searchBox').val('');
      $('.results').html('');
    };
    $('#searchBtn').click(function (e) {
      searchBtnClick(results);
    });

    renderResults(results);
  });

  const renderResults = (results) => {
    if (!results.length) {
      return $('.searchBoxWrapper').removeClass('show');
    }

    let content = results
      .map((item) => {
        return `<li><a class="results-reset" href="#${item}">${item}</a></li>`;
      })
      .join('');
    $('.searchBoxWrapper').addClass('show');
    $('.results').html(`<ul>${content}</ul>`);
    $('.results-reset').click(function (e) {
      $('.searchBox').val('');
      $('.results').html('');
    });
  };
};

////
//load events
////

$('#currencies').click(function (e) {
  loadMain();
});

$('#about').click(function (e) {
  $('.card-container').html('');
  $('.searchBoxContainer').remove();
  $('.realtime-container').html('');
  $('#parallax').removeClass('parallax');
  $('.about-container').html('hi'); //content goes here
});

$('#realtime').click(function (e) {
  $('.card-container').html('');
  $('.searchBoxContainer').remove();
  $('.about-container').html('');
  $('.realtime-container').html('gr'); //content goes here
});
