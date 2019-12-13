import React from "react";
import { Container, Grid, Item } from "semantic-ui-react";
import Today from "./Today";
const dashBoard = {
  HeaderLink: {
    margin: "1rem",
    backgroundColor: "whitesmoke"
  },
  Content: {
    margin: "1rem"
  },
  Description: {
    // marginTop: "-15px"
  },
  Header: {
    marginBottom: 0
  }
};

const DashBoard = () => {
  return (
    <>
      <Grid stackable columns={12} divided>
        <Grid.Row style={dashBoard.HeaderLink}>
          <Grid.Column textAlign="center" width={3}>
            <Item.Content>
              <Item.Header as="h1" style={dashBoard.Header}>
                Today
              </Item.Header>
            </Item.Content>
          </Grid.Column>
          <Grid.Column textAlign="center" width={4}>
            <Item.Content>
              <Item.Header as="h1" style={dashBoard.Header}>
                Tomorrow
              </Item.Header>
            </Item.Content>
          </Grid.Column>
          <Grid.Column textAlign="center" width={4}>
            <Item.Content>
              <Item.Header as="h1" style={dashBoard.Header}>
                Week
              </Item.Header>
            </Item.Content>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={dashBoard.Content}>
          <Container basic="true">
            <Today />
          </Container>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default DashBoard;
