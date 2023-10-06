var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.gradyn.com/GithubContributions", requestOptions)
    .then(response => response.text())
    .then(result => document.getElementById("contribs").innerText = result)
    .catch(error => console.log('error', error));