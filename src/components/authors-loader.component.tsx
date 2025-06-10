type AuthorsLoaderProps = {
  loading: boolean;
  authorsCount: number;
};

export default function AuthorsLoaderComponent({ loading, authorsCount }: AuthorsLoaderProps) {
  if (loading) return <p className="text-center">Loading authors...</p>;
  if (authorsCount === 0) return <p className="text-center">No authors found.</p>;
  return null;
}
