
<p align="center">
  <img src="label.png">
</p>
[![Netlify Status](https://api.netlify.com/api/v1/badges/53019faa-4880-4a66-b36d-d738327f4d56/deploy-status)](https://app.netlify.com/sites/lttkgp-beta/deploys) ![GitHub issues](https://img.shields.io/github/issues/lttkgp/falcon) ![](https://img.shields.io/badge/created-with%20%E2%9D%A4%EF%B8%8F-F14D9E)

---

# Falcon

The main code-base is written in react with a mix of Typescript and Javascript.

## Running the frontend locally

First install the required dependencies using:

```
$ yarn
```

Then start the live server for development using:

```
$ yarn start
```

## Deployment

Currently the master branch is set to auto-deploy on netlify and can be viewed at: [beta.lttkgp.com](https://beta.lttkgp.com/).

Netlify also automatically builds deploy previews of any pull requests which can be accessed in the specific PRs themselves.

## Overview of the Project

### Views

Currently there are three default views (routes):

1. Home (`/`)
2. Feed (`/feed`)
3. Genre (`/genre`)

These are present with their respective names in `src/views`.

**1. Home**

The homepage is meant to be a go-to place for a regular user of the application. It consists of a few List components that allow a user to quickly view what is hot and happening in the LTTKGP community.

**2. Feed**

Feed is the main feed of the community. It replicates the feed of the facebook page and can be used to browse all the videos posted there.

**3. Genre (:hammer_and_wrench: _planned_)**

Genre page is meant to allow users to discover/navigate the posts according to genres.

### Video

This is another route which is not exactly a generic view. This component is rendered whenever a user navigates to a video.

The route changes to `/video?=<id>` where `<id>`is the of the currently playing song.

This component consists of the video player, which uses the `YouTube` component from `react-youtube` library to display the youtube video and functions/logic to change the video and display the queue. 

### Components

The major components and there use-cases are discussed below. For a detailed overview, it is recommended to look directly at the code related to each of the components.

These are present in the `src/components` directory with relevant filenames.

**CSwitch** (Custom Switch)

This is the main Switch for the `react-router` library. The Video page gets the `id` of the current song through code in this switch.

**Sidebar**

This component is responsible for the sidebar displayed in desktop and tablet views. This also transforms into the bottom navigation for mobile view.

The logic to change theme and sidebar size is abstracted away in utility functions discussed later.

**Header**

A simple header that is used for the heading of a page. It includes the title and also the theme switcher for dark-mode that is displayed in the mobile view.

> :hammer_and_wrench: The search input to be added later can be added here, although there will be better approaches as the route would most probably be changed to `/search` after entering the query. 

**List**

This renders the lists on the homepage. The component needs just the title and a API URL that returns a list of posts.

All of the logic pertaining to the scrolling are contained in this component.

**Card**

This is the card that is displayed within the list. It contains the display logic and instructions on playing the song when it is selected.

**FeedCard**

This component is similar to the Card component but is intended to be used in the feed. It displays a little more data including the captions and post date which is relevant to the feed.

> Note that the Card and FeedCard are quite related in their functionality however, they are not connected in code. Thus, changing a fundamental thing in one will not be reflected in the other. The same is true for the styles of these components.

### Global State

The only thing store currently in the global state is the queue so that it can be accessed by the video component when the view changes as well as the route.

Do remember to set the queue whenever you switch to a video page to play a video.

### Utils

These are utilitarian functions that are used throughout the application. 

These are present in `/src/utils` with appropriate names.

Some of these are discussed here:

1. `joinArtist` : Combines artist names into a string that can be displayed in the artist section
2. `filterUniqueVideos` : Removes duplicate videos from a list of posts.
3. `filterGenres` : Removes duplicate genres from the array of genres.
4. `shuffle` : Performs a knuth-shuffle on a given array.
5. `changeTheme` : Changes the theme of the app, it coverts light -> dark and vice-versa.
6. `setThemeOnUserPref` : This checks if user prefers dark mode in system settings and applies the dark mode if he/she does.
7. `changeExpand` : Changes the class of the sidebar in desktop mode to switch between the expanded and contracted variant. 
8. `mobileCheck` : This function returns true if the app is currently being visited via a mobile.

## Styles

The styling of the project is done mainly in SCSS. Some dynamic elements such as grid sizes are handled using styled-components. 

However, it is recommended to keep the styles in SCSS files and only put the styles that depend exclusively upon javascript variables to be written in styled-components.

The different styles pertaining to the different components and views are named accordingly.

All the files are imported in the main `App.scss` file. If you create a new file for the styles, don't forget to import it in the `App.scss` file. This will allow you to use the color variables and Responsive mixins in your new file.

There are several helpful variables and mixins used throughout the SCSS:

### Color variables 

These variables are used throughout for the basis and the sass functions such as `lighten` etc. are used wherever necessary to slightly alter these. 

The variables necessary for dark mode are contained in the `dark.scss` file.

### Responsive Mixins

These mixins can be used to apply styles for the three responsive sizes.

These are defined in the `responsive.scss` file.

These can be used in the SCSS files as shown below:

**Mobile**

```scss
@include sm {
	// your styles here
}
```

**Tablet**

```scss
@include md {
	// your styles here
}
```

**Desktop**

```scss
@include lg {
	// your styles here
}
```

### Dark mode

The styles that are specific to dark mode are present here. Since the dark mode is applied globally, the only necessary thing to change is the icon and the colors of the page.

It is recommended to keep all logic except that of the colors in the original styles for the component and use the  `dark.scss` file to override the colors involved.

