import { v4 as uuid } from "uuid";
const initialData = {
  tasks: {
    "task-1": {
      id: uuid(),
      content: "Take out the garbage",
      label: "Custom Field",
    },
    "task-2": { id: uuid(), content: "Watch my favorite show", label: "Date" },
    "task-3": { id: uuid(), content: "Cook dinner", label: "Text Area" },
  },
  columns: {
    "column-1": {
      id: "dragArea",
      title: "Form",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "BAG",
      title: "Element List",
      taskIds: [],
    },
  },
  formList: [],
  removed: [],

  elementList: [
    { id: uuid(), content: "Take out the garbage", label: "Custom Field" },
    { id: uuid(), content: "Watch my favorite show", label: "Date" },
    { id: uuid(), content: "Cook dinner", label: "Text Area" },
  ],
};

export default initialData;
