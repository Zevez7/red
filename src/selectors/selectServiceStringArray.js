import { createSelector } from "reselect";

const serviceDataSelector = state => state.service;

const getServiceStringArray = state => {
  const serviceArrayEntries = Object.entries(state);
  let ServiceStringArray = [];
  for (let item of serviceArrayEntries) {
    ServiceStringArray = [...ServiceStringArray, ...item[1]];
  }
  return ServiceStringArray;
};

export default createSelector(serviceDataSelector, getServiceStringArray);
