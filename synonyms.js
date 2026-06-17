/**
 * نظام المعالجة اللغوية الشامل (Rooting System)
 * هذا الملف يقوم بتحويل أي كلمة عربية إلى جذرها الأساسي
 * ليتمكن البوت من فهم اللهجات والاشتقاقات تلقائياً
 */

function getRoot(word) {
    if (!word) return "";
    
    // 1. التنظيف الأساسي: تحويل الهمزات والتاء المربوطة
    let root = word.toLowerCase()
        .replace(/[أإآ]/g, 'ا')
        .replace(/[ة]/g, 'ه')
        .replace(/[ى]/g, 'ي')
        .replace(/[ؤ]/g, 'و')
        .replace(/[ئ]/g, 'ي');

    // 2. إزالة حروف الزيادة (السوابق - Prefix)
    // تشمل: التعريف (ال)، حروف الجر (و، ف، ب، ل، ك)
    root = root.replace(/^(ال|و|ف|ب|ل|ك|س)/, '');

    // 3. إزالة حروف الزيادة (اللواحق - Suffix)
    // تشمل: ضمائر الملكية، الجمع، ونهايات الأفعال
    root = root.replace(/(ات|ون|ين|ان|كم|هم|ها|نا|ني|ه|ي|ت|وا)$/, '');

    // 4. معالجة الحالات الخاصة للأفعال (اختياري: تحويل صيغة المضارع للماضي)
    // مثال: "يذهب" -> "ذهب"
    if (root.startsWith('ي') || root.startsWith('ت') || root.startsWith('ن')) {
        root = root.substring(1);
    }

    return root.trim();
}

/**
 * دالة المطابقة الذكية
 * تستخدم في البوت لمقارنة مدخل المستخدم مع أوامر السيرفر
 */
function isMatch(userInput, commandText) {
    const inputRoot = getRoot(userInput);
    const commandRoot = getRoot(commandText);
    
    // إذا كان الجذر يتطابق بنسبة كبيرة
    return inputRoot.includes(commandRoot) || commandRoot.includes(inputRoot);
}
