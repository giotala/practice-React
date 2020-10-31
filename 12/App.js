import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friend from './friends.json'

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard
      name={friend[0].name} 
      occupation={friend[0].occupation}
      location={friend[0].location} 
      images={friend[0].image} />
      <FriendCard />
      <FriendCard />
      
    </Wrapper>
  );
}

export default App;
