// وظيفة للاشتراك في النشرة الإخبارية
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function (event) {
        if (this.textContent === 'اشترك الآن' || this.textContent.includes('احجز الآن')) {
            event.preventDefault(); // منع الانتقال الفوري
            window.location.href = 'المعلومات الشخصية.html'; // الانتقال إلى صفحة الحجز
        }
    });
});

// وظيفة لإرسال نموذج الحجز
if (document.getElementById('bookingForm')) {
    document.getElementById('bookingForm').addEventListener('submit', function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        alert(`شكرًا لك، ${name}! تم تأكيد حجزك بنجاح.`);
        this.reset();
    });
}

// وظيفة لإرسال نموذج الاتصال
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const phone = document.getElementById('phone').value;

        alert(`شكرًا لك، ${name}! تم إرسال رسالتك بنجاح.`);
        this.reset();
    });
}

// وظيفة لعرض تفاصيل الحزمة المختارة
document.getElementById('packageSelect')?.addEventListener('change', function () {
    const selectedPackage = this.value;
    const packageDetails = document.getElementById('packageDetails');
    const bookButton = document.getElementById('bookButton');

    let details = '';

    switch (selectedPackage) {
        case 'fiveRounds':
            details = `
                <h3>خمس جولات</h3>
                <ul>
                    <li>إقامة كاملة لمدة خمس ليال في جناح فاخر.</li>
                    <li>خمس جولات -18 حفرة.</li>
                    <li>جولة واحدة مضمونة في ملعب "سي فيو" الشهير.</li>
                    <li>جلسة تدريب رقمية مجانية.</li>
                </ul>
            `;
            bookButton.style.display = 'block'; // إظهار زر الحجز
            break;
        case 'tripleRound':
            details = `
                <h3>الجولة الثلاثية</h3>
                <ul>
                    <li>إقامة لمدة ليلتين في غرفة مزدوجة مع وجبة الإفطار.</li>
                    <li>ثلاث جولات -18 حفرة، تشمل خوض جولة واحدة في ملعب "سي فيو" الشهير (إن وجدت).</li>
                    <li>تأجير مجاني للعربات.</li>
                    <li>خصم 2% لمتجر المحترفين.</li>
                </ul>
            `;
            bookButton.style.display = 'block'; // إظهار زر الحجز
            break;
        case 'recreationBreak':
            details = `
                <h3>استراحة استجمام</h3>
                <ul>
                    <li>إقامة لليلة واحدة مع وجبة إفطار كاملة.</li>
                    <li>تناول العشاء في أي من مطاعم المنتجع.</li>
                    <li>الوصول إلى الملاعب (تطبق الرسوم ويستبعد ملعب "سي فيو").</li>
                    <li>تأجير نادي مجاني.</li>
                </ul>
            `;
            bookButton.style.display = 'block'; // إظهار زر الحجز
            break;
        case 'customPackage':
            alert("لترتيب الحزم المخصصة، يرجى الاتصال بنا.");
            window.location.href = 'اتصل بنا.html'; // الانتقال إلى صفحة الاتصال
            return; // إنهاء الوظيفة هنا
        default:
            details = ''; // إذا لم يتم اختيار أي حزمة
            bookButton.style.display = 'none'; // إخفاء زر الحجز
    }

    packageDetails.innerHTML = details; // عرض التفاصيل
});

// وظيفة للاشتراك في الخدمة المختارة
if (document.getElementById('serviceSelect')) {
    document.getElementById('subscribeServiceButton').addEventListener('click', function () {
        const selectedService = document.getElementById('serviceSelect').value;

        if (selectedService) {
            alert(`تم الاشتراك في الخدمة: ${selectedService}`);
        } else {
            alert("يرجى اختيار خدمة للاشتراك.");
        }
    });
}
document.getElementById('playVideo').addEventListener('click', function (event) {
    event.preventDefault(); // منع الانتقال الفوري
    document.getElementById('videoContainer').style.display = 'block'; // إظهار الفيديو
    document.getElementById('videoPlayer').play(); // تشغيل الفيديو
});

document.getElementById('closeVideo').addEventListener('click', function () {
    document.getElementById('videoContainer').style.display = 'none'; // إخفاء الفيديو
    document.getElementById('videoPlayer').pause(); // إيقاف الفيديو
    document.getElementById('videoPlayer').currentTime = 0; // إعادة الفيديو إلى البداية
});

// تحديد الزر
const increaseFontSizeButton = document.getElementById("increaseFontSize");3
const dcreaseFontSizeButton = document.getElementById("dcreaseFontSize");

// تحديد حجم الخط الافتراضي
let currentFontSize = 16; // الحجم الافتراضي للخط

// إضافة حدث عند الضغط على الزر
increaseFontSizeButton.addEventListener("click", function () {
    currentFontSize += 15; // زيادة حجم الخط بمقدار 2px عند كل نقر
    // document.main.style.fontSize = "40px";
    // document.a.style.fontSize = "40px";
    // document.body.style.fontSize = "40px"; // تحديث حجم الخط
    document.querySelector("main").style.fontSize = currentFontSize + "px";

    // Change font size of <p> elements inside <main>
    document.querySelectorAll("main p").forEach(el => {
        el.style.fontSize = currentFontSize + "px";
    });

    // Change font size of <a> elements inside <main>
    document.querySelectorAll("body a").forEach(el => {
        el.style.fontSize = currentFontSize + "px";
    });
});


// إضافة حدث عند الضغط على الزر
dcreaseFontSizeButton.addEventListener("click", function () {

    if(currentFontSize <= 16)
        return;

    currentFontSize -= 15; // زيادة حجم الخط بمقدار 2px عند كل نقر

   
    // document.main.style.fontSize = "40px";
    // document.a.style.fontSize = "40px";
    // document.body.style.fontSize = "40px"; // تحديث حجم الخط
    document.querySelector("main").style.fontSize = currentFontSize + "px";

    // Change font size of <p> elements inside <main>
    document.querySelectorAll("main p").forEach(el => {
        el.style.fontSize = currentFontSize + "px";
    });

    // Change font size of <a> elements inside <main>
    document.querySelectorAll("body a").forEach(el => {
        el.style.fontSize = currentFontSize + "px";
    });
});