import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Notfound.css';

const Notfoundpage = () => {
    return (
      <section className="container-notfound">
        <h1>404</h1>
        Oppps! Looks like this page does not exist.
        <br />
        <br />
        <Link to="/">Click here to return to the main page</Link>
      </section>
    );
}

export default Notfoundpage;
