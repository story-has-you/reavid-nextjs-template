import { Spinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";

export function PendingSpinner() {
  const { pending } = useFormStatus();
  return pending ? (
    <div className="absolute top-16 left-0 h-full w-full z-10 flex justify-center bg-black opacity-50">
      <Spinner size={"large"} className="absolute top-96" />
    </div>
  ) : (
    <></>
  );
}
