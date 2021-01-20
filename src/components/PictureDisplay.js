import React from "react";
import { getPicture } from "../redux/actions";
import { connect } from "react-redux";

const PictureDisplay = (props) => {
  const clickHandler = () => {
    props.getPicture(); //*remember this is riding in on the coat tails of props. Destructure above or use dot notation here.
  };
  return (
    <div>
      <button onClick={clickHandler}>buttttton</button>
      {props.imageDetails[0].download_url ? (
        <img
          style={{ width: "300px", display: "block" }}
          src={props.imageDetails[0].download_url}
          alt="alt text"
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    // url: state.imageDetails.url
  };
};

const mapDispatchToProps = { getPicture };

export default connect(mapStateToProps, mapDispatchToProps)(PictureDisplay);
