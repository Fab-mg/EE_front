import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPersonFillAdd } from 'react-icons/bs';
import { IoNotificationsCircle } from 'react-icons/io5';
import User from './User';
import SearchBar from './SearchBar';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#735be8] flex flex-row justify-between cursor-pointer">
      <div id="logo" style={{ display: 'inline-block', margin: '10px' }}>
        <h>ENI Exchange</h>
        <div className="text-base">
          <User />
        </div>
      </div>
      <div className="flex flex-row text-white">
        <div className="flex flex-row gap-2 mx-6 items-center ">
          <SearchBar />
        </div>
        <div onClick={() => navigate('/')} className="flex flex-row gap-2 mx-2 items-center">
          <AiOutlineHome size={'30px'} />
          <div> Publication </div>
        </div>
        <div className="flex flex-row gap-2 mx-2 items-center">
          <BsPersonFillAdd size={'30px'} />
          <div> Relations </div>
        </div>
        <div className="flex flex-row gap-2 mx-2 items-center">
          <IoNotificationsCircle size={'30px'} />
          <div> Notifications </div>
        </div>
      </div>
    </div>
  );
}
