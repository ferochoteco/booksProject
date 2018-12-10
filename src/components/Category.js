import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { colors, paddings } from './_base';
import Loading from './common/Loading';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { fetchBooksByCategory } from '../actions/booksActions';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page || 1,
            limit: props.limit || 15,
            noMore: props.disableInfiniteScroll || false
        }
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        const { page, limit } = this.state;
        const { id } = this.props;
        this.props.fetchData(id, page, limit);
    }

    loadMore() {
        const { page, limit, loading, noMore } = this.state;
        const { id } = this.props;
        if (page === 3) return;
        if (loading || noMore) return;
        this.setState({
            page: page + 1
        }, this.props.fetchData(id, page, limit));
    }

    render () {
        const { onSelect, books, loading } = this.props;
        return (
            <View>
                <Loading isLoading={loading} />
                <FlatList 
                    data={books} 
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
                />
            </View>
        )
    }
}

Category.propTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number,
    page: PropTypes.number,
    disableInfiniteScroll: PropTypes.bool,
    onSelect: PropTypes.func
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: paddings.md
    }
});

const mapStateToProps = (state) => {
    return {
        books: state.booksReducer.books,
        loading: state.booksReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id, page, limit) => dispatch(fetchBooksByCategory(id, page, limit))
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Category);