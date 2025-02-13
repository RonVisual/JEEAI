async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div>User: ${userInput}</div>`;

    document.getElementById("user-input").value = ""; 

    const apiKey ="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";
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    chatBox.innerHTML += `<div>AI: ${data.choices[0].message.content}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}