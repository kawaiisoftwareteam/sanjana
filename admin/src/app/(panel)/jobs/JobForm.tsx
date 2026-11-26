import { demands, type Job } from "@/lib/jobs";
import { saveJobAction } from "./actions";

const input = "w-full rounded border border-gray-300 px-3 py-2";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      {children}
    </label>
  );
}

export default function JobForm({ job }: { job?: Job }) {
  const text = (name: keyof Job, label: string) => (
    <Field label={label}>
      <input name={name} defaultValue={String(job?.[name] ?? "")} required className={input} />
    </Field>
  );
  return (
    <form action={saveJobAction.bind(null, job?.id ?? null)} className="grid max-w-3xl gap-4 rounded-xl bg-white p-6 shadow-sm sm:grid-cols-2">
      <div className="sm:col-span-2">{text("title", "Title")}</div>
      {text("sector", "Sector")}
      {text("visa", "Visa")}
      {text("country", "Country")}
      {text("city", "City")}
      {text("salary", "Salary")}
      <Field label="Openings">
        <input name="openings" type="number" min={0} defaultValue={job?.openings ?? 1} required className={input} />
      </Field>
      {text("language", "Language requirement")}
      {text("experience", "Experience")}
      <Field label="Demand">
        <select name="demand" defaultValue={job?.demand ?? "Medium"} className={input}>
          {demands.map((d) => <option key={d}>{d}</option>)}
        </select>
      </Field>
      <Field label="Posted date">
        <input name="posted" type="date" defaultValue={job?.posted ?? new Date().toISOString().slice(0, 10)} required className={input} />
      </Field>
      <Field label="Benefits (one per line)">
        <textarea name="benefits" rows={4} defaultValue={job?.benefits.join("\n")} className={input} />
      </Field>
      <Field label="Requirements (one per line)">
        <textarea name="requirements" rows={4} defaultValue={job?.requirements.join("\n")} className={input} />
      </Field>
      <div className="sm:col-span-2">
        <button className="rounded bg-gray-900 px-5 py-2 text-white">Save job</button>
      </div>
    </form>
  );
}
