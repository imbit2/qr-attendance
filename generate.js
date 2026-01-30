import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");

generateBtn.addEventListener("click", async () => {
    qrContainer.innerHTML = "";

    let amount = Number(document.getElementById("amount").value);

    for (let i = 1; i <= amount; i++) {
        let id = "PTC" + String(i).padStart(4, "0");

        // Store ID in Firebase
        await addDoc(collection(db, "students"), {
            studentId: id
        });

        // Create QR
        let div = document.createElement("div");
        new QRCode(div, id);
        qrContainer.appendChild(div);
    }

    alert("QR Codes Generated & Saved!");
});
