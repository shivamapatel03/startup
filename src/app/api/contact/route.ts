import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const formattedMessage = `🚀 New Lead from BE UNIC!\n\n👤 Name: ${name}\n📧 Email: ${email}\n🛠 Service: ${service || "General"}\n💬 Message:\n${message}\n\n⏰ Sent: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`;

    // 1. Forward to Formspree Server-Side (Primary notification to beunicmark@gmail.com -> triggers instant mobile push)
    const formspreeEndpoint =
      process.env.FORMSPREE_URL ||
      process.env.NEXT_PUBLIC_FORMSPREE_URL ||
      "https://formspree.io/f/mblkbpgr";

    let forwardedSuccessfully = false;

    try {
      const formspreeRes = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          message,
          _subject: `New Lead: ${name} (${service || "Studio"})`,
        }),
      });

      if (formspreeRes.ok) {
        forwardedSuccessfully = true;
      } else {
        const errorText = await formspreeRes.text().catch(() => "");
        console.error("Formspree forward returned status:", formspreeRes.status, errorText);
      }
    } catch (err) {
      console.error("Formspree forward error:", err);
    }

    // 2. Direct Mobile Notification via Telegram Bot (Instant, Free, 100% Hidden on Server)
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramBotToken && telegramChatId) {
      try {
        await fetch(
          `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: formattedMessage,
            }),
          }
        );
      } catch (err) {
        console.error("Telegram notify error:", err);
      }
    }

    // 3. Direct Mobile Notification to WhatsApp via CallMeBot (Free Gateway to +91 87994 29307)
    // Server-side only: Phone number is NEVER visible to client or inspect mode
    const callMeBotApiKey = process.env.CALLMEBOT_API_KEY;
    const targetPhone = process.env.NOTIFY_PHONE || "918799429307";

    if (callMeBotApiKey) {
      try {
        const textEncoded = encodeURIComponent(formattedMessage);
        await fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${targetPhone}&text=${textEncoded}&apikey=${callMeBotApiKey}`
        );
      } catch (err) {
        console.error("CallMeBot WhatsApp notify error:", err);
      }
    }

    return NextResponse.json({ success: true, forwarded: forwardedSuccessfully });
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please email directly." },
      { status: 500 }
    );
  }
}
