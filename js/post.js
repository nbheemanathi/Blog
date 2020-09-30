/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPost();
};
const getPostIdParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
};

const getPost = () => {
  // CODE GOES HERE
  const postId = getPostIdParam();
  const POST_API_URL = `${API_URL}${postId}`;
  fetch(POST_API_URL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPost(data);
    });
};

const buildPost = (data) => {
  // HINT: Convert the date number to a Date string
  console.log(data);
  let blogPostContent = "";
  const postDate = new Date(parseInt(data.added_date)).toDateString();
  const postImage = `${API_BASE_URL}${data.post_image}`;
  blogPostContent += ` 
        <div id="individual-post-title">
        ${data.title}
        </div>
        <div id="individual-post-date">
        ${postDate}
        </div>
        <div id="individual-post-content">
        ${data.content}
        </div>
    `;
  document.querySelector(".blog__post").innerHTML = blogPostContent;
  document.querySelector("header").style.backgroundImage = `url(${postImage})`;
};
