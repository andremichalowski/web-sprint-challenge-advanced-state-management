import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.smurfs.map((smurf) => (
        <div >
          <h3>{smurf.name}</h3>
          <h5>{smurf.age}</h5>
          <h6>{smurf.height}</h6>
        </div>
      ))}
      {/* <button onClick={() => props.fetchSmurfs()}>FETCH SMURFS</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);