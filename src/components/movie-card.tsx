import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Movie } from '@/types/movie';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type MovieCardProps = {
  movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {
  const { title, overview, poster_path, release_date, vote_average } = movie;

  const posterUrl = poster_path ? `${POSTER_BASE_URL}${poster_path}` : null;
  const releaseYear = release_date ? release_date.split('-')[0] : 'N/A';
  const rating = vote_average.toFixed(1);

  return (
    <Card className="overflow-hidden gap-0 py-0 border-border">
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-muted-foreground text-sm">No poster</span>
          </div>
        )}
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 gap-1 font-semibold text-xs"
        >
          ★ {rating}
        </Badge>
      </div>
      <CardContent className="p-3 space-y-1">
        <h3 className="font-semibold text-sm leading-tight line-clamp-1">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">{releaseYear}</p>
        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {overview || 'No overview available.'}
        </p>
      </CardContent>
    </Card>
  );
}
