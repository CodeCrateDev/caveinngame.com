const API_ENDPOINT = "https://discord.com/api/webhooks/1401964358896062576/CELT0i-8jK6ZDlKS0Wz5uAvQhqJuE_XATCsgu1saGvSTvnuDms_7F39SHjFOiuauTBcl";

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Message Mule",
            embeds: [{
                title: "New Message!",
                fields: [
                    { name: "Name", value: name.value },
                    { name: "E-Mail", value: email.value },
                    { name: "Message", value: message.value }
                ],
                color: 0x00ffcc // Decimal color
            }]
        })
    })
    .then(res => {
        if (res.ok) {
            console.log("Message sent!");

            name.value = "";
            email.value = "";
            message.value = "";

            alert("Message sent!");
        }
        else
        {
            throw new Error("Failed request");
        }
    })
    .catch(() => {
        alert("Failed to send message, try again later.");
        console.log("Failed resquest.");
    });
});