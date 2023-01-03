export default function isOfLegalAge(field) {
    const birthdate = new Date(field.value);
    validateAge(birthdate);

    console.log(validateAge(birthdate));
}

function validateAge(birthdate) {
    const today = new Date();
    const todayMore18 = new Date(birthdate.getUTCFullYear() + 18, birthdate.getUTCMonth(), birthdate.getUTCDate());

    return today >= todayMore18;
}