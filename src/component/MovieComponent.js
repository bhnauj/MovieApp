import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const MovieComponent = ({ original_title, popularity, release_date, onPress, poster_path }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <Image
                    style={styles.imageView}
                    source={{ uri: 'https://image.tmdb.org/t/p/w154'+ poster_path }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 17 , color: 'rgb(78,78,80)',maxWidth: '95%' }]}>{original_title}</Text>
                <Text style={styles.text}>Popularity:{popularity}</Text>
                <Text style={styles.text}>release_date":{release_date}</Text>
                <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                    <Text>More Details</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        margin:10,
        alignSelf: 'center',
        maxWidth: '90%',
        flexDirection: 'row',
        display:'flex',
      
    },
    imageView: {
        height: 118,
        width: 100,
    },
    textContainer: {
        margin: 10
    },
    text: {
        fontSize: 14,
        color: 'rgb(143,136,138)',
    },
    buttonStyle: {
        height: 40,
        width: 220,
        backgroundColor: 'rgb(5,182,211)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 3
    }

})
export default MovieComponent;