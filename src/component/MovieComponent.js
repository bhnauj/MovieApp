import React from 'react'

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const MovieComponent = ({ original_title, popularity, release_date, onPress, poster_path }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>

                <Image
                    style={styles.imgVw}
                    source={{ uri: 'https://image.tmdb.org/t/p/w154'+ poster_path }}
                />
            </View>

            <View style={styles.txtCntnr}>


                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 17 , color: 'rgb(78,78,80)',maxWidth: '95%' }]}>{original_title}</Text>

                <Text style={styles.text}>Popularity:{popularity}</Text>



                <Text style={styles.text}>release_date":{release_date}</Text>

                <TouchableOpacity onPress={onPress} style={styles.btnStle}>




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
        //alignSelf: 'center',
        maxWidth: '89%',
        flexDirection: 'row',
        //alignSelf: 'center',
        display:'flex',
      
    },
    imgVw: {
        height: 117,
        width: 100,
        //alignSelf: 'center',
    },
    txtCntnr: {
        //alignSelf: 'center',
        margin: 11
    },
    text: {
        fontSize: 14,
        //alignSelf: 'center',
        color: 'rgb(143,136,138)',
    },
    btnStle: {
        height: 41,
        //alignSelf: 'center',
        width: 220,
        backgroundColor: 'rgb(5,182,211)',
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'center',
        borderRadius: 5,
        //alignSelf: 'center',
        marginTop: 3
    }

})
export default MovieComponent;