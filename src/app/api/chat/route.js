export async function POST(request) {
    const data = await request.json();
    console.log("Receive: ", data);
    // ส่งคำตอบกลับไปในรูปแบบ JSON
    return Response.json({ message: data.message });
}