import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios  from 'axios';
import AsyncStorage from'@react-native-async-storage/async-storage';
export default function App() {
   const url='https://savehttp-81e04-default-rtdb.firebaseio.com/TableLinks.json';
  return (
   
    <View style={styles.container}>
      <Text>save in firebase or localii</Text>
      <StatusBar style="auto" />


 {/* localii */}
{/* post */}
<View>
<Button title='save in local storage' onPress={()=>{
  const j={name:'moria',age:21};
const setData = async() => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key',j);
    } catch (error) {
      // Error saving data
    }
  };
  setData()
}}/>
    </View>   
{/* localii */}
 {/* get */}
    <View>
<Button title='getlocali' onPress={()=>{
    const getData = async () => {
        try {
        const j=await AsyncStorage.getItem('@MySuperStore:key');
        alert(j);
        } catch (error) {
          // Error get data
        }
      };

      getData();
}}/>
</View> 









{/* post */}
    <View>
<Button title='add' onPress={()=>{
  const j={name:'moria',age:21};
axios.post(url,j)
.then((respons)=>{console.log(respons.data);})
.catch((error)=>{alert('error',error.respons);})
}}/>
    </View>   
    


 {/* get */}
    <View>
<Button title='get' onPress={()=>{
  
axios.get(url)
.then((respons)=>{console.log(respons.data);
  // list=respons.data
})
.catch((error)=>{alert('error',error.respons);})
}}/>
</View> 


 {/* delete */}
    <View>
<Button title='delete' onPress={()=>{
axios.delete('https://savehttp-81e04-default-rtdb.firebaseio.com/TableLinks/-N8NXb8xrk0oho2doFYs.json')
.then((respons)=>{console.log(respons.data);

})
.catch((error)=>{alert('error',error.respons);})
}}/>
    </View> 


  {/* update */}
    <View>
<Button title='update full' onPress={()=>{
const j={name:'yafa',age:40};
axios.put('https://savehttp-81e04-default-rtdb.firebaseio.com/TableLinks/-N8NXb8xrk0oho2doFYs.json',j)
.then((respons)=>{console.log(respons.data);

})
.catch((error)=>{alert('error',error.respons);})
}}/>




    </View> 




{/* update fatch */}
<View>
<Button title='update fatch' onPress={()=>{
const j={name:'yafa'};
axios.patch('https://savehttp-81e04-default-rtdb.firebaseio.com/TableLinks/-N8NXb8xrk0oho2doFYs.json',j)
.then((respons)=>{console.log(respons.data);

})
.catch((error)=>{alert('error',error.respons);})
}}/>




    </View> 



     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
