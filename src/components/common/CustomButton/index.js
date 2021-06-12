import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({ title,
    secondary,
    primary,
    danger,
    disabled,
    loading,
    onPress, }) => {

    const getBackgroundColor = () => {
        if (disabled) {
            return colors.grey
        }
        if (primary) {
            return colors.primary
        }
        if (secondary) {
            return colors.secondary
        }
        if (danger) {
            return colors.danger
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]}>
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary} />}
                {title && <Text style={{ color: disabled ? 'black' : colors.white, paddingLeft: loading ? 5 : 0 }}>{title}</Text>}
            </View>
        </TouchableOpacity >
    )
}

export default CustomButton
