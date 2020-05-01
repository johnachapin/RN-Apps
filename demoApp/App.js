import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
        <View style={styles.rowContainer}>
            <View style={styles.outContainer1}>
                <View style={styles.out1Container}>
                </View>
            </View>
            <View style={styles.outContainer2}>
                <View style={styles.out2Container}>
                </View>
            </View>

        </View>  
        
        <View style={styles.rowContainer}>
            <View style={styles.outContainer3}>
                <View style={styles.out3Container}>
                </View>
            </View>
            <View style={styles.outContainer4}>
                <View style={styles.out4Container}>
                </View>
            </View>

        </View>  

    </View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
rowContainer: {
height: 100,
width: 200,
flexDirection: "row"
},
outContainer1: {
height: 100,
width: 100,
backgroundColor: 'red',
justifyContent: 'center',
alignItems: 'center',
},
out1Container: {
height: 50,
width: 50,
backgroundColor: 'blue',
alignItems: 'center',
justifyContent: 'center',
},
outContainer2: {
height: 100,
width: 100,
backgroundColor: 'blue',
justifyContent: 'center',
alignItems: 'center',
},
out2Container: {
height: 50,
width: 50,
backgroundColor: 'yellow',
alignItems: 'center',
justifyContent: 'center',
},

outContainer3: {
height: 100,
width: 100,
backgroundColor: 'yellow',
justifyContent: 'center',
alignItems: 'center',
},
out3Container: {
height: 50,
width: 50,
backgroundColor: 'green',
alignItems: 'center',
justifyContent: 'center',
},
outContainer4: {
height: 100,
width: 100,
backgroundColor: 'green',
justifyContent: 'center',
alignItems: 'center',
},
out4Container: {
height: 50,
width: 50,
backgroundColor: 'red',
alignItems: 'center',
justifyContent: 'center',
},

});