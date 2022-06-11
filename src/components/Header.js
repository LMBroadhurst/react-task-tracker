import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({ title }) => {

    const onClick = () => {
        console.log('object');
    }
    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// If we state the proptype is a string, as shown above, our prop
// must therefore be a string!
// Change the App.js title to a number and see console errors

export default Header