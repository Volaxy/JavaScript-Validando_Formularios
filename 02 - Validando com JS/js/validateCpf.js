export default function isCpf(field) {
    const cpf = field.value.replace(/\.|-/g, "");

    console.log(validateRepeatedNumbers(cpf));
}

function validateRepeatedNumbers(cpf) {
    const repeatedNumbers = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return repeatedNumbers.includes(cpf);
}