function validate(event) {
    
    const cardNumberPart1 = document.forms["form"]["card-number-part-1"];
    const cardNumberPart2 = document.forms["form"]["card-number-part-2"];
    const cardNumberPart3 = document.forms["form"]["card-number-part-3"];
    const cardNumberPart4 = document.forms["form"]["card-number-part-4"];
    const cardCvv = document.forms["form"]["card-cvv"];
    const cardHolder = document.forms["form"]["card-holder"];

    var errors = false;

    // check inputs

    if (/^\d{4}$/.test(cardNumberPart1.value)) {
        cardNumberPart1.style.cssText = "";
    } else {
        cardNumberPart1.style.cssText = "border: 1px solid red;";
        errors = true;
    }
    if (/^\d{4}$/.test(cardNumberPart2.value)) {
        cardNumberPart2.style.cssText = "";
    } else {
        cardNumberPart2.style.cssText = "border: 1px solid red;";
        errors = true;
    }
    if (/^\d{4}$/.test(cardNumberPart3.value)) {
        cardNumberPart3.style.cssText = "";
    } else {
        cardNumberPart3.style.cssText = "border: 1px solid red;";
        errors = true;
    }
    if (/^\d{4}$/.test(cardNumberPart4.value)) {
        cardNumberPart4.style.cssText = "";
    } else {
        cardNumberPart4.style.cssText = "border: 1px solid red;";
        errors = true;
    }
    if (/^\d{3}$/.test(cardCvv.value)) {
        cardCvv.style.cssText = "";
    } else {
        cardCvv.style.cssText = "border: 1px solid red;";
        errors = true;
    }
    if (/[a-z\s]{4,}/.test(cardHolder.value)) {
        cardHolder.style.cssText = "";
    } else {
        cardHolder.style.cssText = "border: 1px solid red;";
        errors = true;
    }

    // validate = send

    if (errors == true) {
        event.preventDefault();
        return false;
    } else {
        return true;
    }
}