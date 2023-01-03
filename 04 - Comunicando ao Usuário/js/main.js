import isCpf from "./validateCpf.js";
import isOfLegalAge from "./validateAge.js";

const $formFields = document.querySelectorAll("[required]");
const $form = document.querySelector("[data-formulario]");

$form.addEventListener("submit", (event) => {
    event.preventDefault();

    const responseList = {
        "nome": event.target.elements["nome"].value,
        "email": event.target.elements["email"].value,
        "rg": event.target.elements["rg"].value,
        "cpf": event.target.elements["cpf"].value,
        "aniversario": event.target.elements["aniversario"].value,
    };

    localStorage.setItem("cadastro", JSON.stringify(responseList));

    window.location.href = "./abrir-conta-form-2.html";
});

$formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
    field.addEventListener("invalid", event => event.preventDefault());
});

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },

    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },

    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },

    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },

    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },

    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verifyField(field) {
    let message = "";
    field.setCustomValidity("");

    if(field.name == "cpf" && field.value.length >= 11) {
        isCpf(field);
    }

    if(field.name == "aniversario" && field.value != "") {
        isOfLegalAge(field);
    }

    errorTypes.forEach(error => {
        if(field.validity[error]) {
            message = mensagens[field.name][error];

            console.log(message);
        }
    });

    const messageError = field.parentNode.querySelector(".mensagem-erro");
    const inputValidator = field.checkValidity();

    if(!inputValidator) {
        messageError.textContent = message;
    } else {
        messageError.textContent = "";
    }
}