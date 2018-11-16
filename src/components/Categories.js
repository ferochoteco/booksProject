import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Alert } from 'react-native';
import { colors, paddings } from './_base';
import PropTypes from 'prop-types';
import Loading from './common/Loading';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            loading: true
        },
        () => {
            fetch('http://acamicaexample.herokuapp.com/categories')
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        data
                    });
                })
                .catch(error => {
                    Alert.alert('oh snap!', 'something went wrong');
                })
                .finally(() => {
                    this.setState({
                        loading: false
                    })
                })
        });
    }

    render () {
        const { data, loading } = this.state;
        const { onSelect } = this.props;
        return (
            <View>
                <Loading isLoading={loading} />
                <FlatList 
                    data={data} 
                    keyExtractor={item => item.id} 
                    renderItem={({item}) => 
                        <TouchableHighlight
                            style={styles.listItem}
                            underlayColor={colors.primary}
                            onPress={onSelect.bind(this, item.id)} >
                            <Text>{item.name}</Text>
                        </TouchableHighlight>}
                    />
            </View>
        )
    }
}

Categories.propTypes = {
    onSelect: PropTypes.func
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: paddings.md
    }
});

export default Categories;