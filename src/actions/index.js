import {
  NAVBAR_SELECT,
  DELETE_APT,
  SUBMIT_APT,
  EDIT_APT,
  STAFF_SELECT,
  ADD_STAFF
} from "./types";

export const navBarSelected = name => ({
  type: NAVBAR_SELECT,
  payload: name
});

export const staffSelected = name => ({
  type: STAFF_SELECT,
  payload: name
});
export const deleteApt = id => ({
  type: DELETE_APT,
  payload: id
});

export const submitApt = data => ({
  type: SUBMIT_APT,
  payload: data
});
export const editApt = data => ({
  type: EDIT_APT,
  payload: data
});

export const addStaff = data => ({
  type: ADD_STAFF,
  payload: data
});
