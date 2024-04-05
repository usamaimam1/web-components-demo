import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const MoviesList = function () {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.omdbapi.com/?s=batman&apikey=1bf07778');
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {movies.map((movie) => (
        <Grid item key={movie.imdbID}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img" height="400" image={movie.Poster} alt={movie.Title} />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {movie.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year: {movie.Year}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default MoviesList