# Cordova Sample App

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

1. Open `platforms/android/app/src/main/AndroidManifest.xml` in an editor and modify the minimum SDK version property to read `android:minSdkVersion="19"`
1. Build and run:

   ```
   $ cordova build android
   $ cordova run android
   ```

## iOS Installation
1. Add the iOS platform: 

   `$ cordova platform add ios`

   Note: you should expect to see the following error in the command's output:

   ```
   Discovered plugin "cordova-plugin-foresee" in config.xml. Adding it to the project
   Installing "cordova-plugin-foresee" for ios
   Failed to install 'cordova-plugin-foresee': Error: pod: Command failed with exit code 1
        at ChildProcess.whenDone (/Users/wayne.burkett/foresee/test/foresee-sdk-cordova-sample/SampleApp/platforms/ios/cordova/node_modules/cordova-common/src/superspawn.js:169:23)
        at emitTwo (events.js:106:13)
        at ChildProcess.emit (events.js:191:7)
        at maybeClose (internal/child_process.js:877:16)
        at Process.ChildProcess._handle.onexit (internal/child_process.js:226:5)
   Failed to restore plugin "cordova-plugin-foresee" from config.xml. You might need to try adding it again. Error: Error: pod: Command failed with exit code 1
   ```

   This is a [known Cordova issue](https://issues.apache.org/jira/browse/CB-13597), which we'll address in the next few steps.
1. Prepare:

   `$ cordova prepare`
1. Go to the iOS dir: 

   `$ cd platforms/ios`
1. Edit the  `Podfile` and modify the `platform` line to read `platform :ios, '9.0'`. (This addresses the issue noted above.)
1. Update pods: 

   `$ pod install`
1. Go back to original folder: 

   `$ cd ../..`
1. Build and run:

   ```
   $ cordova build ios
   $ cordova run ios
   ```

   Or run:
   
   `$ cordova emulate ios`

   As of Xcode 10.x you'll need to add the `UseModernBuildSystem=0` build flag: 

   `$ cordova emulate ios --buildFlag="-UseModernBuildSystem=0"`

   You probaby also want to specify a target (e.g. `--target="iPhone-X, 12.0"`). Putting it all together:

   `$ cordova emulate ios --buildFlag="-UseModernBuildSystem=0" --target="iPhone-X, 12.0"`

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
