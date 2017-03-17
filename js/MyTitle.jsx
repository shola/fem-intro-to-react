import React from 'react';
import ReactDOM from 'react-dom';

// TODO: remove for next lesson
// props are like parameters that are passed to a react element
const MyTitle = ({ color, title }) => {
    const style = { color };
    return (
        <div>
            <h1 style={style}>
                {title}
            </h1>
            <p>
                {Date()}
            </p>
        </div>
    );
};

// TODO: remove for next lesson
// Avoid using createClass for simple components, prefer stateless components
// const MyTitle = React.createClass({
//     render() {
//         const style = { color: this.props.color };
//         return (
//             <div>
//                 <h1 style={style}>
//                     {this.props.title}
//                 </h1>
//             </div>
//         );
//     }
// });

export default MyTitle;
