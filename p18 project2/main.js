//EYLON PERETS 318245453
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
  //reset
  $('.realtime-container').html('');
  $('.about-container').html('');
  $('#parallax').addClass('parallax');
  //get data
  const data = $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/',
    success: (response) => {
      storeData(response);
    },
  });

  createSearchbox();
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
        //push available coins to search
      }
    }

    addCollapseEventListener();
  };

  //moreinfo
  const addCollapseEventListener = () => {
    const moreInfoBtn = $('.moreInfoBtn');
    const collapseInfo = $('.collapseInfo');
    const moreInfoCard = $('.moreInfoCard');

    const displayCardInfo = (card, data) => {
      //coin data inside collapse
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

    $('.collapseInfo').each(function (i) {
      //call ajax everytime a show.bs.collapse event fires
      $(this).on('show.bs.collapse', () => {
        const id = moreInfoBtn[i]['id'];
        let data = JSON.parse(localStorage.getItem(id));
        //check if we have have it already or more than 2 mins passed
        //if not, call ajax
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
          //if we do, just display it
          displayCardInfo(moreInfoCard[i], data);
        }
      });
    });
  };

  //searchbox
  //array to fill with all searchable coins
  const searchableContent = [];

  $('.searchBox').keyup(function (e) {
    //reset
    let results = '';
    let input = $('.searchBox').val();
    //fill result if we typed...
    if (input.length) {
      results = searchableContent.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }

    //on searchbutton click go to the first result
    const searchBtnClick = (results) => {
      //if it exists, scroll into view
      if ($(`#${results[0]}`).length) {
        $(`#${results[0]}`)[0].scrollIntoView();
      }
      //reset
      $('.searchBox').val('');
      $('.results').html('');
    };
    //adding onclick event to the button
    $('#searchBtn').click(function (e) {
      searchBtnClick(results);
    });

    renderResults(results);
  });

  const renderResults = (results) => {
    //if there are no results, remove show class
    if (!results.length) {
      return $('.searchBoxWrapper').removeClass('show');
    }
    //map over results, return an li for each one, since its an array,
    //we need to use join to make it a string so it can be proper html
    let content = results
      .map((item) => {
        return `<li><a class="results-reset" href="#${item}">${item}</a></li>`;
      })
      .join('');
    $('.searchBoxWrapper').addClass('show');
    //make the wrapper visible
    $('.results').html(`<ul>${content}</ul>`);
    //add the content
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
  $('.about-container').remove();
  $('.realtime-container').remove();
});

$('#about').click(function (e) {
  //reset
  $('.card-container').html('');
  $('.searchBoxContainer').remove();
  $('.realtime-container').remove();
  $('#parallax').removeClass('parallax');
  //checks if theres an about container
  if (!$('.about-container').length) {
    $('.wrapper').append(`<div class='about-container'></div>`);
  }
  //add content
  $('.about-container').html(`<div class="">
<h2>So what is Cryptocurrency?</h2>
<p>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.</p>
<p>Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers. The aim of encryption is to provide security and safety.</p>
<p>The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.</p>  </div>
<div>
<h2>About us</h2>
<p>
We specialize in tracking and keeping you up-to-date with the latest prices and trends in the Crypto world!
<p>Eylon Perets, Executive CEO Eylon Perets is an expert in the field of cryptocurrency with years of experience in navigating the highly dynamic cryptocurrency market, specializing in monitoring and real-time trading.</p>
</p>
<h2>About the website</h2>
<p>This website was created with you in mind and uses the latest technologies!</p>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JAVASCRIPT</li>
<li>BOOTSTRAP</li>
<li>JQUERY</li>
</ul>
</div>
`); //content goes here</p>
});

$('#realtime').click(function (e) {
  //reset
  $('.card-container').html('');
  $('.searchBoxContainer').remove();
  $('.about-container').remove();
  $('#parallax').removeClass('parallax');
  // checks if theres a rt container
  if (!$('.realtime-container').length) {
    $('.wrapper').append(`<div class='realtime-container'></div>`);
  }
  //add content
  $('.realtime-container').html('NOT IMPLEMENTED YET!!! COME BACK LATER!!!'); //content goes here
});
