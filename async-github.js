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

  async function showGitHubUser(endpoint) {
    console.log('request came with ', endpoint);
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
  }

  async function showUserRepos(handle) {
    const userPromise = showGitHubUser(`/users/${handle}`);
    const reposPromise = showGitHubUser(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(repos.length, ' repos');

  }


  showUserRepos('mnjit20');