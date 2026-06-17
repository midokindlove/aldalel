function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replaceAll("أ", "ا")
        .replaceAll("إ", "ا")
        .replaceAll("آ", "ا")
        .replaceAll("ة", "ه")
        .replaceAll("ى", "ي");

}

function processQuestion(question) {

    const q = normalizeText(question);

    const introResult = searchIntros(q);

    if (introResult.length > 0) {

        renderIntroResults(introResult);

        return;

    }

    const categoryResult = searchCategories(q);

    if (categoryResult) {

        renderCategoryResult(categoryResult);

        return;

    }

    addBotMessage(`
        <div class="result-card">

            <div class="result-title">
                لم يتم العثور على نتائج
            </div>

            حاول كتابة:

            <br><br>

            فاكشن
            <br>
            سيارة
            <br>
            بيت
            <br>
            DM

        </div>
    `);

}

function searchIntros(query) {

    return intros.filter(item => {

        if (
            normalizeText(item.name).includes(query)
        ) {
            return true;
        }

        return item.keywords.some(keyword =>
            normalizeText(keyword).includes(query)
        );

    });

}

function searchCategories(query) {

    const categoryMap = {

        "فاكشن": [
            "فاكشن",
            "فكشن",
            "فاكشنات",
            "الفاكشن",
            "فصائل"
        ],

        "سيارة": [
            "سياره",
            "سيارات",
            "مركبه",
            "مركبات",
            "سياره"
        ],

        "مراقبة": [
            "مراقبه",
            "متابعه",
            "مشاهده لاعب",
            "سبك",
            "spec"
        ],

        "قوانين": [
            "قانون",
            "قوانين",
            "rules"
        ],

        "انترو": [
            "انترو",
            "بيت",
            "منزل",
            "قصر",
            "فيلا",
            "محل"
        ]

    };

    for (const category in categoryMap) {

        const words = categoryMap[category];

        const found = words.find(word =>
            query.includes(normalizeText(word))
        );

        if (found) {

            return category;

        }

    }

    return null;

}

function renderCategoryResult(category) {

    addBotMessage(`

        <div class="result-card">

            <div class="result-title">

                ${category}

            </div>

            تم العثور على قسم ${category}

            <br><br>

            سيتم عرض جميع البيانات الخاصة بهذا القسم.

        </div>

    `);

}

function renderIntroResults(results) {

    let galleryHTML = "";

    results.forEach(item => {

        item.images.forEach(image => {

            galleryHTML += `
                <img src="${image}" alt="${item.name}">
            `;

        });

    });

    addBotMessage(`

        <div class="result-card">

            <div class="result-title">

                ${results[0].name}

            </div>

            <div class="gallery">

                ${galleryHTML}

            </div>

        </div>

    `);

}
