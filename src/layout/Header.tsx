import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { Avatar } from "primereact/avatar";

const Header = () => {
  const navigate = useNavigate(); 

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigate('/home'), 
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
    //   command: () => navigate('/#'),
    },
    {
      label: 'Services',
      icon: 'pi pi-cog',
    //   command: () => navigate('/#'),
    },
    {
      label: 'Contact',
      icon: 'pi pi-phone',
    //   command: () => navigate('/#'),
    },
  ];

  const end = (
      <Avatar
        image="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
        shape="circle"
        className="p-mr-2"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/profile')}
      />
  );

  return (
    <nav className="p-mb-4">
      <Menubar className="" model={items} end={end} />
    </nav>
  );
};

export default Header;
