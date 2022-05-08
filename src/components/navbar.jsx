import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export class navbar extends Component {
    render() {
            return (
                <div className = "navbartest">
                    <ul>
                        <li className="navbarinfo">What is Music?</li>
                        <ul style={{float: "left"}}>
                            <li><div className = "title">SUSEME <FontAwesomeIcon icon={faMusic} className="logo"/></div></li>

                        </ul>
                    </ul>
                </div>
            )
    }
}

export default navbar