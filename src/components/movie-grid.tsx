import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MovieCard } from '@/components/movie-card';
import { MovieCardSkeleton } from '@/components/movie-card-skeleton';
import type { Movie } from '@/types/movie';

const SKELETON_COUNT = 12;

type MovieGridProps = {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
};

export function MovieGrid({ movies, isLoading, error }: MovieGridProps) {
  if (error) {
    return (
      <Alert variant="destructive" className="max-w-lg mx-auto mt-8">
        <AlertCircle />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-2 text-muted-foreground">
        <p className="text-lg font-medium">No movies found</p>
        <p className="text-sm">Try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
