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

## Reproductions instructions

- Add points with "Add polyline point" button
- Change color with "Change polyline color" button
- Open another screen with "Open another screen" button
- Go back with "Go back" button
- polylines and colors reset to initial state (even thought the actual state is not changed)