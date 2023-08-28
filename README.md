# Verint-XM Cordova Sample App

## Prerequisites

Clone this repo and change to the `SampleApp` directory:
```
$ git clone https://github.com/foreseecode/verint-xm-cordova-sample
$ cd verint-xm-cordova-sample/SampleApp/
```

The instructions below will assume you've successsfully cloned the project and navigated to the `SampleApp` directory.

## Plugin Installation

### Adding from Github

```
$ cordova plugin add https://github.com/foreseecode/verint-xm-cordova-plugin
```

### Adding from Github for a specific branch

```
$ cordova plugin add https://github.com/foreseecode/verint-xm-cordova-plugin#develop
```

### Adding for local development

Clone the repo dir and prepare for use

```
$ git clone https://github.com/foreseecode/verint-xm-cordova-plugin
$ cd verint-xm-cordova-plugin
$ npm install
```

Then return to your sample app and add the plugin using the path to the plugin repo you just checked out:

```
$ cordova plugin add <PATH_TO_REPO_DIR>/verint-xm-cordova-plugin --nofetch
```


## Android Installation

1. Connect an Android device or start an emulator

1. Set up the required environment variables

    To install the plugin for Android, you'll need to authenticate with GitHub Packages to download our library. To do so, you'll need a personal key which can be generated from your GitHub account by following the instructions [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). The token will need the `read:packages` permission.

    Once you have that key, you should set two environment variables on your machine: `GITHUB_USERNAME` for your username, and `GITHUB_PERSONAL_KEY` for your personal key

1. Install the platform

   `$ cordova platform add android`

1. Prepare:

   `$ cordova prepare`

1. Build and run:

   `$ cordova run android`

## iOS Installation

1. Install the platform

   `$ cordova platform add ios`

1. Prepare:

   `$ cordova prepare`

1. The above commands will in most cases run `pod install` automatically, but if not (check their output), then the command can be run manually:
   ```
   cd platforms/ios
   pod install --repo-update
   cd ../..
   ```

1. Select a development team (see Running on an iOS Device, below)

1. Build and run:

   `$ cordova run ios`

### Running on an iOS Device

In order to run on iOS, you'll need to select a valid development team

1. Open `platforms/ios/VerintXM.xcodeproj` in Xcode
1. Select the `VerintXM` project in the project navigator
1. Select a valid team in the `Signing` section
1. Return to the command line and run iOS: 

   `$ cordova run ios`

## Example commands

Here are some commands that can be run from the Verint-XM Cordova Plugin:

```
cordova.plugins.verint.xm.start(null, this.onSuccess, this.onError);
cordova.plugins.verint.xm.start(configJSON, this.onSuccess, this.onError);
cordova.plugins.verint.xm.checkEligibility(this.onSuccess, this.onError);
cordova.plugins.verint.xm.showInvite("android_app_QA", this.onSuccess, this.onError);
cordova.plugins.verint.xm.resetState(this.onSuccess, this.onError);
```

## License 
Apache License, Version 2.0 
https://www.apache.org/licenses/LICENSE-2.0

## Known Issues
### iOS
There is currently an issue with the iOS minimum SDK version, which will be fixed, according to Cordova support:  
https://issues.apache.org/jira/browse/CB-13597

### Android
There is currently an issue with the Android minimum SDK version, which will be fixed, according to the official Cordova blog:  
http://disq.us/p/1oqjjtg
