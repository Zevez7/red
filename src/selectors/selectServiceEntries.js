import { createSelector } from "reselect";

const serviceDataSelector = state => state.service;

const getServiceDataEntries = state => {
  console.log("getServiceDataEntries");
  return Object.entries(state);
};

export default createSelector(serviceDataSelector, getServiceDataEntries);
