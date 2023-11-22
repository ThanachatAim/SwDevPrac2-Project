export async function register(registerData: any) {
    console.log({
      ...registerData,
      role: "user",
      createdAt: new Date().toISOString(),
    });
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_ROUTE + "/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...registerData,
          role: "user",
          createdAt: new Date().toISOString(),
        }),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to register");
    }
  
    return await res.json();
  }