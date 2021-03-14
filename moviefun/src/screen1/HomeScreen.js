import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../components/uikit/Header';
import Layout from '../components/uikit/Layout';
import ImageCard from '../components/uikit/ImageCard';
import { STARGATE_DETAILS } from '../routes';
import { WHITE, BLUE } from '../../constants';

export default HomeScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);

  const url = `http://api.tvmaze.com/search/shows?q=${route.params.url}`;

  useEffect(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View>
      <Header title={route.name} headerColor={BLUE} />
      <Layout>
        {data.map(item => (
          <ImageCard
            data={item.show}
            key={item.show.id}
            onPress={() =>
              navigation.navigate(STARGATE_DETAILS, {
                show: item.show,
              })
            }
          />
        ))}
      </Layout>
    </View>
  );
};
