import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const MovieDetail = ({ route }) => {

    //console.log("route" , route)

    //console.log("values in route", route.params.poster_path)
    console.log("route.params.poster_path ===>",route.params.poster_path)
    return ( 
        <View style={styles.container}>
            {/* <Text style={styles.title}>Title</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://image.tmdb.org/t/p/w154/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg'}}
            />
            <Text>Overview</Text> */}

            <Text style={styles.titleText}>{route?.params?.original_title}</Text>

            
            <Image
                style={styles.imageView}
                source={{ uri: 'https://image.tmdb.org/t/p/w154'+ route.params.poster_path }}
            />
            <Text style={{ margin: 30, fontSize: 15, color: 'gray' }}>{route.params.overview}</Text>

        </View>
     );
}

const styles = StyleSheet.create({
    
    image:{
        height: 200,
        width: 200,
        top: 11
    },
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 31
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
    }
}
)
 
export default MovieDetail;