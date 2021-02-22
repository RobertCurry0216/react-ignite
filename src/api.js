//base url
const base_url = "https://api.rawg.io/api/";

//getting the date
function getCurrentMonth() {
  const month = new Date().getMonth() + 1;
  return ("0" + month).slice(-2);
}

function getCurrentDay() {
  const day = new Date().getDate() + 1;
  return ("0" + day).slice(-2);
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesUrl = () => `${base_url}${popular_games}`;

console.log(popularGamesUrl());
