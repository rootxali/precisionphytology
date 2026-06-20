const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export interface ContactPayload {
  name: string;
  email: string;
  org?: string;
  msg: string;
}

export interface AppointmentPayload {
  name: string;
  email: string;
  location?: string;
  agent?: string;
  service: string;
  date: string;
  time: string;
}

async function handleResponse(response: Response) {
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.detail ?? body.message ?? "Unexpected server error");
  }
  return body;
}

export async function postContact(data: ContactPayload) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
}

export async function postAppointment(data: AppointmentPayload, files: File[]) {
  const form = new FormData();

  form.append("name", data.name);
  form.append("email", data.email);
  if (data.location) form.append("location", data.location);
  if (data.agent) form.append("agent", data.agent);
  form.append("service", data.service);
  form.append("date", data.date);
  form.append("time", data.time);

  files.forEach((file) => {
    form.append("files", file, file.name);
  });

  const response = await fetch(`${API_URL}/api/appointments`, {
    method: "POST",
    body: form,
  });

  return handleResponse(response);
}
