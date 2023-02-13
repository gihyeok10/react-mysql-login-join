import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList,setMovieReviewList] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setMovieReviewList(response.data)
    })
  },[])
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    }).then(() => {
      alert("successful api");
    });
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

        {movieReviewList.map((item)=>{
          return <h1 key={item.id}>MovieName: {item.movieName} | MovieReview: {item.movieReview}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
