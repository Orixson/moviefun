import React, { PureComponent } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from '../components/uikit/Header';
import ImageBigCard from '../components/uikit/ImageBigCard';
import { WHITE, BLUE, w } from '../../constants';

export default class DelailsScreen extends PureComponent {
  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params;
    onGoBack && onGoBack('Hello from children');
  }

  render() {
    const { show } = this.props.navigation.state.params;
    const { image, name, summary } = show;
    const { navigation } = this.props;
    const data = { image, name };
    return (
      <View style={styles.container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          headerColor={BLUE}
          leftColor={WHITE}
        />
        <ScrollView>
          <View style={styles.sub}>
            <ImageBigCard data={data} />
            <Text style={styles.h1}>{name.toUpperCase()}</Text>
            <Text style={styles.h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: WHITE,
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10,
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15,
  },
});
