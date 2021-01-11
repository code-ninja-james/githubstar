import React from "react";
import { StyleSheet, View, Text, ImageBackground,ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import * as repoAction from "../redux /actions/repoAction";

const RepoDetailsScreen = (props) => {
  const dispatch = useDispatch();

  const { repoUrl } = props.route.params;
  const repo = useSelector((state) =>
    state.repositories.items.items.find((repo) => repo.url === repoUrl)
  );

  const isFav = useSelector((state) =>
    state.repositories.bookmark.some((repo) => repo.url === repo.url)
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{repo.title}</Text>
        </View>
        <View>
          <ImageBackground
            source={{ uri: repo.owner.avatar_url }}
            style={styles.image}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.author}>
                {repo.owner.login} - ({repo.name})
              </Text>
              <MaterialIcons
                name={isFav ? "bookmark" : "bookmark-border"}
                color="#72bcd4"
                size={24}
                onPress={() => {
                  dispatch(repoAction.toogleBookmark(repo.url));
                }}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{repo.description}</Text>
        </View>
      </View>
    
      <View style={styles.group}>
        <Text style={styles.label}>Stars ⭐: </Text>
        <Text style={styles.value}>{repo.stargazers_count}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Watchers: </Text>
        <Text style={styles.value}>{repo.watchers}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Forks: </Text>
        <Text style={styles.value}>{repo.forks}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Open Issues: </Text>
        <Text style={styles.value}>{repo.open_issues_count}</Text>
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    fontFamily: "Ubuntu",
    fontSize: 20,
    color: "white",
  },
  description: {
    margin: 10,
  },
  group:{
    marginHorizontal:20,
    marginVertical:10,
    flexDirection:'row'
},
label:{
    fontSize:18
},
value:{
fontSize:18,
fontWeight:'bold',
flexShrink:1
},
  descriptionText: {
    fontSize: 20,
    fontFamily: "Ubuntu",
  },
});

export default RepoDetailsScreen;
