import { api } from '@/lib/axios';
import type { Movie } from '@/types/movie';

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await api.get('/movie/popular');
  return response.data.results;
}
