import { Link } from 'react-router-dom';

const ShowBooks = (props) => {
    const Data = props.TBooks;

    if (Array.isArray(Data) && Data.length > 0) {
        return (
            <>
                {Data.map((book) => {
                    return (
                        <tr key={book._id}>
                            <td>{book.booktitle}</td>
                            <td>{book.PubYear}</td>
                            <td>{book.author}</td>
                            <td>{book.Topic}</td>
                            <td>{book.formate}</td>
                            <td>
                                <Link to={"/edit/" + book._id}>Edit</Link>
                            </td>
                            <td>
                                <Link to={"/Delete/" + book._id}>Delete</Link>
                            </td>
                        </tr>
                    );
                })}
            </>
        );
    } else {
        return (<h1>No Data Returned</h1>);
    }
}

export default function DisplayData(props) {
    const Books = props.Books;
    return (
        <div>
            <h3>Book List</h3>
            <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Pub Year</th>
                        <th>Author</th>
                        <th>Subject</th>
                        <th>Format</th>
                    </tr>
                </thead>
                <tbody>
                    <ShowBooks TBooks={Books} />
                </tbody>
            </table>
        </div>
    );
}
