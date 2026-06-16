export async function onRequestPost(context) {
  try {
    const { password } = await context.request.json();
    const correct = context.env.APP_PASSWORD;

    return new Response(JSON.stringify({ ok: password === correct }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
