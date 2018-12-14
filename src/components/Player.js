import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { colors, paddings } from './_base';
import Loading from './common/Loading';
import PropTypes from 'prop-types';

class Player extends Component {
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
                Hola
            </View>
        )
    }
}

Player.propTypes = {
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
  
export default Player;