import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

function ListAuthor(props) {
  const { title, lightTheme, data, navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
      </View>
      <View style={styles.listTag}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {data.map((item, index) =>
            <TouchableOpacity style={{ paddingHorizontal: 5 }} key={index} onPress={() => navigation.navigate('AuthorDetail', { data: item, lightTheme: lightTheme })}>
              <Avatar
                rounded
                size={100}
                source={{
                  uri: item["user.avatar"],
                }}
              />
              <Text style={{ textAlign: "center", fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{item["user.name"]}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListAuthor

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  listTag: {
    flexDirection: "row",
    padding: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  card: {
    padding: 10
  }
})
