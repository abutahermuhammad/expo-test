import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Router } from 'react-router-native';
import { routes } from './routes/routes.routes';
import Navbar from './views/components/shared/navigation/Navbar/Navbar';
import PageHome from './views/pages/home/PageHome';

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <NativeRouter>
        {/* {routes && routes.map(route=> (
          <> */}
            {/* <Router key={route._id} to={route.url} element={<PageHome/>}/> */}
            <Router to={`/`} element={<PageHome/>}/>
          {/* </>
        ))} */}
        
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default App;
