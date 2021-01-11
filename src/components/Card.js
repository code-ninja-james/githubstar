import React from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux';


import * as repoAction from '../redux /actions/repoAction';

const Card = props=>{

  const dispatch = useDispatch();
  const isFav = useSelector(state=>state.repositories.bookmark.some(repo=>repo.url===props.url));

  return(
    <TouchableOpacity onPress={()=>{
      props.navigation.navigate('RepoDetails',{
        repoUrl:props.url
      })
    }}>

    <View style={styles.card}>
  <View style={styles.imageWrapper}>
    <Image 
    source={{uri:props.image?props.image:'https://img.favpng.com/2/10/25/progress-bar-computer-icons-loading-screen-png-favpng-Yn0AErnHnBe2GcAD31pbAqr8B.jpg'}}
    style={styles.image}
    />
  </View>
     <View style={styles.titleWrapper} >
  <Text 
    style={styles.title}>
    {props.author} - ({props.title&& props.title.length>10?props.title.slice(0,7)+'...':props.title})
    </Text>
      <MaterialIcons 
      name={isFav?'bookmark':'bookmark-border'}
      color="#72bcd4" size={24}
      onPress={()=>{
dispatch(repoAction.toogleBookmark(props.url))
      }}
      />
      </View>
      <View style={styles.descriptionWrapper}>
  <Text style={styles.description}>
    {props.description&&props.description.length>100 ?props.description.slice(0,100)+'...':props.description}
    </Text>
      </View>
     </View>
     </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    height:300,
    margin:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5
  },
  image:{
height:'100%',
width:'100%'
  },
  imageWrapper:{
    width:'100%',
    height:'60%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden'
  },
  titleWrapper:{
    height:'10%',
    paddingHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    marginTop:10
  },
  title:{
fontFamily:'Ubuntu-Bold',
fontSize:20,

  },
  description:{
fontFamily:'Ubuntu',
fontSize:15,
marginTop:10
  },
  descriptionWrapper:{
    paddingHorizontal:15
  },
});


export default Card;



