// API Keys
const apiKey = "f9dc5e1572c2e7f1ddbc558af30ea4b2";
const movieImg = "http://image.tmdb.org/t/p/w500/";

//Fetch Slider Movies  Data
const sliderMovieData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );
  const data = await res.json();
  console.log(data.results);
  getSliderMovieData(data.results);
};
sliderMovieData();

function getSliderMovieData(data) {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselBtn = document.querySelector(".carousel-indicators");
  data.forEach((element, i) => {
    carouselInner.innerHTML += `
      <div class="carousel-item">
        <img src="${movieImg}${
      element.backdrop_path
    }" class="d-block w-100 " alt="..." />
        <div class="overlay"></div>

        <div class="carousel-caption d-none d-md-block">
          <h2>${element.original_title}</h2>
          <p > Year:
          ${element.release_date.slice(0, 4)}  &nbsp &nbsp
          <span>Rating: <i class="fas fa-star text-warning "></i>&nbsp ${
            element.vote_average
          }</span> </p> 
          
          <a href="#" class="btn primary-btn fs-3 text-center ">More Details  <i class="fas fa-plus-circle fs-1 "></i> </a>
          
        </div>
      </div>`;

    carouselBtn.innerHTML += ` <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="${i}"
      class="slide-btn"
      aria-current="true"
      aria-label="Slide ${i + 1}"
    ></button>`;
  });

  const carouselItem = document.querySelectorAll(".carousel-item")[0];
  carouselItem.classList.add("active");

  const slideBtn = document.querySelectorAll(".slide-btn")[0];
  slideBtn.classList.add("active");
}

// Fetch Latest Movies  Data
const latestData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
  );
  const data = await res.json();
  getLatestMovieData(data.results);
};
latestData();
function getLatestMovieData(data) {
  return data.forEach((element) => {
    const latestMovies = document.querySelector("#latest-movies");

    latestMovies.innerHTML += `
    <div class="col-lg-2 col-md-3 col-6 my-2 movie-list" >
              <div class="card" style="width: 18rem; height: 36rem;">
                  <img  src="${movieImg}${
      element.poster_path
    }" class="card-img-top img-fluid" alt="..." />
                  <div class="card-body">
                       <h5 class="card-title">${element.original_title.slice(
                         0,
                         15
                       )} ${element.original_title && "..."}</h5>
                       <div class="d-flex justify-content-between my-4">
                          <p class="card-text">${element.release_date.slice(
                            0,
                            4
                          )}</p>
                          <p class="card-text"><i class="fas fa-star text-warning"></i> &nbsp${
                            element.vote_average
                          }</p>
                        </div>
                    </div>                          
               </div>
        </div>`;
  });
}
// Fetch Upcoming Movies  Data
const upcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`
  );
  const upcomingMovieData = await res.json();
  getUpcomingMovieData(upcomingMovieData.results);
};
upcomingMovies();

function getUpcomingMovieData(data) {
  return data.forEach((element) => {
    const upcoming = document.querySelector("#upcoming-movies");
    upcoming.innerHTML += `
          <div class="col-lg-2 col-md-3 col-6 my-2 movie-list" >
              <div class="card" style="width: 18rem; height: 36rem;">
                  <img src="${movieImg}${
      element.poster_path
    }" class="card-img-top img-fluid" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">${element.original_title.slice(
                        0,
                        15
                      )} ${element.original_title && "..."}</h5>

                      <div class="d-flex justify-content-between">
                       <p class="card-text">${
                         element.release_date
                       }</p> <p><i class="fas fa-star text-warning"></i> ${
      element.vote_average
    }</p>
                       </div>

                  </div>
              </div>
              </div>
          </div>`;
  });
}

// --------------------
//  ha ab bhai sun
// mujhe na slider me or image add krni hai
