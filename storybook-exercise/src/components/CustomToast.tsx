type Status = "success" | "warning" | "error";

type CustomToastProps = {
  status: Status;
  text: string;
  hasIcon: boolean;
};

const statusStyles = {
  success: {
    backgroundColor: "lightgreen",
    icon: "✅",
  },
  warning: {
    backgroundColor: "#ffd580",
    icon: "⚠️",
  },
  error: {
    backgroundColor: "#ffb3b3",
    icon: "❌",
  },
};

export default function CustomToast({
  status,
  text,
  hasIcon,
}: CustomToastProps) {
  return (
    <div
      style={{
        backgroundColor: statusStyles[status].backgroundColor,
        padding: "16px 24px",
        borderRadius: "8px",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {hasIcon && <span>{statusStyles[status].icon} </span>}
      <span>{text}</span>
    </div>
  );
}