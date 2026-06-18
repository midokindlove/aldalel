// ============================================
// الدليل - قاعدة البيانات
// MTA Commands Guide - Data
// ============================================

const defaultData = {
  // ===== الصفحة الرئيسية =====
  home: {
    shortcuts: [
      { title: "رابط الديسكورد", url: "https://discord.gg/your-server", icon: "💬" },
      { title: "القوانين", page: "rules", icon: "" },
      { title: "الأوامر", page: "commands", icon: "⌨️" },
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

  // ===== الأوامر - 38 قسم =====
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
      {
        id: "intro-1",
        url: "https://via.placeholder.com/400x300/00ff88/0a0e27?text=Intro+1",
        caption: "انترو السيرفر الرئيسي"
      },
      {
        id: "intro-2",
        url: "https://via.placeholder.com/400x300/00ff88/0a0e27?text=Intro+2",
        caption: "انترو الأحداث"
      },
      {
        id: "intro-3",
        url: "https://via.placeholder.com/400x300/00ff88/0a0e27?text=Intro+3",
        caption: "انترو المسابقات"
      }
    ]
  },

  // ===== الرد التلقائي الذكي =====
  autoReplies: [
    {
      keywords: ["مرحبا", "اهلا", "السلام", "هلا", "هاي", "hello", "hi", "مرحباً"],
      reply: "أهلاً وسهلاً بك! 👋\nكيف يمكنني مساعدتك؟\n\nيمكنك سؤالي عن:\n• الأوامر (اكتب اسم القسم مثل: فاكشن، سيارات، شات)\n• القوانين\n• أي شيء آخر!"
    },
    {
      keywords: ["شكرا", "شكراً", "thanks", "thank you", "مشكور", "تسلم"],
      reply: "عفواً! 😊\nسعيد بمساعدتك. إذا احتجت أي شيء آخر، أنا هنا!"
    },
    {
      keywords: ["فاكشن", "factions", "faction", "عصابة", "فاكشنات"],
      reply: "📋 أوامر الفاكشنات:\n\n• Showfactions = رؤية قائمة الفاكشنات\n• makefaction = صنع فاكشن جديد\n• delfaction = حذف فاكشن\n• setfactionrank = رفع رتبة لاعب\n• setfactionleader = دخول فاكشن على شكل ليدر\n• respawnfaction = رسبنة سيارات فاكشن\n• rf = صنع/حذف راديو لفاكشن\n\n📜 قوانين متعلقة:\n• TK = تقتل شخص من الفاكشن اللي انت فيه\n• Dos = ديوتي بدون شارة"
    },
    {
      keywords: ["سيارة", "سيارات", "vehicles", "car", "cars", "مركبة"],
      reply: "🚗 أوامر السيارات:\n\n• veh = صنع سيارة مؤقتة\n• Fixveh = اصلاح سيارة\n• delveh [id] = حذف سيارة\n• Setvehplate = تغيير لوحة السيارة\n• setcolor = تعديل الوان\n• blowveh = تفجير سيارة\n• respawnall = رسبنة جميع السيارات\n• apark = بارك لسيارة دون ركوبها\n\n💡 استخدم 'Nearbyvehicles' لمعرفة ايدهات السيارات حولك"
    },
    {
      keywords: ["شات", "chat", "رسالة", "تحدث", "كلام"],
      reply: "💬 أوامر الشات:\n\n• ooc = التحدث في الشات العام\n• w = تهمس لشخص\n• pm = رسالة خاصة\n• ho = رسالة بدون ظهور اسمك\n• Clearchat = مسح الشات\n• showchat = اخفاء/اظهار الشات\n• f = شات الوظيفة\n• fl = شات الليدرات"
    },
    {
      keywords: ["سلاح", "weapons", "weapon", "gun"],
      reply: "🔫 أوامر السلاح:\n\n• Makegun = صنع سلاح\n• Makeammo = صنع رصاص\n• Disarm = حذف جميع اسلحة لاعب\n• gunlist = معرفة معلومات عن السلاح\n• gunmaker = فتح لوحة الاسلحة\n\n⚠️ استخدم الأسلحة وفقاً للقوانين!"
    },
    {
      keywords: ["عقاب", "punishments", "باند", "ban", "سجن", "jail", "kick", "طرد", "punish"],
      reply: "⚖️ أوامر العقاب:\n\n• Jail = سجن لاعب\n• Pkick = طرد اللاعب\n• pban = حظر لمدة محددة\n• warn = تحذير (3 = باند)\n• ck = اعطاء سي كي\n• Slap = اعطاء سلاب\n\n القوانين المهمة:\n• DM = القتل بدون سبب\n• VDM = دعس الاشخاص بالسيارة\n• RDM = قتل متكرر\n• MG = اختلاط المعلومات"
    },
    {
      keywords: ["قوانين", "قانون", "rules", "law", "rule"],
      reply: "📜 القوانين الأساسية:\n\n• DM = القتل بدون سبب مقنع\n• VDM = استخدام سيارة ودعس الاشخاص\n• RDM = قتل نفس الشخص بدون توقف\n• MG = اختلاط الشات او المعلومات\n• PG = تكون خارق الطبيعة\n• CK = موت شخصية او اعدام\n• RK = قتل الانتقام\n• MA = تعدد الحسابات\n\n📖 راجع صفحة القوانين للتفاصيل الكاملة!"
    },
    {
      keywords: ["انتقال", "teleport", "goto", "نقل"],
      reply: "🌀 أوامر الانتقال:\n\n• Goto = الانتقال الى شخص\n• Gethere = سحب شخص\n• Gotoplace = الانتقال الى مكان\n• Gotoveh = الانتقال الى سيارة\n• gotoint = انتقال لانترو\n• gotogate = انتقال لبوابة\n\n الأماكن: igs, bank, ls, lv, sf, ash, dmv, sfpd, cityhall"
    },
    {
      keywords: ["انترو", "interiors", "منزل", "بيت", "house", "home", "داخلية"],
      reply: "🏠 أوامر الانترو (المنازل):\n\n• addint = صنع انترو جديد\n• Delint = حذف انترو\n• Setintprice = تغيير سعر البيت\n• sellproperty = بيع منزلك للسيرفر\n• Getkey = عمل نسخة مفتاح\n• togint = غلق البيت\n\n💡 استخدم 'Nearbyints' لمعرفة ايدي البيت القريب"
    },
    {
      keywords: ["شوب", "shops", "shop", "بائع", "محل", "store"],
      reply: "🏪 أوامر البائعين:\n\n• Makeshop = صنع شوب\n• Delshop = حذف شوب\n• Moveshop = نقل بائع\n• makefuel = صنع بائع بنزين\n• restock = تعبئة المحل\n\n💡 استخدم 'Nearbyshops' لمعرفة ايدي الشوب القريب"
    },
    {
      keywords: ["ريبورت", "reports", "report", "بلاغ", "شكوى"],
      reply: "📝 أوامر الريبورت:\n\n• Ar = قبول ريبورت\n• Ri = قراءة ريبورت\n• Di = رفع ريبورت\n• Cr = قفل ريبورت\n• FR = الغاء ريبورت\n• Getpoint = معرفة نقاطك\n\n⚠️ تأكد من وجود دليل قبل رفع ريبورت!"
    },
    {
      keywords: ["تخفي", "stealth", "hide", "اختفاء", "invis"],
      reply: "👻 أوامر التخفي:\n\n• hideadmin = تشغيل شارة بدون ظهور\n• Disappear = اخفاء نفسك\n• Supervise = اختفاء جزئي\n• freecam = تخفي واختراق جدران\n• Fakeme = ظهور باسم فيك\n\n⚠️ استخدم التخفي بمسؤولية!"
    },
    {
      keywords: ["راديو", "radio"],
      reply: "📻 أوامر الراديو:\n\n• tuneradio = دخول تردد راديو\n• toggleradio = قفل/تشغيل الراديو\n• rf = صنع/حذف راديو لفاكشن\n• srd = قفل جميع راديو السيارات\n• setvol 100 = التحكم بالصوت"
    },
    {
      keywords: ["اسعاف", "ems", "صحة", "doctor", "طبيب", "علاج"],
      reply: "🏥 أوامر الاسعاف:\n\n• cpr = حركة انعاش\n• mrevive = امر انعاش\n• heal 100 = اعطاء دم\n• backup = عمل باك اب\n\n💡 استخدم 'Revive' لإنعاش شخص"
    },
    {
      keywords: ["شرطة", "police", "جندي", "military", "عسكري", "cop"],
      reply: " أوامر الشرطة/الجندي:\n\n• ticket = اعطاء مخالفات\n• takelicense = سحب رخصة\n• fingerprint = تشوف بصمة الشخص\n• mdc = قائمة البلاغات\n• throwspikes = رمي الاشواك\n• togspeedcamera 120 = ردار السرعة\n• handsup = امر الاستسلام"
    },
    {
      keywords: ["صحافة", "press", "صحفي", "بث", "tv", "camera"],
      reply: "📰 أوامر الصحافة:\n\n• interview = اعطاء ميك\n• starttv = عمل بث مباشر\n• endtv = انهاء البث\n• movetv = تحريك الكاميرا\n• i = للتحدث"
    },
    {
      keywords: ["محكمة", "court", "قاضي", "زواج", "marry", "طلاق", "divorce"],
      reply: "⚖️ أوامر المحكمة:\n\n• changename = تغيير اسم\n• marry = امر زواج\n• divorce = امر طلاق"
    },
    {
      keywords: ["مطار", "airport", "طائرة", "plane", "fly"],
      reply: "✈️ أوامر المطار:\n\n• fuel = طلب تعبئة بنزين للطائرة\n• air = التحدث في الراديو الجوي\n• maps = رؤية تخطيط المطارات"
    },
    {
      keywords: ["صيانة", "mechanic", "ميكانيكي", "تصليح", "fix"],
      reply: "🔧 أوامر الصيانة:\n\n• towbike = سحب دراجة\n• veh = تصليح سيارة\n• Edveh = التعديل على السيارة\n\n💡 يمكنك أيضاً استخدام 'Fixveh' لإصلاح سريع"
    },
    {
      keywords: ["مود", "mode", "resource", "res", "script"],
      reply: "️ أوامر المود:\n\n• startres = تشغيل مود\n• stopres = ايقاف مود\n• restartres = عمل ريستارت لمود\n• mods = اظهار مود السيارات"
    },
    {
      keywords: ["ديسكورد", "discord", "discord.gg"],
      reply: "💬 رابط الديسكورد:\nhttps://discord.gg/your-server\n\nانضم للتواصل مع المجتمع!"
    },
    {
      keywords: ["سيرفر", "server", "ip", "اي بي", "دخول", "انضم"],
      reply: "🎮 للدخول للسيرفر:\n1. افتح MTA:SA\n2. اضغط Quick Connect\n3. اكتب IP السيرفر\n\nأو انضم عبر الديسكورد للحصول على الرابط!"
    },
    {
      keywords: ["مساعدة", "help", "help me", "مساعد", "كيف", "how"],
      reply: " أنا هنا لمساعدتك!\n\nيمكنك سؤالي عن:\n• أي قسم أوامر (فاكشن، سيارات، شات...)\n• القوانين ومعانيها\n• كيفية استخدام أمر معين\n\n💡 جرب كتابة اسم القسم مباشرة!"
    },
    {
      keywords: ["ادمن", "admin", "إدارة", "مسؤول"],
      reply: "👑 للتواصل مع الإدارة:\n\n• استخدم /report في اللعبة\n• أو انضم للديسكورد\n• أو راسلنا مباشرة\n\n⚠️ الاحترام متبادل!"
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
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('خطأ في تحميل البيانات:', e);
        return JSON.parse(JSON.stringify(defaultData));
      }
    }
    return JSON.parse(JSON.stringify(defaultData));
  }

  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      return true;
    } catch (e) {
      console.error('خطأ في حفظ البيانات:', e);
      return false;
    }
  }

  resetData() {
    this.data = JSON.parse(JSON.stringify(defaultData));
    this.saveData();
  }

  exportData() {
    return JSON.stringify(this.data, null, 2);
  }

  importData(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      this.data = imported;
      this.saveData();
      return true;
    } catch (e) {
      console.error('خطأ في استيراد البيانات:', e);
      return false;
    }
  }

  // ===== CRUD للقوانين =====
  addRuleSection(title, keywords = []) {
    const id = 'rules-' + Date.now();
    this.data.rules.sections.push({ id, title, keywords, items: [] });
    this.saveData();
    return id;
  }

  addRuleItem(sectionId, ruleText) {
    const section = this.data.rules.sections.find(s => s.id === sectionId);
    if (section) {
      section.items.push(ruleText);
      this.saveData();
      return true;
    }
    return false;
  }

  deleteRuleSection(sectionId) {
    this.data.rules.sections = this.data.rules.sections.filter(s => s.id !== sectionId);
    this.saveData();
  }

  deleteRuleItem(sectionId, itemIndex) {
    const section = this.data.rules.sections.find(s => s.id === sectionId);
    if (section && section.items[itemIndex]) {
      section.items.splice(itemIndex, 1);
      this.saveData();
      return true;
    }
    return false;
  }

  // ===== CRUD للأوامر =====
  addCommandSection(title, keywords = []) {
    const id = 'cmd-' + Date.now();
    this.data.commands.sections.push({ id, title, keywords, commands: [] });
    this.saveData();
    return id;
  }

  addCommand(sectionId, command, description) {
    const section = this.data.commands.sections.find(s => s.id === sectionId);
    if (section) {
      section.commands.push({ command, description });
      this.saveData();
      return true;
    }
    return false;
  }

  deleteCommandSection(sectionId) {
    this.data.commands.sections = this.data.commands.sections.filter(s => s.id !== sectionId);
    this.saveData();
  }

  deleteCommand(sectionId, commandIndex) {
    const section = this.data.commands.sections.find(s => s.id === sectionId);
    if (section && section.commands[commandIndex]) {
      section.commands.splice(commandIndex, 1);
      this.saveData();
      return true;
    }
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

  // ===== CRUD للانترو =====
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

  // ===== الصفحة الرئيسية =====
  addShortcut(title, url, icon) {
    this.data.home.shortcuts.push({ title, url, icon });
    this.saveData();
  }

  deleteShortcut(index) {
    if (this.data.home.shortcuts[index]) {
      this.data.home.shortcuts.splice(index, 1);
      this.saveData();
      return true;
    }
    return false;
  }

  // ===== الرد التلقائي =====
  addAutoReply(keywords, reply) {
    this.data.autoReplies.push({ keywords, reply });
    this.saveData();
  }

  deleteAutoReply(index) {
    if (this.data.autoReplies[index]) {
      this.data.autoReplies.splice(index, 1);
      this.saveData();
      return true;
    }
    return false;
  }

  // ===== البحث الذكي =====
  search(query) {
    const results = [];
    const q = query.toLowerCase().trim();
    
    if (!q) return results;

    // البحث في الأوامر
    this.data.commands.sections.forEach(section => {
      const sectionMatch = section.title.toLowerCase().includes(q) ||
                          section.keywords.some(k => k.toLowerCase().includes(q));
      
      section.commands.forEach(cmd => {
        if (sectionMatch || 
            cmd.command.toLowerCase().includes(q) || 
            cmd.description.toLowerCase().includes(q)) {
          results.push({
            type: 'command',
            section: section.title,
            sectionId: section.id,
            data: cmd
          });
        }
      });
    });

    // البحث في القوانين
    this.data.rules.sections.forEach(section => {
      const sectionMatch = section.title.toLowerCase().includes(q) ||
                          section.keywords.some(k => k.toLowerCase().includes(q));
      
      section.items.forEach(item => {
        if (sectionMatch || item.toLowerCase().includes(q)) {
          results.push({
            type: 'rule',
            section: section.title,
            data: item
          });
        }
      });
    });

    return results;
  }

  // ===== الرد التلقائي الذكي =====
  getAutoReply(message) {
    const msg = message.toLowerCase().trim();
    
    if (!msg) return "مرحباً! كيف يمكنني مساعدتك؟";

    // البحث عن أفضل تطابق
    let bestMatch = null;
    let bestScore = 0;

    for (let autoReply of this.data.autoReplies) {
      for (let keyword of autoReply.keywords) {
        const kw = keyword.toLowerCase();
        
        // تطابق تام
        if (msg === kw) {
          return autoReply.reply;
        }
        
        // يحتوي على الكلمة
        if (msg.includes(kw)) {
          const score = kw.length;
          if (score > bestScore) {
            bestScore = score;
            bestMatch = autoReply;
          }
        }
      }
    }

    if (bestMatch) {
      return bestMatch.reply;
    }

    // إذا لم يجد تطابق، ابحث في الأوامر والقوانين
    const searchResults = this.search(msg);
    
    if (searchResults.length > 0) {
      const limited = searchResults.slice(0, 5);
      let response = `🔍 وجدت ${searchResults.length} نتيجة:\n\n`;
      
      limited.forEach((result, index) => {
        if (result.type === 'command') {
          response += `${index + 1}. ${result.data.command} - ${result.data.description}\n`;
        } else {
          response += `${index + 1}. ${result.data}\n`;
        }
      });
      
      if (searchResults.length > 5) {
        response += `\n... و ${searchResults.length - 5} نتائج أخرى`;
      }
      
      return response;
    }

    return "عذراً، لم أفهم سؤالك. 🤔\n\nجرب:\n• كتابة اسم قسم (فاكشن، سيارات، شات...)\n• سؤال عن قانون معين\n• طلب مساعدة";
  }
}

// إنشاء نسخة عامة
const dataManager = new DataManager();
