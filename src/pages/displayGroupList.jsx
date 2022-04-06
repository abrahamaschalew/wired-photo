import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ImageCardComponent from "../components/imageCardComponent";

export default function DisplayGroupList(props) {
  const lists = props.lists;
  const functions = props.functions;
  let { listName } = useParams();

  return (
    <ImageCardComponent
      images={lists.filter((image) => image.lsitName != listName)}
      functions={functions}
    ></ImageCardComponent>
  );
}
