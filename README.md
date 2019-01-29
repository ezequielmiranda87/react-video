## React-video

Access to the proyect live [here](https://ezequielmiranda87.github.io/react-video/)

## Structure application
App.js - entry point application (webpack entry file)

-> Home - Page / (container | smart)
-> <!-- Layout - UI --> ( Componenet for styles on Home Page)
    -> Categories - UI
    -> Category - UI
        -> Playlist - UI
            -> Media - UI / Pure

    -> Search / (container | smart)
    -> <!-- Search Layout UI -->
        -> Input - UI

    -> Modal - (container | smart)
    -> <!-- Layout - UI -->
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



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
