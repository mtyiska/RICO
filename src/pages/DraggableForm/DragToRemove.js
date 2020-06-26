import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
// import DraggableElement from "./DraggableElement";
import FormElements from "./FormElements";

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

const FormList = styled.div`
  min-height: 100px;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "red" : "")};
  flex-grow: 1;
`;

export default function DragToRemove(props) {
  return (
    <Droppable droppableId="remove">
      {(provided, snapshot) => (
        <FormList
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          className="shopping-bag"
        >
          {props.items.length ? (
            <FormElements items={props.items} />
          ) : (
            <Notice>Drop here to remove</Notice>
          )}
          {provided.placeholder}
        </FormList>
      )}
    </Droppable>
  );
}
