import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Header extends Component {

    render () {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/home' className='link'>Home</Link></li>
                        <li><Link to='/about' className='link'>About</Link></li>
                        <li><Link to='/education' className='link'>Education</Link></li>
                        <li><Link to='/books' className='link'>Books</Link></li>
                        <li><Link to='/workhistory' className='link'>Work history</Link></li>
                        <li><Link to='/hobbies' className='link'>Hobbies</Link></li>
                        <li><Link to='/contacts' className='link'>Contacts</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
