/* Author MANJ337 */
/* 2018 */

console.log('***************************');
console.log('********Async-Await*******');
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


//async function with multiple await 
async function getRecipeAW() {
  const IDs = await getIds;
  console.log("Restaurant IDs", IDs);

  const recipe = await getRecipe(IDs[3]);
  console.log('Recipe : ', recipe);

  const recommended = await getRecommendation(recipe.id);
  console.log(`Recommended from ${recipe.id}: `, recommended);

  return recipe;
}

//returning promise from the async function and showing the result on the console.
getRecipeAW().then(result => {
  console.log('Result :', result);
});