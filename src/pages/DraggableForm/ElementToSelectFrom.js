import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Item = styled.div`
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #000")};
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
  background: ${(props) => (props.isDragging ? "yellow" : "#ddd")};
`;

export default function ElementToSelectFrom(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <React.Fragment>
              <Item
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={provided.draggableProps.style}
                className={snapshot.isDragging ? "dragging" : ""}
              >
                {item.label}
              </Item>
              {snapshot.isDragging && (
                <Item className="react-beatiful-dnd-copy">{item.label}</Item>
              )}
            </React.Fragment>
          )}
        </Draggable>
      ))}
    </div>
  );
}
