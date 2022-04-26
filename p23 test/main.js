const allButton = document.querySelector('#all');
const searchInput = document.querySelector('#searchInput');
const resultsContainer = document.querySelector('#results');
const resultsCountry = document.querySelector('#results-country');
const resultsRegion = document.querySelector('#results-region');
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
    </tr>
</thead>
<tbody id="country-content">

</tbody>
</table>`;
  //

  //fill country info
  const countryContent = document.querySelector('#country-content');
  for (let country of data) {
    countryContent.innerHTML += `
  <tr>
  <td>${country.name.official}</td>
  <td>${country.population}</td>
  </tr>
  `;
  }
  //

  //basic template region
  resultsRegion.innerHTML = `
<table>
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

  const regionContent = document.querySelector('#region-content');
  const regions = { Americas: 0, Africa: 0, Asia: 0, Oceania: 0, Antarctic: 0 };

  for (let country of data) {
    regions[country.region]++;
  }

  Object.entries(regions).forEach((entry) => {
    if (entry[1]) {
      regionContent.innerHTML += `
        <tr>
        <td>${entry[0]}</td>
        <td>${entry[1]}</td>
        </tr>
        `;
    }
  });
};

const resetPage = () => {
  resultsCountry.innerHTML = '';
  resultsRegion.innerHTML = '';
};

//get All counties
allButton.addEventListener('click', async () => {
  resetPage();
  try {
    const data = await getData('all');
    generateTemplate(data);
    searchInput.value = '';
  } catch (e) {
    resultsCountry.innerHTML = 'ERROR! THIS COUNTRY DOES NOT EXIST!';
    console.log(e);
  }
});
//form submit
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
