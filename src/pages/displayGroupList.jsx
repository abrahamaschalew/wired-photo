import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import { withRouter } from "react-router";

class DisplayGroupList extends Component {
  state = {};
  componentDidMount() {
    //console.log(GetP());
  }
  render() {
    // let { listName } = useParams();
    // console.log(listName);
    return <h1>Displaying</h1>;
  }
}

// function GetP() {
//   let [searchParams, setSearchParams] = useSearchParams();
//   let listName = searchParams.get("lsitName");
//   return listName;
// }

export default DisplayGroupList;
