/**
 * ABC IT Lab — Bilingual i18n Engine
 * Supports Arabic (RTL) and English (LTR)
 * Language is persisted in localStorage across all pages.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
   * TRANSLATION DICTIONARY
   * ───────────────────────────────────────────── */
  var translations = {
    ar: {
      /* ── Language switcher ── */
      'lang.switch': 'EN',
      'lang.switch.aria': 'Switch to English',

      /* ── Navigation ── */
      'nav.toggle': 'فتح القائمة',
      'nav.close': 'إغلاق القائمة',
      'nav.panel.label': 'قائمة الموقع',
      'nav.panel.title': 'ABC IT Lab',
      'nav.panel.subtitle': 'القائمة',
      'nav.home': 'الرئيسية',
      'nav.services': 'الخدمات',
      'nav.academy': 'أكاديمية ABC IT Lab',
      'nav.about': 'من نحن',
      'nav.pricing': 'الأسعار',
      'nav.contact': 'تواصل معنا',
      'nav.cta': 'ابدأ مشروعك معنا',

      /* ── Footer ── */
      'footer.brand': 'مختبر ABC لتقنية المعلومات',
      'footer.tagline': 'مختبر ABC لتقنية المعلومات — حلول رقمية عملية تساعد المشاريع على النمو بثقة.',
      'footer.whatsapp': 'واتساب مباشر',
      'footer.cta.text': 'جاهز لتطوير مشروعك؟ ابدأ الآن.',
      'footer.contact.btn': 'تواصل معنا',
      'footer.services.btn': 'اطلع على الخدمات',
      'footer.quicklinks': 'روابط سريعة',
      'footer.services': 'الخدمات',
      'footer.branding': 'العلامة التجارية',
      'footer.website': 'الموقع الإلكتروني',
      'footer.marketing': 'التسويق والنمو',
      'footer.specialists': 'للأخصائيين',
      'footer.specialists.text': 'نعمل مع كتّاب، مسوّقين، ومديري مشاريع لتنفيذ العمل لعملائنا.',
      'footer.join': 'انضم كشريك مستقل',
      'footer.dashboard': 'لوحة المهام',
      'footer.trust': 'الثقة والدعم',
      'footer.quote': 'طلب عرض سريع',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'الشروط والأحكام',
      'footer.academy.title': 'أكاديمية ABC IT Lab',
      'footer.academy.text': 'دروس عملية قصيرة (5–7 دقائق) تساعدك على اتخاذ قرارات أفضل وبناء عمل أقوى.',
      'footer.browse': 'تصفح الدروس',
      'footer.latest': 'أحدث الدروس',
      'footer.categories': 'الفئات',
      'footer.cat.basics': 'الأساسيات',
      'footer.cat.finance': 'الإدارة المالية',
      'footer.cat.metrics': 'البيانات والقياس',
      'footer.cat.ops': 'التشغيل والإمداد',
      'footer.cat.decisions': 'العمليات واتخاذ القرار',
      'footer.cat.growth': 'التسويق والنمو',
      'footer.quicklinks2': 'روابط سريعة',
      'footer.why.academy': 'لماذا الأكاديمية؟',
      'footer.lesson.method': 'كيف نختار الدروس؟',
      'footer.suggest': 'اقترح درسًا',
      'footer.copyright': '© 2025 مختبر ABC لتقنية المعلومات. جميع الحقوق محفوظة.',

      /* ── Homepage (index.html) ── */
      'home.eyebrow': 'حلول رقمية عملية للأعمال',
      'home.hero.title': 'نبني حضورًا رقميًا <span class="hero-highlight">يعكس قيمة عملك</span>',
      'home.hero.subtitle': 'من الهوية البصرية إلى الموقع والحضور الرقمي، نساعدك على تقديم مشروعك بصورة أكثر وضوحًا واحترافًا.',
      'home.cta1': 'ابدأ مشروعك معنا',
      'home.cta2': 'استعرض خدماتنا',
      'home.service.line1': 'هوية بصرية',
      'home.service.line2': 'موقع احترافي',
      'home.service.line3': 'حضور رقمي',
      'home.service.line4': 'استشارات عملية',
      'home.services.title': 'خدمات مصممة لتخدم نمو مشروعك',
      'home.services.subtitle': 'سواء كنت تبدأ من الصفر أو تريد تطوير مشروعك الحالي، نوفر لك ما تحتاجه.',
      'home.card1.title': 'الهوية البصرية',
      'home.card1.text': 'نصمم هوية واضحة ومميزة تعكس شخصية مشروعك، من الشعار إلى الألوان والأسلوب البصري.',
      'home.card1.link': 'اعرف المزيد',
      'home.card2.title': 'تصميم وتطوير المواقع',
      'home.card2.text': 'نبني مواقع عربية احترافية سريعة وواضحة، تساعد الزائر على التواصل أو الشراء بسهولة.',
      'home.card2.link': 'اعرف المزيد',
      'home.card3.title': 'التسويق والنمو',
      'home.card3.text': 'نساعدك في تحسين ظهورك وتحويل الاهتمام إلى فرص حقيقية لنمو مشروعك.',
      'home.card3.link': 'اعرف المزيد',
      'home.card4.title': 'الاستشارات',
      'home.card4.text': 'نوفر لك توجيهاً واضحاً ومباشراً يساعدك على اتخاذ القرار الصحيح في الوقت المناسب.',
      'home.card4.link': 'اعرف المزيد',
      'home.cta.title': 'جاهز لتطوير مشروعك؟',
      'home.cta.text': 'دعنا نحول فكرتك إلى حضور احترافي يساعدك على جذب العملاء وبناء الثقة.',
      'home.cta.btn': 'ابدأ مشروعك معنا',
      'home.meta.title': 'مختبر ABC لتقنية المعلومات | حلول رقمية ذكية لتنمية أعمالك',
      'home.meta.desc': 'مختبر ABC لتقنية المعلومات — نصمم ونطور حلولاً تقنية تخدم مشروعك: هوية رقمية، موقع احترافي، وحلول تقنية عملية.',
      'home.og.title': 'مختبر ABC لتقنية المعلومات | حلول رقمية ذكية لتنمية أعمالك',
      'home.og.desc': 'نساعدك على تطوير مشروعك من خلال تصميم الهوية، بناء المواقع، وتحسين حضورك الرقمي بأسلوب واضح واحترافي.',

      /* ── About (about.html) ── */
      'about.ph.title': 'من نحن',
      'about.ph.subtitle': 'فريق يعمل على مساعدة أصحاب المشاريع والأعمال العربية في بناء حضور احترافي وواضح',
      'about.story.title': 'من نحن',
      'about.story.p1': 'نحن فريق يعمل على مساعدة أصحاب المشاريع والأعمال العربية في بناء حضور احترافي وواضح.',
      'about.story.p2': 'نؤمن أن النجاح لا يحتاج إلى تعقيد، بل إلى فهم جيد، تنفيذ صحيح، ورسالة تصل للعميل بسهولة.',
      'about.vision.title': 'رؤيتنا',
      'about.vision.text': 'أن نكون شريكًا موثوقًا لكل صاحب مشروع عربي يريد أن يبني عملاً محترفًا، حديثًا، وقابلًا للنمو.',
      'about.mission.title': 'رسالتنا',
      'about.mission.text': 'أن نقدم خدمات تساعد المشاريع على الظهور بشكل أفضل، وبناء ثقة حقيقية مع العملاء، والانطلاق بخطوات مدروسة وواضحة.',
      'about.values.title': 'قيمنا',
      'about.val1.title': 'الوضوح',
      'about.val1.text': 'نشرح لك ما تحتاجه ببساطة بعيدًا عن التعقيد والمصطلحات المربكة.',
      'about.val2.title': 'الجودة',
      'about.val2.text': 'لا نقدم كلامًا عامًا، بل خطوات وخدمات يمكن تنفيذها وتفيد مشروعك فعليًا.',
      'about.val3.title': 'الالتزام',
      'about.val3.text': 'نعرف تحديات أصحاب الأعمال العرب ونصمم الحلول بما يناسب جمهورهم وسوقهم.',
      'about.val4.title': 'التركيز على النتيجة',
      'about.val4.text': 'هدفنا ليس فقط أن يبدو العمل جميلًا، بل أن يكون مفيدًا ويجذب العميل ويخدم النمو.',
      'about.approach.title': 'كيف نعمل معك',
      'about.step1.title': 'نفهم احتياجك',
      'about.step1.text': 'نستمع لك ونحدد معك ما تحتاجه بالضبط قبل أي خطوة',
      'about.step2.title': 'نضع خطة واضحة',
      'about.step2.text': 'نبني خطة بسيطة ومرتبة تناسب مرحلتك وميزانيتك',
      'about.step3.title': 'ننفذ باحترافية',
      'about.step3.text': 'نسلمك العمل بجودة عالية وبمواعيد واضحة ومحددة',
      'about.step4.title': 'نتابع معك',
      'about.step4.text': 'لا نختفي بعد التسليم، بل نتابع معك لضمان نجاح مشروعك',
      'about.cta.title': 'جاهز لتطوير مشروعك؟',
      'about.cta.text': 'دعنا نحول فكرتك إلى حضور احترافي يساعدك على جذب العملاء وبناء الثقة.',
      'about.cta.btn': 'تواصل معنا',
      'about.meta.title': 'من نحن - ABC IT Lab',
      'about.meta.desc': 'تعرف على ABC IT Lab - فريقنا، رؤيتنا، ورسالتنا في دعم رواد الأعمال العرب',
      'about.og.title': 'من نحن - ABC IT Lab',
      'about.og.desc': 'تعرف على فريق ABC IT Lab ورؤيته في تمكين رواد الأعمال من بناء حضور رقمي قوي.',

      /* ── Services (services.html) ── */
      'services.ph.title': 'خدماتنا',
      'services.ph.subtitle': 'خدمات مصممة لتخدم نمو مشروعك، من الهوية البصرية إلى التسويق والاستشارات',
      'services.brand.title': 'الهوية البصرية',
      'services.brand.intro': 'نصمم هوية واضحة ومميزة تعكس شخصية مشروعك، من الشعار إلى الألوان والأسلوب البصري، حتى تظهر أمام عملائك بشكل احترافي ومتناسق.',
      'services.brand.what.h': 'ماذا نصمم لك:',
      'services.brand.what.1': 'شعار احترافي واضح يعبر عن هويتك',
      'services.brand.what.2': 'نظام ألوان وخطوط متناسق يناسب طبيعة مشروعك',
      'services.brand.what.3': 'دليل هوية بصري يوضح كيفية استخدام العناصر',
      'services.brand.what.4': 'قوالب جاهزة للاستخدام في التواصل والتسويق',
      'services.brand.get.h': 'ما ستحصل عليه:',
      'services.brand.get.1': 'شعار بجميع الصيغ والأحجام المطلوبة',
      'services.brand.get.2': 'دليل هوية مختصر وواضح',
      'services.brand.get.3': 'قوالب عروض تقديمية وبطاقات عمل',
      'services.brand.get.4': 'ملفات منظمة جاهزة للطباعة والنشر',
      'services.brand.cta1': 'اطلب الخدمة',
      'services.brand.cta2': 'اطلب عرض سعر',
      'services.web.title': 'تصميم وتطوير المواقع',
      'services.web.intro': 'نبني مواقع عربية احترافية سريعة وواضحة، تساعد الزائر على فهم خدماتك واتخاذ قرار التواصل أو الشراء بسهولة.',
      'services.web.what.h': 'ما نبنيه لك:',
      'services.web.what.1': 'تصميم واضح يعكس هويتك ويسهل التنقل فيه',
      'services.web.what.2': 'صفحات خدمات بمحتوى يجيب على أسئلة العميل',
      'services.web.what.3': 'ربط واتساب والبريد الإلكتروني مع نماذج تواصل',
      'services.web.what.4': 'موقع سريع ومتوافق مع جميع الأجهزة',
      'services.web.get.h': 'ما ستحصل عليه:',
      'services.web.get.1': 'موقع متجاوب يعمل على الجوال والكمبيوتر',
      'services.web.get.2': 'صفحات خدمات واضحة مع أزرار تواصل',
      'services.web.get.3': 'إعداد أساسي لمحركات البحث',
      'services.web.get.4': 'دليل بسيط لإدارة المحتوى بنفسك',
      'services.web.cta1': 'اطلب الخدمة',
      'services.web.cta2': 'اطلب عرض سعر',
      'services.mkt.title': 'التسويق والنمو',
      'services.mkt.intro': 'نساعدك في تحسين ظهورك، تقديم رسالتك بطريقة صحيحة، وتحويل الاهتمام إلى فرص حقيقية لنمو مشروعك.',
      'services.mkt.what.h': 'كيف نساعدك في التسويق:',
      'services.mkt.what.1': 'تحديد جمهورك المستهدف والرسائل التي تصل إليه',
      'services.mkt.what.2': 'بناء خطة محتوى تساعدك على الظهور بشكل منتظم',
      'services.mkt.what.3': 'إدارة حملات إعلانية مع متابعة النتائج',
      'services.mkt.what.4': 'تحسين ظهورك في محركات البحث',
      'services.mkt.get.h': 'ما ستحصل عليه:',
      'services.mkt.get.1': 'خطة تسويق واضحة تناسب مشروعك',
      'services.mkt.get.2': 'محتوى احترافي يعبر عن خدماتك',
      'services.mkt.get.3': 'حملات إعلانية مع تقارير دورية',
      'services.mkt.get.4': 'متابعة ودعم مستمر',
      'services.mkt.cta1': 'اطلب الخدمة',
      'services.mkt.cta2': 'اطلب عرض سعر',
      'services.cta.title': 'جاهز لتطوير مشروعك؟',
      'services.cta.text': 'أخبرنا بما تحتاجه وسنقدم لك الحل الأنسب بشكل واضح وسريع.',
      'services.cta.btn': 'ابدأ الآن',
      'services.meta.title': 'خدماتنا - ABC IT Lab',
      'services.meta.desc': 'حلول ABC IT Lab لرواد الأعمال: بناء الهوية، تطوير المواقع، التسويق الرقمي، واستشارات نمو مستدام',
      'services.og.title': 'خدمات ABC IT Lab لرواد الأعمال',
      'services.og.desc': 'باقات متكاملة لبناء هوية قوية، إطلاق موقع متقن، وقيادة التسويق والنمو لشركتك.',

      /* ── Pricing (pricing.html) ── */
      'pricing.ph.title': 'باقات واضحة تناسب احتياجك',
      'pricing.ph.subtitle': 'اختر الخدمة أو الباقة التي تناسب مرحلة مشروعك، وإذا كنت تحتاج حلاً خاصًا يمكننا تجهيز عرض مناسب لك',
      'pricing.p1.title': 'الباقة الأساسية',
      'pricing.p1.from': 'بداية من',
      'pricing.p1.amount': 'حسب المشروع',
      'pricing.p1.desc': 'مناسبة للمشاريع الجديدة التي تحتاج بداية احترافية وواضحة.',
      'pricing.p1.f1': '✓ هوية بصرية واضحة ومميزة',
      'pricing.p1.f2': '✓ موقع احترافي سهل وواضح',
      'pricing.p1.f3': '✓ ربط واتساب والبريد الإلكتروني',
      'pricing.p1.f4': '✓ إعداد أساسي لمحركات البحث',
      'pricing.p1.f5': '✓ متابعة حتى الإطلاق',
      'pricing.p1.btn': 'اطلب عرض سعر',
      'pricing.p2.badge': 'الأكثر طلباً',
      'pricing.p2.title': 'الباقة المتقدمة',
      'pricing.p2.from': 'بداية من',
      'pricing.p2.amount': 'حسب النطاق',
      'pricing.p2.desc': 'مناسبة للأعمال التي تريد تطوير حضورها والوصول إلى العملاء بشكل أفضل.',
      'pricing.p2.f1': '✓ هوية متكاملة ومواد احترافية',
      'pricing.p2.f2': '✓ موقع متعدد الصفحات مع محتوى',
      'pricing.p2.f3': '✓ خطة تسويق ووصول للعملاء',
      'pricing.p2.f4': '✓ متابعة ودعم لمدة 3 أشهر',
      'pricing.p2.f5': '✓ تقارير دورية للأداء',
      'pricing.p2.f6': '✓ استشارات عملية مستمرة',
      'pricing.p2.btn': 'اطلب عرض سعر',
      'pricing.p3.title': 'حلول مخصصة',
      'pricing.p3.from': 'بداية من',
      'pricing.p3.amount': 'مخصص',
      'pricing.p3.desc': 'إذا كان مشروعك يحتاج إلى متطلبات خاصة، سنبني لك حلاً يناسبك بدقة.',
      'pricing.p3.f1': '✓ تحليل شامل لاحتياجات مشروعك',
      'pricing.p3.f2': '✓ حل مبني خصيصاً لك',
      'pricing.p3.f3': '✓ خطوات وجدول تنفيذ واضح',
      'pricing.p3.f4': '✓ دعم ومتابعة مخصصة',
      'pricing.p3.f5': '✓ مراجعات دورية مع الفريق',
      'pricing.p3.f6': '✓ متابعة حتى تحقيق النتائج',
      'pricing.p3.btn': 'اطلب عرض سعر',
      'pricing.faq.title': 'الأسئلة الشائعة',
      'pricing.faq.q1': 'كيف نحدد السعر المناسب؟',
      'pricing.faq.a1': 'نستمع إلى احتياجاتك ونقيّم حجم المشروع، ثم نشاركك عرضاً واضحاً يشمل المراحل والنتائج المتوقعة.',
      'pricing.faq.q2': 'ما طريقة الدفع؟',
      'pricing.faq.a2': 'دفعة مقدمة لبدء العمل ثم دفعات حسب المراحل. التحويل البنكي والدفع الإلكتروني متاحان.',
      'pricing.faq.q3': 'كم يستغرق التسليم؟',
      'pricing.faq.a3': 'يختلف حسب المشروع. عادةً: الهوية البصرية (7-10 أيام)، الموقع (2-3 أسابيع)، التسويق (خطة شهرية مستمرة).',
      'pricing.cta.title': 'جاهز لتطوير مشروعك؟',
      'pricing.cta.text': 'أخبرنا بما تحتاجه وسنقدم لك عرضاً واضحاً يناسب مشروعك.',
      'pricing.cta.btn': 'اطلب عرض سعر',
      'pricing.meta.title': 'الأسعار - ABC IT Lab',
      'pricing.meta.desc': 'باقات أسعار مرنة من ABC IT Lab: هوية بصرية، مواقع إلكترونية، تسويق رقمي، واستشارات نمو',
      'pricing.og.title': 'باقات الأسعار - ABC IT Lab',
      'pricing.og.desc': 'خطط مدروسة تناسب احتياجات رواد الأعمال مع إمكانية تخصيص كاملة للميزات والدفع.',

      /* ── Contact (contact.html) ── */
      'contact.ph.title': 'تواصل معنا',
      'contact.ph.subtitle': 'أخبرنا بما تحتاجه، وسنعود إليك لمناقشة أفضل حل مناسب لمشروعك',
      'contact.form.title': 'أرسل طلبك',
      'contact.form.subtitle': 'املأ الحقول التالية وسنتواصل معك في أقرب وقت.',
      'contact.label.name': 'الاسم الكامل *',
      'contact.placeholder.name': 'أدخل اسمك الكامل',
      'contact.label.email': 'البريد الإلكتروني *',
      'contact.label.phone': 'رقم الهاتف *',
      'contact.label.service': 'نوع الخدمة *',
      'contact.service.default': 'اختر الخدمة',
      'contact.service.branding': 'الهوية البصرية',
      'contact.service.web': 'تصميم وتطوير الموقع',
      'contact.service.marketing': 'التسويق والنمو',
      'contact.service.consulting': 'استشارات',
      'contact.service.custom': 'حل مخصص',
      'contact.label.message': 'اكتب تفاصيل طلبك *',
      'contact.placeholder.message': 'أخبرنا عن مشروعك واحتياجاتك...',
      'contact.submit': 'إرسال الطلب',
      'contact.note': 'سنتواصل معك في أقرب وقت بعد استلام طلبك.',
      'contact.success': 'شكراً لتواصلك معنا! سنرد على رسالتك خلال 24 ساعة.',
      'contact.info.title': 'معلومات التواصل',
      'contact.email.title': 'البريد الإلكتروني',
      'contact.phone.title': 'الجوال / الواتساب',
      'contact.whatsapp.btn': 'تحدث معنا على واتساب',
      'contact.hours.title': 'ساعات العمل',
      'contact.hours.days': 'السبت - الخميس: 9:00 ص - 6:00 م',
      'contact.hours.fri': 'الجمعة: عطلة',
      'contact.social.title': 'تابعنا على',
      'contact.why.title': 'يمكنك التواصل معنا إذا كنت تريد:',
      'contact.why.1': '✓ إنشاء مشروع جديد من الصفر',
      'contact.why.2': '✓ تطوير مشروع قائم بشكل أفضل',
      'contact.why.3': '✓ استشارة تساعدك على اتخاذ القرار الصحيح',
      'contact.why.4': '✓ الحصول على عرض سعر مناسب',
      'contact.map.title': 'نخدم جميع أنحاء الوطن العربي',
      'contact.map.subtitle': 'نقدم خدماتنا عن بعد لجميع الدول العربية بنفس الجودة والاحترافية',
      'contact.map.text': 'نقدم خدماتنا عن بعد لجميع الدول العربية',
      'contact.meta.title': 'اتصل بنا - ABC IT Lab',
      'contact.meta.desc': 'تواصل مع ABC IT Lab لحجز استشارة مجانية، طلب عرض سعر، أو بدء مشروعك الرقمي بثقة',
      'contact.og.title': 'اتصل بABC IT Lab',
      'contact.og.desc': 'فريق متخصص يرد خلال 24 ساعة لتقديم استشارة ونقاش احتياجات مشروعك.',

      /* ── Academy (academy.html) ── */
      'academy.eyebrow': 'محتوى عملي مبسط',
      'academy.eyebrow.note': 'دروس + أمثلة + خطوات قابلة للتطبيق',
      'academy.hero.title': 'الأكاديمية',
      'academy.hero.subtitle': 'محتوى عملي مبسط يساعدك على فهم أساسيات بناء المشروع، الهوية، التسويق، والعمل الرقمي بطريقة واضحة ومباشرة',
      'academy.method.label': 'منهجية التنفيذ',
      'academy.step.discover': 'اكتشاف',
      'academy.step.strategy': 'استراتيجية',
      'academy.step.execute': 'تنفيذ',
      'academy.step.measure': 'قياس',
      'academy.step.optimize': 'تحسين',
      'academy.cta1': 'اقرأ الدروس',
      'academy.cta2': 'تواصل معنا',
      'academy.metric1.value': '+24',
      'academy.metric1.label': 'درس عملي مبسط',
      'academy.metric2.value': '5-7',
      'academy.metric2.label': 'دقائق لكل درس',
      'academy.metric3.label': 'مناسب للمبتدئ وصاحب الخبرة',
      'academy.panel.ribbon': 'دروس مبسطة',
      'academy.panel.title': 'تعلم وطبق بسهولة',
      'academy.panel.text': 'الدروس مكتوبة بأسلوب سهل حتى يستفيد منها المبتدئ وصاحب الخبرة على حد سواء.',
      'academy.panel.li1.title': 'بناء المشروع',
      'academy.panel.li1.text': 'خطوات واضحة لبناء حضور احترافي من الصفر.',
      'academy.panel.li2.title': 'الهوية والتسويق',
      'academy.panel.li2.text': 'كيف تظهر بشكل احترافي وتصل لعملائك.',
      'academy.panel.li3.title': 'العمل الرقمي',
      'academy.panel.li3.text': 'أساسيات الموقع والتواجد الرقمي بطريقة مبسطة.',
      'academy.categories.title': 'فئات الأكاديمية',
      'academy.categories.subtitle': 'اختر الموضوع الذي يناسبك وابدأ التعلم الآن.',
      'academy.cat1.title': 'الأساسيات',
      'academy.cat1.subtitle': 'ابدأ من هنا إذا كنت في بداية مشروعك.',
      'academy.cat1.desc': 'دروس بسيطة تساعدك على فهم ما تحتاجه لبناء مشروعك بطريقة صحيحة.',
      'academy.cat2.title': 'الهوية البصرية',
      'academy.cat2.subtitle': 'كيف تبني هوية مميزة تعبر عنك.',
      'academy.cat2.desc': 'تعرف على مبادئ تصميم الهوية البصرية وكيف تختار ما يناسب مشروعك.',
      'academy.cat3.title': 'الموقع الإلكتروني',
      'academy.cat3.subtitle': 'ما يجب أن يحتويه موقعك لجذب العملاء.',
      'academy.cat3.desc': 'دروس عملية حول بناء موقع واضح يساعد الزائر على التواصل معك.',
      'academy.cat4.title': 'التسويق والنمو',
      'academy.cat4.subtitle': 'كيف تصل لعملائك وتنمو مشروعك.',
      'academy.cat4.desc': 'أساسيات التسويق الرقمي وكيف تبني حضورًا يجذب العملاء المناسبين.',
      'academy.lessons.title': 'تصفح الدروس',
      'academy.lessons.subtitle': 'الدروس مكتوبة بأسلوب سهل حتى يستفيد منها المبتدئ وصاحب الخبرة.',
      'academy.search.placeholder': 'ابحث في الدروس',
      'academy.search.aria': 'بحث في الدروس',
      'academy.empty': 'لا توجد دروس مطابقة حالياً. جرّب فئة أو كلمة بحث أخرى.',
      'academy.cta.title': 'جاهز لتطوير مشروعك؟',
      'academy.cta.text': 'دعنا نحول فكرتك إلى حضور احترافي يساعدك على جذب العملاء وبناء الثقة.',
      'academy.cta.btn': 'ابدأ الآن',
      'academy.meta.title': 'أكاديمية ABC IT Lab - ABC IT Lab',
      'academy.meta.desc': 'أكاديمية ABC IT Lab تقدم دروساً تطبيقية لمساعدة رواد الأعمال على اتخاذ قرارات دقيقة قبل التنفيذ.',
      'academy.og.title': 'أكاديمية ABC IT Lab',
      'academy.og.desc': 'دروس عملية مبسطة لمساعدة رواد الأعمال على بناء مشاريع ناجحة.',

      /* ── Academy JS UI labels (used by academy.js) ── */
      'academy.js.all': 'الكل',
      'academy.js.count': 'عدد الدروس',
      'academy.js.minutes': 'دق',
      'academy.js.read': 'اقرأ الدرس',
      'academy.js.empty': 'لا توجد دروس مطابقة حالياً. جرّب فئة أو كلمة بحث أخرى.',

      /* ── Apply (apply.html) ── */
      'apply.ph.title': 'ابدأ مشروعك معنا',
      'apply.ph.subtitle': 'املأ النموذج التالي وساعدنا على فهم فكرتك واحتياجك، حتى نقدم لك الحل الأنسب بشكل واضح وسريع',
      'apply.card.title': 'معلومات المشروع',
      'apply.card.lead': 'كلما كانت التفاصيل أوضح، استطعنا تقديم اقتراح أدق وأنسب لمشروعك.',
      'apply.label.name': 'الاسم الكامل *',
      'apply.placeholder.name': 'أدخل اسمك الكامل',
      'apply.label.project': 'اسم المشروع *',
      'apply.placeholder.project': 'مثال: متجر إلكتروني، مطعم، شركة خدمات',
      'apply.label.type': 'نوع النشاط *',
      'apply.placeholder.type': 'أخبرنا عن طبيعة نشاطك ومجال عملك',
      'apply.label.service': 'الخدمة المطلوبة *',
      'apply.placeholder.service': 'مثال: هوية بصرية، موقع، تسويق، استشارة',
      'apply.label.email': 'البريد الإلكتروني *',
      'apply.label.phone': 'رقم الهاتف *',
      'apply.submit': 'إرسال تفاصيل المشروع',
      'apply.copy': 'نسخ التفاصيل',
      'apply.note': 'كلما كانت التفاصيل أوضح، استطعنا تقديم اقتراح أدق وأنسب لمشروعك.',
      'apply.meta.title': 'للأخصائيين - ABC IT Lab',
      'apply.meta.desc': 'انضم كأخصائي مستقل للعمل مع ABC IT Lab في تنفيذ المشاريع الرقمية.',
      'apply.og.title': 'للأخصائيين - ABC IT Lab',
      'apply.og.desc': 'سجّل ككاتب محتوى، مسوّق، أو مدير مشاريع للعمل مع فريق ABC IT Lab.',

      /* ── Privacy (privacy.html) ── */
      'privacy.ph.title': 'سياسة الخصوصية',
      'privacy.ph.subtitle': 'نحترم خصوصيتك ونتعامل مع بياناتك بمسؤولية وشفافية',
      'privacy.meta.title': 'سياسة الخصوصية - ABC IT Lab',
      'privacy.meta.desc': 'سياسة الخصوصية لABC IT Lab - كيف نحمي بياناتك ونستخدمها بشفافية',
      'privacy.og.title': 'سياسة الخصوصية - ABC IT Lab',
      'privacy.og.desc': 'اعرف كيف نحمي بياناتك ونستخدمها للتواصل وتحسين خدماتنا في ABC IT Lab.',

      /* ── Terms (terms.html) ── */
      'terms.ph.title': 'الشروط والأحكام',
      'terms.ph.subtitle': 'استخدامك لموقعنا يعني موافقتك على الشروط التالية',
      'terms.meta.title': 'الشروط والأحكام - ABC IT Lab',
      'terms.meta.desc': 'الشروط والأحكام لABC IT Lab - استخدام الموقع والخدمات',
      'terms.og.title': 'الشروط والأحكام - ABC IT Lab',
      'terms.og.desc': 'تعرف على الشروط التي تحكم استخدام موقع وخدمات ABC IT Lab.'
    },

    en: {
      /* ── Language switcher ── */
      'lang.switch': 'العربية',
      'lang.switch.aria': 'التبديل إلى العربية',

      /* ── Navigation ── */
      'nav.toggle': 'Open Menu',
      'nav.close': 'Close Menu',
      'nav.panel.label': 'Site Navigation',
      'nav.panel.title': 'ABC IT Lab',
      'nav.panel.subtitle': 'Menu',
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.academy': 'ABC IT Lab Academy',
      'nav.about': 'About Us',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact Us',
      'nav.cta': 'Start Your Project',

      /* ── Footer ── */
      'footer.brand': 'ABC IT Lab',
      'footer.tagline': 'ABC IT Lab — Practical digital solutions that help businesses grow with confidence.',
      'footer.whatsapp': 'WhatsApp Direct',
      'footer.cta.text': 'Ready to grow your business? Start now.',
      'footer.contact.btn': 'Contact Us',
      'footer.services.btn': 'View Services',
      'footer.quicklinks': 'Quick Links',
      'footer.services': 'Services',
      'footer.branding': 'Brand Identity',
      'footer.website': 'Website',
      'footer.marketing': 'Marketing & Growth',
      'footer.specialists': 'For Specialists',
      'footer.specialists.text': 'We work with writers, marketers, and project managers to execute work for our clients.',
      'footer.join': 'Join as a Freelance Partner',
      'footer.dashboard': 'Task Dashboard',
      'footer.trust': 'Trust & Support',
      'footer.quote': 'Quick Quote Request',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.academy.title': 'ABC IT Lab Academy',
      'footer.academy.text': 'Practical short lessons (5–7 minutes) to help you make better decisions and build a stronger business.',
      'footer.browse': 'Browse Lessons',
      'footer.latest': 'Latest Lessons',
      'footer.categories': 'Categories',
      'footer.cat.basics': 'Fundamentals',
      'footer.cat.finance': 'Financial Management',
      'footer.cat.metrics': 'Data & Metrics',
      'footer.cat.ops': 'Operations & Supply',
      'footer.cat.decisions': 'Operations & Decision-Making',
      'footer.cat.growth': 'Marketing & Growth',
      'footer.quicklinks2': 'Quick Links',
      'footer.why.academy': 'Why the Academy?',
      'footer.lesson.method': 'How We Choose Lessons',
      'footer.suggest': 'Suggest a Lesson',
      'footer.copyright': '© 2025 ABC IT Lab. All rights reserved.',

      /* ── Homepage (index.html) ── */
      'home.eyebrow': 'Practical Digital Solutions for Business',
      'home.hero.title': 'We Build a Digital Presence <span class="hero-highlight">That Reflects Your Value</span>',
      'home.hero.subtitle': 'From visual identity to website and digital presence, we help you present your business with greater clarity and professionalism.',
      'home.cta1': 'Start Your Project',
      'home.cta2': 'Explore Our Services',
      'home.service.line1': 'Brand Identity',
      'home.service.line2': 'Professional Website',
      'home.service.line3': 'Digital Presence',
      'home.service.line4': 'Practical Consulting',
      'home.services.title': 'Services Designed to Fuel Your Growth',
      'home.services.subtitle': 'Whether you\'re starting from scratch or looking to level up, we provide what you need.',
      'home.card1.title': 'Brand Identity',
      'home.card1.text': 'We design a clear, distinctive identity that reflects your business personality — from logo to colors and visual style.',
      'home.card1.link': 'Learn More',
      'home.card2.title': 'Website Design & Development',
      'home.card2.text': 'We build professional, fast, and clear websites that help visitors connect or purchase with ease.',
      'home.card2.link': 'Learn More',
      'home.card3.title': 'Marketing & Growth',
      'home.card3.text': 'We help improve your visibility and turn interest into real growth opportunities for your business.',
      'home.card3.link': 'Learn More',
      'home.card4.title': 'Consulting',
      'home.card4.text': 'We provide clear, direct guidance that helps you make the right decisions at the right time.',
      'home.card4.link': 'Learn More',
      'home.cta.title': 'Ready to Grow Your Business?',
      'home.cta.text': 'Let us turn your idea into a professional presence that attracts clients and builds trust.',
      'home.cta.btn': 'Start Your Project',
      'home.meta.title': 'ABC IT Lab | Smart Digital Solutions to Grow Your Business',
      'home.meta.desc': 'ABC IT Lab — We design and develop tech solutions for your business: digital identity, professional website, and practical IT solutions.',
      'home.og.title': 'ABC IT Lab | Smart Digital Solutions to Grow Your Business',
      'home.og.desc': 'We help you develop your business through identity design, website building, and digital presence improvement with clarity and professionalism.',

      /* ── About (about.html) ── */
      'about.ph.title': 'About Us',
      'about.ph.subtitle': 'A team dedicated to helping Arab business owners build a professional and clear presence',
      'about.story.title': 'Who We Are',
      'about.story.p1': 'We are a team dedicated to helping Arab business owners build a professional and clear online presence.',
      'about.story.p2': 'We believe success doesn\'t require complexity — just good understanding, correct execution, and a message that reaches the client easily.',
      'about.vision.title': 'Our Vision',
      'about.vision.text': 'To be a trusted partner for every Arab business owner who wants to build a professional, modern, and scalable business.',
      'about.mission.title': 'Our Mission',
      'about.mission.text': 'To deliver services that help businesses appear better, build genuine trust with clients, and move forward with clear, deliberate steps.',
      'about.values.title': 'Our Values',
      'about.val1.title': 'Clarity',
      'about.val1.text': 'We explain what you need simply, without complexity or confusing jargon.',
      'about.val2.title': 'Quality',
      'about.val2.text': 'We don\'t offer generic talk — we provide actionable steps and services that genuinely benefit your business.',
      'about.val3.title': 'Commitment',
      'about.val3.text': 'We understand the challenges of Arab business owners and design solutions tailored to their audience and market.',
      'about.val4.title': 'Results-Driven',
      'about.val4.text': 'Our goal isn\'t just to make things look good — we aim to make them effective, client-attracting, and growth-serving.',
      'about.approach.title': 'How We Work With You',
      'about.step1.title': 'We Understand Your Need',
      'about.step1.text': 'We listen and identify exactly what you need before taking any step',
      'about.step2.title': 'We Build a Clear Plan',
      'about.step2.text': 'We create a simple, structured plan suited to your stage and budget',
      'about.step3.title': 'We Execute Professionally',
      'about.step3.text': 'We deliver the work with high quality and clear, set deadlines',
      'about.step4.title': 'We Follow Through',
      'about.step4.text': 'We don\'t disappear after delivery — we follow up to ensure your project\'s success',
      'about.cta.title': 'Ready to Grow Your Business?',
      'about.cta.text': 'Let us turn your idea into a professional presence that attracts clients and builds trust.',
      'about.cta.btn': 'Contact Us',
      'about.meta.title': 'About Us - ABC IT Lab',
      'about.meta.desc': 'Learn about ABC IT Lab — our team, vision, and mission in supporting Arab entrepreneurs',
      'about.og.title': 'About Us - ABC IT Lab',
      'about.og.desc': 'Learn about ABC IT Lab\'s vision to empower entrepreneurs to build a strong digital presence.',

      /* ── Services (services.html) ── */
      'services.ph.title': 'Our Services',
      'services.ph.subtitle': 'Services designed to fuel your business growth — from brand identity to marketing and consulting',
      'services.brand.title': 'Brand Identity',
      'services.brand.intro': 'We design a clear, distinctive identity that reflects your business personality — from logo to colors and visual style — so you appear professional and consistent to your clients.',
      'services.brand.what.h': 'What We Design for You:',
      'services.brand.what.1': 'A clear, professional logo that expresses your identity',
      'services.brand.what.2': 'A consistent color and typography system suited to your business',
      'services.brand.what.3': 'A brand guide explaining how to use visual elements',
      'services.brand.what.4': 'Ready-to-use templates for communication and marketing',
      'services.brand.get.h': 'What You\'ll Receive:',
      'services.brand.get.1': 'Logo in all required formats and sizes',
      'services.brand.get.2': 'A concise, clear brand guide',
      'services.brand.get.3': 'Presentation templates and business cards',
      'services.brand.get.4': 'Organized files ready for print and publishing',
      'services.brand.cta1': 'Request Service',
      'services.brand.cta2': 'Get a Quote',
      'services.web.title': 'Website Design & Development',
      'services.web.intro': 'We build professional, fast, and clear websites that help visitors understand your services and easily decide to connect or purchase.',
      'services.web.what.h': 'What We Build for You:',
      'services.web.what.1': 'Clean design reflecting your identity that is easy to navigate',
      'services.web.what.2': 'Service pages with content that answers client questions',
      'services.web.what.3': 'WhatsApp and email integration with contact forms',
      'services.web.what.4': 'Fast, responsive website for all devices',
      'services.web.get.h': 'What You\'ll Receive:',
      'services.web.get.1': 'Fully responsive website for mobile and desktop',
      'services.web.get.2': 'Clear service pages with contact buttons',
      'services.web.get.3': 'Basic search engine optimization setup',
      'services.web.get.4': 'Simple guide to manage your content independently',
      'services.web.cta1': 'Request Service',
      'services.web.cta2': 'Get a Quote',
      'services.mkt.title': 'Marketing & Growth',
      'services.mkt.intro': 'We help you improve your visibility, communicate your message correctly, and convert interest into real growth opportunities for your business.',
      'services.mkt.what.h': 'How We Help You Market:',
      'services.mkt.what.1': 'Identifying your target audience and the messages that reach them',
      'services.mkt.what.2': 'Building a content plan that helps you appear consistently',
      'services.mkt.what.3': 'Managing advertising campaigns with results tracking',
      'services.mkt.what.4': 'Improving your search engine visibility',
      'services.mkt.get.h': 'What You\'ll Receive:',
      'services.mkt.get.1': 'A clear marketing plan tailored to your business',
      'services.mkt.get.2': 'Professional content expressing your services',
      'services.mkt.get.3': 'Ad campaigns with periodic reports',
      'services.mkt.get.4': 'Ongoing follow-up and support',
      'services.mkt.cta1': 'Request Service',
      'services.mkt.cta2': 'Get a Quote',
      'services.cta.title': 'Ready to Grow Your Business?',
      'services.cta.text': 'Tell us what you need and we\'ll provide the best solution clearly and quickly.',
      'services.cta.btn': 'Get Started',
      'services.meta.title': 'Our Services - ABC IT Lab',
      'services.meta.desc': 'ABC IT Lab solutions for entrepreneurs: brand building, website development, digital marketing, and growth consulting',
      'services.og.title': 'ABC IT Lab Services for Entrepreneurs',
      'services.og.desc': 'Comprehensive packages to build a strong identity, launch a polished website, and drive marketing and growth for your company.',

      /* ── Pricing (pricing.html) ── */
      'pricing.ph.title': 'Clear Packages to Suit Your Needs',
      'pricing.ph.subtitle': 'Choose the service or package that fits your current stage. For custom needs, we can prepare a tailored proposal.',
      'pricing.p1.title': 'Starter Package',
      'pricing.p1.from': 'Starting from',
      'pricing.p1.amount': 'Project-based',
      'pricing.p1.desc': 'Ideal for new businesses that need a clear and professional starting point.',
      'pricing.p1.f1': '✓ Clear and distinctive brand identity',
      'pricing.p1.f2': '✓ Professional, easy-to-navigate website',
      'pricing.p1.f3': '✓ WhatsApp and email integration',
      'pricing.p1.f4': '✓ Basic search engine optimization',
      'pricing.p1.f5': '✓ Support until launch',
      'pricing.p1.btn': 'Request a Quote',
      'pricing.p2.badge': 'Most Popular',
      'pricing.p2.title': 'Advanced Package',
      'pricing.p2.from': 'Starting from',
      'pricing.p2.amount': 'Scope-based',
      'pricing.p2.desc': 'Ideal for businesses looking to develop their presence and reach clients more effectively.',
      'pricing.p2.f1': '✓ Comprehensive identity and professional materials',
      'pricing.p2.f2': '✓ Multi-page website with content',
      'pricing.p2.f3': '✓ Marketing plan and client outreach',
      'pricing.p2.f4': '✓ 3 months of follow-up and support',
      'pricing.p2.f5': '✓ Periodic performance reports',
      'pricing.p2.f6': '✓ Ongoing practical consulting',
      'pricing.p2.btn': 'Request a Quote',
      'pricing.p3.title': 'Custom Solutions',
      'pricing.p3.from': 'Starting from',
      'pricing.p3.amount': 'Custom',
      'pricing.p3.desc': 'If your project has special requirements, we\'ll build a solution precisely tailored to you.',
      'pricing.p3.f1': '✓ Comprehensive analysis of your project needs',
      'pricing.p3.f2': '✓ Solution built specifically for you',
      'pricing.p3.f3': '✓ Clear steps and execution timeline',
      'pricing.p3.f4': '✓ Dedicated support and follow-up',
      'pricing.p3.f5': '✓ Periodic reviews with the team',
      'pricing.p3.f6': '✓ Follow-through until results are achieved',
      'pricing.p3.btn': 'Request a Quote',
      'pricing.faq.title': 'Frequently Asked Questions',
      'pricing.faq.q1': 'How do you determine the right price?',
      'pricing.faq.a1': 'We listen to your needs and assess the scope, then share a clear proposal that includes phases and expected outcomes.',
      'pricing.faq.q2': 'What are the payment methods?',
      'pricing.faq.a2': 'An upfront deposit to begin work, then milestone payments. Bank transfer and electronic payment are available.',
      'pricing.faq.q3': 'How long does delivery take?',
      'pricing.faq.a3': 'It varies by project. Typically: Brand Identity (7–10 days), Website (2–3 weeks), Marketing (ongoing monthly plan).',
      'pricing.cta.title': 'Ready to Grow Your Business?',
      'pricing.cta.text': 'Tell us what you need and we\'ll prepare a clear proposal tailored to your project.',
      'pricing.cta.btn': 'Request a Quote',
      'pricing.meta.title': 'Pricing - ABC IT Lab',
      'pricing.meta.desc': 'Flexible pricing packages from ABC IT Lab: brand identity, websites, digital marketing, and growth consulting',
      'pricing.og.title': 'Pricing Packages - ABC IT Lab',
      'pricing.og.desc': 'Thoughtful plans suited for entrepreneurs with full customization of features and payments.',

      /* ── Contact (contact.html) ── */
      'contact.ph.title': 'Contact Us',
      'contact.ph.subtitle': 'Tell us what you need and we\'ll get back to you to discuss the best solution for your project',
      'contact.form.title': 'Send Your Request',
      'contact.form.subtitle': 'Fill in the fields below and we\'ll get in touch as soon as possible.',
      'contact.label.name': 'Full Name *',
      'contact.placeholder.name': 'Enter your full name',
      'contact.label.email': 'Email Address *',
      'contact.label.phone': 'Phone Number *',
      'contact.label.service': 'Service Type *',
      'contact.service.default': 'Select a service',
      'contact.service.branding': 'Brand Identity',
      'contact.service.web': 'Website Design & Development',
      'contact.service.marketing': 'Marketing & Growth',
      'contact.service.consulting': 'Consulting',
      'contact.service.custom': 'Custom Solution',
      'contact.label.message': 'Describe Your Request *',
      'contact.placeholder.message': 'Tell us about your project and needs...',
      'contact.submit': 'Send Request',
      'contact.note': 'We\'ll get in touch as soon as we receive your request.',
      'contact.success': 'Thank you for reaching out! We\'ll reply within 24 hours.',
      'contact.info.title': 'Contact Information',
      'contact.email.title': 'Email Address',
      'contact.phone.title': 'Mobile / WhatsApp',
      'contact.whatsapp.btn': 'Chat with us on WhatsApp',
      'contact.hours.title': 'Working Hours',
      'contact.hours.days': 'Sat – Thu: 9:00 AM – 6:00 PM',
      'contact.hours.fri': 'Friday: Closed',
      'contact.social.title': 'Follow Us',
      'contact.why.title': 'You can reach us if you want to:',
      'contact.why.1': '✓ Launch a new project from scratch',
      'contact.why.2': '✓ Improve an existing project',
      'contact.why.3': '✓ Get advice to help you make the right decision',
      'contact.why.4': '✓ Receive a suitable price quote',
      'contact.map.title': 'We Serve the Entire Arab World',
      'contact.map.subtitle': 'We deliver our services remotely across all Arab countries with consistent quality and professionalism',
      'contact.map.text': 'We deliver our services remotely across all Arab countries',
      'contact.meta.title': 'Contact Us - ABC IT Lab',
      'contact.meta.desc': 'Contact ABC IT Lab to book a free consultation, request a quote, or start your digital project with confidence',
      'contact.og.title': 'Contact ABC IT Lab',
      'contact.og.desc': 'A specialized team that responds within 24 hours to consult and discuss your project needs.',

      /* ── Academy (academy.html) ── */
      'academy.eyebrow': 'Practical Simplified Content',
      'academy.eyebrow.note': 'Lessons + Examples + Actionable Steps',
      'academy.hero.title': 'The Academy',
      'academy.hero.subtitle': 'Practical, simplified content to help you understand the fundamentals of building a project, identity, marketing, and digital work — in a clear and direct way',
      'academy.method.label': 'Implementation Methodology',
      'academy.step.discover': 'Discover',
      'academy.step.strategy': 'Strategy',
      'academy.step.execute': 'Execute',
      'academy.step.measure': 'Measure',
      'academy.step.optimize': 'Optimize',
      'academy.cta1': 'Read Lessons',
      'academy.cta2': 'Contact Us',
      'academy.metric1.value': '24+',
      'academy.metric1.label': 'Practical Lessons',
      'academy.metric2.value': '5-7',
      'academy.metric2.label': 'Minutes per lesson',
      'academy.metric3.label': 'Suitable for beginners and experienced alike',
      'academy.panel.ribbon': 'Simplified Lessons',
      'academy.panel.title': 'Learn and Apply Easily',
      'academy.panel.text': 'Lessons are written in plain language so both beginners and experienced professionals can benefit equally.',
      'academy.panel.li1.title': 'Building a Business',
      'academy.panel.li1.text': 'Clear steps to build a professional presence from scratch.',
      'academy.panel.li2.title': 'Identity & Marketing',
      'academy.panel.li2.text': 'How to appear professionally and reach your clients.',
      'academy.panel.li3.title': 'Digital Work',
      'academy.panel.li3.text': 'Website and digital presence essentials made simple.',
      'academy.categories.title': 'Academy Categories',
      'academy.categories.subtitle': 'Choose the topic that suits you and start learning now.',
      'academy.cat1.title': 'Fundamentals',
      'academy.cat1.subtitle': 'Start here if you\'re at the beginning of your project.',
      'academy.cat1.desc': 'Simple lessons to help you understand what you need to build your project correctly.',
      'academy.cat2.title': 'Brand Identity',
      'academy.cat2.subtitle': 'How to build a distinctive identity that represents you.',
      'academy.cat2.desc': 'Discover the principles of brand identity design and how to choose what suits your project.',
      'academy.cat3.title': 'Website',
      'academy.cat3.subtitle': 'What your website needs to attract clients.',
      'academy.cat3.desc': 'Practical lessons on building a clear website that helps visitors connect with you.',
      'academy.cat4.title': 'Marketing & Growth',
      'academy.cat4.subtitle': 'How to reach your clients and grow your business.',
      'academy.cat4.desc': 'Digital marketing fundamentals and how to build a presence that attracts the right clients.',
      'academy.lessons.title': 'Browse Lessons',
      'academy.lessons.subtitle': 'Lessons written in plain language so both beginners and experienced professionals benefit.',
      'academy.search.placeholder': 'Search lessons',
      'academy.search.aria': 'Search lessons',
      'academy.empty': 'No matching lessons found. Try a different category or search term.',
      'academy.cta.title': 'Ready to Grow Your Business?',
      'academy.cta.text': 'Let us turn your idea into a professional presence that attracts clients and builds trust.',
      'academy.cta.btn': 'Get Started',
      'academy.meta.title': 'ABC IT Lab Academy - ABC IT Lab',
      'academy.meta.desc': 'ABC IT Lab Academy offers practical lessons to help entrepreneurs make precise decisions before execution.',
      'academy.og.title': 'ABC IT Lab Academy',
      'academy.og.desc': 'Practical, simplified lessons to help entrepreneurs build successful businesses.',

      /* ── Academy JS UI labels (used by academy.js) ── */
      'academy.js.all': 'All',
      'academy.js.count': 'Lessons',
      'academy.js.minutes': 'min',
      'academy.js.read': 'Read Lesson',
      'academy.js.empty': 'No matching lessons found. Try a different category or search term.',

      /* ── Apply (apply.html) ── */
      'apply.ph.title': 'Start Your Project With Us',
      'apply.ph.subtitle': 'Fill in the form and help us understand your idea and needs so we can provide the best solution clearly and quickly',
      'apply.card.title': 'Project Information',
      'apply.card.lead': 'The more details you provide, the more accurate and tailored our proposal will be.',
      'apply.label.name': 'Full Name *',
      'apply.placeholder.name': 'Enter your full name',
      'apply.label.project': 'Project Name *',
      'apply.placeholder.project': 'e.g. Online Store, Restaurant, Service Company',
      'apply.label.type': 'Business Type *',
      'apply.placeholder.type': 'Tell us about your business activity and field',
      'apply.label.service': 'Required Service *',
      'apply.placeholder.service': 'e.g. Brand identity, Website, Marketing, Consulting',
      'apply.label.email': 'Email Address *',
      'apply.label.phone': 'Phone Number *',
      'apply.submit': 'Submit Project Details',
      'apply.copy': 'Copy Details',
      'apply.note': 'The more details you provide, the more accurate and tailored our proposal will be.',
      'apply.meta.title': 'For Specialists - ABC IT Lab',
      'apply.meta.desc': 'Join as a freelance specialist to work with ABC IT Lab on digital projects.',
      'apply.og.title': 'For Specialists - ABC IT Lab',
      'apply.og.desc': 'Register as a content writer, marketer, or project manager to work with the ABC IT Lab team.',

      /* ── Privacy (privacy.html) ── */
      'privacy.ph.title': 'Privacy Policy',
      'privacy.ph.subtitle': 'We respect your privacy and handle your data responsibly and transparently',
      'privacy.meta.title': 'Privacy Policy - ABC IT Lab',
      'privacy.meta.desc': 'ABC IT Lab Privacy Policy — how we protect and use your data transparently',
      'privacy.og.title': 'Privacy Policy - ABC IT Lab',
      'privacy.og.desc': 'Learn how we protect and use your data to communicate and improve our services at ABC IT Lab.',

      /* ── Terms (terms.html) ── */
      'terms.ph.title': 'Terms & Conditions',
      'terms.ph.subtitle': 'By using our website you agree to the following terms',
      'terms.meta.title': 'Terms & Conditions - ABC IT Lab',
      'terms.meta.desc': 'Terms & Conditions for ABC IT Lab — website and services usage',
      'terms.og.title': 'Terms & Conditions - ABC IT Lab',
      'terms.og.desc': 'Learn the terms governing the use of the ABC IT Lab website and services.'
    }
  };

  /* ─────────────────────────────────────────────
   * LANGUAGE HELPERS
   * ───────────────────────────────────────────── */
  function getCurrentLang() {
    try {
      return localStorage.getItem('abcitlab_lang') || 'ar';
    } catch (e) {
      return 'ar';
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem('abcitlab_lang', lang);
    } catch (e) { /* ignore */ }
  }

  /* ─────────────────────────────────────────────
   * APPLY TRANSLATIONS
   * ───────────────────────────────────────────── */
  function applyTranslations(lang) {
    var t = translations[lang] || translations['ar'];

    /* Update html tag */
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    /* Translate innerHTML elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'TITLE') {
          document.title = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    /* Translate content attribute (meta tags) */
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      if (t[key] !== undefined) {
        el.setAttribute('content', t[key]);
      }
    });

    /* Translate placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    /* Translate aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    /* Update language switcher label */
    var switcher = document.getElementById('langSwitcher');
    if (switcher) {
      var label = switcher.querySelector('.lang-label');
      if (label) label.textContent = t['lang.switch'] || (lang === 'ar' ? 'EN' : 'AR');
      switcher.setAttribute('aria-label', t['lang.switch.aria'] || 'Switch Language');
    }

    /* Update canonical link */
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      var href = canonical.getAttribute('href') || '';
      // Strip existing ?lang= param and add new one if English
      href = href.split('?')[0];
      if (lang === 'en') href += '?lang=en';
      canonical.setAttribute('href', href);
    }

    /* Update hreflang links */
    var hreflangAr = document.getElementById('hreflang-ar');
    var hreflangEn = document.getElementById('hreflang-en');
    if (hreflangAr && hreflangEn) {
      var base = window.location.href.split('?')[0];
      hreflangAr.setAttribute('href', base);
      hreflangEn.setAttribute('href', base + '?lang=en');
    }

    /* Fire custom event for dynamic components (e.g. academy.js) */
    document.dispatchEvent(new CustomEvent('i18n:langchange', { detail: { lang: lang, t: t } }));
  }

  /* ─────────────────────────────────────────────
   * PUBLIC API
   * ───────────────────────────────────────────── */
  window.I18n = {
    getCurrentLang: getCurrentLang,
    getTranslation: function (key) {
      var lang = getCurrentLang();
      var t = translations[lang] || translations['ar'];
      return t[key] !== undefined ? t[key] : key;
    },
    setLang: function (lang) {
      saveLang(lang);
      applyTranslations(lang);
    },
    t: function (key) {
      return this.getTranslation(key);
    }
  };

  /* ─────────────────────────────────────────────
   * INIT ON DOM READY
   * ───────────────────────────────────────────── */
  function init() {
    /* Check URL param for initial language (for SEO/sharing) */
    var urlParams = new URLSearchParams(window.location.search);
    var langParam = urlParams.get('lang');
    var lang;
    if (langParam === 'en' || langParam === 'ar') {
      saveLang(langParam);
      lang = langParam;
    } else {
      lang = getCurrentLang();
    }

    applyTranslations(lang);

    /* Language switcher click handler */
    var switcher = document.getElementById('langSwitcher');
    if (switcher) {
      switcher.addEventListener('click', function () {
        var newLang = getCurrentLang() === 'ar' ? 'en' : 'ar';
        window.I18n.setLang(newLang);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
