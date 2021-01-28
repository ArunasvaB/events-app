import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title}) => {
    const onClick =({}) =>
    {
        alert("clicked");
    }

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='blue' text='Add Task' onClick={onClick} />
        </header>
    )

}
Header.defaultProps=
    {
            title:'Events App',
    }

    Header.propTypes =
        {
            title: PropTypes.string.isRequired,
        }

        const headingStyle =
            {
                color:'purple',
                backgroundColor:'pink',
            }
export default Header
