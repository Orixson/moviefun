import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from '../components/uikit/Header';
import Layout from '../components/uikit/Layout';
import ImageCard from '../components/uikit/ImageCard';
import {BATMAN_DETAILS} from '../routes';
import {WHITE, BLUE} from '../../constants';

const url = 'http://api.tvmaze.com/search/shows?q=batman';

export default Main = ({navigation}) => {
  const [title] = useState('BATMAN');
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (e) {
      throw e;
    }
  }, []);

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
};
