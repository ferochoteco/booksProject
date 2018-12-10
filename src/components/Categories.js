import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Alert } from 'react-native';
import { colors, paddings } from './_base';
import PropTypes from 'prop-types';
import Loading from './common/Loading';

// Redux
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/dataActions';

class Categories extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render () {
        const { onSelect, categories, loading } = this.props;
        return (
            <View>
                <Loading isLoading={loading} />
                <FlatList 
                    data={categories} 
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

const mapStateToProps = (state) => {
    return {
        categories: state.appData.data,
        loading: state.appData.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchCategories())
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Categories);