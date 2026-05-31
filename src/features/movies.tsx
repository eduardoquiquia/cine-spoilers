import { useEffect, useState } from 'react';
import { getPopularMovies } from '@/services/tmdb';
import { MovieGrid } from '@/components/movie-grid';
import type { Movie } from '@/types/movie';

export function MoviesFeature() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchMovies() {
      try {
        const data = await getPopularMovies();
        if (!cancelled) setMovies(data);
      } catch {
        if (!cancelled) setError('Failed to load movies. Please try again later.');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchMovies();
    return () => {
      cancelled = true;
    };
  }, []);

  return <MovieGrid movies={movies} isLoading={isLoading} error={error} />;
}
