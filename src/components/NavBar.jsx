import HomeIcon from '@mui/icons-material/Home';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div className='z-10 fixed left-[50%] translate-x-[-50%] bg-[#50577A] bottom-[2rem] rounded-full px-5 py-2 backdrop-blur-3xl'>
        <div className='w-[100%] flex gap-3 '>
          <a href="/" className='hover:bg-[#6B728E] rounded-full p-2 '><HomeIcon sx={{ color: "white" }} /></a>
          <a href="/ToDo" className='hover:bg-[#6B728E] rounded-full p-2 '><ChecklistIcon sx={{ color: "white" }} /></a>
          <a href="/Pomodoro" className='hover:bg-[#6B728E] rounded-full p-2 '><AccessTimeIcon sx={{ color: "white" }} /></a>
        </div>
      </div>
    </div>
  );
}
export default NavBar;