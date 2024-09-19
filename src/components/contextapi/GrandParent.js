import React, { createContext, useContext } from "react";
// import Child from "../compcommuncation/Child";
import Parent from "./Parent";
import Child from "./Child";

const UserContext = createContext({});

export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;
// export { UserContextProvider, UserContextConsumer };

export function UserDetails() {
  return useContext(UserContext);
}
export default class GrandParent extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        userName: "This is bond"
      }
    };
  }

  render() {
    return (
      <>
        <UserContextProvider value={this.state.userDetails}>
          <Parent />
        </UserContextProvider>
      </>
    );
  }
}
