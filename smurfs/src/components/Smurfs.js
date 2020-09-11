import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";

const Smurfs = (props) => {
return (
    <div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
