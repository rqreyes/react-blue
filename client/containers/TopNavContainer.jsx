import React from 'react';
import { connect } from 'react-redux';
import JSZip from 'jszip';
import FileSave from 'file-saver';
import { bindActionCreators } from 'redux';
import {
  undo,
  redo,
  changeDisplayHorizontalToVertical,
  resetEntireTree
} from '../actions/actions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import exportZipFront from '../templates-exports/frontEndFiles.js';
import exportZipFull from '../templates-exports/fullStackFiles.js';

const mapStateToProps = store => ({
  data: store.main.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { undo, redo, changeDisplayHorizontalToVertical, resetEntireTree },
    dispatch
  );

const TopNavContainer = ({
  undo,
  redo,
  changeDisplayHorizontalToVertical,
  resetEntireTree
}) => {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark'>
      <Navbar.Brand href='#home'>React Blue</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Edit' id='collasible-nav-dropdown'>
            <NavDropdown.Item className='keyboard-shortcut' onClick={undo}>
              <span>Undo</span>
              <span>Ctrl+Z</span>
            </NavDropdown.Item>
            <NavDropdown.Item className='keyboard-shortcut' onClick={redo}>
              <span>Redo</span>
              <span>Ctrl+Shift+Z</span>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className='keyboard-shortcut'
              onClick={resetEntireTree}
            >
              Delete Tree
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='View' id='collasible-nav-dropdown'>
            <NavDropdown.Item
              onClick={() => {
                changeDisplayHorizontalToVertical('horizontal');
              }}
            >
              Horizontal
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                props.changeDisplayHorizontalToVertical('vertical');
              }}
            >
              Vertical
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Help' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='##'>About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href='https://github.com/team-targaryan/react-blue'
              target='_blank'
            >
              GitHub
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown title='Export' id='collasible-nav-dropdown'>
            <NavDropdown.Item onClick={() => exportZipFront(data)}>
              Export FrontEnd
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => exportZipFull(data)}>
              Export FullStack
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey={2} href='#memes'>
            ExSomthing
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavContainer);
