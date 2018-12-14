import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Alert } from 'react-native';
import { colors, paddings } from './_base';
import PropTypes from 'prop-types';
import Loading from './common/Loading';

// Redux
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/playersActions';

class Players extends Component {

    componentDidMount() {
        this.props.fetchPlayersData();
    }

    render () {
        const { onSelect, players, loading } = this.props;
        return (
            <View>
                <Loading isLoading={loading} />
                <FlatList 
                    data={players} 
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

Players.propTypes = {
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
        loading: state.playersReducer.isFetching,
        players: state.playersReducer.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayersData: () => dispatch(fetchPlayers())
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Players);