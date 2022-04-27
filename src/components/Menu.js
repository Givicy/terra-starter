import { Link } from 'react-router-dom';

const menu_options = [
  { name: 'Play', link: '/terra-starter/play' },
  { name: 'Leaderboard', link: '/terra-starter/leaderboard' },
  { name: 'How to play', link: '/terra-starter/guide' },
];

const Menu = () => {

  const renderMenu = () => {
    return menu_options.map((mb, index) => {

      const { name, link } = mb;
      
      return (
        <Link to={link} key={index} className="menu-item">
          <span className="item-text">{name}</span>
        </Link>
      );
    });
  };

  return <div className="game-menu">{renderMenu()}</div>;
};

export default Menu;