import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  const [newReview, setNewReview] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

    setMovieReviewList([
      ...movieReviewList,
      { movieName: movieName, movieReview: review },
    ]);
  };

  //두개를 분리하면서 submit시 바로 화면에 랜더링 된다.

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

  const updateReview = (movie) => {
    Axios.put("http://localhost:3001/api/update", {
      movieName: movie,
      movieReview: newReview,
    });
    setNewReview("")
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={(event) => {
            setMovieName(event.target.value);
          }}
        />
        <label>Review:</label>

        <input
          type="text"
          name="review"
          onChange={(event) => {
            setReview(event.target.value);
          }}
        />

        <button onClick={submitReview}>보내기</button>

        {movieReviewList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h1>MovieName: {item.movieName}</h1>
              <p>MovieReview: {item.movieReview}</p>

              <button
                onClick={() => {
                  deleteReview(item.movieName);
                }}
              >
                Delete
              </button>
              <input type="text" id="updateInput" onChange={(e)=> {
                setNewReview(e.target.value
                )
              }}/>
              <button onClick={()=> {updateReview(item.movieName)}}>Update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
