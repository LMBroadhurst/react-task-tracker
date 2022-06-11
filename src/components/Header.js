import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header>
        <h1>Task Tracker</h1>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// If we state the proptype is a string, as shown above, our prop
// must therefore be a string!
// Change the App.js title to a number and see console errors

export default Header