import React from 'react'
import { View, ScrollView } from 'react-native';

import Card from '../../components/ListCard/CardCourse'
import ListCourseHorizontal from '../../components/ListCard/ListCourseHorizontal'

const dataCourses = [
  {
    title: "Couse 1",
    subTitle: "Basic - 4/9/2020",
    image: "https://picsum.photos/700",
    rate: 4
  },
  {
    title: "Couse 2",
    subTitle: "Basic - 4/9/2020",
    image: "https://picsum.photos/700",
    rate: 4
  },
  {
    title: "Couse 3",
    subTitle: "Basic - 4/9/2020",
    image: "https://picsum.photos/700",
    rate: 5
  },
  {
    title: "Couse 4",
    subTitle: "Basic - 4/9/2020",
    image: "https://picsum.photos/700",
    rate: 5
  }
]

function Home(props) {
  const { navigation } = props;
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListCourseHorizontal title="List Courses" dataCourses={dataCourses} onPressSeeAll={() => { navigation.navigate('ListCourses') }} />
      </ScrollView>
    </View>
  )
}

export default Home
