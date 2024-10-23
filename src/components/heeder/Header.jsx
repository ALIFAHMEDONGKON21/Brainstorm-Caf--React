import proflie_photo from '../../assets/profile.png'

const Header = () => {
    return (
        <div className=' flex items-center  justify-between w-11/12 mx-auto py-5 border-b-2'>
              <h1 className='text-4xl '> Knowledge cafe</h1>
              <img src={proflie_photo} alt="" />
        </div>
    );
};

export default Header;