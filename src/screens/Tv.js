import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  LogBox,
} from "react-native";
import BelowPopUp from "../component/BelowPopUp";
import MovieComponent from "../component/MovieComponent";
import SearchComp from "../component/SearchComp";
import axios from "axios";

const popUpList = [
  { heading: "airing_today" },
  { heading: "on_the_air" },
  { heading: "popular" },
  { heading: "top_rated" },
];

const TvScreen = ({ navigation }) => {
  const [movieList, setMovieList] = useState([]);
  const [toValue, setToValue] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedMovie, setselectedMovie] = useState("popular");
  const [select, setSelect] = useState("");

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getMoviesFromTMBD(
      "https://api.themoviedb.org/3/tv/popular?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
    );
  }, []);
  const handleOpenClose = () => {
    toValue == 1 && setToValue({ toValue: 0, openModal: false });
  };
  const showPopUp = () => {
    setToValue(1);
  };

  function getMoviesFromTMBD(item) {
    console.log("await item ", item);

    axios
      .get(item)

      .then((data) => {
        setIsVisible(false);
        setMovieList(data.data.results);
        console.log("data  ", data);
      })
      .catch((error) => console.log(error));
  }

  const filterMovie = (item) => {
    console.log("filterMovie tv ", item);

    if (item === "airing_today") {
      getMoviesFromTMBD(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );

      setselectedMovie(item);

      setSelect(item);

      setToValue(0);
    } else if (item === "on_the_air") {
      getMoviesFromTMBD(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );

      setselectedMovie(item);

      setSelect(item);

      setToValue(0);
    } else if (item === "popular") {
      getMoviesFromTMBD(
        "https://api.themoviedb.org/3/tv/popular?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );

      setselectedMovie(item);

      setSelect(item);

      setToValue(0);
    } else if (item === "top_rated") {
      getMoviesFromTMBD(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );

      setselectedMovie(item);

      setSelect(item);

      setToValue(0);
    }
  };
  return (
    <View style={styles.container}>
      <SearchComp onPress={() => showPopUp()} selectedMovie={selectedMovie} />

      <FlatList
        data={movieList}
        renderItem={({ item }) => {
          return (
            <MovieComponent
              original_title={item.original_name}
              popularity={item.popularity}
              release_date={item.release_date}
              poster_path={item.poster_path}
              onPress={() =>
                navigation.navigate("Movie details", {
                  original_title: item.original_name,
                  overview: item.overview,
                  poster_path: item.poster_path,
                })
              }
            />
          );
        }}
      />
      <BelowPopUp
        closeModal={handleOpenClose}
        isVisible={toValue == 1 ? true : false}
      >
        {/* <Text style={styles.title}>Title</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://image.tmdb.org/t/p/w154/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg'}}
            />
            <Text>Overview</Text> */}
        <FlatList
          data={popUpList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => filterMovie(item.heading)}
                style={[
                  styles.fltrBtn,
                  {
                    backgroundColor:
                      item.heading === select ? "#32CD32" : "white",
                  },
                ]}
              >
                <Text style={{ fontSize: 20, fontWeight: "400", left: 10 }}>
                  {item.heading}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </BelowPopUp>
      {/* <Text style={styles.title}>Title</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://image.tmdb.org/t/p/w154/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg'}}
            />
            <Text>Overview</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
  },
  fltrBtn: {
    margin: 1,
    height: 50,
    //justifyContent: 'space-between',
    justifyContent: "center",
  },
});
export default TvScreen;
