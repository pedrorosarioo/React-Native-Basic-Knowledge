import React from 'react';
import {WebView} from 'react-native';

const Product = ({navigation}) => {
    return (
        <WebView source={{uri: navigation.state.params.product.url}} />
    );
}

Product.navigationOptions = ({navigation}) => {
    const props = navigation.state.params.product;
    return({
        title: props.title,   
    });
};

export default Product;