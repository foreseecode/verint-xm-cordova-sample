# foresee-sdk-cordova-samples

![](https://github.com/foreseecode/foresee-sdk-cordova-samples/sample_app_ios.png)

## Clone this repo

```
git clone https://github.com/foreseecode/foresee-sdk-cordova-samples
```

## Setup cordova app

```
cd SampleApp && cordova prepare
```

## Build iOS or Android

```
cordova build android
```

or 

```
corodva build ios
```

## Run Android (please start Android emulator first)

```
cordova run android
```

## Run iOS (please start iOS emulator first)

```
cordova run ios
```

## ForeSeeAPI example

```
cordova.plugins.ForeSeeAPI.start(this.onSuccess);
cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onError);
cordova.plugins.ForeSeeAPI.showInvite(["android_app_QA"], this.onSuccess, this.onError);
cordova.plugins.ForeSeeAPI.resetState(this.onSuccess, this.onError);
```

