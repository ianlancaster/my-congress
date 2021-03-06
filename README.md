# We The People

UPDATE: We The People has been selected as a group capstone project. A team of Mod3 and Mod4 front end Turing students will be working on building out the application in react native 2/15 - 3/1.

UPDATE 2: The application has been rebuilt in react native by Ian Lancaster and Graham Nessler. We are submitting in in the Turing School demo competition scheduled for 3/15/17.

UPDATE 3: We The People has been officially renamed MyGov (apparently a small company called 'The White House' took We The People already). MyGov took 1st place in the Turing School demo competition! We are currently planning a live deployment to iOS and web for the begging of June 2017. The project has also been officially moved to the [MyGov organization page](https://github.com/MyGovApp/MyGov). Please look there for future updates.

## About
We The People is an app that makes keeping up with congress and voicing your opinion on legislation easy and meaningful. Enter in your voting address to identify your representatives, then choose categories of legislation that you care about. View all of the bills proposed by congress and track them along their journey to becoming law. Follow a bill that you are especially invested in to receive notifications when the bill's status changes. Easily and effectively voice your opinion about a bill by using the bill's 'take action' button. The best representative to contact about a bill will change depending on the status of the bill. The 'take action' button does the hard work for you by showing you which representative you need to contact and by offering multiple ways to contact the representative right from the app.

We The People is a concept app created in January of 2017 as Ian Lancaster's personal project for the Turing School of Front-End Engineering. The app is built using davezuko's react-redux-starter-kit and is powered by Firebase & the Sunlight Foundation API (now managed by Propublica). The web app was designed predominantly for mobile devices and uses redux to support an smooth transition to react native.

A rough interactive prototype of the application can be found at the link below. The prototype was created using sketch and invision.

https://invis.io/VJ9VWH3SG#/212448806_Login_Screen

![We The People App Gif](https://media.giphy.com/media/l0ExpZgS7VrKJhn7G/giphy.gif)
![We The People App Gif2](https://media.giphy.com/media/d3mlX9YfPeFlVn0Y/giphy.gif)

If you stumbled upon this repository looking for a production application I would highly suggest checking out countable.io . I did not discover countable until after I had designed the app, but the similarities are uncanny. They also have mobile apps.

## Set Up

To run the application clone down the repo and run `npm install` and `yarn install`. Start the server with `npm start` then the application will be ready on `http://localhost:3000`.

## Development

PHASES:

  🌑  🌒  🌓  🌔  🌝

  Phase 0: Project Preparation

    🌝 Determine Phases and add to GitHub
    🌝 Create better read-me
    🌝 Make project structure determinations
    🌝 Get CORS Express Server Working

  Phase 1: MVP

    🌝 Implement iPhone container frame
    🌝 Implement top and bottom app navigation.
    🌝 Display a list of bill preview components (cards) that show name
    🌝 Bill identifier
    🌝 Bill introduction date
    🌝 Last activity date
    🌝 Bill status indicator
    🌝 Implement infinite scrolling that makes additional api calls
    🌝 Hide navigation on scroll down to make more room for content
    🌑 Categorize bills and add tags

  Note: Note I have halted additional progress on features until I can switch the repo over to react native. The app was always intended to be a mobile app first. Expect more updates in the coming months.

  Phase 2: Sorting and filtering

    🌑 Sort by closest to becoming law
    🌑 Sort by date introduced
    🌑 Sort by last activity
    🌑 Filter by tag
    🌑 Search

  Phase 3: Bill Detail

    🌑 Display bill id
    🌑 Display bill title
    🌑 Display bill tags
    🌑 Display bill proposed date
    🌑 Display bill sponsors
    🌑 Display bill last action
    🌑 Display bill summary

  Phase 4: Getting Gritty

    🌑 Display bill progress on bill detail screen
    🌑 Show bill progress bar on bill summary card
    🌑 Add view full bill link

  Phase 5: Authentication

    🌑 Build out login screen
    🌑 Allow user to login with Facebook
    🌑 Create voting address verification screen
    🌑 Create interest / category screen
    🌑 Create my account screen

  Phase 6: Make it useful

    🌑 Make bills default to interests sorted by closest to becoming law
    🌑 Add follow bell to bill card and bill detail
    🌑 Add followed option to bill filtering
    🌑 Add take action button and functionality
    🌑 Add notification center for followed bills
