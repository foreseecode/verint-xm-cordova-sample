# Verint-XM Cordova Sample App

![](https://github.com/foreseecode/foresee-sdk-cordova-sample/sample_app_ios.png)

## Prerequisites

Clone this repo and change to the `SampleApp` directory:
```
$ git clone https://github.com/foreseecode/foresee-sdk-cordova-sample
$ cd foresee-sdk-cordova-sample/SampleApp/
```

The instructions below will assume you've successsfully cloned the project and navigated to the `SampleApp` directory.

## Plugin Installation

### Adding from Github

```
$ cordova plugin add https://github.com/foreseecode/foresee-sdk-cordova-plugin
```

### Adding from Github for a specific branch

```
$ cordova plugin add https://github.com/foreseecode/foresee-sdk-cordova-plugin#develop
```

### Adding for local development

Clone the repo dir and prepare for use

```
$ git clone https://github.com/foreseecode/foresee-sdk-cordova-plugin
$ cd foresee-sdk-cordova-plugin
$ npm install
```

Then return to your sample app and add the plugin using the path to the plugin repo you just checked out:

```
$ cordova plugin add <PATH_TO_REPO_DIR>/foresee-sdk-cordova-plugin --nofetch
```


## Android Installation

1. Connect an Android device or start an emulator

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

1. Open `platforms/ios/ForeSeeCordova.xcodeproj` in Xcode
1. Select the `ForeSeeCordova` project in the project navigator
1. Select a valid team in the `Signing` section
1. Return to the command line and run iOS: 

   `$ cordova run ios`

## Example commands

Here are some commands that can be run from the Verint-XM Cordova Plugin:

```
cordova.plugins.ForeSeeAPI.start(this.onSuccess);
cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onError);
cordova.plugins.ForeSeeAPI.showInvite(["android_app_QA"], this.onSuccess, this.onError);
cordova.plugins.ForeSeeAPI.resetState(this.onSuccess, this.onError);
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
