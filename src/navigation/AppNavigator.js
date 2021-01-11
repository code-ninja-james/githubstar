import React from 'react';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator}from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';

import RepoListScreen from '../screens/RepoListScreen';
import RepoDetailsScreen from '../screens/RepoDetailsScreen';
import BookMarkRepoScreen from '../screens/BookMarkRepoScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack =createStackNavigator();
const Tabs=createBottomTabNavigator();
const Drawer =createDrawerNavigator();

const HeaderLeft=()=>{
const navigation =useNavigation();
return(
    <MaterialIcons name="menu" size={24} onPress={()=>{navigation.openDrawer()}}/>
);
}

function TabsNavigator(){
    return(
        <Tabs.Navigator
 screenOptions={({route})=>({
tabBarIcon:()=>{
    let iconName;
    if (route.name=="Home"){
        iconName="home"
    }else if (route.name=="Bookmark"){
  iconName="bookmark"
    }
    return <MaterialIcons name={iconName} size={24}/>
}
 })

 }
 >
    <Tabs.Screen name ="Home" component={HomeNavigator}/>
    <Tabs.Screen name="Bookmark" component={BookMarkNavigator}/>

</Tabs.Navigator>
    );
}

function HomeNavigator(){
return(
<Stack.Navigator>
<Stack.Screen 
name="RepoList" 
component={RepoListScreen}
options={{title:'Most Popular',headerLeft:()=><HeaderLeft/>}}
/>
<Stack.Screen 
name="RepoDetails" 
component={RepoDetailsScreen}
options={{title:'Repo Details'}}
/>
</Stack.Navigator>
);

}
 
function BookMarkNavigator(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerLeft:()=> <HeaderLeft/>
        }}
        >
            <Stack.Screen name="Bookmark" component={BookMarkRepoScreen}/>
        </Stack.Navigator>
    );

}

function AboutNavigator(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerLeft:()=> <HeaderLeft/>
        }}
        >
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    );

}

function AppNavigator(){
    return (
<NavigationContainer >
<Drawer.Navigator>
    <Drawer.Screen name="Repos" component={TabsNavigator}/>
    <Drawer.Screen name="About" component={AboutNavigator}/>
</Drawer.Navigator>
</NavigationContainer>
    );
}
 export default AppNavigator;