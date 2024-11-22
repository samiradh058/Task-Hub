import AddTaskForm from "@/components/addTaskForm";
import ModalBackDrop from "@/components/modalbackdrop";

export default function AddTask() {
  return (
    <>
      <ModalBackDrop />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-blue-300 p-4 rounded-md">
        <h6 className="flex justify-center font-medium text-[20px]">
          Add new task
        </h6>
        <AddTaskForm />
      </div>
    </>
  );
}
