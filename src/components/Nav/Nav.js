import React from "react";
import { Menu, Icon, Dropdown, Sidebar } from "semantic-ui-react";
import { connect } from "react-redux";
import { navBarSelected } from "../../actions/index";
import { Link } from "react-router-dom";
import ApptAddModal from "../Appt/ApptAddModal";

const style = {
  topBar: {
    marginBottom: 0,
    zIndex: 102,
    position: "relative"
  },
  sideBar: {
    width: 90,
    height: "100%",
    zIndex: 0
  },
  Item: {
    padding: 7
  },
  NavBarItem: {
    borderRight: "1px solid rgba(34,36,38,.15)",
    width: 89,
    padding: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  ItemMarginTop: {
    height: 50
  },
  Button: {
    fontSize: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem"
  }
};

const Nav = props => {
  const activeItem = props.navBarSelect;
  const menuItemList = [
    { name: "dashboard", icon: "home", link: "/" },
    { name: "staff", icon: "users", link: "/staff" },
    { name: "service", icon: "book", link: "/service" },
    { name: "settings", icon: "settings", link: "/settings" }
  ];

  //mapping the menuItem list
  const menuItemMap = menuItemList.map(item => {
    return (
      <Menu.Item
        key={item.name}
        active={activeItem === item.name}
        as={Link}
        to={item.link}
        style={style.Item}
        onClick={() => props.navBarSelectedFx(item.name)}
      >
        <Icon name={item.icon} />
        {item.name.replace(/^./, str => str.toUpperCase())}
      </Menu.Item>
    );
  });

  const VerticalSidebar = () => (
    <Sidebar
      as={Menu}
      animation="push"
      direction="left"
      icon="labeled"
      vertical
      visible={true}
      width="very thin"
      style={style.sideBar}
    >
      {/* place holder box */}
      <Menu.Item as="a" style={style.ItemMarginTop}></Menu.Item>

      {/* this is the mapped element of left sided nav bar */}
      {menuItemMap}
    </Sidebar>
  );

  return (
    <>
      <Menu size="huge" borderless style={style.topBar}>
        <Menu.Menu position="left">
          <Menu.Item as="div" style={style.NavBarItem}></Menu.Item>
          <Menu.Item as="div" style={style.title}>
            {props.navBarSelect.toLocaleUpperCase()}
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as="div" style={style.Button}>
            <ApptAddModal />
          </Menu.Item>

          <Dropdown
            item
            pointing
            text="JohnSmith &nbsp; &nbsp;"
            icon="user outline"
          >
            <Dropdown.Menu>
              <Dropdown.Item>LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>

      <VerticalSidebar />
    </>
  );
};

const mapStateTopProps = state => {
  return {
    navBarSelect: state.nav.navBarSelect
  };
};

const mapDispatchToProps = {
  navBarSelectedFx: navBarSelected
};

export default connect(mapStateTopProps, mapDispatchToProps)(Nav);
