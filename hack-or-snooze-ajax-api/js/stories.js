"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

async function submitNewStory(evt){
  evt.preventDefault();
console.log("clickedREALL")

const title = $("#create-title").val();
const url = $("#create-url").val();
const author = $("#create-author").val();
const username = currentUser.username
const storyData = { title, url, author, username };

const story = await storyList.addStory(currentUser, storyData);

const $story = generateStoryMarkup(story);
$allStoriesList.prepend($story);


  
}
  
$formStorySubmit.on("submit", submitNewStory)

// putting favoried list 

function putFavoritesListonPage(){
  if(currentUser.favorites.length === 0){
    $favoriteOl.append("<h6> No favorites added! </h6>")
  }
  else{
    for(let story of currentUser.favorites){
      
    }
  }
}

function addStorytoFavoriteonClick(){
  
}

