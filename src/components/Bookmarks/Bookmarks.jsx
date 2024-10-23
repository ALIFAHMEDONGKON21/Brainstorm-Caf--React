
import PropTypes from 'prop-types';
import Blookmark from './Bookmark/Blookmark';

const Bookmarks = ({bookmarks ,handlemarkread}) => {
    return (
        <div className="w-1/3">
            <div>
                <h1>Reading time : {handlemarkread}</h1>
            </div>
            <h3 className=' text-2xl text-black  font-bold'>BookMarks : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=> <Blookmark key={bookmark.id} boolmark={bookmark}></Blookmark>)
            }
        </div>
    );
};



Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    handlemarkread:PropTypes.number
    
};

export default Bookmarks;