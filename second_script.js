const title = document.querySelector("#movie-title");
const title2 = document.querySelector("#movie-title2");
const title3 = document.querySelector("#movie-title3");
const title4 = document.querySelector("#movie-title4");
const descript = document.querySelector("#movie-disc");
const descript2 = document.querySelector("#movie-disc2");
const descript3 = document.querySelector("#movie-disc3");
const descript4 = document.querySelector("#movie-disc4");
const poster = document.querySelector("#movie-img");
const poster2 = document.querySelector("#movie-img2");
const poster3 = document.querySelector("#movie-img3");
const poster4 = document.querySelector("#movie-img4");
const back = document.querySelector("#backBtn")


console.log(sessionStorage)

var genre = localStorage.getItem('genre');
console.log(genre)

var requestUrl = 'https://imdb-api.com/API/AdvancedSearch/k_iu5n2ier?title_type=feature&user_rating=1.0,8.4&release_date=1929-04-17,2022-04-17&num_votes=10000,150000&genres=' + genre + '&has=awards&online_availability=US/today/Amazon/subs,US/today/Amazon/paid,US/today/Amazon/subs&countries=us&moviemeter=8000,30000&count=250&sort=boxoffice_gross_us,desc'
var movieData;

window.onload = function(){
    
    
      // console.log(movieData);


}

var apiCall = function(){
    $.ajax({
        url: requestUrl,
        method: 'GET',
      }).then(function (response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);
        movieData = response
        renderData(response)
      });
}

function random_item() {
console.log()  
randomInt = Math.floor(Math.random()*249);
return randomInt
     
}

var renderData = function(data){
 var number = random_item()
 var number2 = random_item()
 var number3 = random_item()
 var number4 = random_item()

    var mTitle = data.results[number].title
    var mTitle2 = data.results[number2].title
    var mTitle3 = data.results[number3].title
    var mTitle4 = data.results[number4].title
    var mPlot = data.results[number].plot
    var mPlot2 = data.results[number2].plot
    var mPlot3 = data.results[number3].plot
    var mPlot4 = data.results[number4].plot
    var mPoster = data.results[number].image
    var mPoster2 = data.results[number2].image
    var mPoster3 = data.results[number3].image
    var mPoster4 = data.results[number4].image
    title.innerHTML = mTitle
    title2.innerHTML = mTitle2
    title3.innerHTML = mTitle3
    title4.innerHTML = mTitle4
    descript.innerHTML = mPlot
    descript2.innerHTML = mPlot2
    descript3.innerHTML = mPlot3
    descript4.innerHTML = mPlot4
    poster.src = mPoster
    poster2.src = mPoster2
    poster3.src = mPoster3
    poster4.src = mPoster4

}

apiCall();

back.addEventListener('click', function(event){
  localStorage.clear();
  window.open(
    "index.html", "_blank"
  );
  
})


// make a loop to grab the first 4 movies
// insert data into respective fields on chart
// optional, make streaming links display in a pop up window ontop of the movie poster


