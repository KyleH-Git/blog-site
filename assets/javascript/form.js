//take inputs from form and store them in vars
const usernameEl = document.querySelector("#username");
const postTitleEl = document.querySelector("#postTitle");
const postContentEl = document.querySelector("#postContent");
const formEl = document.querySelector("#contentForm");


function handlePostSubmit(event){
    event.preventDefault();

    let storedPosts = JSON.parse(localStorage.getItem('storedPosts'));
    if(storedPosts === null){
        storedPosts = [];
    }
        //check that inputs are not empty for each field
        if (usernameEl.value === ''){
            alert('Please enter a Username.');
        }else if(postTitleEl.value === ''){
            alert('Post needs a title.');
        }else if(postContentEl.value === ''){
            alert('Add a post body!');
        }else{
            //create a post object with those vars
            const blogPost = {
                username: usernameEl.value.trim(),
                postTitle: postTitleEl.value.trim(),
                postContent: postContentEl.value.trim()
            };             
            storedPosts.push(blogPost);
            localStorage.setItem('storedPosts', JSON.stringify(storedPosts));
            //if successful redirect to blog page
            location.href="./blog.html";
        }
}

//add event listener for form, with handlePost function passed
formEl.addEventListener('submit', handlePostSubmit);
