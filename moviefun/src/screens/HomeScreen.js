import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { searchChanged, getMovies } from '../actions';
import { Header, Layout, ImageCard, Search } from '../components';
import { STARGATE_DETAILS } from '../routes';

const HomeScreen = ({ navigation, movie, data, getMovies, searchChanged }) => {
  const [visibleSearchbar, setVisibleSearchbar] = useState(false);

  const onSearchChange = text => {
    searchChanged(text);
    getMovies(text);
  };

  return (
    <View>
      {visibleSearchbar ? (
        <Search
          colorRight="#fff"
          iconRight="magnify"
          placeholder="Search"
          onChangeText={onSearchChange}
          value={movie}
          onPressRight={() => setVisibleSearchbar(false)}
          onBlur={() => setVisibleSearchbar(false)}
        />
      ) : (
        <Header
          title={movie || 'Search'}
          colorRight="#fff"
          iconRight="magnify"
          onPressRight={() => setVisibleSearchbar(true)}
        />
      )}
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

const mapStateToProps = state => ({
  movie: state.search.movie,
  data: state.search.data,
});

export default connect(mapStateToProps, { searchChanged, getMovies })(
  HomeScreen,
);
