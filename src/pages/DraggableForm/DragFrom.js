import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import ElementToSelectFrom from "./ElementToSelectFrom";

const List = styled.div`
  padding: 0.5rem 0.5rem 0;
  font-family: sans-serif;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

const ElementList = styled(List)``;

export default function DragFrom(props) {
  return (
    <Droppable droppableId="dragArea" isDropDisabled={true}>
      {(provided, snapshot) => (
        <ElementList ref={provided.innerRef} className="shop">
          {props.items.length ? (
            <ElementToSelectFrom items={props.items} />
          ) : (
            <Notice>Drop items here</Notice>
          )}
          {provided.placeholder}
        </ElementList>
      )}
    </Droppable>
  );
}
