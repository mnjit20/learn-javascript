/* Author MANJ337 */
/* 2018 */

console.log('***************************');
console.log('***AJAX Calls with Fetch***');
console.log('***************************');


const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([521, 673, 886, 998, 1002]);
  }, 1500);
});

const getRecipe = recipeId => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = {
        title: 'Italian Pizza',
        Restaurant: 'German Bakers',
        id: ID
      };
      resolve(recipe);
    }, 1500, recipeId);
  });
};

const getRecommendation = RestaurantName => {
  return new Promise((resolve, reject) => {
    setTimeout((pubID) => {
      const recRecipe = {
        title: 'Maxican Pizza',
        Restaurant: 'German Bakers',
        id: pubID
      }
      resolve(recRecipe);
    }, 1500, RestaurantName)
  });
};


//ajax calls using fetch
//fetching using DainikBhaskar API

fetch('https://appfeedlight.bhaskar.com/webfeed/news/521/521/2/0/15/').then(result => {
  console.log(result);
  return result.json();
}).then(data => {
  // console.log(data);
  const firstStory = data.data;
  console.log(firstStory);
}).catch(error => console.log(error));