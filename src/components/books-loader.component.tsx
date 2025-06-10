type BooksLoaderProps = {
  loading: boolean;
  booksCount: number;
  loadingText: string;
  noBooksFoundText: string;
};

export default function BooksLoaderComponent({ loading, booksCount, loadingText, noBooksFoundText }: BooksLoaderProps) {
  if (loading) return <p className="text-center">{loadingText}</p>;
  if (booksCount === 0) return <p className="text-center">{noBooksFoundText}</p>;
  return null;
}
