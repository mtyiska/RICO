import React, { useState, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import "./draggable.css";
import DragFrom from "./DragFrom";
import DragTo from "./DragTo";
import PageHeader from "../templates/PageHeader";
import data from "../../initial-data";

const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destination;
};

export default function DraggableForm() {
  const [DraggableItems, setDraggableItems] = useState([]);
  const onDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      switch (destination.droppableId) {
        //if source id and destination id is the same
        case source.droppableId:
          console.log("Destination id " + destination.droppableId);
          setDraggableItems((state) =>
            reorder(state, source.index, destination.index)
          );
          break;
        //if dragArea1
        case "BAG":
          console.log("Source id " + source.droppableId);
          setDraggableItems((state) =>
            copy(data.elments, state, source, destination)
          );
          break;
        default:
          break;
      }
    },
    [setDraggableItems]
  );
  return (
    <div className="content-wrapper">
      <PageHeader />
      <div className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Forms</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="row">
                <DragDropContext onDragEnd={onDragEnd}>
                  {/* <div className="col-12">
                    <DragToRemove items={DraggableItems} />
                  </div> */}

                  <div className="col-8">
                    <DragTo items={DraggableItems} />
                  </div>
                  <div className="col-4">
                    <DragFrom items={data.elments} />
                  </div>
                </DragDropContext>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
