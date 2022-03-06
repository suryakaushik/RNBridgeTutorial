# Light APP - A RNBridge Tutorial

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)]()

This tutorial explains when and how to use Bridge in React Native.

![appImg](https://user-images.githubusercontent.com/41267674/156927067-c508e523-d7f6-49e0-a894-c4b9f01c7efb.jpeg)

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

1. Set the status of bulb(ON/OFF) from native java code in Android
   Users can toggle the bulb and et the status from the Android-Native code
2. Whenever the bulb is toggled, a native Toast Modal is shown.
- Note: Toast UI component is not inherently available in ReactNative until v0.65.0


## How To RUN in Development:

1. Change gradle version in gradle-wrapper.properties
2. Modify path of `sdk.dir` in local.properties of android folder
3. Connect your Android Device/Emulator and allow USB Debugging in your device
4. Run `yarn android` or `yarn ios` and `yarn start` to run the App


## Folder structure

This template follows a very simple project structure:
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Depoying a RN App in Production

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

![toggledOFF](https://user-images.githubusercontent.com/41267674/156927061-4bd08717-81ee-41f5-96e7-3b66da1d2c1c.jpeg)
![toggledON](https://user-images.githubusercontent.com/41267674/156927064-e402a476-5e26-4876-867c-e1593b1fe720.jpeg)
