# Verint-XM Cordova Sample App

![](https://github.com/foreseecode/foresee-sdk-cordova-sample/sample_app_ios.png)

## Prerequisites

```
$ git clone https://github.com/foreseecode/foresee-sdk-cordova-sample
$ cd SampleApp/
```

The instructions below will assume you've successsfully cloned the project and navigated to the `SampleApp` directory.

## Android Installation
1. Add the Android platform:

   `$ cordova platform add android`

1. Prepare:

   `$ cordova prepare`

1. Build and run:

   ```
   $ cordova build android
   $ cordova run android
   ```

## iOS Installation

1. Add the iOS platform: 

   `$ cordova platform add ios`

1. Prepare:

   `$ cordova prepare`

1. Build and run:

   ```
   $ cordova build ios
   $ cordova run ios
   ```

### Running on an iOS Device
In order to run on a real device, you'll need to select a valid development team

1. Open `platforms/ios/ForeSeeCordova.xcodeproj` in Xcode
1. Select the `ForeSeeCordova` project in the project navigator
1. Select a valid team in the `Signing` section
1. Return to the command line and run iOS: 

   `$ cordova run ios --buildFlag="-UseModernBuildSystem=0"`

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
