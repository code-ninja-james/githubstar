import React from 'react';
import{StyleSheet,View,Text,FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import Card from '../components/Card';

const BookMarkRepoScreen =props=>{

const bookmark= useSelector (state=>state.repositories.bookmark);
    return(
        <FlatList
        data={bookmark}
        keyExtractor={item=>item.url}
        renderItem={({item})=>(
          <Card
          navigation={props.navigation}
          author={item.owner.login}
          title={item.name}
          image={item.owner.avatar_url}
          description={item.description}
          url={item.url}
           />
        )}
        />
)

}

const styles=StyleSheet.create({
    
});

export default BookMarkRepoScreen;