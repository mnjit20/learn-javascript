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
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
  }

  async function showUserRepos(handle) {
    const user = showGitHubUser(`/users/${handle}`);


    //const repos = await showGitHubUser(`/users/${handle}/repos`);

    console.log(user.name);
    //console.log(repos.length, ' repos');

  }


  showUserRepos('mnjit20');