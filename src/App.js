import { useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
// import {Link, Outlet} from 'react-router-dom'
// import Description from './component/Description'; 


function App() {
  const [searchV, setsearchV] = useState("");
  const [newRate, setnewRate] = useState(1);
  const [movies, setMovies] = useState([
    {id:1,
      Title: "L'Attaque des Titans",
      Poster:
        "	https://media.senscritique.com/media/000006484765/100/L_Attaque_des_Titans.jpg",
      Description:
        "It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother.",
      Rate: 5,
    },
    {id:2,
      Title: "Death Note ",
      Poster:
        "https://media.senscritique.com/media/000017947429/100/Death_Note.jpg",
      Description:
        "Death Note (デスノート, Desu Nōto) is a manga series created by writer Tsugumi Ohba and illustrator Takeshi Obata. The series centers around a high school student who discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
      Rate: 5,
    },
    {id:3,
      Title: "Fullmetal Alchemist : Brotherhood ",
      Poster:
        "	https://media.senscritique.com/media/000006480351/100/Fullmetal_Alchemist_Brotherhood.jpg",
      Description:
        "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
      Rate: 4,
    },
    {id:4,
      Title: "One Piece",
      Poster:
        "https://media.senscritique.com/media/000006482131/100/One_Piece.jpg",
      Description:
        "The story follows the adventures of Monkey D. Luffy, a boy whose body acquired the properties of rubber after he inadvertently ate a Devil Fruit. Along with his pirate crew, called the Straw Hat Pirates, Luffy explores the Grand Line in search of the ultimate treasure known as One Piece in order to become the next Pirate King.",
      Rate: 5,
    },
    {id:5,
      Title: "Hametsu No Mars",
      Poster: "	https://cdn.myanimelist.net/images/anime/7/68855.jpg",
      Description:
        "Some time after a space mission to Mars ends in destruction, strange monsters called Ancients begin appearing around Tokyo. A group of specialists consisting of three girls and one troubled young boy must fight the Ancients until they can come to understand exactly what it is they are fighting. When one of the Ancients tells them that they are the true invaders of Earth, they must search within themselves to grasp what truly is reality.",
      Rate: 2,
    },
  ]);
  const search = (Text) => {
    setsearchV(Text);
  };
  const setRate = (Rate) => {
    setnewRate(Rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };
  return (
    <div className="App">
      <div>
        <Search search={search} setRate={setRate} newRate={newRate} />
      </div>
      <div className="movies">
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (el) =>
              el.Rate >= newRate &&
              el.Title.toUpperCase().includes(searchV.toUpperCase().trim())
          )}
        />
 
      </div>
    </div>
  );
}

export default App;
