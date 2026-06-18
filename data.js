// ============================================
// قاعدة بيانات الموقع - MTA San Andreas
// ============================================

const siteData = {
    // ========== القوانين ==========
    rules: [
        { english: "AR", arabic: "استخدام الرتبة للمصلحة الشخصية (Aim Rank)" },
        { english: "ATA", arabic: "نقل ممتلكات شخصية الى اخرى (alt to alt)" },
        { english: "Arson", arabic: "التسبب في حريق" },
        { english: "AGC", arabic: "استخدام القلتشات (Abusing Game/Script)" },
        { english: "SK", arabic: "قتل عند الرسبون او المستشفى (Spawn Killing)" },
        { english: "SC", arabic: "استخدام اسم شخصية مشهورة" },
        { english: "SL", arabic: "حياة مقززة" },
        { english: "SP", arabic: "النصب باكثر من 10 الاف" },
        { english: "SE", arabic: "تخريب التوظيف" },
        { english: "CK", arabic: "موت شخصية او اعدام" },
        { english: "CR", arabic: "الجري بدوران واطلاق نار (Chicken Run)" },
        { english: "CTV", arabic: "لغة التهكير والبرمجة" },
        { english: "CD", arabic: "تطوير الشخصية (Character Development)" },
        { english: "DM", arabic: "القتل بدون سبب مقنع (Deathmatching)" },
        { english: "DP", arabic: "دعس شخص بدون اربي" },
        { english: "DB", arabic: "تصدم السيارات ودعس الاشخاص (Drive By)" },
        { english: "DDP", arabic: "القتل وانت تسوق" },
        { english: "DUC", arabic: "تدمير شخصية (الانتحار)" },
        { english: "Dos", arabic: "ديوتي بدون شارة" },
        { english: "RR", arabic: "الجري دون تعب (Run Run)" },
        { english: "RK", arabic: "قتل الانتقام (Revenge Kill)" },
        { english: "RTR", arabic: "الجري دون تعب" },
        { english: "RPZ", arabic: "منطقة العيش في السيرفر (Role Play zone)" },
        { english: "RDM", arabic: "قتل نفس الشخص بدون توقف" },
        { english: "RPG", arabic: "اخذ اربي جي من امر السلاح وعليه وارن" },
        { english: "MG", arabic: "اختلاط الشات او المعلومات (Meta Gaming)" },
        { english: "MC", arabic: "اطلاق نار بالغلط او عمل شيء خطا" },
        { english: "MD", arabic: "سوء استخدام الكلبشات" },
        { english: "MA", arabic: "تعدد الحسابات (Multiple Accounts)" },
        { english: "LTA", arabic: "الهروب من الاربي" },
        { english: "Low-RP", arabic: "استخدام اربي ضعيف" },
        { english: "LK", arabic: "تحتاج اذن لاطلاق نار في مكان عام" },
        { english: "PG", arabic: "تكون خارق الطبيعة (Power Gaming)" },
        { english: "PK", arabic: "فقدان الذاكرة بعد الموت" },
        { english: "PD", arabic: "استفزاز الشرطة بغرض المتعة" },
        { english: "BH", arabic: "الجري وانت تقفز (Bonny Hopping)" },
        { english: "BR", arabic: "يجب القتل داخل الاربي فقط" },
        { english: "BRAWLS", arabic: "القتل بدون اربي" },
        { english: "KOS", arabic: "الحقد على لاعب او اسناد لاعب" },
        { english: "GR", arabic: "احترام الناس (القاعدة الذهبية)" },
        { english: "NG", arabic: "سرقة سيارة شخص دون اربي" },
        { english: "NK", arabic: "تضرب شخص بيدك او بسلاح ابيض وانت تجري (Ninja Kicking)" },
        { english: "NJ", arabic: "تنزل شخص من سيارته وتهرب (Ninja Jacking)" },
        { english: "NONRP", arabic: "فعل اشياء بدون اربي" },
        { english: "TK", arabic: "تقتل شخص من الفاكشن اللي انت فيه" },
        { english: "VDM", arabic: "استخدام سيارة ودعس الاشخاص" },
        { english: "WH", arabic: "تركب موتسيكل وتقفز فوق الجبال والبيوت" },
        { english: "UH", arabic: "فعل العادات المضرة (التدخين او تدمير الحياة الشخصية)" }
    ],

    // ========== الأقسام ==========
    categories: [
        { id: 1, name: "فاكشن", icon: "🏢" },
        { id: 2, name: "بوابة", icon: "🚪" },
        { id: 3, name: "انترو", icon: "🏠" },
        { id: 4, name: "شوب", icon: "🏪" },
        { id: 5, name: "سهم", icon: "📍" },
        { id: 6, name: "حاجز", icon: "🚧" },
        { id: 7, name: "صرافة", icon: "🏦" },
        { id: 8, name: "ماركر", icon: "📌" },
        { id: 9, name: "قوانين", icon: "📜" },
        { id: 10, name: "رافعة", icon: "🔧" },
        { id: 11, name: "سيارة", icon: "🚗" },
        { id: 12, name: "رسبون", icon: "🔄" },
        { id: 13, name: "تخفي", icon: "👻" },
        { id: 14, name: "اغراض", icon: "📦" },
        { id: 15, name: "مراقبة", icon: "👁️" },
        { id: 16, name: "بيانات", icon: "💾" },
        { id: 17, name: "طقس", icon: "🌤️" },
        { id: 18, name: "شات", icon: "💬" },
        { id: 19, name: "سلاح", icon: "🔫" },
        { id: 20, name: "اعطاء", icon: "🎁" },
        { id: 21, name: "معلومات", icon: "ℹ️" },
        { id: 22, name: "اساسية", icon: "⭐" },
        { id: 23, name: "ريبورت", icon: "📋" },
        { id: 24, name: "عقاب", icon: "⛓️" },
        { id: 25, name: "عامة", icon: "🌐" },
        { id: 26, name: "ليدر", icon: "👑" },
        { id: 27, name: "راديو", icon: "📻" },
        { id: 28, name: "اسعاف", icon: "🚑" },
        { id: 29, name: "جندي", icon: "🎖️" },
        { id: 30, name: "صحافة", icon: "📰" },
        { id: 31, name: "محكمة", icon: "⚖️" },
        { id: 32, name: "مطار", icon: "✈️" },
        { id: 33, name: "صيانة", icon: "🔩" },
        { id: 34, name: "انتقال", icon: "🌀" },
        { id: 35, name: "مود", icon: "🎮" },
        { id: 36, name: "سحب", icon: "🔄" },
        { id: 37, name: "ارسال", icon: "📤" },
        { id: 38, name: "ريستارت", icon: "🔁" }
    ],

    // ========== الأوامر ==========
    commands: [
        // ===== فاكشن (Factions) =====
        { category: "فاكشن", command: "Showfactions", meaning: "رؤية قائمة الفاكشنات" },
        { category: "فاكشن", command: "delfaction", meaning: "حذف فاكشن" },
        { category: "فاكشن", command: "Dutyadmin", meaning: "تصليح ديوتي فاكشنات" },
        { category: "فاكشن", command: "makefaction", meaning: "صنع فاكشن جديد" },
        { category: "فاكشن", command: "renamefaction", meaning: "تغيير اسم الفاكشن" },
        { category: "فاكشن", command: "respawnfaction", meaning: "رسبنة سيارات فاكشن معين" },
        { category: "فاكشن", command: "rf", meaning: "صنع او حذف راديو لفاكشن" },
        { category: "فاكشن", command: "srd", meaning: "ايقاف جميع اجهزة الراديو في المنطقة" },
        { category: "فاكشن", command: "Setintfaction", meaning: "وضع بيت في فاكشن" },
        { category: "فاكشن", command: "setvehfaction", meaning: "وضع سيارة في فاكشن" },
        { category: "فاكشن", command: "setfactionrank", meaning: "رفع رتبة لاعب في فاكشن (بدون دخول)" },
        { category: "فاكشن", command: "setfaction", meaning: "دخول فاكشن على شكل لاعب" },
        { category: "فاكشن", command: "setfactionleader", meaning: "دخول فاكشن على شكل ليدر" },

        // ===== بوابة (Gates) =====
        { category: "بوابة", command: "Nearbygates", meaning: "معرفة ايدي الباب" },
        { category: "بوابة", command: "Delgate", meaning: "محو/حذف الباب" },
        { category: "بوابة", command: "gates", meaning: "فتح لوحة الابواب" },
        { category: "بوابة", command: "gotogate", meaning: "الانتقال لبوابة معينة" },
        { category: "بوابة", command: "makegeneric", meaning: "صناعة الاسوار والاغراض" },

        // ===== انترو (Interiors) =====
        { category: "انترو", command: "ints / interiors", meaning: "رؤية البيوت الموجودة" },
        { category: "انترو", command: "setintentrance", meaning: "نقل سهم او بيت" },
        { category: "انترو", command: "addint", meaning: "صنع انترو (Id - الاسم - سعر - نوع)" },
        { category: "انترو", command: "Delint", meaning: "حذف انترو" },
        { category: "انترو", command: "Restoreint", meaning: "استرجاع انترو" },
        { category: "انترو", command: "Nearbyints", meaning: "معرفة ايدي البيت" },
        { category: "انترو", command: "togint", meaning: "غلق البيت" },
        { category: "انترو", command: "Enableallinterios", meaning: "جعل جميع البيوت مغلقة" },
        { category: "انترو", command: "Setintname", meaning: "تغيير اسم البيت" },
        { category: "انترو", command: "getintprice", meaning: "معرفة سعر البيت" },
        { category: "انترو", command: "Setintprice", meaning: "تغيير سعر البيت" },
        { category: "انترو", command: "Getinttype", meaning: "معرفة نوع البيت" },
        { category: "انترو", command: "Setinttype", meaning: "تغيير نوع البيت" },
        { category: "انترو", command: "Setintid", meaning: "تغيير شكل البيت" },
        { category: "انترو", command: "Getintid", meaning: "معرفة ايدي شكل البيت من الداخل" },
        { category: "انترو", command: "restoreint", meaning: "استرجاع الداخلية اذا حذفت" },
        { category: "انترو", command: "reloadint", meaning: "عمل ريستارت للداخلية" },
        { category: "انترو", command: "setint / setinterior", meaning: "تغيير الداخلية" },
        { category: "انترو", command: "removeint [ID]", meaning: "حذف الداخلية نهائيا" },
        { category: "انترو", command: "sellproperty", meaning: "بيع منزلك للسيرفر" },
        { category: "انترو", command: "addatm", meaning: "صنع مصرفة (صرافة)" },
        { category: "انترو", command: "delatm [id]", meaning: "حذف مصرفة" },
        { category: "انترو", command: "Getkey / changelock", meaning: "عمل نسخة مفتاح" },

        // ===== شوب (Shops) =====
        { category: "شوب", command: "Makeshop", meaning: "صنع شوب" },
        { category: "شوب", command: "Delshop", meaning: "حذف شوب" },
        { category: "شوب", command: "Nearbyshops", meaning: "معرفة ايدي الشوب" },
        { category: "شوب", command: "renameshop", meaning: "تغيير اسم الشوب" },
        { category: "شوب", command: "Delnearbyshops", meaning: "حذف البائع الذي بجانبك" },
        { category: "شوب", command: "removeshop", meaning: "حذف شوب نهائيا" },
        { category: "شوب", command: "Reloadshop", meaning: "عمل ريستارت لشوب معين" },
        { category: "شوب", command: "Moveshop", meaning: "نقل بائع" },
        { category: "شوب", command: "makefuel", meaning: "صنع بائع بنزين" },
        { category: "شوب", command: "Nearbyfuels", meaning: "معرفة ايدي بائع البنزين" },
        { category: "شوب", command: "Delfuel", meaning: "حذف بائع البنزين" },
        { category: "شوب", command: "Deldancer", meaning: "حذف بائع يرقص" },

        // ===== سهم (Markers) =====
        { category: "سهم", command: "Adde", meaning: "صنع سهم" },
        { category: "سهم", command: "Dele", meaning: "حذف السهم" },
        { category: "سهم", command: "Fixnearbye", meaning: "اصلاح او استرجاع السهم" },
        { category: "سهم", command: "nearbye", meaning: "معرفة ايدي السهم" },

        // ===== حاجز (Barriers) =====
        { category: "حاجز", command: "Rbs", meaning: "وضع حاجز" },
        { category: "حاجز", command: "Delrb", meaning: "مسح الحاجز" },
        { category: "حاجز", command: "delallrbs", meaning: "حذف جميع الحواجز" },
        { category: "حاجز", command: "Nearbyrbs", meaning: "معرفة ايدي الحاجز" },

        // ===== صرافة (ATM) =====
        { category: "صرافة", command: "addatm", meaning: "صنع مصرفة" },
        { category: "صرافة", command: "delatm [id]", meaning: "حذف مصرفة" },

        // ===== ماركر (Marker) =====
        { category: "ماركر", command: "mark", meaning: "صنع ماركر" },
        { category: "ماركر", command: "delmark", meaning: "حذف ماركر" },

        // ===== رافعة (Ramps) =====
        { category: "رافعة", command: "Addramp", meaning: "صنع رامب" },
        { category: "رافعة", command: "Delramp", meaning: "حذف رامب" },
        { category: "رافعة", command: "togglee", meaning: "تمكين او تعطيل رامب" },
        { category: "رافعة", command: "nearbyramps", meaning: "معرفة ايدي رامب" },

        // ===== سيارة (Vehicles) =====
        { category: "سيارة", command: "respawnall", meaning: "رسبنة جميع السيارات" },
        { category: "سيارة", command: "Aunimpound", meaning: "ازالة السيارات من الحجز" },
        { category: "سيارة", command: "Editveh", meaning: "تعديل على السيارات" },
        { category: "سيارة", command: "Fixvehs", meaning: "تصليح جميع السيارات" },
        { category: "سيارة", command: "Restartvehall", meaning: "ريستارت لجميع السيارات" },
        { category: "سيارة", command: "delnearbyvehs", meaning: "معرفة السيارات المحذوفة" },
        { category: "سيارة", command: "Delthisveh", meaning: "حذف مركبة مؤقتا" },
        { category: "سيارة", command: "delveh [id]", meaning: "حذف سيارة (تكتب مرتين)" },
        { category: "سيارة", command: "removeveh", meaning: "حذف السيارة نهائيا من الخادم" },
        { category: "سيارة", command: "restoreveh", meaning: "استرجاع سيارة محذوفة" },
        { category: "سيارة", command: "apark", meaning: "بارك لسيارة دون ركوبها" },
        { category: "سيارة", command: "settrackingloc", meaning: "جهاز التتبع في السيارة" },
        { category: "سيارة", command: "setvehfaction", meaning: "جعل سيارة في فاكشن" },
        { category: "سيارة", command: "Setvehplate", meaning: "تغيير لوحة السيارة" },
        { category: "سيارة", command: "delupgrade", meaning: "ازالة جميع اضافات السيارة" },
        { category: "سيارة", command: "blowveh", meaning: "تفجير سيارة (مع ايدي الراكب)" },
        { category: "سيارة", command: "Nearbyvehicles", meaning: "ايدهات السيارات حولك" },
        { category: "سيارة", command: "Getkey", meaning: "عمل نسخة من مفتاح السيارة" },
        { category: "سيارة", command: "changelock", meaning: "تصفير المفاتيح" },
        { category: "سيارة", command: "setvehtint", meaning: "اضافة او ازالة لون السيارة" },
        { category: "سيارة", command: "makecivveh", meaning: "صنع سيارة تكسي/باص/ديلفري" },
        { category: "سيارة", command: "veh", meaning: "صنع سيارة مؤقتة" },
        { category: "سيارة", command: "getcolor", meaning: "معرفة الوان سيارة معينة" },
        { category: "سيارة", command: "addupgrade", meaning: "ترقية سيارة لاعب" },
        { category: "سيارة", command: "setdamageproof", meaning: "جعل السيارة مضادة للضرر" },
        { category: "سيارة", command: "setcolor", meaning: "تعديل الوان السيارة" },
        { category: "سيارة", command: "setcarhp", meaning: "تعديل صحة السيارة" },
        { category: "سيارة", command: "getvehweight", meaning: "معرفة مواصفات السيارة" },
        { category: "سيارة", command: "Vehlib", meaning: "معلومات معرض السيارات" },
        { category: "سيارة", command: "srd", meaning: "قفل جميع راديو السيارات حولك" },
        { category: "سيارة", command: "setvol", meaning: "رفع او خفض صوت راديو السيارة" },
        { category: "سيارة", command: "Makeveh a a id 0 1 1", meaning: "صنع سيارة" },
        { category: "سيارة", command: "makepaynspray", meaning: "صنع مكان تصليح سيارات" },

        // ===== رسبون (Respawn) =====
        { category: "رسبون", command: "respawnall", meaning: "رسبنة جميع السيارات" },
        { category: "رسبون", command: "respawndistrict", meaning: "رسبون سيارات المنطقة حولك" },
        { category: "رسبون", command: "Respawnciv", meaning: "رسبنة سيارات الوظائف" },
        { category: "رسبون", command: "respawntrucks", meaning: "رسبنة جميع الشاحنات" },
        { category: "رسبون", command: "restartcarshops", meaning: "رسبنة معرض السيارات" },
        { category: "رسبون", command: "respawnveh", meaning: "رسبنة سيارة" },
        { category: "رسبون", command: "respawnfaction", meaning: "رسبنة سيارات فاكشن معين" },
        { category: "رسبون", command: "apark", meaning: "بارك لمركبة دون ركوب" },

        // ===== تخفي (Stealth) =====
        { category: "تخفي", command: "hideadmin", meaning: "تشغيل شارة بدون ظهور" },
        { category: "تخفي", command: "Disappear", meaning: "اخفاء نفسك" },
        { category: "تخفي", command: "Supervise", meaning: "اختفاء جزئي" },
        { category: "تخفي", command: "freecam", meaning: "تخفي واختراق جدران" },
        { category: "تخفي", command: "Fakeme", meaning: "ظهور باسم فيك" },

        // ===== اغراض (Items) =====
        { category: "اغراض", command: "giveitem", meaning: "اخذ غرض معين" },
        { category: "اغراض", command: "delitem", meaning: "حذف غرض معين" },
        { category: "اغراض", command: "moveitem", meaning: "نقل غرض معين" },
        { category: "اغراض", command: "delnearbyitems", meaning: "حذف جميع الاغراض حولك" },
        { category: "اغراض", command: "items / itemlist", meaning: "فتح قائمة الغش" },

        // ===== مراقبة (Monitoring) =====
        { category: "مراقبة", command: "watch", meaning: "مراقبة شخص وانت تتحرك" },
        { category: "مراقبة", command: "recon", meaning: "مراقبة شخص" },
        { category: "مراقبة", command: "showinv", meaning: "رؤية اغراض الشخص" },
        { category: "مراقبة", command: "Bigears", meaning: "رؤية شات الخاص للناس" },
        { category: "مراقبة", command: "bigearsf", meaning: "مراقبة شات الفاكشنات" },

        // ===== طقس (Weather) =====
        { category: "طقس", command: "srl", meaning: "معرفة مستوى المطر" },
        { category: "طقس", command: "Sw 1", meaning: "تغيير الطقس" },

        // ===== شات (Chat) =====
        { category: "شات", command: "ho", meaning: "رسالة في الشات بدون ظهور اسمك" },
        { category: "شات", command: "g", meaning: "شات السبورت" },
        { category: "شات", command: "a", meaning: "شات الادمن" },
        { category: "شات", command: "st", meaning: "شات الاستف" },
        { category: "شات", command: "ua", meaning: "شات المسؤولين" },
        { category: "شات", command: "togooc", meaning: "فتح او قفل شات العام" },
        { category: "شات", command: "occ", meaning: "كتابة في شات العام" },
        { category: "شات", command: "w", meaning: "تهمس لشخص" },
        { category: "شات", command: "s", meaning: "انتبه لي" },
        { category: "شات", command: "district", meaning: "تنبيه اطلاق نار" },
        { category: "شات", command: "Clearchat", meaning: "مسح الشات" },
        { category: "شات", command: "Showhud", meaning: "اخفاء محتويات الشاشة" },
        { category: "شات", command: "showchat", meaning: "اخفاء الشات" },
        { category: "شات", command: "togglef", meaning: "قفل شات الوظيفة" },
        { category: "شات", command: "f", meaning: "شات الوظيفة" },
        { category: "شات", command: "fl", meaning: "شات الليدرات" },
        { category: "شات", command: "hq", meaning: "شات عام الوظيفة" },
        { category: "شات", command: "m", meaning: "التحدث في الميكرفون" },
        { category: "شات", command: "pm", meaning: "ترسل لشخص في الخاص" },
        { category: "شات", command: "bind 1 chatbox", meaning: "شات بوكس" },

        // ===== سلاح (Weapons) =====
        { category: "سلاح", command: "Makegun", meaning: "صنع سلاح" },
        { category: "سلاح", command: "Makeammo", meaning: "صنع رصاص" },
        { category: "سلاح", command: "gunlist / gunchart", meaning: "معرفة معلومات عن السلاح" },
        { category: "سلاح", command: "gunmaker", meaning: "فتح لوحة الاسلحة" },
        { category: "سلاح", command: "Disarm", meaning: "حذف جميع اسلحة لاعب معين" },
        { category: "سلاح", command: "delitemsfromint", meaning: "حذف سلاح من منزل" },

        // ===== اعطاء (Giving) =====
        { category: "اعطاء", command: "givesuperman", meaning: "اعطاء طيران" },
        { category: "اعطاء", command: "setmoney", meaning: "اعطاء اموال مرة واحدة" },
        { category: "اعطاء", command: "givemoney", meaning: "اعطاء مال (كم تبي)" },
        { category: "اعطاء", command: "Givegc", meaning: "اعطاء جي سي" },
        { category: "اعطاء", command: "Forcepayday", meaning: "تزويد ساعات" },
        { category: "اعطاء", command: "Forcepaydayall", meaning: "اعطاء يوم جديد لجميع اللاعبين" },
        { category: "اعطاء", command: "forcepayday", meaning: "اعطاء يوم جديد للاعب معين" },
        { category: "اعطاء", command: "setskin", meaning: "اعطاء شخصية" },
        { category: "اعطاء", command: "Setrace", meaning: "تغيير بشرة اللاعب" },
        { category: "اعطاء", command: "agivelicense", meaning: "اعطاء لاعب رخصة" },
        { category: "اعطاء", command: "atakelicense", meaning: "الغاء رخصة" },
        { category: "اعطاء", command: "setjob id 5", meaning: "اعطاء رخصة ميكانيكي" },
        { category: "اعطاء", command: "Setjob", meaning: "اعطاء لاعب وظيفة" },
        { category: "اعطاء", command: "deljob", meaning: "حذف وظيفة لاعب" },
        { category: "اعطاء", command: "Revive", meaning: "انعاش شخص" },
        { category: "اعطاء", command: "sethp", meaning: "قتل لاعب" },
        { category: "اعطاء", command: "Setarmor", meaning: "اعطاء درع لشخص بنسبة" },
        { category: "اعطاء", command: "dellanguage", meaning: "حذف لغة من شخص" },
        { category: "اعطاء", command: "setlanguage / setlang", meaning: "اعطاء لغة لشخص" },

        // ===== معلومات (Info) =====
        { category: "معلومات", command: "setage", meaning: "تغيير عمر لاعب" },
        { category: "معلومات", command: "setdob", meaning: "تغيير ميلاد لاعب" },
        { category: "معلومات", command: "setgender", meaning: "تغيير جنس لاعب (ولد/بنت)" },
        { category: "معلومات", command: "setheight", meaning: "تغيير وزن لاعب" },
        { category: "معلومات", command: "changename", meaning: "تغيير اسم لاعب" },

        // ===== اساسية (Basic) =====
        { category: "اساسية", command: "givesuperman", meaning: "اعطاء طيران" },
        { category: "اساسية", command: "Gotoplace", meaning: "الانتقال الى مكان (igs/bank/ls/lv/sf/ash/dmv/1str/sfpd/cityhall)" },
        { category: "اساسية", command: "Places", meaning: "معرفة اسم المكان" },
        { category: "اساسية", command: "Goto", meaning: "الانتقال الى شخص" },
        { category: "اساسية", command: "Gethere", meaning: "سحب شخص" },
        { category: "اساسية", command: "Sendto", meaning: "ارسال شخص لشخص" },
        { category: "اساسية", command: "Sendtoveh", meaning: "ارسال شخص لسيارة" },
        { category: "اساسية", command: "Enterveh", meaning: "تركيب شخص في سيارة" },
        { category: "اساسية", command: "Eject", meaning: "انزال شخص من سيارة" },
        { category: "اساسية", command: "Check", meaning: "معلومات اللاعب" },
        { category: "اساسية", command: "Findalts", meaning: "معرفة كم شخصية في الحساب" },
        { category: "اساسية", command: "Freeze", meaning: "تجميد لاعب" },
        { category: "اساسية", command: "Unfreeze", meaning: "فك تجميد لاعب" },
        { category: "اساسية", command: "Clearchat", meaning: "تنظيف الشات" },
        { category: "اساسية", command: "Gotoveh", meaning: "الانتقال الى سيارة" },
        { category: "اساسية", command: "Getveh", meaning: "سحب سيارة" },
        { category: "اساسية", command: "Sendveh", meaning: "ارسال سيارة لشخص" },
        { category: "اساسية", command: "Checkveh", meaning: "معلومات السيارة" },
        { category: "اساسية", command: "Fixveh", meaning: "اصلاح سيارة" },
        { category: "اساسية", command: "Fuelveh", meaning: "اضافة بنزين" },
        { category: "اساسية", command: "Flip", meaning: "قلب سيارة" },
        { category: "اساسية", command: "Unflip", meaning: "تعديل السيارة" },
        { category: "اساسية", command: "Respawnveh", meaning: "رسبنة السيارات" },
        { category: "اساسية", command: "Restoreveh", meaning: "استرجاع سيارة محذوفة" },
        { category: "اساسية", command: "Aunimpound", meaning: "ازالة السيارة من الحجز" },
        { category: "اساسية", command: "Adde", meaning: "صنع سهم" },
        { category: "اساسية", command: "Dele", meaning: "حذف السهم" },
        { category: "اساسية", command: "Fixnearbye", meaning: "اصلاح او استرجاع السهم" },
        { category: "اساسية", command: "nearbye", meaning: "معرفة ايدي السهم" },
        { category: "اساسية", command: "Rbs", meaning: "وضع حاجز" },
        { category: "اساسية", command: "Delrp", meaning: "مسح الحاجز" },
        { category: "اساسية", command: "Nearbyrb", meaning: "معرفة ايدي الحاجز" },
        { category: "اساسية", command: "Restock", meaning: "تعبئة محل" },
        { category: "اساسية", command: "Freecam", meaning: "اختراق الجدران" },
        { category: "اساسية", command: "Auncuff", meaning: "فك كلبش" },
        { category: "اساسية", command: "Marry id id", meaning: "تزويج شخصين" },
        { category: "اساسية", command: "Setjob id 5", meaning: "اعطاء رخصة ميكانيكي" },
        { category: "اساسية", command: "Nearbyshops", meaning: "معرفة ايدي البائع" },
        { category: "اساسية", command: "Showfactions", meaning: "مشاهدة جميع الفاكشنات" },
        { category: "اساسية", command: "Showfeedbacks", meaning: "مشاهدة التقييم" },
        { category: "اساسية", command: "Seefar 250", meaning: "تخفيف ال لاق" },

        // ===== ريبورت (Reports) =====
        { category: "ريبورت", command: "Ar", meaning: "قبول ريبورت" },
        { category: "ريبورت", command: "Ri", meaning: "قراءة ريبورت" },
        { category: "ريبورت", command: "Di", meaning: "رفع ريبورت" },
        { category: "ريبورت", command: "Cr", meaning: "قفل ريبورت" },
        { category: "ريبورت", command: "FR", meaning: "الغاء ريبورت من قبل ادمن" },
        { category: "ريبورت", command: "Showfeedbacks", meaning: "مشاهدة التقييم" },
        { category: "ريبورت", command: "Getpoint / mypoints", meaning: "معرفة نقاطك" },

        // ===== عقاب (Punishments) =====
        { category: "عقاب", command: "Jail", meaning: "سجن واحد" },
        { category: "عقاب", command: "ojail", meaning: "سجن لاعب بلا اتصال" },
        { category: "عقاب", command: "Unjail", meaning: "فك سجن" },
        { category: "عقاب", command: "jailed", meaning: "رؤية جميع المساجين" },
        { category: "عقاب", command: "ck", meaning: "اعطاء سي كي" },
        { category: "عقاب", command: "cks", meaning: "رؤية جميع السي كي" },
        { category: "عقاب", command: "unck", meaning: "فك السي كي" },
        { category: "عقاب", command: "warn", meaning: "اعطاء تحذير (3 تحذيرات = باند)" },
        { category: "عقاب", command: "Pkick", meaning: "طرد اللاعب" },
        { category: "عقاب", command: "Slap", meaning: "اعطاء سلاب" },
        { category: "عقاب", command: "Bury", meaning: "دفن لاعب" },
        { category: "عقاب", command: "sjail", meaning: "سجن لاعب بدون علم احد (للادمن فقط)" },
        { category: "عقاب", command: "Skick", meaning: "طرد لاعب بدون علم احد (للادمن فقط)" },
        { category: "عقاب", command: "soban", meaning: "باند لاعب بدون علم احد (للادمن فقط)" },
        { category: "عقاب", command: "sojail", meaning: "سجن لاعب بلا اتصال بدون علم احد" },
        { category: "عقاب", command: "showban", meaning: "معرفة سبب الحظر" },
        { category: "عقاب", command: "oban", meaning: "حظر لاعب بلا اتصال" },
        { category: "عقاب", command: "pban", meaning: "حظر لاعب لمدة محددة" },
        { category: "عقاب", command: "Unbind", meaning: "فك باند" },
        { category: "عقاب", command: "banaccount", meaning: "باند لحساب معين" },
        { category: "عقاب", command: "Findserial", meaning: "معرفة سريال لاعب" },
        { category: "عقاب", command: "banip [IP] [Reason]", meaning: "باند ايبي" },
        { category: "عقاب", command: "banserial [Serial] [Reason]", meaning: "باند سريال" },

        // ===== عامة (General) =====
        { category: "عامة", command: "quitjob", meaning: "خروج من الوظيفة" },
        { category: "عامة", command: "setvol", meaning: "رفع صوت راديو السيارة" },
        { category: "عامة", command: "eject", meaning: "انزال شخص من سيارتك" },
        { category: "عامة", command: "glue", meaning: "تثبيت اللاعب فوق الاشياء" },
        { category: "عامة", command: "staff", meaning: "رؤية الاداريين المتواجدين" },
        { category: "عامة", command: "seefar 250", meaning: "تخفيف ال لاق" },
        { category: "عامة", command: "status", meaning: "كتابة حالة فوق راس اللاعب" },
        { category: "عامة", command: "clearchat", meaning: "مسح الشات" },
        { category: "عامة", command: "showchat", meaning: "اخفاء/اظهار الشات" },
        { category: "عامة", command: "ooc", meaning: "التحدث في الشات العام" },
        { category: "عامة", command: "w", meaning: "تهمس لشخص" },
        { category: "عامة", command: "s", meaning: "انتبه لي" },
        { category: "عامة", command: "district", meaning: "تنبيه اطلاق نار" },
        { category: "عامة", command: "writenote", meaning: "كتابة نوته" },
        { category: "عامة", command: "tuneradio", meaning: "دخول تردد راديو" },
        { category: "عامة", command: "toggleradio", meaning: "قفل/تشغيل الراديو" },
        { category: "عامة", command: "reconnect", meaning: "اعادة تشغيل السيرفر" },
        { category: "عامة", command: "ads", meaning: "عمل اعلان" },
        { category: "عامة", command: "texlist", meaning: "ازالة الديكور من منزلك" },
        { category: "عامة", command: "sellproperty", meaning: "بيع منزلك للسيرفر" },
        { category: "عامة", command: "movesafe", meaning: "تحريك خزنة" },
        { category: "عامة", command: "gate", meaning: "فتح بوابة" },
        { category: "عامة", command: "nearbye", meaning: "اظهار/اخفاء او اصلاح السهم" },
        { category: "عامة", command: "restock", meaning: "تعبئة البائعين في المحل" },
        { category: "عامة", command: "history", meaning: "اظهار الهوستري" },
        { category: "عامة", command: "cup", meaning: "حمل شخص" },
        { category: "عامة", command: "cdw", meaning: "انزال شخص" },
        { category: "عامة", command: "animselect / anims", meaning: "جميع الحركات" },
        { category: "عامة", command: "fp", meaning: "منظور الشخص الاول" },
        { category: "عامة", command: "pm", meaning: "ترسل لشخص في الخاص" },

        // ===== ليدر (Leader) =====
        { category: "ليدر", command: "gov", meaning: "عمل اعلان وظيف" },
        { category: "ليدر", command: "issuebadge", meaning: "عمل شارة" },
        { category: "ليدر", command: "togglef", meaning: "قفل شات الوظيفة" },
        { category: "ليدر", command: "f", meaning: "شات الوظيفة" },
        { category: "ليدر", command: "fl", meaning: "شات الليدرات" },
        { category: "ليدر", command: "hq", meaning: "شات عام الوظيفة" },

        // ===== راديو (Radio) =====
        { category: "راديو", command: "tuneradio", meaning: "دخول تردد راديو" },
        { category: "راديو", command: "toggleradio", meaning: "قفل/تشغيل الراديو" },
        { category: "راديو", command: "rf", meaning: "صنع او حذف راديو لفاكشن" },
        { category: "راديو", command: "srd", meaning: "قفل جميع راديو السيارات حولك" },
        { category: "راديو", command: "setvol 100", meaning: "التحكم بدرجة صوت راديو السيارة" },

        // ===== اسعاف (EMS) =====
        { category: "اسعاف", command: "cpr", meaning: "حركة انعاش" },
        { category: "اسعاف", command: "mrevive", meaning: "امر انعاش" },
        { category: "اسعاف", command: "heal 100", meaning: "اعطاء دم" },
        { category: "اسعاف", command: "backup", meaning: "عمل باك اب" },

        // ===== جندي (Police/Military) =====
        { category: "جندي", command: "setwalk 62", meaning: "مسك صلاح" },
        { category: "جندي", command: "togattach", meaning: "حمل السلاح على الصدر" },
        { category: "جندي", command: "handsup", meaning: "امر الاستسلام" },
        { category: "جندي", command: "gunup", meaning: "امر رفع السلاح على المجرم" },
        { category: "جندي", command: "bat", meaning: "ترفع السلاح" },
        { category: "جندي", command: "ticket", meaning: "اعطاء مخالفات" },
        { category: "جندي", command: "takelicense", meaning: "سحب رخصة شخص" },
        { category: "جندي", command: "fingerprint", meaning: "تشوف بصمة الشخص" },
        { category: "جندي", command: "traffic", meaning: "اظهار لوحات فوق السيارة" },
        { category: "جندي", command: "n", meaning: "تبديل وضعية السلاح" },
        { category: "جندي", command: "mdc", meaning: "قائمة البلاغات" },
        { category: "جندي", command: "throwspikes", meaning: "رمي الاشواك" },
        { category: "جندي", command: "removespikes", meaning: "حذف الاشواك" },
        { category: "جندي", command: "togspeedcamera 120", meaning: "امر ردار السرعة" },

        // ===== صحافة (Press) =====
        { category: "صحافة", command: "interview", meaning: "اعطاء ميك" },
        { category: "صحافة", command: "endinterview", meaning: "اخذ الميك" },
        { category: "صحافة", command: "starttv", meaning: "عمل بث مباشر" },
        { category: "صحافة", command: "endtv", meaning: "انهاء البث المباشر" },
        { category: "صحافة", command: "movetv", meaning: "تحريك الكاميرا" },
        { category: "صحافة", command: "i", meaning: "للتحدث" },

        // ===== محكمة (Court) =====
        { category: "محكمة", command: "changename", meaning: "تغيير اسم" },
        { category: "محكمة", command: "marry", meaning: "امر زواج" },
        { category: "محكمة", command: "divorce", meaning: "امر طلاق" },

        // ===== مطار (Airport) =====
        { category: "مطار", command: "fuel", meaning: "طلب تعبئة بنزين للطائرة" },
        { category: "مطار", command: "air", meaning: "التحدث في الراديو الجوي" },
        { category: "مطار", command: "maps", meaning: "رؤية تخطيط المطارات" },

        // ===== صيانة (Mechanic) =====
        { category: "صيانة", command: "towbike", meaning: "سحب دراجة" },
        { category: "صيانة", command: "veh", meaning: "تصليح سيارة" },
        { category: "صيانة", command: "Edveh", meaning: "التعديل على السيارة" },

        // ===== انتقال (Teleport) =====
        { category: "انتقال", command: "Gotoplace", meaning: "الانتقال الى مكان (igs/bank/ls/lv/sf/ash/dmv/1str/sfpd/cityhall)" },
        { category: "انتقال", command: "goto", meaning: "انتقال لشخص" },
        { category: "انتقال", command: "gotoveh", meaning: "انتقال لسيارة" },
        { category: "انتقال", command: "gotomark", meaning: "انتقال لمارك" },
        { category: "انتقال", command: "gotointi", meaning: "انتقال داخل انترو" },
        { category: "انتقال", command: "gotohouse / gotoint", meaning: "انتقال لانترو" },
        { category: "انتقال", command: "gotogate", meaning: "انتقال لبوابة" },

        // ===== مود (Mode) =====
        { category: "مود", command: "startres", meaning: "تشغيل مود" },
        { category: "مود", command: "stopres", meaning: "ايقاف مود" },
        { category: "مود", command: "restartres", meaning: "عمل ريستارت لمود" },
        { category: "مود", command: "mods", meaning: "اظهار مود السيارات" },

        // ===== سحب (Pull) =====
        { category: "سحب", command: "gethere", meaning: "سحب شخص" },
        { category: "سحب", command: "getveh", meaning: "سحب سيارة" },

        // ===== ارسال (Send) =====
        { category: "ارسال", command: "Sendto", meaning: "ارسال شخص لشخص" },
        { category: "ارسال", command: "Sendtoveh", meaning: "ارسال شخص لسيارة" },
        { category: "ارسال", command: "Sendveh", meaning: "ارسال سيارة لشخص" },

        // ===== ريستارت (Restart) =====
        { category: "ريستارت", command: "restart bank", meaning: "ريستارت البنك" },
        { category: "ريستارت", command: "restartres", meaning: "ريستارت مود" },
        { category: "ريستارت", command: "restartcarshop", meaning: "ريستارت معرض السيارات" },
        { category: "ريستارت", command: "restartvehall", meaning: "ريستارت جميع السيارات" },
        { category: "ريستارت", command: "resetaccount", meaning: "ريستارت لحساب معين" },
        { category: "ريستارت", command: "restartresfaction-system", meaning: "ريستارت فاكشن" }
    ],

    // ========== الانترو (Interiors) ==========
    interiors: [
        { name: "قصر", image: "https://e.top4top.io/p_2086ggmpm7.png" },
        { name: "مكتب", image: "https://f.top4top.io/p_2086djy703.png" },
        { name: "مخزن", image: "https://e.top4top.io/p_2086r5j3j2.png" },
        { name: "محل 1", image: "https://k.top4top.io/p_20869f9kn1.png" },
        { name: "محل 2", image: "https://l.top4top.io/p_2086hmz3i2.png" },
        { name: "فيلا", image: "https://d.top4top.io/p_2086sajbg6.png" },
        { name: "ورش", image: "https://h.top4top.io/p_2086t8ef05.png" },
        { name: "بيت 1", image: "https://i.top4top.io/p_2086dzm8x1.png" },
        { name: "بيت 2", image: "https://j.top4top.io/p_20867eyhb2.png" },
        { name: "غرف", image: "https://a.top4top.io/p_208663dgi3.png" },
        { name: "حكومي", image: "https://k.top4top.io/p_208689i9p1.png" },
        { name: "معرض", image: "https://g.top4top.io/p_2086rnurc4.png" },
        { name: "فندق", image: "https://c.top4top.io/p_208681k105.png" },
        { name: "كراج", image: "https://d.top4top.io/p_2086nyvpa1.png" },
        { name: "حمام", image: "https://l.top4top.io/p_2086a06n82.png" },
        { name: "فاعلية", image: "https://b.top4top.io/p_2086toijg4.png" }
    ],

    // ========== كود الانترو ==========
    introCode: `-- كود صناعة الانترو في MTA
function createInterior(id, name, price, type)
    local interior = {
        id = id,
        name = name,
        price = price,
        type = type,
        position = getElementPosition(source)
    }
    -- حفظ الانترو في قاعدة البيانات
    exports.mysql:insert("interiors", interior)
    outputChatBox("تم صنع الانترو: " .. name, source, 0, 255, 0)
end

-- مثال: createInterior(1, "قصر", 100000, "house")`
};

// ============================================
// دوال حفظ واسترجاع البيانات
// ============================================

function saveData() {
    localStorage.setItem('mtaData', JSON.stringify(siteData));
}

function loadData() {
    const saved = localStorage.getItem('mtaData');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(siteData, parsed);
        } catch(e) {
            console.log('خطأ في تحميل البيانات');
        }
    }
}

function exportData() {
    return JSON.stringify(siteData, null, 2);
}

function importData(jsonData) {
    try {
        const parsed = JSON.parse(jsonData);
        Object.assign(siteData, parsed);
        saveData();
        return true;
    } catch(e) {
        return false;
    }
}

loadData();

// ============================================
// دوال البحث والمساعدة
// ============================================

function getCommandsByCategory(category) {
    return siteData.commands.filter(cmd => cmd.category === category);
}

function findCommand(search) {
    const searchLower = search.toLowerCase();
    return siteData.commands.filter(cmd => 
        cmd.command.toLowerCase().includes(searchLower) ||
        cmd.meaning.includes(search)
    );
}

function findRule(search) {
    const searchLower = search.toLowerCase();
    return siteData.rules.filter(rule =>
        rule.english.toLowerCase().includes(searchLower) ||
        rule.arabic.includes(search)
    );
}

function findInterior(search) {
    const searchLower = search.toLowerCase();
    return siteData.interiors.filter(int =>
        int.name.includes(search)
    );
}

// ===== الرد التلقائي الذكي =====
function smartReply(query) {
    const q = query.toLowerCase().trim();
    let response = [];
    
    // البحث عن انترو - عرض الصور
    const interiors = findInterior(q);
    if (interiors.length > 0) {
        response.push("🏠 **الانترو المطلوب:**");
        interiors.forEach(int => {
            response.push(`<div style="text-align:center;margin:10px 0;">`);
            response.push(`<strong>${int.name}</strong>`);
            response.push(`<br><img src="${int.image}" alt="${int.name}" style="max-width:300px;border-radius:10px;margin:10px 0;border:1px solid #333;">`);
            response.push(`<br><button class="copy-btn" onclick="copyText('${int.name}')">📋 نسخ الاسم</button>`);
            response.push(`</div>`);
        });
        return response.join('');
    }
    
    // البحث عن قوانين
    if (q.includes('قانون') || q.includes('قوانين') || q === 'قوانين') {
        const rules = siteData.rules.slice(0, 10);
        response.push("📜 **القوانين:**");
        rules.forEach(rule => {
            response.push(`<div style="margin:5px 0;padding:8px;background:rgba(255,255,255,0.05);border-radius:6px;">`);
            response.push(`<strong>${rule.english}</strong> = ${rule.arabic}`);
            response.push(` <button class="copy-btn" onclick="copyText('${rule.english} - ${rule.arabic}')">📋</button>`);
            response.push(`</div>`);
        });
        response.push(`... وعرض ${siteData.rules.length} قانون كامل في صفحة القوانين`);
        return response.join('');
    }
    
    // البحث عن أوامر حسب القسم
    const category = siteData.categories.find(c => 
        q.includes(c.name) || c.name.includes(q)
    );
    if (category) {
        const cmds = getCommandsByCategory(category.name);
        response.push(`📂 **قسم ${category.name} ${category.icon}** (${cmds.length} أمر):`);
        cmds.slice(0, 15).forEach(cmd => {
            response.push(`<div style="margin:5px 0;padding:8px;background:rgba(255,255,255,0.05);border-radius:6px;">`);
            response.push(`<code style="color:#ffaa66;direction:ltr;display:inline-block;">${cmd.command}</code>`);
            response.push(` = ${cmd.meaning}`);
            response.push(` <button class="copy-btn" onclick="copyText('${cmd.command}')">📋</button>`);
            response.push(`</div>`);
        });
        if (cmds.length > 15) {
            response.push(`... و ${cmds.length - 15} أمر إضافي في صفحة الأوامر`);
        }
        return response.join('');
    }
    
    // البحث عن أمر معين
    const commands = findCommand(q);
    if (commands.length > 0) {
        response.push("🔍 **نتائج البحث:**");
        commands.slice(0, 10).forEach(cmd => {
            response.push(`<div style="margin:5px 0;padding:8px;background:rgba(255,255,255,0.05);border-radius:6px;">`);
            response.push(`<code style="color:#ffaa66;direction:ltr;display:inline-block;">${cmd.command}</code>`);
            response.push(` = ${cmd.meaning} (قسم: ${cmd.category})`);
            response.push(` <button class="copy-btn" onclick="copyText('${cmd.command}')">📋</button>`);
            response.push(`</div>`);
        });
        if (commands.length > 10) {
            response.push(`... و ${commands.length - 10} نتيجة إضافية`);
        }
        return response.join('');
    }
    
    // إذا لم يتم العثور على شيء
    return `❌ **لم يتم العثور على نتائج**

💡 جرب البحث عن:
• اسم أمر مثل <code>sellproperty</code>
• اسم قسم مثل <code>فاكشن</code>
• اسم انترو مثل <code>قصر</code>
• كلمة <code>قوانين</code>`;
}

// ===== دالة النسخ العامة =====
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        // البحث عن جميع أزرار النسخ وتغييرها مؤقتاً
        const btns = document.querySelectorAll('.copy-btn');
        btns.forEach(btn => {
            if (btn.textContent === '📋' || btn.textContent.includes('نسخ')) {
                btn.textContent = '✅';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = '📋';
                    btn.classList.remove('copied');
                }, 2000);
            }
        });
    }).catch(() => {
        // طريقة بديلة
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ تم نسخ: ' + text);
    });
}

// ============================================
// تصدير للاستخدام
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { siteData, saveData, loadData, exportData, importData, smartReply, copyText };
}
