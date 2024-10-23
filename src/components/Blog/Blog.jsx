import PropTypes from 'prop-types'; // ES6


const Blog = ({blog , handlemark ,handlemarkread}) => {
    console.log(blog)

    const{title ,cover,author_img,reading_time,author,
        posted_date,hashtag}=blog
    return (
        <div className='py-10'>
            <img className='w-full h-40 object-cover' src={cover} alt="" />
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <div className='flex items-center justify-between py-2'>
                <div className='flex'><img className='w-12 h-12 rounded-s-full rounded-e-full' src={author_img} alt="" />
                
                <div className='flex flex-col text-gray-500 ml-2 items-center'>
                    <div><h4 className=' text-xl font-medium text-black items-start'>{author}</h4></div>
                    <div><h3 className=' items-start'>{posted_date}</h3></div>
                </div>
                </div>
                <div className='flex flex-row '> <p className='text-gray-500'>Reading time : {reading_time}</p>
                <img onClick={()=>handlemark(blog)} className='ml-2' width="30" height="30" src="https://img.icons8.com/nolan/64/bookmark.png" alt="bookmark"/>
                </div>

               
            </div>
            <p>{hashtag}</p>

            <p onClick={()=>handlemarkread(reading_time)} className='text-blue-600 underline'>Mark As Read</p>
           
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handlemark:PropTypes.func,
    handlemarkread:PropTypes.number

}

export default Blog;