import '../style1.css';



const Books = (props) => {
  return (
    <div className="Books">
      <h2>
        Some books!
      </h2>
      <ul>
        { props.books.map((book) =>  <li key={book.id}>{book.title}</li>) }
      </ul>
    </div>
  );
}

export default Books;