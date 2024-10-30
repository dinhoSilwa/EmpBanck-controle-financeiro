export const Search = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <section>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
      /> 
    </section>
  );
};
