import React, {useEffect} from 'react';
import {View, Button, ScrollView, Text, StyleSheet} from 'react-native';
import Header from '../components/uikit/Header';
import ImageBigCard from '../components/uikit/ImageBigCard';
import {WHITE, BLUE, w} from '../../constants';
import {STARGATE_HOME} from '../routes';

export default DelailsScreen = props => {
  const {image, name, summary} = props.navigation.state.params;
  const {navigation} = props;
  const data = {image, name};
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
          <Button
            onPress={() => navigation.navigate(STARGATE_HOME)}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Text style={styles.h1}>{name.toUpperCase()}</Text>
          <Text style={styles.h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

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
