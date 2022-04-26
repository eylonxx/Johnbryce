const allButton = document.querySelector('#all');
const searchInput = document.querySelector('#searchInput');
const resultsContainer = document.querySelector('#results');
const resultsCountry = document.querySelector('#results-country');
const resultsRegion = document.querySelector('#results-region');
const resultsCurrencies = document.querySelector('#results-currencies');
const form = document.querySelector('#form');

// EYLON PERETS 318245453

const getData = async (search) => {
  const data = fetch(`https://restcountries.com/v3.1/${search}`).then((response) => response.json());
  return data;
};

const generateTemplate = (data) => {
  //calc total and avg
  let total = 0;
  for (let countrys of data) {
    total += countrys.population;
  }
  let average = Math.floor(total / data.length);
  //

  //basic template country
  resultsCountry.innerHTML = `
<h2>Total Population: ${total}</h2>
<h2>Average Population: ${average}</h2>
<table class="table table-light">
<thead>
    <tr>
        <th>Country Name</th>
        <th>Number of Citizens</th>
        <th>Currencies</th>
    </tr>
</thead>
<tbody id="country-content">

</tbody>
</table>`;
  //

  //basic template region
  resultsRegion.innerHTML = `
    <table class="table table-light">
    <thead>
        <tr>
            <th>Region</th>
            <th>Number of Countries</th>
        </tr>
    </thead>
    <tbody id="region-content">
    
    </tbody>
    </table>`;
  //

  //basic currencies template
  resultsCurrencies.innerHTML = `
  <table class="table table-light">
  <thead>
      <tr>
          <th>Currencies</th>
          <th>Number of countries using currency</th>
      </tr>
  </thead>
  <tbody id="currencies-content">
  
  </tbody>
  </table>`;
  //

  //country logic
  const countryContent = document.querySelector('#country-content');
  for (let country of data) {
    countryContent.innerHTML += `
  <tr>
  <td>${country.name.official}</td>
  <td>${country.population}</td>
  <td>${country.currencies ? Object.keys(country.currencies) : 'none'}</td>
  </tr>
  `;
  }
  //

  //region logic
  const regionContent = document.querySelector('#region-content');
  const regions = { Americas: 0, Africa: 0, Asia: 0, Oceania: 0, Antarctic: 0 };

  for (let country of data) {
    regions[country.region]++;
  }
  Object.entries(regions).forEach((entry) => {
    //entry[1] = number of countries
    //entry[0] = country name
    if (entry[1]) {
      regionContent.innerHTML += `
        <tr>
        <td>${entry[0]}</td>
        <td>${entry[1]}</td>
        </tr>
        `;
    }
  });
  //

  //currencies logic
  const currenciesContent = document.querySelector('#currencies-content');
  const currencies = {};
  for (let country of data) {
    //check if currencies exist
    if (country.currencies) {
      //iterate over keys of currencies
      Object.keys(country.currencies).forEach((key) => {
        //increment key if exists
        if (key in currencies) {
          currencies[key]++;
        } else {
          //create and initialize to 1 if doesnt exist
          currencies[key] = 1;
        }
      });
    }
  }

  Object.entries(currencies).forEach((entry) => {
    //entry[1] = number of countries
    //entry[0] = currency name
    if (entry[1]) {
      currenciesContent.innerHTML += `
        <tr>
        <td>${entry[0]}</td>
        <td>${entry[1]}</td>
        </tr>
        `;
    }
  });
  //
};

const resetPage = () => {
  resultsCountry.innerHTML = '';
  resultsRegion.innerHTML = '';
  resultsCurrencies.innerHTML = '';
};

//get All countries
allButton.addEventListener('click', async () => {
  resetPage();
  try {
    const data = await getData('all');
    console.log(data);
    generateTemplate(data);
    searchInput.value = '';
  } catch (e) {
    resultsCountry.innerHTML = 'ERROR! THIS COUNTRY DOES NOT EXIST!';
    console.log(e);
  }
});

//form submit (button and enter)
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  resetPage();
  try {
    const data = await getData(`/name/${searchInput.value}`);
    generateTemplate(data);
    searchInput.value = '';
  } catch (e) {
    resultsCountry.innerHTML = 'ERROR! THIS COUNTRY DOES NOT EXIST!';
    console.log(e);
  }
});
