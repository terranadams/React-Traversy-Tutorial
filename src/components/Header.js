// using ES7 React snippets extention, I just type "rafce" on a line and then 'enter' to create my function component.
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            onClick={onAdd} 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} /> 
         </header>
    )
}

// For inline styling
// <h1 style={headingStyle}>Hello {title}</h1>
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

Header.defaultProps = {
    title: 'Task Tracker'
}

/*alternative props syntax: const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
} */

export default Header
