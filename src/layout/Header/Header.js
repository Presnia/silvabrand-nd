import { HeaderData } from "../../data/HeaderData";
import logo from '../../logo-silva.svg';
import s from './Header.module.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='icon: logo'/>
            <ul className={s.headerList}>{
                HeaderData.map(item => (
                    <li>
                        <a href={item.src}>{item.title}</a>
                    </li>
                ))
            }</ul>
        </header>
    )
};

export default Header;