import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams<"id">();

  return <div>{!isNaN(Number(id)) ? <p>User ID: {id}</p> : <p>ID Not Found</p>}</div>;
};

export default User;
