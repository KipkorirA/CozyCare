import './styles/notFoundPage.css'; // Import your custom CSS for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        You can go back to the <a href="/">home page</a> or check the URL for mistakes.
      </p>
      <img 
        src="https://media.giphy.com/media/3oEjI6SIIHBdRx6z0Q/giphy.gif" 
        alt="Page Not Found" 
        className="not-found-gif"
      />
    </div>
  );
};

export default NotFoundPage;
