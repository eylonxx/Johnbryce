const allButton = document.querySelector('#all');
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const resultsContainer = document.querySelector('#results');
const resultsCountry = document.querySelector('#results-country');
const resultsRegion = document.querySelector('#results-region');

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
<table>
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
    console.log(country.region);
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
  let Americas = 0;
  let Africa = 0;
  let Asia = 0;
  let Oceania = 0;
  let Antarctic = 0;
  for (let country of data) {
    switch (country.region) {
      case 'Americas':
        Americas++;
        break;
      case 'Africa':
        Africa++;
        break;
      case 'Asia':
        Asia++;
        break;
      case 'Oceania':
        Oceania++;
        break;
      case 'Antarctic':
        Antarctic++;
    }
  }
  //0 is not truthy, will only display if >0
  if (Americas) {
    regionContent.innerHTML += `
  <tr>
  <td>Americas</td>
  <td>${Americas}</td>
  </tr>
  `;
  }
  if (Africa) {
    regionContent.innerHTML += `
  <tr>
  <td>Africa</td>
  <td>${Africa}</td>
  </tr>
  `;
  }
  if (Asia) {
    regionContent.innerHTML += `
  <tr>
  <td>Asia</td>
  <td>${Asia}</td>
  </tr>
  `;
  }
  if (Oceania) {
    regionContent.innerHTML += `
  <tr>
  <td>Oceania</td>
  <td>${Oceania}</td>
  </tr>
  `;
  }
  if (Antarctic) {
    regionContent.innerHTML += `
  <tr>
  <td>Antarctic</td>
  <td>${Antarctic}</td>
  </tr>
  `;
  }
};

//get All counties
allButton.addEventListener('click', async () => {
  //reset
  resultsCountry.innerHTML = '';
  resultsRegion.innerHTML = '';
  //
  const data = await getData('all');
  console.log(data);
  generateTemplate(data);
});

//get Specific country
searchButton.addEventListener('click', async () => {
  //reset
  resultsCountry.innerHTML = '';
  resultsRegion.innerHTML = '';
  //
  const data = await getData(`/name/${searchInput.value}`);
  generateTemplate(data);
});
