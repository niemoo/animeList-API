export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleLastPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-5">
      <button className={`text-color-primary  text-xl ${page === 1 ? 'text-color-secondary' : 'hover:text-color-accent'}`} onClick={handleLastPage} disabled={page === 1}>{`<`}</button>
      <p className="text-color-primary text-xl">
        {page} of {lastPage}
      </p>
      <button className="text-color-primary hover:text-color-accent text-xl" onClick={handleNextPage}>{`>`}</button>
    </div>
  );
}
