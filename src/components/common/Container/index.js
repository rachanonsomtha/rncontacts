import { styles } from 'ansi-colors'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const Container = ({ children }) => {
    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {children}
            </View>
        </ScrollView>
    )
}

export default Container
