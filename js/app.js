// VAriables
const form =  document.querySelector('#generate-names');


//Event Listeners
eventListners();

function eventListners() {
  form.addEventListener('submit', loadNames);
}


//functions
function loadNames(event) {
  event.preventDefault;

  //Read the values from form fields
  const origin = document.getElementById('country').value;
  const genre =  document.getElementById('genre').value;
  const quantity = document.getElementById('quantity').value;

  //build URL
  let url = 'https://uinames.com/api/?';
  if(origin !== ''){
    url += `region=${origin}`;
  }

  if(genre !== ''){
    url += `&gender=${genre}`;
  }

  if(quantity !== ''){
    url += `&amount=${quantity}`;
  }

  console.log(url);
  //AJAX call
  const xhr = new XMLHttpRequest();

  //open connection
  xhr.open('GET', url, true);

  //Excute function
  xhr.onload =  function () {
    if(this.status === 200){
      const names = JSON.parse(this.responseText);

      //insert into html
      let html = '<h2>Generate Names</h2>';
      html += '<ul class="list">';
      names.forEach(name =>
        html += `<li>${names.name}</li>`;
      );
      console.log(names);
      html+= '</ul>';
      document.querySelector('#result').innerHTML = html;
    }
  }
  xhr.send();
}
