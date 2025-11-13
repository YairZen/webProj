document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');
    let isAdmin = true;

    const arithmeticChallengeSpan = document.getElementById('captcha-challenge');
    const arithmeticAnswerInput = document.getElementById('captcha-answer');
    const refreshArithmeticCaptchaButton = document.getElementById('refresh-captcha');
    const arithmeticError = document.getElementById('arithmetic-error');
    const captchaAttemptsError = document.getElementById('captcha-attempts-error');
    let arithmeticNum1, arithmeticNum2, arithmeticExpectedAnswer;
    let incorrectAttempts = 0;
    const maxIncorrectAttempts = 3;

    function generateArithmeticCaptcha() {
        //הגרלת 2 מספרים רנדומלים מ- 1 עד 10
        arithmeticNum1 = Math.floor(Math.random() * 10) + 1;
        arithmeticNum2 = Math.floor(Math.random() * 10) + 1;
        /* אתחול אופרטור חישובי ע”י הגרלת מספר בין 1 ל- 0 ולפי בחירת חיבור 
    או חיסור */
        const operation = Math.random() < 0.5 ? '+' : '-';
        //חישוב התוצאה עבור חיבור
        if (operation === '+') {
            arithmeticExpectedAnswer = arithmeticNum1 + arithmeticNum2;
            //הצגת חישוב אריתמטי עם חיבור
            arithmeticChallengeSpan.textContent = `${arithmeticNum1} + 
${arithmeticNum2} = ?`;
        }
        //חישוב התוצאה עבור חיבור
        else {
            arithmeticExpectedAnswer = arithmeticNum1 - arithmeticNum2;
            //הצגת חישוב אריתמטי עם חיסור
            arithmeticChallengeSpan.textContent = `${arithmeticNum1} - ${arithmeticNum2} = ?`;
        }
        //ניקוי שדה התשובה והסתרת הודעת השגיאה
        arithmeticAnswerInput.value = '';
        arithmeticError.classList.add('hidden');
    }

});
