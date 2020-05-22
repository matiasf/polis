// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import Radium from "radium";
// import _ from "lodash";
// import Flex from "./framework/flex";
// import { connect } from "react-redux";
// import { FOO } from "../actions";

// @connect(state => {
//   return state.FOO;
// })
@Radium
class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    // foo: "bar"
  };
  getStyles() {
    return {
      base: {},
    };
  }
  render() {
    const styles = this.getStyles();
    return <div style={[styles.base, this.props.style]}>{"ComponentName"}</div>;
  }
}

export default ComponentName;
