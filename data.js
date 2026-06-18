// ============================================
// الدليل - قاعدة البيانات الكاملة
// MTA Commands Guide - Data
// مع نظام بحث ورد تلقائي ذكي ومنسق
// ============================================

const defaultData = {
  // ===== الصفحة الرئيسية =====
  home: {
    shortcuts: [
      { title: "رابط الديسكورد", url: "https://discord.gg/your-server", icon: "💬" },
      { title: "القوانين", page: "rules", icon: "📜" },
      { title: "الأوامر", page: "commands", icon: "️" },
      { title: "الانترو", page: "intros", icon: "🎬" },
      { title: "الرد التلقائي", page: "chat", icon: "🤖" }
    ],
    welcomeMessage: "مرحباً بك في الدليل"
  },

  // ===== القوانين =====
  rules: {
    sections: [
      {
        id: "rules-general",
        title: "قوانين السيرفر",
        keywords: ["قوانين", "قانون", "rules", "law", "rule"],
        items: [
          "AR = استخدام الرتبة للمصلحة الشخصية (Aim Rank)",
          "ATA = نقل ممتلكات شخصية الى اخرى (alt to alt)",
          "Arson = التسبب في حريق",
          "AGC = استخدام القلتشات (Abusing Game/Script)",
          "SK = قتل عند الرسبون او المستشفى (Spawn Killing)",
          "SC = استخدام اسم شخصية مشهورة",
          "SL = حياة مقززة",
          "SP = النصب باكثر من 10 الاف",
          "SE = تخريب التوظيف",
          "CK = موت شخصية او اعدام",
          "CR = الجري بدوران واطلاق نار (Chicken Run)",
          "CTV = لغة التهكير والبرمجة",
          "CD = تطوير الشخصية (Character Development)",
          "DM = القتل بدون سبب مقنع (Deathmatching)",
          "DP = دعس شخص بدون اربي",
          "DB = تصدم السيارات ودعس الاشخاص (Drive By)",
          "DDP = القتل وانت تسوق",
          "DUC = تدمير شخصية (الانتحار)",
          "Dos = ديوتي بدون شارة",
          "RR = الجري دون تعب (Run Run)",
          "RK = قتل الانتقام (Revenge Kill)",
          "RTR = الجري دون تعب",
          "RPZ = منطقة العيش في السيرفر (Role Play zone)",
          "RDM = قتل نفس الشخص بدون توقف",
          "RPG = اخذ اربي جي من امر السلاح وعليه وارن",
          "MG = اختلاط الشات او المعلومات (Meta Gaming)",
          "MC = اطلاق نار بالغلط او عمل شيء خطا",
          "MD = سوء استخدام الكلبشات",
          "MA = تعدد الحسابات (Multiple Accounts)",
          "LTA = الهروب من الاربي",
          "Low-RP = استخدام اربي ضعيف",
          "LK = تحتاج اذن لاطلاق نار في مكان عام",
          "PG = تكون خارق الطبيعة (Power Gaming)",
          "PK = فقدان الذاكرة بعد الموت",
          "PD = استفزاز الشرطة بغرض المتعة",
          "BH = الجري وانت تقفز (Bonny Hopping)",
          "BR = يجب القتل داخل الاربي فقط",
          "BRAWLS = القتل بدون اربي",
          "KOS = الحقد على لاعب او اسناد لاعب",
          "GR = احترام الناس (القاعدة الذهبية)",
          "NG = سرقة سيارة شخص دون اربي",
          "NK = تضرب شخص بيدك او بسلاح ابيض وانت تجري (Ninja Kicking)",
          "NJ = تنزل شخص من سيارته وتهرب (Ninja Jacking)",
          "NONRP = فعل اشياء بدون اربي",
          "TK = تقتل شخص من الفاكشن اللي انت فيه",
          "VDM = استخدام سيارة ودعس الاشخاص",
          "WH = تركب موتسيكل وتقفز فوق الجبال والبيوت",
          "UH = فعل العادات المضرة (التدخين او تدمير الحياة الشخصية)"
        ]
      }
    ]
  },

  // ===== الأوامر =====
  commands: {
    sections: [
      {
        id: "cmd-info",
        title: "أوامر المعلومات الأساسية",
        keywords: ["معلومات", "check", "find", "معرفة", "بيانات", "player", "لاعب"],
        commands: [
          { command: "Check", description: "معرفة معلومات شخص" },
          { command: "Changename", description: "تغيير اسم شخص" },
          { command: "Findip", description: "معرفة ايبي لاعب" },
          { command: "Findalts", description: "اظهار جميع شخصيات لاعب معين" },
          { command: "Findserial", description: "معرفة سريال لاعب" },
          { command: "resetaccount", description: "عمل ريستارت لحساب معين" },
          { command: "reconnect", description: "عمل ريكونت للاعب معين" },
          { command: "setage", description: "تغيير عمر لاعب" },
          { command: "setdob", description: "تغيير ميلاد لاعب" },
          { command: "setgender", description: "تغيير جنس لاعب (ولد/بنت)" },
          { command: "setheight", description: "تغيير وزن لاعب" }
        ]
      },
      {
        id: "cmd-factions",
        title: "أوامر الفاكشنات (Factions)",
        keywords: ["فاكشن", "factions", "faction", "عصابة", "شرطة", "اسعاف", "فاكشنات"],
        commands: [
          { command: "Showfactions", description: "رؤية قائمة الفاكشنات" },
          { command: "delfaction", description: "حذف فاكشن" },
          { command: "Dutyadmin", description: "تصليح ديوتي فاكشنات" },
          { command: "makefaction", description: "صنع فاكشن جديد" },
          { command: "renamefaction", description: "تغيير اسم الفاكشن" },
          { command: "respawnfaction", description: "رسبنة سيارات فاكشن معين" },
          { command: "rf", description: "صنع او حذف راديو لفاكشن" },
          { command: "srd", description: "ايقاف جميع اجهزة الراديو في المنطقة" },
          { command: "Setintfaction", description: "وضع بيت في فاكشن" },
          { command: "setvehfaction", description: "وضع سيارة في فاكشن" },
          { command: "setfactionrank", description: "رفع رتبة لاعب في فاكشن (بدون دخول)" },
          { command: "setfaction", description: "دخول فاكشن على شكل لاعب" },
          { command: "setfactionleader", description: "دخول فاكشن على شكل ليدر" }
        ]
      },
      {
        id: "cmd-gates",
        title: "أوامر البوابات (Gates)",
        keywords: ["بوابة", "gates", "gate", "باب"],
        commands: [
          { command: "Nearbygates", description: "معرفة ايدي الباب" },
          { command: "Delgate", description: "محو/حذف الباب" },
          { command: "gates", description: "فتح لوحة الابواب" },
          { command: "gotogate", description: "الانتقال لبوابة معينة" },
          { command: "makegeneric", description: "صناعة الاسوار والاغراض" }
        ]
      },
      {
        id: "cmd-interiors",
        title: "أوامر الانترو (Interiors)",
        keywords: ["انترو", "interiors", "منزل", "بيت", "house", "home", "داخلية"],
        commands: [
          { command: "ints / interiors", description: "رؤية البيوت الموجودة" },
          { command: "setintentrance", description: "نقل سهم او بيت" },
          { command: "addint", description: "صنع انترو (Id - الاسم - سعر - نوع)" },
          { command: "Delint", description: "حذف انترو" },
          { command: "Restoreint", description: "استرجاع انترو" },
          { command: "Nearbyints", description: "معرفة ايدي البيت" },
          { command: "togint", description: "غلق البيت" },
          { command: "Enableallinterios", description: "جعل جميع البيوت مغلقة" },
          { command: "Setintname", description: "تغيير اسم البيت" },
          { command: "getintprice", description: "معرفة سعر البيت" },
          { command: "Setintprice", description: "تغيير سعر البيت" },
          { command: "Getinttype", description: "معرفة نوع البيت" },
          { command: "Setinttype", description: "تغيير نوع البيت" },
          { command: "Setintid", description: "تغيير شكل البيت" },
          { command: "Getintid", description: "معرفة ايدي شكل البيت من الداخل" },
          { command: "restoreint", description: "استرجاع الداخلية اذا حذفت" },
          { command: "reloadint", description: "عمل ريستارت للداخلية" },
          { command: "setint / setinterior", description: "تغيير الداخلية" },
          { command: "removeint [ID]", description: "حذف الداخلية نهائيا" },
          { command: "sellproperty", description: "بيع منزلك للسيرفر" },
          { command: "addatm", description: "صنع مصرفة (صرافة)" },
          { command: "delatm [id]", description: "حذف مصرفة" },
          { command: "Getkey / changelock", description: "عمل نسخة مفتاح" }
        ]
      },
      {
        id: "cmd-shops",
        title: "أوامر البائعين (Shops)",
        keywords: ["شوب", "shops", "shop", "بائع", "محل", "store"],
        commands: [
          { command: "Makeshop", description: "صنع شوب" },
          { command: "Delshop", description: "حذف شوب" },
          { command: "Nearbyshops", description: "معرفة ايدي الشوب" },
          { command: "renameshop", description: "تغيير اسم الشوب" },
          { command: "Delnearbyshops", description: "حذف البائع الذي بجانبك" },
          { command: "removeshop", description: "حذف شوب نهائيا" },
          { command: "Reloadshop", description: "عمل ريستارت لشوب معين" },
          { command: "Moveshop", description: "نقل بائع" },
          { command: "makefuel", description: "صنع بائع بنزين" },
          { command: "Nearbyfuels", description: "معرفة ايدي بائع البنزين" },
          { command: "Delfuel", description: "حذف بائع البنزين" },
          { command: "Deldancer", description: "حذف بائع يرقص" }
        ]
      },
      {
        id: "cmd-markers",
        title: "أوامر الأسهم (Markers/Arrows)",
        keywords: ["سهم", "markers", "arrow", "ماركر"],
        commands: [
          { command: "Adde", description: "صنع سهم" },
          { command: "Dele", description: "حذف السهم" },
          { command: "Fixnearbye", description: "اصلاح او استرجاع السهم" },
          { command: "nearbye", description: "معرفة ايدي السهم" }
        ]
      },
      {
        id: "cmd-barriers",
        title: "أوامر الحواجز (Barriers)",
        keywords: ["حاجز", "barriers", "barrier"],
        commands: [
          { command: "Rbs", description: "وضع حاجز" },
          { command: "Delrb", description: "مسح الحاجز" },
          { command: "delallrbs", description: "حذف جميع الحواجز" },
          { command: "Nearbyrbs", description: "معرفة ايدي الحاجز" }
        ]
      },
      {
        id: "cmd-atm",
        title: "أوامر الصرافة (ATM)",
        keywords: ["صرافة", "atm", "مصرفة"],
        commands: [
          { command: "addatm", description: "صنع مصرفة" },
          { command: "delatm [id]", description: "حذف مصرفة" }
        ]
      },
      {
        id: "cmd-marker",
        title: "أوامر الماركر (Marker)",
        keywords: ["ماركر", "marker"],
        commands: [
          { command: "mark", description: "صنع ماركر" },
          { command: "delmark", description: "حذف ماركر" }
        ]
      },
      {
        id: "cmd-ramps",
        title: "أوامر الريمب (Ramps)",
        keywords: ["رامب", "ramps", "ramp", "رافعة"],
        commands: [
          { command: "Addramp", description: "صنع رامب" },
          { command: "Delramp", description: "حذف رامب" },
          { command: "togglee", description: "تمكين او تعطيل رامب" },
          { command: "nearbyramps", description: "معرفة ايدي رامب" }
        ]
      },
      {
        id: "cmd-vehicles",
        title: "أوامر السيارات (Vehicles)",
        keywords: ["سيارة", "vehicles", "car", "cars", "مركبة"],
        commands: [
          { command: "respawnall", description: "رسبنة جميع السيارات" },
          { command: "Aunimpound", description: "ازالة السيارات من الحجز" },
          { command: "Editveh", description: "تعديل على السيارات" },
          { command: "Fixvehs", description: "تصليح جميع السيارات" },
          { command: "Restartvehall", description: "ريستارت لجميع السيارات" },
          { command: "delnearbyvehs", description: "معرفة السيارات المحذوفة" },
          { command: "Delthisveh", description: "حذف مركبة مؤقتا" },
          { command: "delveh [id]", description: "حذف سيارة (تكتب مرتين)" },
          { command: "removeveh", description: "حذف السيارة نهائيا من الخادم" },
          { command: "restoreveh", description: "استرجاع سيارة محذوفة" },
          { command: "apark", description: "بارك لسيارة دون ركوبها" },
          { command: "settrackingloc", description: "جهاز التتبع في السيارة" },
          { command: "setvehfaction", description: "جعل سيارة في فاكشن" },
          { command: "Setvehplate", description: "تغيير لوحة السيارة" },
          { command: "delupgrade", description: "ازالة جميع اضافات السيارة" },
          { command: "blowveh", description: "تفجير سيارة (مع ايدي الراكب)" },
          { command: "Nearbyvehicles", description: "ايدهات السيارات حولك" },
          { command: "Getkey", description: "عمل نسخة من مفتاح السيارة" },
          { command: "changelock", description: "تصفير المفاتيح" },
          { command: "setvehtint", description: "اضافة او ازالة لون السيارة" },
          { command: "makecivveh", description: "صنع سيارة تكسي/باص/ديلفري" },
          { command: "veh", description: "صنع سيارة مؤقتة" },
          { command: "getcolor", description: "معرفة الوان سيارة معينة" },
          { command: "addupgrade", description: "ترقية سيارة لاعب" },
          { command: "setdamageproof", description: "جعل السيارة مضادة للضرر" },
          { command: "setcolor", description: "تعديل الوان السيارة" },
          { command: "setcarhp", description: "تعديل صحة السيارة" },
          { command: "getvehweight", description: "معرفة مواصفات السيارة" },
          { command: "Vehlib", description: "معلومات معرض السيارات" },
          { command: "srd", description: "قفل جميع راديو السيارات حولك" },
          { command: "setvol", description: "رفع او خفض صوت راديو السيارة" },
          { command: "Makeveh a a id 0 1 1", description: "صنع سيارة" },
          { command: "makepaynspray", description: "صنع مكان تصليح سيارات" }
        ]
      },
      {
        id: "cmd-respawn",
        title: "أوامر الريسبون (Respawn)",
        keywords: ["ريسبون", "respawn", "رسبنة"],
        commands: [
          { command: "respawnall", description: "رسبنة جميع السيارات" },
          { command: "respawndistrict", description: "رسبون سيارات المنطقة حولك" },
          { command: "Respawnciv", description: "رسبنة سيارات الوظائف" },
          { command: "respawntrucks", description: "رسبنة جميع الشاحنات" },
          { command: "restartcarshops", description: "رسبنة معرض السيارات" },
          { command: "respawnveh", description: "رسبنة سيارة" },
          { command: "respawnfaction", description: "رسبنة سيارات فاكشن معين" },
          { command: "apark", description: "بارك لمركبة دون ركوب" }
        ]
      },
      {
        id: "cmd-stealth",
        title: "أوامر التخفي (Stealth)",
        keywords: ["تخفي", "stealth", "hide", "اختفاء", "invis"],
        commands: [
          { command: "hideadmin", description: "تشغيل شارة بدون ظهور" },
          { command: "Disappear", description: "اخفاء نفسك" },
          { command: "Supervise", description: "اختفاء جزئي" },
          { command: "freecam", description: "تخفي واختراق جدران" },
          { command: "Fakeme", description: "ظهور باسم فيك" }
        ]
      },
      {
        id: "cmd-items",
        title: "أوامر الأغراض (Items)",
        keywords: ["اغراض", "items", "item", "غرض"],
        commands: [
          { command: "giveitem", description: "اخذ غرض معين" },
          { command: "delitem", description: "حذف غرض معين" },
          { command: "moveitem", description: "نقل غرض معين" },
          { command: "delnearbyitems", description: "حذف جميع الاغراض حولك" },
          { command: "items / itemlist", description: "فتح قائمة الغش" }
        ]
      },
      {
        id: "cmd-monitoring",
        title: "أوامر المراقبة (Monitoring)",
        keywords: ["مراقبة", "monitoring", "watch", "recon"],
        commands: [
          { command: "watch", description: "مراقبة شخص وانت تتحرك" },
          { command: "recon", description: "مراقبة شخص" },
          { command: "showinv", description: "رؤية اغراض الشخص" },
          { command: "Bigears", description: "رؤية شات الخاص للناس" },
          { command: "bigearsf", description: "مراقبة شات الفاكشنات" }
        ]
      },
      {
        id: "cmd-weather",
        title: "أوامر الطقس (Weather)",
        keywords: ["طقس", "weather", "مطر"],
        commands: [
          { command: "srl", description: "معرفة مستوى المطر" },
          { command: "Sw 1", description: "تغيير الطقس" }
        ]
      },
      {
        id: "cmd-chat",
        title: "أوامر الشات (Chat)",
        keywords: ["شات", "chat", "رسالة", "تحدث", "كلام"],
        commands: [
          { command: "ho", description: "رسالة في الشات بدون ظهور اسمك" },
          { command: "g", description: "شات السبورت" },
          { command: "a", description: "شات الادمن" },
          { command: "st", description: "شات الاستف" },
          { command: "ua", description: "شات المسؤولين" },
          { command: "togooc", description: "فتح او قفل شات العام" },
          { command: "occ", description: "كتابة في شات العام" },
          { command: "w", description: "تهمس لشخص" },
          { command: "s", description: "انتبه لي" },
          { command: "district", description: "تنبيه اطلاق نار" },
          { command: "Clearchat", description: "مسح الشات" },
          { command: "Showhud", description: "اخفاء محتويات الشاشة" },
          { command: "showchat", description: "اخفاء الشات" },
          { command: "togglef", description: "قفل شات الوظيفة" },
          { command: "f", description: "شات الوظيفة" },
          { command: "fl", description: "شات الليدرات" },
          { command: "hq", description: "شات عام الوظيفة" },
          { command: "m", description: "التحدث في الميكرفون" },
          { command: "pm", description: "ترسل لشخص في الخاص" },
          { command: "bind 1 chatbox", description: "شات بوكس" }
        ]
      },
      {
        id: "cmd-weapons",
        title: "أوامر السلاح (Weapons)",
        keywords: ["سلاح", "weapons", "weapon", "gun"],
        commands: [
          { command: "Makegun", description: "صنع سلاح" },
          { command: "Makeammo", description: "صنع رصاص" },
          { command: "gunlist / gunchart", description: "معرفة معلومات عن السلاح" },
          { command: "gunmaker", description: "فتح لوحة الاسلحة" },
          { command: "Disarm", description: "حذف جميع اسلحة لاعب معين" },
          { command: "delitemsfromint", description: "حذف سلاح من منزل" }
        ]
      },
      {
        id: "cmd-giving",
        title: "أوامر الاعطاء (Giving)",
        keywords: ["اعطاء", "giving", "give", "منح"],
        commands: [
          { command: "givesuperman", description: "اعطاء طيران" },
          { command: "setmoney", description: "اعطاء اموال مرة واحدة" },
          { command: "givemoney", description: "اعطاء مال (كم تبي)" },
          { command: "Givegc", description: "اعطاء جي سي" },
          { command: "Forcepayday", description: "تزويد ساعات" },
          { command: "Forcepaydayall", description: "اعطاء يوم جديد لجميع اللاعبين" },
          { command: "forcepayday", description: "اعطاء يوم جديد للاعب معين" },
          { command: "setskin", description: "اعطاء شخصية" },
          { command: "Setrace", description: "تغيير بشرة اللاعب" },
          { command: "agivelicense", description: "اعطاء لاعب رخصة" },
          { command: "atakelicense", description: "الغاء رخصة" },
          { command: "setjob id 5", description: "اعطاء رخصة ميكانيكي" },
          { command: "Setjob", description: "اعطاء لاعب وظيفة" },
          { command: "deljob", description: "حذف وظيفة لاعب" },
          { command: "Revive", description: "انعاش شخص" },
          { command: "sethp", description: "قتل لاعب" },
          { command: "Setarmor", description: "اعطاء درع لشخص بنسبة" },
          { command: "dellanguage", description: "حذف لغة من شخص" },
          { command: "setlanguage / setlang", description: "اعطاء لغة لشخص" }
        ]
      },
      {
        id: "cmd-basic",
        title: "الأوامر الأساسية (Basic)",
        keywords: ["اساسية", "basic", "مهمة", "رئيسية"],
        commands: [
          { command: "givesuperman", description: "اعطاء طيران" },
          { command: "Gotoplace", description: "الانتقال الى مكان (igs/bank/ls/lv/sf/ash/dmv/1str/sfpd/cityhall)" },
          { command: "Places", description: "معرفة اسم المكان" },
          { command: "Goto", description: "الانتقال الى شخص" },
          { command: "Gethere", description: "سحب شخص" },
          { command: "Sendto", description: "ارسال شخص لشخص" },
          { command: "Sendtoveh", description: "ارسال شخص لسيارة" },
          { command: "Enterveh", description: "تركيب شخص في سيارة" },
          { command: "Eject", description: "انزال شخص من سيارة" },
          { command: "Check", description: "معلومات اللاعب" },
          { command: "Findalts", description: "معرفة كم شخصية في الحساب" },
          { command: "Freeze", description: "تجميد لاعب" },
          { command: "Unfreeze", description: "فك تجميد لاعب" },
          { command: "Clearchat", description: "تنظيف الشات" },
          { command: "Gotoveh", description: "الانتقال الى سيارة" },
          { command: "Getveh", description: "سحب سيارة" },
          { command: "Sendveh", description: "ارسال سيارة لشخص" },
          { command: "Checkveh", description: "معلومات السيارة" },
          { command: "Fixveh", description: "اصلاح سيارة" },
          { command: "Fuelveh", description: "اضافة بنزين" },
          { command: "Flip", description: "قلب سيارة" },
          { command: "Unflip", description: "تعديل السيارة" },
          { command: "Respawnveh", description: "رسبنة السيارات" },
          { command: "Restoreveh", description: "استرجاع سيارة محذوفة" },
          { command: "Aunimpound", description: "ازالة السيارة من الحجز" },
          { command: "Adde", description: "صنع سهم" },
          { command: "Dele", description: "حذف السهم" },
          { command: "Fixnearbye", description: "اصلاح او استرجاع السهم" },
          { command: "nearbye", description: "معرفة ايدي السهم" },
          { command: "Rbs", description: "وضع حاجز" },
          { command: "Delrp", description: "مسح الحاجز" },
          { command: "Nearbyrb", description: "معرفة ايدي الحاجز" },
          { command: "Restock", description: "تعبئة محل" },
          { command: "Freecam", description: "اختراق الجدران" },
          { command: "Auncuff", description: "فك كلبش" },
          { command: "Marry id id", description: "تزويج شخصين" },
          { command: "Setjob id 5", description: "اعطاء رخصة ميكانيكي" },
          { command: "Nearbyshops", description: "معرفة ايدي البائع" },
          { command: "Showfactions", description: "مشاهدة جميع الفاكشنات" },
          { command: "Showfeedbacks", description: "مشاهدة التقييم" },
          { command: "Seefar 250", description: "تخفيف ال لاق" }
        ]
      },
      {
        id: "cmd-reports",
        title: "أوامر الريبورت (Reports)",
        keywords: ["ريبورت", "reports", "report", "بلاغ"],
        commands: [
          { command: "Ar", description: "قبول ريبورت" },
          { command: "Ri", description: "قراءة ريبورت" },
          { command: "Di", description: "رفع ريبورت" },
          { command: "Cr", description: "قفل ريبورت" },
          { command: "FR", description: "الغاء ريبورت من قبل ادمن" },
          { command: "Showfeedbacks", description: "مشاهدة التقييم" },
          { command: "Getpoint / mypoints", description: "معرفة نقاطك" }
        ]
      },
      {
        id: "cmd-punishments",
        title: "أوامر العقاب (Punishments)",
        keywords: ["عقاب", "punishments", "punish", "باند", "سجن", "kick", "ban", "طرد"],
        commands: [
          { command: "Jail", description: "سجن واحد" },
          { command: "ojail", description: "سجن لاعب بلا اتصال" },
          { command: "Unjail", description: "فك سجن" },
          { command: "jailed", description: "رؤية جميع المساجين" },
          { command: "ck", description: "اعطاء سي كي" },
          { command: "cks", description: "رؤية جميع السي كي" },
          { command: "unck", description: "فك السي كي" },
          { command: "warn", description: "اعطاء تحذير (3 تحذيرات = باند)" },
          { command: "Pkick", description: "طرد اللاعب" },
          { command: "Slap", description: "اعطاء سلاب" },
          { command: "Bury", description: "دفن لاعب" },
          { command: "sjail", description: "سجن لاعب بدون علم احد (للادمن فقط)" },
          { command: "Skick", description: "طرد لاعب بدون علم احد (للادمن فقط)" },
          { command: "soban", description: "باند لاعب بدون علم احد (للادمن فقط)" },
          { command: "sojail", description: "سجن لاعب بلا اتصال بدون علم احد" },
          { command: "showban", description: "معرفة سبب الحظر" },
          { command: "oban", description: "حظر لاعب بلا اتصال" },
          { command: "pban", description: "حظر لاعب لمدة محددة" },
          { command: "Unbind", description: "فك باند" },
          { command: "banaccount", description: "باند لحساب معين" },
          { command: "Findserial", description: "معرفة سريال لاعب" },
          { command: "banip [IP] [Reason]", description: "باند ايبي" },
          { command: "banserial [Serial] [Reason]", description: "باند سريال" }
        ]
      },
      {
        id: "cmd-general",
        title: "الأوامر العامة (General)",
        keywords: ["عامة", "general", "لاعبين", "players"],
        commands: [
          { command: "quitjob", description: "خروج من الوظيفة" },
          { command: "setvol", description: "رفع صوت راديو السيارة" },
          { command: "eject", description: "انزال شخص من سيارتك" },
          { command: "glue", description: "تثبيت اللاعب فوق الاشياء" },
          { command: "staff", description: "رؤية الاداريين المتواجدين" },
          { command: "seefar 250", description: "تخفيف ال لاق" },
          { command: "status", description: "كتابة حالة فوق راس اللاعب" },
          { command: "clearchat", description: "مسح الشات" },
          { command: "showchat", description: "اخفاء/اظهار الشات" },
          { command: "ooc", description: "التحدث في الشات العام" },
          { command: "w", description: "تهمس لشخص" },
          { command: "s", description: "انتبه لي" },
          { command: "district", description: "تنبيه اطلاق نار" },
          { command: "writenote", description: "كتابة نوته" },
          { command: "tuneradio", description: "دخول تردد راديو" },
          { command: "toggleradio", description: "قفل/تشغيل الراديو" },
          { command: "reconnect", description: "اعادة تشغيل السيرفر" },
          { command: "ads", description: "عمل اعلان" },
          { command: "texlist", description: "ازالة الديكور من منزلك" },
          { command: "sellproperty", description: "بيع منزلك للسيرفر" },
          { command: "movesafe", description: "تحريك خزنة" },
          { command: "gate", description: "فتح بوابة" },
          { command: "nearbye", description: "اظهار/اخفاء او اصلاح السهم" },
          { command: "restock", description: "تعبئة البائعين في المحل" },
          { command: "history", description: "اظهار الهوستري" },
          { command: "cup", description: "حمل شخص" },
          { command: "cdw", description: "انزال شخص" },
          { command: "animselect / anims", description: "جميع الحركات" },
          { command: "fp", description: "منظور الشخص الاول" },
          { command: "pm", description: "ترسل لشخص في الخاص" }
        ]
      },
      {
        id: "cmd-leader",
        title: "أوامر الليدر (Leader)",
        keywords: ["ليدر", "leader", "قائد", "فاكشن"],
        commands: [
          { command: "gov", description: "عمل اعلان وظيف" },
          { command: "issuebadge", description: "عمل شارة" },
          { command: "togglef", description: "قفل شات الوظيفة" },
          { command: "f", description: "شات الوظيفة" },
          { command: "fl", description: "شات الليدرات" },
          { command: "hq", description: "شات عام الوظيفة" }
        ]
      },
      {
        id: "cmd-radio",
        title: "أوامر الراديو (Radio)",
        keywords: ["راديو", "radio"],
        commands: [
          { command: "tuneradio", description: "دخول تردد راديو" },
          { command: "toggleradio", description: "قفل/تشغيل الراديو" },
          { command: "rf", description: "صنع او حذف راديو لفاكشن" },
          { command: "srd", description: "قفل جميع راديو السيارات حولك" },
          { command: "setvol 100", description: "التحكم بدرجة صوت راديو السيارة" }
        ]
      },
      {
        id: "cmd-ems",
        title: "أوامر الاسعاف (EMS)",
        keywords: ["اسعاف", "ems", "صحة", "doctor", "طبيب"],
        commands: [
          { command: "cpr", description: "حركة انعاش" },
          { command: "mrevive", description: "امر انعاش" },
          { command: "heal 100", description: "اعطاء دم" },
          { command: "backup", description: "عمل باك اب" }
        ]
      },
      {
        id: "cmd-police",
        title: "أوامر الجندي/الشرطة (Police/Military)",
        keywords: ["شرطة", "police", "جندي", "military", "عسكري", "cop"],
        commands: [
          { command: "setwalk 62", description: "مسك صلاح" },
          { command: "togattach", description: "حمل السلاح على الصدر" },
          { command: "handsup", description: "امر الاستسلام" },
          { command: "gunup", description: "امر رفع السلاح على المجرم" },
          { command: "bat", description: "ترفع السلاح" },
          { command: "ticket", description: "اعطاء مخالفات" },
          { command: "takelicense", description: "سحب رخصة شخص" },
          { command: "fingerprint", description: "تشوف بصمة الشخص" },
          { command: "traffic", description: "اظهار لوحات فوق السيارة" },
          { command: "n", description: "تبديل وضعية السلاح" },
          { command: "mdc", description: "قائمة البلاغات" },
          { command: "throwspikes", description: "رمي الاشواك" },
          { command: "removespikes", description: "حذف الاشواك" },
          { command: "togspeedcamera 120", description: "امر ردار السرعة" }
        ]
      },
      {
        id: "cmd-press",
        title: "أوامر الصحافة (Press)",
        keywords: ["صحافة", "press", "صحفي", "بث", "tv"],
        commands: [
          { command: "interview", description: "اعطاء ميك" },
          { command: "endinterview", description: "اخذ الميك" },
          { command: "starttv", description: "عمل بث مباشر" },
          { command: "endtv", description: "انهاء البث المباشر" },
          { command: "movetv", description: "تحريك الكاميرا" },
          { command: "i", description: "للتحدث" }
        ]
      },
      {
        id: "cmd-court",
        title: "أوامر المحكمة (Court)",
        keywords: ["محكمة", "court", "قاضي", "زواج", "طلاق"],
        commands: [
          { command: "changename", description: "تغيير اسم" },
          { command: "marry", description: "امر زواج" },
          { command: "divorce", description: "امر طلاق" }
        ]
      },
      {
        id: "cmd-airport",
        title: "أوامر المطار (Airport)",
        keywords: ["مطار", "airport", "طائرة", "plane"],
        commands: [
          { command: "fuel", description: "طلب تعبئة بنزين للطائرة" },
          { command: "air", description: "التحدث في الراديو الجوي" },
          { command: "maps", description: "رؤية تخطيط المطارات" }
        ]
      },
      {
        id: "cmd-mechanic",
        title: "أوامر الصيانة (Mechanic)",
        keywords: ["صيانة", "mechanic", "ميكانيكي", "تصليح", "fix"],
        commands: [
          { command: "towbike", description: "سحب دراجة" },
          { command: "veh", description: "تصليح سيارة" },
          { command: "Edveh", description: "التعديل على السيارة" }
        ]
      },
      {
        id: "cmd-teleport",
        title: "أوامر الانتقال (Teleport)",
        keywords: ["انتقال", "teleport", "goto", "نقل"],
        commands: [
          { command: "Gotoplace", description: "الانتقال الى مكان (igs/bank/ls/lv/sf/ash/dmv/1str/sfpd/cityhall)" },
          { command: "goto", description: "انتقال لشخص" },
          { command: "gotoveh", description: "انتقال لسيارة" },
          { command: "gotomark", description: "انتقال لمارك" },
          { command: "gotointi", description: "انتقال داخل انترو" },
          { command: "gotohouse / gotoint", description: "انتقال لانترو" },
          { command: "gotogate", description: "انتقال لبوابة" }
        ]
      },
      {
        id: "cmd-mode",
        title: "أوامر المود (Mode)",
        keywords: ["مود", "mode", "resource", "res", "script"],
        commands: [
          { command: "startres", description: "تشغيل مود" },
          { command: "stopres", description: "ايقاف مود" },
          { command: "restartres", description: "عمل ريستارت لمود" },
          { command: "mods", description: "اظهار مود السيارات" }
        ]
      },
      {
        id: "cmd-pull",
        title: "أوامر السحب (Pull)",
        keywords: ["سحب", "pull", "get"],
        commands: [
          { command: "gethere", description: "سحب شخص" },
          { command: "getveh", description: "سحب سيارة" }
        ]
      },
      {
        id: "cmd-restart",
        title: "أوامر الريستارت (Restart)",
        keywords: ["ريستارت", "restart", "اعادة تشغيل"],
        commands: [
          { command: "restart bank", description: "ريستارت البنك" },
          { command: "restartres", description: "ريستارت مود" },
          { command: "restartcarshop", description: "ريستارت معرض السيارات" },
          { command: "restartvehall", description: "ريستارت جميع السيارات" },
          { command: "resetaccount", description: "ريستارت لحساب معين" },
          { command: "restartresfaction-system", description: "ريستارت فاكشن" }
        ]
      },
      {
        id: "cmd-personal-info",
        title: "أوامر المعلومات الشخصية (Info)",
        keywords: ["معلومات شخصية", "info", "عمر", "جنس", "ميلاد"],
        commands: [
          { command: "setage", description: "تغيير عمر لاعب" },
          { command: "setdob", description: "تغيير ميلاد لاعب" },
          { command: "setgender", description: "تغيير جنس لاعب (ولد/بنت)" },
          { command: "setheight", description: "تغيير وزن لاعب" },
          { command: "changename", description: "تغيير اسم لاعب" }
        ]
      }
    ]
  },

  // ===== الانترو =====
  intros: {
    images: [
      { id: "intro-1", url: "https://via.placeholder.com/400x300/00ff88/0a0e27?text=Intro+1", caption: "انترو السيرفر الرئيسي" },
      { id: "intro-2", url: "https://via.placeholder.com/400x300/00ff88/0a0e27?text=Intro+2", caption: "انترو الأحداث" },
      { id: "intro-3", url: "https://via.placeholder.com/400x300/00ff88/0a0e27?text=Intro+3", caption: "انترو المسابقات" }
    ]
  },

  // ===== الرد التلقائي =====
  autoReplies: [
    {
      keywords: ["مرحبا", "اهلا", "السلام", "هلا", "هاي", "hello", "hi", "مرحباً"],
      reply: `<p>أهلاً وسهلاً بك! 👋</p><p>كيف يمكنني مساعدتك؟</p><p>يمكنك سؤالي عن:</p><p>• <strong>الأوامر</strong> (اكتب اسم القسم)</p><p>• <strong>القوانين</strong> (اكتب اسم القانون)</p><p>• <strong>أي أمر معين</strong></p><p style="margin-top:0.5rem;color:var(--primary)">💡 البوت يتعرف تلقائياً على كل البيانات!</p>`
    },
    {
      keywords: ["شكرا", "شكراً", "thanks", "thank you", "مشكور", "تسلم"],
      reply: `<p>عفواً! 😊</p><p>سعيد بمساعدتك. إذا احتجت أي شيء آخر، أنا هنا!</p>`
    },
    {
      keywords: ["مساعدة", "help", "help me", "مساعد", "كيف", "how"],
      reply: `<p>أنا هنا لمساعدتك! 🤖</p><p>يمكنك سؤالي عن:</p><p>• أي قسم أوامر (فاكشن، سيارات، شات...)</p><p>• أي قانون (DM, VDM, RDM...)</p><p>• أي أمر معين (Goto, Fixveh, Jail...)</p><p style="margin-top:0.5rem;color:var(--primary)">💡 جرب كتابة أي كلمة!</p>`
    },
    {
      keywords: ["ديسكورد", "discord", "discord.gg"],
      reply: `<p>💬 <strong>رابط الديسكورد:</strong></p><p style="color:var(--primary)">https://discord.gg/your-server</p><p>انضم للتواصل مع المجتمع!</p>`
    },
    {
      keywords: ["سيرفر", "server", "ip", "اي بي", "دخول", "انضم"],
      reply: `<p>🎮 <strong>للدخول للسيرفر:</strong></p><p>1. افتح MTA:SA</p><p>2. اضغط Quick Connect</p><p>3. اكتب IP السيرفر</p><p style="margin-top:0.5rem">أو انضم عبر الديسكورد!</p>`
    },
    {
      keywords: ["ادمن", "admin", "إدارة", "مسؤول"],
      reply: `<p>👑 <strong>للتواصل مع الإدارة:</strong></p><p>• استخدم /report في اللعبة</p><p>• أو انضم للديسكورد</p><p>• أو راسلنا مباشرة</p><p style="margin-top:0.5rem;color:var(--primary)">⚠️ الاحترام متبادل!</p>`
    }
  ]
};

// ============================================
// نظام إدارة البيانات
// ============================================

class DataManager {
  constructor() {
    this.storageKey = 'aldaleel_mta_data';
    this.data = this.loadData();
  }

  loadData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); }
      catch (e) { return JSON.parse(JSON.stringify(defaultData)); }
    }
    return JSON.parse(JSON.stringify(defaultData));
  }

  saveData() {
    try { localStorage.setItem(this.storageKey, JSON.stringify(this.data)); return true; }
    catch (e) { return false; }
  }

  resetData() { this.data = JSON.parse(JSON.stringify(defaultData)); this.saveData(); }
  exportData() { return JSON.stringify(this.data, null, 2); }

  importData(jsonString) {
    try {
      this.data = JSON.parse(jsonString);
      this.saveData();
      return true;
    } catch (e) { return false; }
  }

  addRuleSection(title, keywords = []) {
    const id = 'rules-' + Date.now();
    this.data.rules.sections.push({ id, title, keywords, items: [] });
    this.saveData();
    return id;
  }

  addRuleItem(sectionId, ruleText) {
    const section = this.data.rules.sections.find(s => s.id === sectionId);
    if (section) { section.items.push(ruleText); this.saveData(); return true; }
    return false;
  }

  deleteRuleSection(sectionId) {
    this.data.rules.sections = this.data.rules.sections.filter(s => s.id !== sectionId);
    this.saveData();
  }

  deleteRuleItem(sectionId, itemIndex) {
    const section = this.data.rules.sections.find(s => s.id === sectionId);
    if (section && section.items[itemIndex]) { section.items.splice(itemIndex, 1); this.saveData(); return true; }
    return false;
  }

  addCommandSection(title, keywords = []) {
    const id = 'cmd-' + Date.now();
    this.data.commands.sections.push({ id, title, keywords, commands: [] });
    this.saveData();
    return id;
  }

  addCommand(sectionId, command, description) {
    const section = this.data.commands.sections.find(s => s.id === sectionId);
    if (section) { section.commands.push({ command, description }); this.saveData(); return true; }
    return false;
  }

  deleteCommandSection(sectionId) {
    this.data.commands.sections = this.data.commands.sections.filter(s => s.id !== sectionId);
    this.saveData();
  }

  deleteCommand(sectionId, commandIndex) {
    const section = this.data.commands.sections.find(s => s.id === sectionId);
    if (section && section.commands[commandIndex]) { section.commands.splice(commandIndex, 1); this.saveData(); return true; }
    return false;
  }

  editCommand(sectionId, commandIndex, newCommand, newDescription) {
    const section = this.data.commands.sections.find(s => s.id === sectionId);
    if (section && section.commands[commandIndex]) {
      section.commands[commandIndex] = { command: newCommand, description: newDescription };
      this.saveData();
      return true;
    }
    return false;
  }

  addIntro(url, caption) {
    const id = 'intro-' + Date.now();
    this.data.intros.images.push({ id, url, caption });
    this.saveData();
    return id;
  }

  deleteIntro(introId) {
    this.data.intros.images = this.data.intros.images.filter(i => i.id !== introId);
    this.saveData();
  }

  addShortcut(title, url, icon) { this.data.home.shortcuts.push({ title, url, icon }); this.saveData(); }

  deleteShortcut(index) {
    if (this.data.home.shortcuts[index]) { this.data.home.shortcuts.splice(index, 1); this.saveData(); return true; }
    return false;
  }

  addAutoReply(keywords, reply) { this.data.autoReplies.push({ keywords, reply }); this.saveData(); }

  deleteAutoReply(index) {
    if (this.data.autoReplies[index]) { this.data.autoReplies.splice(index, 1); this.saveData(); return true; }
    return false;
  }

  // ===== البحث الذكي الشامل =====
  search(query) {
    const results = [];
    const q = query.toLowerCase().trim();
    if (!q) return results;

    this.data.commands.sections.forEach(section => {
      const sectionMatch = section.title.toLowerCase().includes(q) ||
                          section.keywords.some(k => k.toLowerCase().includes(q));
      section.commands.forEach(cmd => {
        if (sectionMatch || cmd.command.toLowerCase().includes(q) || cmd.description.toLowerCase().includes(q)) {
          results.push({ type: 'command', section: section.title, sectionId: section.id, data: cmd, score: sectionMatch ? 10 : 5 });
        }
      });
    });

    this.data.rules.sections.forEach(section => {
      const sectionMatch = section.title.toLowerCase().includes(q) ||
                          section.keywords.some(k => k.toLowerCase().includes(q));
      section.items.forEach(item => {
        if (sectionMatch || item.toLowerCase().includes(q)) {
          results.push({ type: 'rule', section: section.title, data: item, score: sectionMatch ? 10 : 5 });
        }
      });
    });

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  // ===== الرد التلقائي الذكي مع تنسيق HTML =====
  getAutoReply(message) {
    const msg = message.toLowerCase().trim();
    
    if (!msg) {
      return `<p>مرحباً! 👋 كيف يمكنني مساعدتك؟</p><p>يمكنك سؤالي عن:</p><p>• الأوامر (اكتب اسم القسم)</p><p>• القوانين (اكتب اسم القانون)</p><p>• أي أمر معين</p>`;
    }

    for (let autoReply of this.data.autoReplies) {
      for (let keyword of autoReply.keywords) {
        const kw = keyword.toLowerCase();
        if (msg === kw || msg.includes(kw)) return autoReply.reply;
      }
    }

    const searchResults = this.search(msg);
    
    if (searchResults.length === 0) {
      return `<p>عذراً، لم أجد معلومات عن هذا الموضوع. 🤔</p><p>جرب:</p><p>• كتابة اسم قسم (سيارات، شات، فاكشن...)</p><p>• كتابة اسم أمر (Goto, Fixveh...)</p><p>• سؤال عن قانون (DM, VDM...)</p>`;
    }

    const commandsBySection = {};
    const rulesBySection = {};
    let totalCommands = 0;
    let totalRules = 0;

    searchResults.forEach(result => {
      if (result.type === 'command') {
        if (!commandsBySection[result.section]) commandsBySection[result.section] = [];
        commandsBySection[result.section].push(result.data);
        totalCommands++;
      } else if (result.type === 'rule') {
        if (!rulesBySection[result.section]) rulesBySection[result.section] = [];
        rulesBySection[result.section].push(result.data);
        totalRules++;
      }
    });

    let response = '';
    const maxPerSection = 6;

    if (totalCommands > 0) {
      response += `<p><strong>⌨️ أوامر</strong> <span class="count-badge">${totalCommands}</span></p>`;
      const sections = Object.keys(commandsBySection);
      const sectionsToShow = sections.slice(0, 3);
      
      sectionsToShow.forEach(sectionTitle => {
        const cmds = commandsBySection[sectionTitle].slice(0, maxPerSection);
        response += `<div class="section-title">📁 ${sectionTitle}</div>`;
        cmds.forEach(cmd => {
          response += `<div class="cmd-item"><span class="cmd-name">${cmd.command}</span><span class="cmd-desc">${cmd.description}</span></div>`;
        });
        if (commandsBySection[sectionTitle].length > maxPerSection) {
          response += `<p style="color:var(--text-muted);font-size:0.8rem;margin-top:0.3rem">... و ${commandsBySection[sectionTitle].length - maxPerSection} أوامر أخرى</p>`;
        }
      });
    }

    if (totalRules > 0) {
      response += `<p style="margin-top:0.8rem"><strong>📜 قوانين</strong> <span class="count-badge">${totalRules}</span></p>`;
      const sections = Object.keys(rulesBySection);
      sections.forEach(sectionTitle => {
        const rules = rulesBySection[sectionTitle].slice(0, maxPerSection);
        response += `<div class="section-title">📁 ${sectionTitle}</div>`;
        rules.forEach(rule => {
          const match = rule.match(/^([A-Z0-9\-]+)\s*=\s*(.+)$/);
          if (match) {
            response += `<div class="rule-item"><span class="rule-code">${match[1]}</span> = ${match[2]}</div>`;
          } else {
            response += `<div class="rule-item">${rule}</div>`;
          }
        });
      });
    }

    const totalResults = totalCommands + totalRules;
    if (totalResults > 10) {
      response += `<p style="margin-top:0.8rem;color:var(--text-muted);font-size:0.85rem">💡 هناك ${totalResults - 10} نتائج أخرى. استخدم البحث في الموقع لعرض الكل.</p>`;
    }

    return response;
  }
}

const dataManager = new DataManager();
