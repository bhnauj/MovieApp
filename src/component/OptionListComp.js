import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const OptionListComp = ({ data,  filterMovie,  select   }) => {
    return (

        <View style={{ margin: 31 }}>

            {data.map((item) => {
                // console.log("item", item.id)
                return (
                    <TouchableOpacity style={[styles.filterButton, { backgroundColor: item.heading === select ? "#F79489" : 'white' }]} onPress={() => filterMovie(item.heading)}>
                        <Text
                            style={{ fontSize: 15, fontWeight: 'bold', }}
                        >
                            {item.heading}
                           
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    filterButton: {
        margin: 1,
        justifyContent: 'center',
        height: 30,
        width: '100%'
    },
})
export default OptionListComp