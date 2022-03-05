import React from 'react';
import { StyleSheet, Text, View } from 'react-native-web';

const Navbar = () => {
  return (
    <>
        <View style={style.navbar}>
          <Text style={style.brand}>Navigation</Text>
        </View>
    </>
  );
}

const style = StyleSheet.create({
  navbar: {
    padding: "10px",
    text: "center",
    // backgroundColor: "#FF0000",
    border: "1px solid #000000"
  },
  brand: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 16
  }
  
})
export default Navbar;