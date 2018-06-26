/*Some old type async code.
callback hell example*/

// function getRecipe() {
//   console.log('********** callback hell functions invoked **********');
//   setTimeout(() => {
//     const recipeID = [521, 673, 886, 998, 1002];
//     console.log(recipeID);

//     setTimeout((id) => {
//       const recipe = {
//         title: 'White sauce pasta',
//         Restaurant: 'Xyz Foods'
//       }
//       console.log(`${id}: ${recipe.title}`);
//       setTimeout((Restaurant) => {
//         const recipe2 = {
//           title: 'Red sauce pasta',
//           Restaurant: 'Italian foods'
//         }
//         console.log(recipe2);
//       }, 1500, recipe.Restaurant);
//     }, 1500, recipeID[2]);

//   }, 1500);
// }

//invoked
//getRecipe();



console.log('***************************');
console.log('Callback Hell to Promises');
//implmenting promises
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

getIds
  .then(IDs => {
    console.log('Restaurant IDs List', IDs);
    return getRecipe(IDs[2]);
  })
  .then(recipe => {
    console.log('Recipe from Restaurant:', recipe);
    return getRecommendation(recipe.id);
  })
  .then(recRecipe => {
    console.log('Recommended from Restaurant :', recRecipe);
  })
  .catch(error => {
    console.log('Error!! ', error);
  });