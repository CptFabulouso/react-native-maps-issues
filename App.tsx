import * as React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { MapPolyline, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function getRandomPlace() {
  const latitude = LATITUDE + (Math.random() - 0.5) * LATITUDE_DELTA;
  const longitude = LONGITUDE + (Math.random() - 0.5) * LONGITUDE_DELTA;
  return { latitude, longitude };
}

function MapScreen({ navigation }: { navigation: any }) {
  const [polyline, setPolyline] = React.useState([
    getRandomPlace(),
    getRandomPlace(),
  ]);
  const [polylineColor, setPolylineColor] = React.useState('#FF0000');

  return (
    <SafeAreaView style={styles.flex} edges={['bottom']}>
      <View style={styles.flex}>
        <MapView
          provider={'google'}
          style={styles.flex}
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            title="This is a title"
            description="This is a description"
            coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }}
          />
          <MapPolyline
            coordinates={polyline}
            strokeWidth={4}
            strokeColor={polylineColor}
          />
        </MapView>
        <Button
          title={'Add polyline point'}
          onPress={() => setPolyline([...polyline, getRandomPlace()])}
        />
        <Button
          title={'Change polyline color'}
          onPress={() =>
            setPolylineColor(
              polylineColor === '#FF0000' ? '#00FF00' : '#FF0000',
            )
          }
        />
        <Button
          title="open another screen"
          onPress={() => navigation.navigate('Other')}
        />
        <Button
          title="open modal"
          onPress={() => navigation.navigate('Modal')}
        />
      </View>
    </SafeAreaView>
  );
}

function OtherScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.flex} edges={['bottom']}>
      <View style={styles.center}>
        <Text>Other Screen</Text>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function RootStack({ provider }: { provider: string }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        initialParams={{ provider }}
      />
      <Stack.Screen name="Other" component={OtherScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={OtherScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function WithReactNavigation({
  provider,
}: {
  provider: string;
}) {
  return (
    <View style={styles.flex}>
      <NavigationContainer>
        <RootStack provider={provider} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
});
