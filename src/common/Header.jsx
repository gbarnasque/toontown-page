import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { logout } from '../login/LoginActions';
import './Header.css';

class Header extends React.Component {

    componentDidMount() {
        
    }
    
    render() {
        return (
            <header className='main-header'>
                <Navbar>
                    <Navbar.Brand href="/">Toontown Page</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Logged as {this.props.username} | <a href='#' onClick={this.props.logout}>Logout</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);