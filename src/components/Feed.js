import React from "react";
import Context from '../Context';
import { useContext } from 'react';

export function FeedPage() {
  const { firstName, lastName, isAuth } = useContext(Context);

  return (
    <div>
      <h1>Feed Page! for {firstName} {lastName}!!</h1>
    </div>

  );
}