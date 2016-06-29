# nodecg-twitter
A standalone, 0.8.0-compatible version of the Twitter graphic from [toth3-overlay](https://github.com/TipoftheHats/toth3-overlay), which was made for [Tip of the Hats 2015](http://tipofthehats.org/).

This is a [NodeCG](http://github.com/nodecg/nodecg) bundle. It cannot be run on its own, it has to be run as part of an existing NodeCG installation. Please see NodeCG's documentation for installation and setup instructions before continuing with toth3-overlay setup.

## Demo

![Demo image](demo.gif)


## Installation
1. Install NodeCG (don't forget to run `npm install` from your the root of your NodeCG installation directory after you have installed it! This is what installs all of NodeCG's dependencies, which are required.)

2. Clone nodecg-twitter to `nodecg/bundles/ss-twitter`

3. Create `nodecg/cfg/nodecg-twitter.json`. These are the necessary config files.

## Configuration
The bundle's config lives at `nodecg/cfg/nodecg-twitter.json` and is required for the graphic to work.

If you don't have Twitter credentials, you must make them before attempting to use this. Check the developer site for more info on how to register.
```
{
  "consumerKey": "yourConsumerKey",
  "consumerSecret": "yourConsumerSecret",
  "accessTokenKey": "yourAccessTokenKey",
  "accessTokenSecret": "yourAccessTokenSecret"
}
```

## Credits
- [Alex "Lange" Van Camp](http://alexvan.camp/) - Original creator of the code
- [David Thomas](http://synth3.tk) - Creator of the twitter bundle for v7.
