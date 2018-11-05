import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import api from '../services/api';
import { connect } from 'react-redux';


class Main extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions ={
        title: 'NavTest RN',
    }
    state = {
        docs: [],
        addInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProducts();
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity 
            style={styles.productButton} 
            onPress = {()=>{this.props.navigation.navigate("Product", {product: item})}}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    loadProducts = async (page=1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...addInfo } = response.data;
        

        this.setState({ docs:[...this.state.docs, ...docs], addInfo, page });
    };

    loadMore = () => {
        const {page, addInfo} = this.state;
        if (page === addInfo.pages) return;
        const PageNumber = page + 1;
        this.loadProducts(PageNumber);

    }

    render(){
        const {printa} = this.props;
        printa==='sim' ? console.log(this.props) : null;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.printaTela()}>CLICA E OLHA NO CONSOLE</TouchableOpacity>
                <FlatList 
                contentContainerStyle={styles.list}
                data={this.state.docs} 
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.3}
                />  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    list: {
        padding: 20,
    },
    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24,
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold",
    }
});

const mapStateToProps = state => ({
    test: state.knowledges.printa,
});

const mapDispatchToProps = dispatch => ({
    printaTela: dispatch({type: 'TESTA_REDUCER', payload: {}});
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);