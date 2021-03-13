import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/uikit/Header';
import Layout from '../components/uikit/Layout';
import ImageCard from '../components/uikit/ImageCard';
import { BATMAN_DETAILS } from '../routes';
import { WHITE, BLUE } from '../../constants';

const url = 'http://api.tvmaze.com/search/shows?q=batman';

export default class Main extends Component {
  state = {
    title: 'BATMAN',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { title, data } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <Header
          title={title}
          headerColor={BLUE}
          onPress={() => navigation.openDrawer()}
          leftIcon="ios-menu"
          leftColor={WHITE}
        />
        <Layout>
          {data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(BATMAN_DETAILS, item.show)}
            />
          ))}
        </Layout>
      </View>
    );
  }
}
