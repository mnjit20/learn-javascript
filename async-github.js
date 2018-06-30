  const fetch = require('node-fetch');

  // async function showGitHubUser(handle) {
  //   const url = `https://api.github.com/users/${handle}`;
  //   const response = await fetch(url);
  //   const user = await response.json();
  //   //console.log(user.name);
  //   return user;
  // }



  // aa = showGitHubUser('mnjit20').then(user => {
  //   console.log(user.name);
  //   console.log(user.location);
  // })

  async function showNewsStory(endpoint) {
    //console.log('request came with ', endpoint);
    const url = `https://appfeedlight.bhaskar.com/webfeed${endpoint}`;

    const response = await fetch(url);
    return await response.json();
  }

  async function showUserRepos(handle) {

    const [list, news] = await Promise.all([
      showNewsStory(`/news/521/521/2/0/15/`),
      showNewsStory(`/articaldetail/521/${handle}`)
    ]);

    console.log(list.data.story.length);
    console.log(news.data.story.title);

  }


  showUserRepos('122203101');