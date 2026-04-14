# react-native-maps issues

## Setup

- Clone or download the repository.
- Add your API key(s)
  - Android
    - Open `example/android/secrets.properties` (or create the file if it doesn't already exist)
    - Add the following line: `MAPS_API_KEY=your_api_key_here`
  - iOS
    - Open `example/ios/Secrets.xcconfig` (or create the file if it doesn't already exist)
    - Add the following line: `MAPS_API_KEY=your_api_key_here`
- Run `yarn android` or `yarn ios` within the example folder

## Issues

Issues are in their own branches, to see the issue, switch to the associated branch first

### [Issue-1](https://github.com/CptFabulouso/react-native-maps-issues/tree/Issue-1)

- Polyline does not keep it's state after it's detached
- For issue on react-native-maps [5901](https://github.com/react-native-maps/react-native-maps/issues/5901)
