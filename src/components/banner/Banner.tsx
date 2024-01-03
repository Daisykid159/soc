// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import Slide from './Slide'
const { width } = Dimensions.get('window')
var flatList

// const strollInfinity = async() => {
    // const numberOfData = dataList.length
    // let scrollValue:number = 0, scrolled:number = 0

    // setInterval( () => {
    //     scrolled++
    //     if (scrolled < numberOfData)
    //         scrollValue = scrollValue + width

    //     else {
    //         scrollValue = 0
    //         scrolled = 0
    //     }


    // }, 3000)
// }

const Banner = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        // strollInfinity(dataList)
        console.log("Data "+ data);
    })


    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    ref={(ref) => {this.flatList = ref}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    getItemCount
                    // showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <Slide 
                        image={item.imageUrl}
                        title={item.title} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#fff', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }


    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Banner
