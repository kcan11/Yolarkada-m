const API_KEY = process.env.OPENAI_API_KEY;

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    if (!API_KEY) {
        return { 
            statusCode: 500, 
            body: JSON.stringify({ error: "OPENAI_API_KEY is not defined" }) 
        };
    }

    try {
        const body = JSON.parse(event.body);
        const userMessage = body.message;

        if (!userMessage || userMessage.trim() === "") {
            return { statusCode: 400, body: JSON.stringify({ error: "Message is required" }) };
        }

        const systemPrompt = `Sen kullanıcının kişisel gelişim "Yol Arkadaşı"sın.
Lütfen Türkçe cevap ver. Kısa, net ve motive edici ol.
Aşırı uzun yazma. Eğer bir sorun çözüyorsan maddelerle 3 adımlık mini bir aksiyon planı ver.
Kullanıcının dilinden anla, samimi ama saygılı ol.`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userMessage }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`OpenAI API error: ${response.status} ${errBody}`);
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reply: aiMessage })
        };

    } catch (error) {
        console.error("Function error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};
exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({ mesaj: "çalışıyor" })
  };
};