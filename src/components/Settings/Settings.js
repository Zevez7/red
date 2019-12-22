import React from "react";
import { Grid, Icon, List, Checkbox } from "semantic-ui-react";
import SettingsEditModal from "./SettingsEditModal";
import { connect } from "react-redux";

const settings = {
  Container: {
    align: "left",
    margin: 10
  },
  checkbox: { padding: 5 },
  Header: {
    marginBottom: 0
  }
};

const Settings = props => {
  return (
    <>
      <Grid columns={12} style={settings.Container} stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Icon name="user" size="massive" />
          </Grid.Column>
          <Grid.Column width={5}>
            <List>
              <List.Item>
                <List.Content>
                  <List.Header as="h3">
                    {props.user.firstName} {props.user.lastName}
                  </List.Header>
                  <List.Description> {props.user.email}</List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header>Status</List.Header>
                  <List.Description> {props.user.role}</List.Description>
                  <List.Description> {props.user.joinDate}</List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header>Address</List.Header>

                  <List.Description> {props.user.address}</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} textAlign="left">
            <List>
              <List.Item>
                <List.Content>
                  <List.Header>Description</List.Header>

                  <List.Description>{props.user.description}</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} textAlign="left">
            <List>
              <List.Item>
                <List.Content style={settings.checkbox}>
                  <List.Header>Email Subscription</List.Header>
                  <List.Description>
                    <Checkbox toggle id="emailSub" />
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content style={settings.checkbox}>
                  <List.Header>Text Notification</List.Header>
                  <List.Description>
                    <Checkbox toggle />
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content style={settings.checkbox}>
                  <List.Header>Visibility</List.Header>
                  <List.Description>
                    <Checkbox toggle />
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4} textAlign="left">
            <List>
              <List.Item>
                <List.Content style={settings.checkbox}>
                  <List.Header>Auto Save</List.Header>
                  <List.Description>
                    <Checkbox toggle />
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content style={settings.checkbox}>
                  <List.Header>Auto Email Reply</List.Header>
                  <List.Description>
                    <Checkbox toggle />
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content style={settings.checkbox}>
                  <List.Header>Vacation Status</List.Header>
                  <List.Description>
                    <Checkbox toggle />
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
            <SettingsEditModal userData={props.user} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user[0]
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
