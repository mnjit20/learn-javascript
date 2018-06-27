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


const getNewsIDs = new Promise((resolve, reject) => {
  fetch('https://appfeedlight.bhaskar.com/webfeed/news/521/521/2/0/15/').then(result => {
    // console.log(result);
    return result.json();
  }).then(data => {
    // console.log(data);
    const firstStory = data.data.story;
    stories = data.data.story;
    // console.log(stories);
    const story_list = [];
    for (var i = 0; i < stories.length; i++) {
      //    console.log(stories[i]['story_id']);
      story_list.push(stories[i]['story_id']);
    }
    // console.log(story_list);
    resolve(story_list);
  }).catch(error => console.log(error));

});
const getNewsDetails = (IDs) => {

  return new Promise((resolve, reject) => {

    fetch(`https://appfeedlight.bhaskar.com/webfeed/articaldetail/521/${IDs}`).then(result => {
      // console.log(result);
      return result.json();
    }).then(data => {
      // console.log(data);
      const firstStory = data.data.story;
      stories = data.data.story;
      // console.log(stories);
      resolve(stories);
    }).catch(error => console.log(error));
  });

};


async function getStoryContent() {
  const IDs = await getNewsIDs;
  console.log(IDs);

  const news = [];
  for (var i = 0; i < IDs.length; i++) {
    news[i] = await getNewsDetails(IDs[i]);
    console.log('Story Id: ', news[i]['storyid'], ' - ', news[i]['title']);
  }
}

getStoryContent();