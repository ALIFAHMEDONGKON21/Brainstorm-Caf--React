
import PropTypes from 'prop-types';

const Blookmark = ({boolmark}) => {
    const {title}=boolmark
    return (
        <div className=' m-5 p-5 bg-gray-400 rounded-lg'>
            <h3 className=' text-xl font-bold text-black'>{title}</h3>
        </div>
    );
};

Blookmark.propTypes = {
    boolmark:PropTypes.func
    
};

export default Blookmark;