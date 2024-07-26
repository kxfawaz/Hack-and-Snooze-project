"use strict";
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imt4ZmF3YXo5NCIsImlhdCI6MTcyMTA2NjM0OX0.yPu1KyMkptgutGXP-wGWOp9e66XBOHtYfxM6bGzF95k",
//   "user": {
//       "createdAt": "2024-07-15T17:59:09.666Z",
//       "favorites": [],
//       "name": "karimfawaz",
//       "stories": [],
//       "updatedAt": "2024-07-15T17:59:09.666Z",
//       "username": "kxfawaz94"
//   }
// }

// https://hack-or-snooze-v3.herokuapp.com/users?token=NON STRING TOKEN




// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $("body");

const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");

const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");


const $navSubmit = $("#submitStory")
const $formStorySubmit = $("#newStory")

const $authorInput = $("#authorInput")
const $titleInput = $("#titleInput")
const $urlInput = $("#urlInput")
const $formSubmit = $("#submitForm")

const $favoriteOl = $("#favorited-stories")

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */

function hidePageComponents() {
  const components = [
    $allStoriesList,
    $loginForm,
    $signupForm,
  ];
  components.forEach(c => c.hide());
}

/** Overall function to kick off the app. */

async function start() {
  console.debug("start");

  // "Remember logged-in user" and log in, if credentials in localStorage
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  // if we got a logged-in user
  if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app

console.warn("HEY STUDENT: This program sends many debug messages to" +
  " the console. If you don't see the message 'start' below this, you're not" +
  " seeing those helpful debug messages. In your browser console, click on" +
  " menu 'Default Levels' and add Verbose");
$(start);


