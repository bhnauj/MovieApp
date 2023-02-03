
import React from 'react';

import Modal from 'react-native-modal';

import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const ProgressComponent = ({ isVisible }) => {
    return (
 
 <Modal deviceHeight={600} isVisible={isVisible}>
 
            <View style={styles.loaderCenterContainer}>
 
                <ActivityIndicator size="large" color={"rgb(242,242,242)"} />
 
            </View>
 
    </Modal>
    );
};
const styles = StyleSheet.create({
    loaderCenterContainer: {
        flex: 1,
         //alignSelf: 'center',
        justifyContent: 'center',
         //alignSelf: 'center',
        flexGrow: 1,
         //alignSelf: 'center',
        alignItems: 'center',
         //alignSelf: 'center',
    },
})
export { ProgressComponent };