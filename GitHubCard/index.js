/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>

    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

cardCreator = obj => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  userImg.setAttribute("src", obj.avatar_url) 
  cardDiv.append(userImg);
  
  const cardinfoDiv = document.createElement('div');
  cardinfoDiv.classList.add('div.card-info');
  cardDiv.append(cardinfoDiv);

  const screenName = document.createElement('h3');
  screenName.classList.add("name")
  screenName.textContent = obj.name
  cardinfoDiv.append(screenName);

  const userName = document.createElement('p');
  userName.classList.add("username")
  userName.textContent = obj.login
  cardinfoDiv.append(userName);

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${obj.location}`
  cardinfoDiv.append(userLocation);

  const userProfile = document.createElement('p');
  userProfile.textContent = `Profile:`
  cardinfoDiv.append(userProfile);

  const userLink = document.createElement('a');
  userLink.setAttribute("href", obj.html_url)
  userLink.setAttribute("target", "_blank")
  userLink.textContent = `GitHub Profile`
  userProfile.append(userLink)


  const userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${obj.followers}`
  cardinfoDiv.append(userFollowers);

  const userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${obj.following}`
  cardinfoDiv.append(userFollowing);

  const userBio = document.createElement('p');
  userBio.textContent = obj.bio
  cardinfoDiv.append(userBio);

  return cardDiv;

}

let cardsParent = document.querySelector("div.cards");




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


axios.get('https://api.github.com/users/imriven')
    .then( response => {
        // deal with the response data in here
        console.log(response)
        cardsParent.appendChild(cardCreator(response.data))
    })
    .catch( err => {
        // deal with the error in here
        console.log("There's an error", err)
    })

axios.get("https://api.github.com/users/imriven/followers")
    .then(response => {
      console.log(response)
       response.data.forEach(person => cardsParent.appendChild(cardCreator(person)))
    })
    .catch(err => console.log("There's an error", err
    ))


/*
const myData = {
  "login": "imriven",
  "id": 16640631,
  "node_id": "MDQ6VXNlcjE2NjQwNjMx",
  "avatar_url": "https://avatars3.githubusercontent.com/u/16640631?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/imriven",
  "html_url": "https://github.com/imriven",
  "followers_url": "https://api.github.com/users/imriven/followers",
  "following_url": "https://api.github.com/users/imriven/following{/other_user}",
  "gists_url": "https://api.github.com/users/imriven/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/imriven/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/imriven/subscriptions",
  "organizations_url": "https://api.github.com/users/imriven/orgs",
  "repos_url": "https://api.github.com/users/imriven/repos",
  "events_url": "https://api.github.com/users/imriven/events{/privacy}",
  "received_events_url": "https://api.github.com/users/imriven/received_events",
  "type": "User",
  "site_admin": false,
  "name": "christina smith",
  "company": "Christina The Designer LLC",
  "blog": "https://christinaharris.design/",
  "location": "Seattle WA",
  "email": null,
  "hireable": null,
  "bio": "Earned my BA in Graphic Design from Massachusetts College of Art and Design. ",
  "public_repos": 45,
  "public_gists": 4,
  "followers": 3,
  "following": 2,
  "created_at": "2016-01-11T02:24:25Z",
  "updated_at": "2020-03-12T14:39:28Z"
}

cardsParent.appendChild(cardCreator(myData))

*/