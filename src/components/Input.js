import React, { useState } from "react";
import { connect } from "react-redux";

import StyledInput from "./StyledInput";

import { getData } from "../store/actions";

const Input = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(props);
    props.getData();
    // console.log('submit')
    setSearch("");
  };

  return (
    <StyledInput>
      <form onSubmit={submitHandler}>
        {/* <label htmlFor="search">Search: </label> */}
        {/* <input */}
          {/* type="text" */}
          {/* id="search" */}
          {/* value={search} */}
          {/* onChange={searchHandler} */}
        {/* /> */}
        <button>Get me some Taylor Swift wizzzzdom</button>
      </form>
    </StyledInput>
  );
};

export default connect(null, { getData })(Input);
