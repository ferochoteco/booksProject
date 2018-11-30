import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { colors, paddings } from '../components/_base'
import Book from '../components/Book';
import Loading from '../components/common/Loading';

export default class BookScreen extends Component {
    static navigationOptions = {
        title: 'Book'
    }    
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }  

    componentDidMount() {
        this.getData();
    }

    getData() {
        const { navigation } = this.props;
        fetch(`https://acamicaexample.herokuapp.com/books/${navigation.state.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data
                })
            })
            .catch(error => {
                Alert.alert('oh snap!', 'something went wrong')
            })
            .finally(() => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        let { loading, data: book} = this.state;
        return loading ? <Loading isLoading={true} /> :(
            <View style={styles.container}>
                <Book 
                    author={book.author}
                    image={book.image}
                    description={book.description}
                    url={book.url}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.background
  }
});
