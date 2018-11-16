import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Alert } from 'react-native';
import { colors, paddings } from './_base';
import Loading from './common/Loading';
import PropTypes from 'prop-types';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            page: props.page || 1,
            limit: props.limit || 15,
            noMore: props.disableInfiniteScroll || false
        }
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    loadMore() {
        const { page, loading, noMore } = this.state;
        if (loading || noMore) return;
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.getData();
        })
    }

    getData() {
        const { page, limit, noMore } = this.state;
        const { id } = this.props;
        this.setState({
            loading: true
        },
        () => {
            fetch(`http://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        data: [...this.state.data, ...data],
                        noMore: noMore || data.length < limit
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
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent={<Loading isLoading={loading} />}
                />
            </View>
        )
    }
}

Category.propTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number,
    page: PropTypes.number,
    disableInfiniteScroll: PropTypes.boolean,
    onSelect: PropTypes.func
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: paddings.md
    }
});

export default Category;