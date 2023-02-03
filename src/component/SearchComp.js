import React,{useState} from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchComp = ({ onPress , selectedMovie }) => {

    return ( 
        <TouchableOpacity onPress={onPress} style={[styles.container,]}>
            
            <Text on style={styles.textStyle}>
                
                {selectedMovie}
                
            </Text>
            <AntDesign size={20} color="black" name="down" />

        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container: {
        width: "60%",
//alignSelf: 'center',
        height: 40,
//alignSelf: 'center',
        
        alignSelf: 'center',
        elevation: 4,
        
        justifyContent: 'space-between',
        //alignSelf: 'center',
        
        flexDirection: 'row',

        paddingHorizontal: 10,
        //alignSelf: 'center',
        margin: 10,
        //alignSelf: 'center',

        alignItems: 'center',
        backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 15,
    }

})

export default SearchComp;