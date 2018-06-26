console.log('********** Promises **********');

//Some old type async code.
function getRecipe() {
  setTimeout(() => {
    const recipeID = [521, 673, 886, 998, 1002];
    console.log(recipeID);

    setTimeout((id) => {
      const recipe = {
        title: 'White sauce pasta',
        publisher: 'Xyz Foods'
      }
      console.log(`${id}: ${recipe.title}`);
      setTimeout((publisher) => {
        const recipe2 = {
          title: 'Red sauce pasta',
          publisher: 'Italian foods'
        }
        console.log(recipe2);
      }, 1500, recipe.publisher);
    }, 1500, recipeID[2]);

  }, 1500);
}

//invoked
getRecipe();