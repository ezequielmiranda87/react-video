## React-video
===============

## Structure application
==========================
App.js - entry point application (webpack entry file)

Home - Page / (container | smart)
    -> <!-- Layout - UI --> (To apply styles to Home Page, the smart component shouldn't not have styles)

    -> Categories - UI
        -> Category - UI
            -> Playlist - UI
                -> Media - UI / Pure

    -> Search / (container | smart)
        -> <!-- Search Layout UI -->
            -> Input - UI

    -> Modal - (container | smart)
        <!-- Layout - UI -->
            -> VideoPlayer - (container | smart)
            -> Spinnner - UI
            -> Controls - UI
                -> PlayPause - UI
                    -> PlayIcon - UI
                    -> PauseIcon - UI
                -> Timer - UI
                -> ProgressBar - UI
                -> Volume - UI
                    -> VolumeIcon - UI
                -> FullScreen - UI
                    - FullScreenIcon -UI




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
