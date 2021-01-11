import React,{useEffect} from 'react';
import{StyleSheet,FlatList} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';


import Card from '../components/Card';
import *as repoAction from '../redux /actions/repoAction';

const RepoListScreen =props=>{
     
     const dipatch =useDispatch();
useEffect(()=>{
     dipatch(repoAction.fetchRepos())
},[dipatch]);


const {items} =useSelector(state=>state.repositories.items);
console.log(items);
    
return(
    
    <FlatList
    data={items}

    keyExtractor={item=>item.url}
    renderItem={({item})=>(
      <Card
       navigation={props.navigation}
       title={item.name}
       author={item.owner.login}
       image={item.owner.avatar_url}
       description={item.description}
       url={item.url}
       />
    )}
    />
     
);

}

const styles=StyleSheet.create({
    
});

export default RepoListScreen;