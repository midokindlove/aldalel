// ============================================
// قاعدة بيانات الموقع - MTA Commands
// ============================================

// البيانات الافتراضية
const defaultData = {
  // الصفحة الرئيسية
  home: {
    shortcuts: [
      { title: "رابط الديسكورد", url: "https://discord.gg/your-server", icon: "💬" },
      { title: "القوانين", page: "rules", icon: "📜" },
      { title: "الأوامر", page: "commands", icon: "⌨️" },
      { title: "الانترو", page: "intros", icon: "🎬" }
    ],
    welcomeMessage: "مرحباً بك في موقع أوامر MTA - سان أندرياس"
  },

  // القوانين
  rules: {
    sections: [
      {
        id: "rules-1",
        title: "القوانين العامة",
        items: [
          "احترام جميع اللاعبين والإداريين",
          "عدم السب أو الشتم في الشات العام",
          "عدم الإزعاج المتكرر في الشات",
          "عدم الإعلان عن سيرفرات أخرى"
        ]
      },
      {
        id: "rules-2",
        title: "قوانين اللعب",
        items: [
          "عدم استخدام الغش أو الهاكات",
          "عدم استغلال الأخطاء البرمجية (Bugs)",
          "عدم القتل بدون سبب (RDM)",
          "عدم سرقة السيارات من اللاعبين (VDM)"
        ]
      },
      {
        id: "rules-3",
        title: "قوانين الأدمن",
        items: [
          "الإداري يجب أن يكون عادلاً مع الجميع",
          "عدم استخدام الصلاحيات بشكل خاطئ",
          "الرد على استفسارات اللاعبين بسرعة",
          "تسجيل جميع العقوبات في السجل"
        ]
      }
    ]
  },

  // الأوامر
  commands: {
    sections: [
      {
        id: "cmd-1",
        title: "أوامر الإدارة",
        commands: [
          {
            command: "/kick [player] [reason]",
            description: "طرد لاعب من السيرفر"
          },
          {
            command: "/ban [player] [reason] [duration]",
            description: "حظر لاعب من السيرفر"
          },
          {
            command: "/mute [player] [duration]",
            description: "كتم لاعب في الشات"
          },
          {
            command: "/slap [player]",
            description: "صفع لاعب (إلحاق ضرر)"
          },
          {
            command: "/freeze [player]",
            description: "تجميد لاعب في مكانه"
          }
        ]
      },
      {
        id: "cmd-2",
        title: "أوامر اللاعبين",
        commands: [
          {
            command: "/report [player] [reason]",
            description: "الإبلاغ عن لاعب"
          },
          {
            command: "/help",
            description: "عرض قائمة المساعدة"
          },
          {
            command: "/stats",
            description: "عرض إحصائياتك"
          },
          {
            command: "/money",
            description: "عرض رصيدك المالي"
          },
          {
            command: "/heal",
            description: "استعادة الصحة"
          }
        ]
      },
      {
        id: "cmd-3",
        title: "أوامر المركبات",
        commands: [
          {
            command: "/car [vehicle_id]",
            description: "استدعاء مركبة"
          },
          {
            command: "/fix",
            description: "إصلاح المركبة"
          },
          {
            command: "/flip",
            description: "قلب المركبة إذا انقلبت"
          },
          {
            command: "/destroy",
            description: "تدمير المركبة الحالية"
          }
        ]
      },
      {
        id: "cmd-4",
        title: "أوامر التواصل",
        commands: [
          {
            command: "/pm [player] [message]",
            description: "رسالة خاصة للاعب"
          },
          {
            command: "/me [action]",
            description: "عرض حركة أو فعل"
          },
          {
            command: "/shout [message]",
            description: "الصراخ (يظهر بحجم كبير)"
          }
        ]
      }
    ]
  },

  // الانترو
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

  // بيانات الرد التلقائي (للشات)
  autoReplies: [
    { keywords: ["كيف", "انضم", "ادخل"], reply: "للدخول للسيرفر، افتح MTA واكتب IP السيرفر أو اضغط على الرابط في الصفحة الرئيسية" },
    { keywords: ["قوانين", "قانون"], reply: "يمكنك الاطلاع على القوانين من صفحة القوانين في القائمة الرئيسية" },
    { keywords: ["أوامر", "امر", "command"], reply: "جميع الأوامر متوفرة في صفحة الأوامر مقسمة حسب النوع" },
    { keywords: ["ادمن", "إدارة", "مساعدة"], reply: "يمكنك التواصل مع الإدارة عبر الديسكورد أو استخدام /report في اللعبة" },
    { keywords: ["سيرفر", "ip", "اي بي"], reply: "رابط السيرفر متوفر في الصفحة الرئيسية" },
    { keywords: ["ديسكورد", "discord"], reply: "رابط الديسكورد: https://discord.gg/your-server" },
    { keywords: ["شكرا", "شكراً", "thanks"], reply: "عفواً! سعيد بمساعدتك 😊" },
    { keywords: ["مرحبا", "اهلا", "السلام"], reply: "أهلاً وسهلاً بك! كيف يمكنني مساعدتك؟" }
  ]
};

// ============================================
// نظام إدارة البيانات
// ============================================

class DataManager {
  constructor() {
    this.storageKey = 'mta_website_data';
    this.data = this.loadData();
  }

  // تحميل البيانات من localStorage أو استخدام الافتراضية
  loadData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('خطأ في تحميل البيانات:', e);
        return { ...defaultData };
      }
    }
    return { ...defaultData };
  }

  // حفظ البيانات في localStorage
  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      return true;
    } catch (e) {
      console.error('خطأ في حفظ البيانات:', e);
      return false;
    }
  }

  // إعادة تعيين البيانات للافتراضية
  resetData() {
    this.data = JSON.parse(JSON.stringify(defaultData));
    this.saveData();
  }

  // تصدير البيانات كـ JSON
  exportData() {
    return JSON.stringify(this.data, null, 2);
  }

  // استيراد البيانات من JSON
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

  // ============================================
  // عمليات CRUD للقوانين
  // ============================================

  addRuleSection(title) {
    const id = 'rules-' + Date.now();
    this.data.rules.sections.push({
      id,
      title,
      items: []
    });
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

  // ============================================
  // عمليات CRUD للأوامر
  // ============================================

  addCommandSection(title) {
    const id = 'cmd-' + Date.now();
    this.data.commands.sections.push({
      id,
      title,
      commands: []
    });
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

  // ============================================
  // عمليات CRUD للانترو
  // ============================================

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

  // ============================================
  // عمليات الصفحة الرئيسية
  // ============================================

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

  // ============================================
  // عمليات الرد التلقائي
  // ============================================

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

  // ============================================
  // البحث
  // ============================================

  search(query) {
    const results = [];
    const q = query.toLowerCase();

    // البحث في الأوامر
    this.data.commands.sections.forEach(section => {
      section.commands.forEach(cmd => {
        if (cmd.command.toLowerCase().includes(q) || 
            cmd.description.toLowerCase().includes(q)) {
          results.push({
            type: 'command',
            section: section.title,
            data: cmd
          });
        }
      });
    });

    // البحث في القوانين
    this.data.rules.sections.forEach(section => {
      section.items.forEach(item => {
        if (item.toLowerCase().includes(q)) {
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

  // ============================================
  // الرد التلقائي للشات
  // ============================================

  getAutoReply(message) {
    const msg = message.toLowerCase();
    
    for (let autoReply of this.data.autoReplies) {
      for (let keyword of autoReply.keywords) {
        if (msg.includes(keyword.toLowerCase())) {
          return autoReply.reply;
        }
      }
    }
    
    return "عذراً، لم أفهم سؤالك. جرب البحث في صفحات الموقع أو تواصل مع الإدارة.";
  }
}

// إنشاء نسخة عامة من DataManager
const dataManager = new DataManager();
