import { Separator } from '@/components/ui/separator';
import { MoviesFeature } from '@/features/movies';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="px-4 py-6 sm:px-8">
        <h1 className="text-2xl font-bold tracking-tight">CineSpoilerS</h1>
        <p className="text-sm text-muted-foreground mt-1">Popular movies right now</p>
      </header>
      <Separator />
      <main className="px-4 py-6 sm:px-8">
        <MoviesFeature />
      </main>
    </div>
  );
}

export default App;
