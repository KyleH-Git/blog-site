//grab dom elements and store them for use
const backBtnEl = document.querySelector("#back-button");
const divContainerEl = document.getElementById('post-container');

//read stored posts from local storage and put them in an array 
const storedPosts = JSON.parse(localStorage.getItem('storedPosts'));


function createBlogPost(stored){
    //create html elements to store the information from stored posts
    const postCard = document.createElement('div');
    const postHeader = document.createElement('h3');
    const postBody = document.createElement('p');
    const postFooter = document.createElement('h5');

    //set html elements values to those from the stored posts
    postHeader.textContent = stored.postTitle;
    postBody.textContent = stored.postContent;
    postFooter.textContent = stored.username;

    //apply styling from blog sheet to card elements
    postCard.setAttribute('class', 'display-flex justify-content-center wrap-column post-card')
    postHeader.setAttribute('class', 'post-header');
    postBody.setAttribute('class', 'post-body');
    postFooter.setAttribute('class', 'post-footer');

    //append the post elements to the postCard, then append the card to the post-container
    postCard.appendChild(postHeader);
    postCard.appendChild(postBody);
    postCard.appendChild(postFooter);
    divContainerEl.appendChild(postCard);
}

console.log(storedPosts);
createBlogPost(storedPosts);

// TypeError: data.forEach is not a function - loop not working 
// storedPosts.forEach(post => {
//     createBlogPost(post);
// });

backBtnEl.addEventListener('click', function (event) {
    event.preventDefault();
    location.href="./index.html";
});