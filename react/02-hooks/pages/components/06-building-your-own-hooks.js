import React from 'react'
import { useState,useEffect } from 'react'

function subscribeToFriendStatus (friendId,handleStatusChange) {
  if (friendId > 2)
    handleStatusChange({isOnline: true});
}

function unsubscribeFromFriendStatus (friendID, handleStatusChange) { 
}

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

function Circle ({color}) {
  return (
    <p> {color} </p>
  )
}

const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
  { id: 4, name: 'John' },
  { id: 5, name: 'Peter' },
  { id: 6, name: 'Kevin' },
  { id: 7, name: 'Caleb' },
];

export default function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
      
    </>
  );
}