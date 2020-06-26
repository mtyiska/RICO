import React, { useState, useCallback, Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import "./draggable.css";
import DragFrom from "./DragFrom";
import DragTo from "./DragTo";
import DragToRemove from "./DragToRemove";
import PageHeader from "../templates/PageHeader";
import data from "../../initial-data";

// const reorder = (list, startIndex, endIndex) => {
//   const [removed] = list.splice(startIndex, 1);
//   list.splice(endIndex, 0, removed);
//   return list;
// };

// const copy = (source, destination, droppableSource, droppableDestination) => {
//   const item = source[droppableSource.index];
//   destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
//   return destination;
// };

// const remove = (source, destination, droppableSource, droppableDestination) => {
//   const item = source[droppableSource.index];
//   destination.splice(droppableDestination.index, 1);
//   return destination;
// };

class DraggableForm extends Component {
  state = {
    elementList: data.elementList,
    formList: data.formList,
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log("formlist");
    console.log(this.state.formList);
    console.log("elementlist");
    console.log(this.state.elementList);
    //check if did nothing
    // if (!destination) {
    //   return;
    // }
    const start = this.state.elementList;
    const finish = this.state.formList;

    switch (destination.droppableId) {
      case source.droppableId:
        // this.reorder(this.state, source.index, destination.index);
        console.log("reorder");
        const newTaskIds = Array.from(finish);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, finish[source.index]);
        const newColumn = {
          ...finish,
          elementList: newTaskIds,
        };
        const reOrderSate = {
          ...this.state,
          elementList: newColumn,
        };
        this.setState(reOrderSate);
        return;

        break;
      case "BAG":
        const startElements = Array.from(start);
        startElements.splice(source.index, 1);
        const newStart = {
          ...start,
          elementList: startElements,
        };
        const finishTaskIds = Array.from(finish);
        finishTaskIds.splice(source.index, 0, start[source.index]);
        const newFinish = {
          ...finish,
          formList: finishTaskIds,
        };
        const newState = {
          ...this.state,
          elementList: newStart,
          formList: newFinish.formList,
        };
        this.setState(newState);
        return;
        break;
      case "remove":
        // console.log("remove" + source.droppableId);
        this.remove();
        break;
      default:
        break;
    }
  };

  render() {
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
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="col-12">
                      <DragToRemove items={data.removed} />
                    </div>

                    <div className="col-8">
                      <DragTo items={this.state.formList} />
                    </div>
                    <div className="col-4">
                      <DragFrom items={this.state.elementList} />
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
}

export default DraggableForm;
