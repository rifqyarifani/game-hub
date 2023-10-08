import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data, error, loading } = useGenres();

  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
