/* Author MANJ337 */
/* 2018 */

console.log('***************************');
console.log('***AJAX = async await***');
console.log('***Loading data from Dainik Bhaskar API***');
console.log('***************************');


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
      stories.feed_url = `https://appfeedlight.bhaskar.com/webfeed/articaldetail/521/${IDs}`;
      resolve(stories);
    }).catch(error => console.log(error));
  });

};


async function getStoryContent() {
  const IDs = await getNewsIDs;

  const news = [];
  for (var i = 0; i < IDs.length; i++) {

    news[i] = await getNewsDetails(IDs[i]);


    console.log('Story: ', news[i]['storyid'], ' - ', news[i]['title']);
  }
}

const aa = getStoryContent().then(() => {
  //promise callback after completing of this section.   
  console.log('getStoryContent Function promise resolved');
});