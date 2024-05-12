import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/SubMenu.css'

const SubMenu = () => {
  return (
    <ul className="submenu">
      <Link className="linkCustom" to="/category/retroToys">RETRO TOYS</Link>
      <Link className="linkCustom" to="/category/disney">DISNEY</Link>
      <Link className="linkCustom" to="/category/harryPotter">HARRY POTTER</Link>
      <Link className="linkCustomB" to="/category/other">LO MÁS NUEVO</Link>
      <Link className="linkCustomA" to="/category/other">+ NUEVO</Link>
    </ul>
  );
}

export default SubMenu;