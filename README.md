# Cordova Sample App

![](https://github.com/foreseecode/foresee-sdk-cordova-sample/sample_app_ios.png)

## Clone this repo

```
git clone https://github.com/foreseecode/foresee-sdk-cordova-sample
```

## Setup cordova app

```
cd SampleApp
```

# To set up the sample app, follow these instructions

## iOS

1. Add iOS platform: `cordova platform add ios`
2. Open platforms/ios/Podfile
3. Fix iOS minimum version (modify line to  platform :ios, '9.0')
4. Change directory: `cd platforms/ios`
5. Update pods: `pod install`
6. Run `cordova prepare`
7. Go back to original folder: `cd ../..`
8. Build iOS: `cordova build ios`
9. Run iOS: `cordova run ios`

## Android

1. Add Android platform: `cordova platform add android`
2. Run `cordova prepare`
3. Edit platforms/android/app/src/main/AndroidManifest.xml
4. Set minimum SDK version to 19 (modify line to android:minSdkVersion="19")
5. Build the android project: `cordova build android`
6. Run the android project: `cordova run android`

## Here are some example commands that can be run from the ForeSee Cordova Plugin:

```
cordova.plugins.ForeSeeAPI.start(this.onSuccess);
cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onError);
cordova.plugins.ForeSeeAPI.showInvite(["android_app_QA"], this.onSuccess, this.onError);
cordova.plugins.ForeSeeAPI.resetState(this.onSuccess, this.onError);
```

## License 
Apache License, Version 2.0 
https://www.apache.org/licenses/LICENSE-2.0

## iOS Quirks
iOS minimum SDK version will be fixed according to the official Cordova account (https://issues.apache.org/jira/browse/CB-13597).

## Android Quirks
Android minimum SDK version will be fixed according to the official Cordova Blog (http://disq.us/p/1oqjjtg).
