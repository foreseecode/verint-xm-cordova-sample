# Verint-XM Cordova Sample App

![](https://github.com/foreseecode/foresee-sdk-cordova-sample/sample_app_ios.png)

## Prerequisites

You'll need to clone the sample and plugin repo
```
$ git clone https://github.com/foreseecode/foresee-sdk-cordova-sample
$ git clone https://github.com/foreseecode/foresee-sdk-cordova-sample
$ cd foresee-sdk-cordova-sample/SampleApp/
```

The instructions below will assume you've successsfully cloned the project and navigated to the `SampleApp` directory.

## Plugin Installation
`cordova plugin add ../../foresee-sdk-cordova-plugin`

## Android Installation
1. Connect an Android device or start an emulator
1. Prepare:

   `$ cordova prepare`

1. Build and run:

   `$ cordova run android`

## iOS Installation

1. Prepare:

   `$ cordova prepare`

1. Update cocoapods
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

Here are some commands that can be run from the ForeSee Cordova Plugin:

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
