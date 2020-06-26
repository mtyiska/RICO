import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import styled from "styled-components";

const List = styled.div`
  padding: 0.5rem 0.5rem 0;
  font-family: sans-serif;
`;

const ElementList = styled(List)``;

const Item = styled.div`
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
`;

export default function Copyable(props) {
  return (
    <Droppable droppableId={props.droppableId} isDropDisabled={true}>
      {(provided, snapshot) => (
        <ElementList ref={provided.innerRef} className={props.className}>
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
                    <Item className="react-beatiful-dnd-copy">
                      {item.label}
                    </Item>
                  )}
                </React.Fragment>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ElementList>
      )}
    </Droppable>
  );
}
