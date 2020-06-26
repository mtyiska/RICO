import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import EmpailInput from "../templates/EmailInput";
import RegularDate from "../templates/RegularDate";
import TextArea from "../templates/TextArea";

const FormList = styled.div`
  min-height: 100px;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "")};
  flex-grow: 1;
`;

// background: #fff;
const Handle = styled.div`
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  display: flex;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  border-right: 1px solid #ddd;
  color: #000;
`;

const Item = styled.div`
  border-radius: 3px;
  margin: 0 0 0.5rem 0;
  display: flex;
  padding: 0.5rem;
  line-height: 1.5;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "#ddd")};
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;

export default function ShoppingBag(props) {
  return (
    <Droppable droppableId="BAG">
      {(provided, snapshot) => (
        <FormList
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          className="shopping-bag"
        >
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <Item
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                  className="col-12"
                >
                  <Handle {...provided.dragHandleProps}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                      />
                    </svg>
                  </Handle>
                  {item.label === "Custom Field" ? (
                    <EmpailInput cLabel={item.label} />
                  ) : item.label === "Date" ? (
                    <RegularDate cLabel={item.label} id={item.id} />
                  ) : item.label === "Text Area" ? (
                    <TextArea cLabel={item.label} />
                  ) : (
                    ""
                  )}
                </Item>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </FormList>
      )}
    </Droppable>
  );
}
