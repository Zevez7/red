import React, { Fragment } from "react";
import { connect } from "react-redux";
import { List, Grid } from "semantic-ui-react";
import ServiceAddModal from "./ServiceAddModal";
import selectServiceEntries from "../../selectors/selectServiceEntries";

const style = {
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    maxWidth: 400
  }
};

const Service = props => {
  const serviceMap = props.serviceData.map((item, index) => {
    return (
      <Fragment key={item + index}>
        <h4>{item[0]}</h4>
        <List className="columnCSSSpread">
          {item[1].map((item2, index) => {
            return (
              <List.Item key={item + index}>
                <List.Content>{item2}</List.Content>
              </List.Item>
            );
          })}
        </List>
      </Fragment>
    );
  });

  return (
    <Grid columns="equal" stackable style={style.container}>
      <Grid.Row>
        <Grid.Column>{serviceMap}</Grid.Column>
      </Grid.Row>
      <ServiceAddModal />
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    serviceData: selectServiceEntries(state)
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
