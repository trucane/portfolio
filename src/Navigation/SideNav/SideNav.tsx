import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './sideNav.css';

type SideNavProps = {
    show: boolean
}

export const SideNav = ({show}: SideNavProps) => {
    return (
        <div className={`side-nav-container ${show ? 'showSideMenu': ''}`}>
            {/* replace home icon with logo */}
            <div className="side-nav-main-item">
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
            </div>
            <div className="side-nav-main-item">
                <Link to="/contact"><FontAwesomeIcon icon={faIdCard} /></Link>
            </div>
            {/* <div className="side-nav-main-item">
                <Link to="/projects"><FontAwesomeIcon icon={faTabletScreenButton} /></Link>
            </div> */}
        </div>
    );
};
