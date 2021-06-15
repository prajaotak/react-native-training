# Training Steps
```
mkdir react-native & cd react-native
npx react-native init bookingapp --template react-native-template-typescript
```

- Setup android env
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

try and run the project on android
```
emulator -avd Pixel_3a_API_30_x86
npm run android
```
create e2e project
```
//cd to react-native (root) folder
mkdir e2e folder
```

Install detox-cli global
```
npm i detox-cli -g
```

install detox (-save-dev) in react-native app
```
npm install detox --save-dev
```

setup e2e for ios
```
xcode-select --install
brew tap wix/brew
brew install applesimutils
```

add configs (page 19 - 23) - files will provided by trainer

add step definitions - also provided

install lint and provide .eslintrc.js
npm i eslint-plugin-detox

setup detox config - provided file

edit android/build.gradle

edit android/app/build.gradle

add file: android/app/src/androidTest/java/com/[your.package]/DetoxTest.java - also provided

clean package
./gradlew clean

rerun app
npm run android










