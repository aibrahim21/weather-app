// API key and  URL
const key = "4d6b21b33101303dc0bab3f05dc200ed";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";


// Create a new date instance dynamically with JS
let today = new Date();
let newDate = today.toLocaleString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

document.getElementById("generate").addEventListener('click', performAction);



function performAction(a) {
  let zip = document.getElementById("zip").value;
  ///  console.log(zip);
  let feeling = document.getElementById("feeling").value;
  //console.log(feeling);

  console.log(newDate); // the date
  getTemp(baseURL, zip, key)
    .then(function(data) {
      console.log(data);

      postData('/add', {

          temp: data.main.temp,
          date: newDate,
          content: feeling
        })
        .then(function() {
          update();
        })
    })
};

///`${baseURL}${zip}&appid=${key}`
let getTemp = async (baseURL, zip, key) => {
  const response = await fetch(baseURL + zip + ',us&appid=' + key) //baseURL + zip + '&appid='+ key)
  console.log(response); ////the link
  try {
    const data = await response.json();
    console.log(data); ////
    // chain promises
    return data;
  } catch (error) {
    console.log(`sorry an error happened ${error}`);
  }
};
const postData = async (url = '/all', data = {
  date,
  temp,
  cont
}) => {
  const postRequest = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),

  });
  try {
    const newPost = await postRequest.json();
    //console.log(newPost);
    return newPost;
  } catch (a) {
    console.log(`sorry there is an error occured ${a}`);
  }
}


const update = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.Content;

  } catch (r) {
    console.log(`An error happened ${r}`);
  }
}
