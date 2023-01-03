import isCpf from "./validateCpf.js";

const $formFields = document.querySelectorAll("[required]");

$formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
});

function verifyField(field) {
    if(field.name == "cpf" && field.value.length >= 11) {
        isCpf(field);
    }
}