import React from "react";
// import StaffList from "./StaffList";
import { List, Icon } from "semantic-ui-react";
// import Faker from "faker";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { staffSelected } from "../../actions/index";
import StaffDetail from "./StaffDetail";
import StaffModal from "./StaffModal";

const style = {
  container: { paddingTop: 20, paddingLeft: 10, paddingRight: 10 }
};

const Staff = props => {
  const activeItem = props.staffSelect;

  const staffMap = props.staff.map((item, index) => {
    return (
      <List.Item
        key={item.staffName + index}
        active={activeItem === item.staffName}
        onClick={() => props.staffSelectedFx(item.staffName)}
      >
        <Icon name="user outline" />
        <List.Content>
          <List.Header>{item.staffName}</List.Header>
        </List.Content>
      </List.Item>
    );
  });

  //****testing
  console.log("props.staff", props.staff);

  return (
    <>
      <Grid columns="equal" stackable style={style.container}>
        <Grid.Row>
          <Grid.Column
            mobile={6}
            tablet={4}
            computer={3}
            largeScreen={2}
            widescreen={1}
          >
            <List
              link
              selection
              verticalAlign="middle"
              size="large"
              relaxed="very"
            >
              {staffMap}
              <div className="m-20">
                <StaffModal />
              </div>
            </List>
          </Grid.Column>
          <Grid.Column>
            <StaffDetail staffSelectDetail={props.staffSelectDetail} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateTopProps = state => {
  console.log("state.staff", state.staff);
  const staffSelectValue = state.staff.staffSelect;

  const staffSelectDetail = state.staff.list.filter(item => {
    return item.staffName === staffSelectValue;
  });

  //****testing
  console.log("staffSelectDetail", staffSelectDetail);

  return {
    staffSelect: staffSelectValue,

    staff: state.staff.list,

    staffSelectDetail: staffSelectDetail[0]
  };
};

const mapDispatchToProps = { staffSelectedFx: staffSelected };

export default connect(mapStateTopProps, mapDispatchToProps)(Staff);
