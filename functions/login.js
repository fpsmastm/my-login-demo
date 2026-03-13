export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const email = formData.get('email')?.trim().toLowerCase();
  const password = formData.get('password');

  // Your secret accounts — change/add as many as you want
  const accounts = {
    "16674@monroeps.net": "Math123!",
    "14244@monroeps.net": "Password1!",
    // Add more like: "another@monroeps.net": "SecretPass2026!"
  };

  if (!email || !password) {
    return new Response("Missing email or password", { status: 400 });
  }

  if (accounts[email] && accounts[email] === password) {
    return new Response("Success", { status: 200 });
  }

  return new Response("Wrong email or password", { status: 401 });
}
