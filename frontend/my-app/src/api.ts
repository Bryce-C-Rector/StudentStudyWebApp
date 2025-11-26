const API_BASE = "https://student-app-api.onrender.com";

export async function getSomething() {
  const res = await fetch(`${API_BASE}/items`);
  return res.json();
}