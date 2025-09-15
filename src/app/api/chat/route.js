export async function POST(request) {
    // ส่งคำตอบกลับไปในรูปแบบ JSON
    return Response.json({ message: "Hello from the Backend!" });
}