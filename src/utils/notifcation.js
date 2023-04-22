import { toast } from "react-toastify";

const notify = (notificationType, notificationMessage) => {
  notificationType === "error" &&
    toast.error(notificationMessage || "حدث خطأ في الارسال", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      style: {
        color: "red",
        backgroundColor: "rgb(254 226 226)",
      },
    });

  notificationType === "done" &&
    toast.success(notificationMessage || "تم العملية بنجاح", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      style: {
        color: "#0f766e",
        backgroundColor: "rgb(204 251 241)",
      },
    });
};

export default notify;
