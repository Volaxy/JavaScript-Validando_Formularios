export default function isOfLegalAge(field) {
    const birthdate = new Date(field.value);
    
    if(!validateAge(birthdate)) {
        field.setCustomValidity("O usuário não é maior de idade");
    }
}

function validateAge(birthdate) {
    const today = new Date();
    const todayMore18 = new Date(birthdate.getUTCFullYear() + 18, birthdate.getUTCMonth(), birthdate.getUTCDate());

    return today >= todayMore18;
}