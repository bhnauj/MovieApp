import  React,  { useEffect, useState }  from  "react";
import {TouchableOpacity , LogBox , StyleSheet , View , Text , FlatList,} from "react-native";

import BelowPopUp from "../component/BelowPopUp"

import MovieComponent from "../component/MovieComponent"

import SearchComp from '../component/SearchComp'

import axios from 'axios'

const comeAlongList = [
  { heading: "now_playing" },

  { heading: "popular" },

  { heading: "top_rated" },

  { heading: "upcomming" },

];

const Movie = ({ navigation}) => {

    const [movieList , setMovieList ] = useState([]);
    const [visible , setVisible ] = useState([]);
    const [Value, setValue] = useState(0);
    const [selectedMovie, setselectedMovie] = useState(["popular"]);
    const [select, setSelect] = useState("");


    function getMoviesFromTMBD(mv){
        console.log("MV List-->", mv);
        axios.get(mv)
        .then((data) =>{
            setVisible(false);
            setMovieList(data.data.results);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
        getMoviesFromTMBD(`https://api.themoviedb.org/3/movie/popular?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&query=body&page=1`);
    }, []);

    const closeButtonHandler = () => {
        Value == 1 && setValue({ Value: 0, openModal: false });
  };
    const displayPopUp = () => {
        setValue(1);
  };

  const filterMovieList = (item) => {

    console.log("filterMovieList --> ", item);

    if (item === "now_playing") {

        getMoviesFromTMBD(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );

      setselectedMovie(item);
      
      setSelect(item);
      
      setValue(0);
    } else if (item === "popular") {

        getMoviesFromTMBD(
        "https://api.themoviedb.org/3/movie/popular?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );

      setselectedMovie(item);
      setSelect(item);
      setValue(0);

    } else if (item === "top_rated") {
      
        getMoviesFromTMBD(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );
      
      setselectedMovie(item);
      setSelect(item);
      setValue(0);
    
    } else if (item === "upcomming") {
     
        getMoviesFromTMBD(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=8e612f97d036e6a7ee466a431543af09&language=en-US&page=1"
      );
     
      setselectedMovie(item);
      setSelect(item);
      setValue(0);
    
    }
  };

    return ( 
        <View style={styles.container}>
      
       <SearchComp
        onPress={() => displayPopUp()}
        selectedMovie={selectedMovie}
      /> 

      <FlatList
        data={movieList}
        renderItem={({ item }) => {
          return (
            <MovieComponent
              original_title={item.original_title}
              popularity={item.popularity}
              release_date={item.release_date}
              poster_path={item.poster_path}
              onPress={() =>
                navigation.navigate("Movie details", {
                  original_title: item.original_title,
                  overview: item.overview,
                  original_title: item.original_title,
                  poster_path:item.poster_path
                })
              }
            />
          );
        }}
      />
      <BelowPopUp
        closeModal={closeButtonHandler}
        isVisible={Value == 1 ? true : false}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            onPress={() => setValue(0)}
            style={{ fontSize: 22, color: "black", alignSelf: "flex-end" }}
          >
            
          </Text>
        </View>
        <FlatList
          data={comeAlongList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => filterMovieList(item.heading)}
                style={[
                  styles.filterButton,
                  {
                    backgroundColor:
                      item.heading === select ? "rgb(8,121,111)" : "white",
                  },
                ]}
              >
                <Text style={[styles.filterText, {}]}>{item.heading}</Text>
              </TouchableOpacity>
            );
          }}
        />
        
      </BelowPopUp>
    </View>
     );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth:1
    },
    filterButton: {
      margin: 1,
      height: 50,
      justifyContent: "center",
    },
    filterText: {
      fontSize: 15,
      fontWeight: "400",
      left: 10,
    },
  });
 
export default Movie;