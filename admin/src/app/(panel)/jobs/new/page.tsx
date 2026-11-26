import JobForm from "../JobForm";

export default function NewJobPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Add job</h1>
      <JobForm />
    </div>
  );
}
