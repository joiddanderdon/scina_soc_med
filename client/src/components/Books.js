const Books = (props) => {
  return (
    <div className="books text-primary">
      <h2 className="text-center">
        Some books!
      </h2>
      <ul className="bs-pink">
        { props.books.map((book) =>  <li key={book.id}>{book.title}</li>) }
      </ul>
    </div>
  );
}

export default Books;