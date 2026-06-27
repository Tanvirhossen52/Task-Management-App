import { useParams } from "react-router";
import { useAuth } from "../../Context/AuthProvider";
import Button from "../common/Button";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.confg";

const TaskDitals = () => {
  const { id } = useParams();
  const { tasks } = useAuth();
  const [submitText, setSubmitText] = useState("");

  const singleTask = tasks?.find((t) => t.id === id);

  const submitHandle = async (e) => {
    e.preventDefault();
    if (!submitText.trim()) return alert("plz entre your task note");

    const taskRef = doc(db, "task", id);
    try {
      await updateDoc(taskRef, {
        status: "Progress",
        employeeNote: submitText,
      });

     
    } catch (error) {
      console.error("submission Failed");
    }

     alert("added succesful");
      setSubmitText("")
  };

  if (!singleTask) {
    return <div> Task not Fount and Loding...</div>;
  }

  return (
    <div className=" space-y-3">
      <h2 className="flex flex-col  ">
        {" "}
        <span className=" text-sm text-gray-500">Titale</span>
        {singleTask?.taskTitale}
      </h2>
      <h2 className="flex flex-col ">
        <span className=" text-sm text-gray-500">Discription</span>
        {singleTask?.taskDiscription}
      </h2>

      <form onSubmit={submitHandle}>
        <div className=" flex flex-col gap-1 ">
          <label className=" text-sm text-gray-500" htmlFor="empolyeeNote">
            Task Note
          </label>
          <textarea
            onChange={(e) => setSubmitText(e.target.value)}
            rows={10}
            cols={10}
            className=" border-brand-primary border-2  px-4 py-2 rounded-xl"
            placeholder="Enter you task note"
            name="empolyeeNote"
            id="empolyeeNote"
          ></textarea>

          <Button className="mt-4" type="submit">
            Task Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskDitals;
