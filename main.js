/**
 * YourSit - Main JavaScript
 * Handles: i18n, navigation, animations, form, FAQ
 */

// ===========================
// Translations
// ===========================
const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Submit a Request",

    // Hero
    "hero.badge": "Now Accepting New Clients",
    "hero.title1": "Your Business.",
    "hero.title2": "Your Website.",
    "hero.desc": "We design and build modern, professional websites that help businesses build trust and stand out online.",
    "hero.ctaPrimary": "Start Your Project",
    "hero.ctaSecondary": "View Our Work",
    "hero.vp1": "Modern Design",
    "hero.vp2": "Mobile Ready",
    "hero.vp3": "Built Around Your Business",
    "hero.float1": "Fast Loading",
    "hero.float2": "Responsive",
    "hero.float3": "Secure",

    // Services
    "services.badge": "What We Do",
    "services.title": "Websites Built for Your Business",
    "services.desc": "From design to launch, we create professional websites tailored to your business and your customers.",
    "services.s1.title": "Website Design",
    "services.s1.desc": "Modern and professional website designs tailored to your brand and customers.",
    "services.s2.title": "Responsive Websites",
    "services.s2.desc": "Websites designed to look great and work smoothly on phones, tablets, and computers.",
    "services.s3.title": "WhatsApp & Contact Integration",
    "services.s3.desc": "Make it easy for customers to contact your business through WhatsApp, forms, and direct contact options.",
    "services.s4.title": "Domain & Hosting Setup",
    "services.s4.desc": "We help set up your domain and hosting so your website can go live properly.",
    "services.s5.title": "Maintenance & Updates",
    "services.s5.desc": "We can keep your website updated and make changes when your business needs them.",

    // Portfolio
    "portfolio.badge": "Our Work",
    "portfolio.title": "Website Concepts",
    "portfolio.desc": "Explore examples of what we can create for different types of businesses.",
    "portfolio.conceptLabel": "CONCEPT / DEMO",
    "portfolio.p1.title": "AutoCare",
    "portfolio.p1.desc": "Website concept for an automotive service center",
    "portfolio.p2.title": "Brew House",
    "portfolio.p2.desc": "Website concept for a modern coffee shop",
    "portfolio.p3.title": "FitZone",
    "portfolio.p3.desc": "Website concept for a fitness business",
    "portfolio.p4.title": "Prime Properties",
    "portfolio.p4.desc": "Website concept for a real estate business",

    // Process
    "process.badge": "How We Work",
    "process.title": "A Simple Process",
    "process.desc": "From idea to launch in four clear steps.",
    "process.step1.title": "Tell Us What You Need",
    "process.step1.desc": "We learn about your business, goals, services, and customers.",
    "process.step2.title": "We Build",
    "process.step2.desc": "We design and build your website around your business and brand.",
    "process.step3.title": "You Review",
    "process.step3.desc": "You review the website and request any necessary changes.",
    "process.step4.title": "We Launch",
    "process.step4.desc": "Once everything is approved, we help get your website online.",

    // Pricing
    "pricing.badge": "Pricing",
    "pricing.title": "Simple, Clear Pricing",
    "pricing.desc": "Every business is different. Tell us what you need and we'll provide a clear quote based on your website and requirements.",
    "pricing.check1": "Clear Scope",
    "pricing.check2": "No Hidden Fees",
    "pricing.check3": "Built Around Your Needs",
    "pricing.cta": "Get a Quote",

    // CTA
    "cta.title": "Ready to Build Your Website?",
    "cta.desc": "Let's create a professional online presence for your business.",
    "cta.button": "Start Your Project",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.desc": "Got questions? We've got answers.",
    "faq.q1.question": "How long does it take to build a website?",
    "faq.q1.answer": "Timing depends on the size and requirements of the website. After discussing your project, we'll give you an estimated timeline.",
    "faq.q2.question": "Do I need a domain and hosting?",
    "faq.q2.answer": "Yes, a live website normally needs a domain and hosting. We can help you set them up.",
    "faq.q3.question": "Can you build a website for my type of business?",
    "faq.q3.answer": "We can create websites for many types of businesses, including restaurants, automotive businesses, gyms, real estate, services, and small businesses.",
    "faq.q4.question": "Can I request changes before the website goes live?",
    "faq.q4.answer": "Yes. You can review the website and request changes before the final launch.",
    "faq.q5.question": "What happens after the website is launched?",
    "faq.q5.answer": "We can help with updates, maintenance, and future changes if needed.",


    // Contact
    "contact.badge": "Get In Touch",
    "contact.title": "Let's Build Your Website",
    "contact.desc": "Tell us about your business and what you need. We'll get back to you to discuss your project.",
    "contact.emailLabel": "Email",
    "contact.whatsappLabel": "WhatsApp",
    "contact.whatsappBtn": "Chat on WhatsApp",
    "contact.form.name": "Name",
    "contact.form.businessName": "Business Name",
    "contact.form.email": "Email",
    "contact.form.whatsapp": "WhatsApp Number",
    "contact.form.businessType": "What does your business do?",
    "contact.form.websiteType": "What type of website do you need?",
    "contact.form.selectType": "Select an option",
    "contact.form.optBusiness": "Business Website",
    "contact.form.optLanding": "Landing Page",
    "contact.form.optEcom": "Online Store",
    "contact.form.optPortfolio": "Portfolio",
    "contact.form.optOther": "Other",
    "contact.form.details": "Additional Details",
    "contact.form.submit": "Send Request →",

    // Footer
    "footer.desc": "Modern websites for modern businesses.",
    "footer.linksTitle": "Links",
    "footer.contactTitle": "Contact",
    "footer.copyright": "© 2026 YourSit. All rights reserved."
  },
  ar: {
    // Navigation
    "nav.services": "خدماتنا",
    "nav.work": "أعمالنا",
    "nav.process": "طريقة العمل",
    "nav.contact": "تواصل معنا",
    "nav.cta": "أرسل طلبك",

    // Hero
    "hero.badge": "نستقبل مشاريع جديدة الآن",
    "hero.title1": "خلي موقعك يليق بعملك.",
    "hero.title2": "",
    "hero.desc": "نصمم ونبني مواقع إلكترونية حديثة واحترافية تساعد عملك على الظهور بشكل أفضل وبناء الثقة مع عملائك.",
    "hero.ctaPrimary": "أرسل طلبك",
    "hero.ctaSecondary": "شاهد أعمالنا",
    "hero.vp1": "تصميم حديث",
    "hero.vp2": "متوافق مع الجوال",
    "hero.vp3": "مصمم لعملك",
    "hero.float1": "سرعة فائقة",
    "hero.float2": "متجاوب",
    "hero.float3": "آمن",

    // Services
    "services.badge": "ماذا نقدم",
    "services.title": "مواقع مبنية لعملك",
    "services.desc": "من التصميم إلى الإطلاق، نصنع مواقع احترافية مصممة خصيصاً لعملك وعملائك.",
    "services.s1.title": "تصميم المواقع",
    "services.s1.desc": "تصميم حديث واحترافي يعكس هوية عملك ويقدم خدماتك بشكل واضح.",
    "services.s2.title": "مواقع متجاوبة",
    "services.s2.desc": "مواقع تعمل بسلاسة وتظهر بشكل رائع على الهواتف والأجهزة اللوحية والحواسيب.",
    "services.s3.title": "ربط واتساب ووسائل التواصل",
    "services.s3.desc": "نسهّل على عملائك التواصل معك عبر واتساب ونماذج التواصل وخيارات الاتصال المباشر.",
    "services.s4.title": "إعداد النطاق والاستضافة",
    "services.s4.desc": "نساعدك في إعداد النطاق والاستضافة ليصبح موقعك جاهزاً للعمل.",
    "services.s5.title": "الصيانة والتحديثات",
    "services.s5.desc": "نجري التعديلات والتحديثات التي يحتاجها موقعك بعد الإطلاق.",

    // Portfolio
    "portfolio.badge": "أعمالنا",
    "portfolio.title": "نماذج مواقع",
    "portfolio.desc": "استكشف أمثلة لمواقع مصممة لأنواع مختلفة من الأعمال.",
    "portfolio.conceptLabel": "نموذج / عرض توضيحي",
    "portfolio.p1.title": "أوتو كير",
    "portfolio.p1.desc": "نموذج موقع لمركز خدمات سيارات",
    "portfolio.p2.title": "برو هاوس",
    "portfolio.p2.desc": "نموذج موقع لمقهى عصري",
    "portfolio.p3.title": "فت زون",
    "portfolio.p3.desc": "نموذج موقع لنادي رياضي",
    "portfolio.p4.title": "برايم بروبرتيز",
    "portfolio.p4.desc": "نموذج موقع لشركة عقارات",

    // Process
    "process.badge": "كيف نعمل",
    "process.title": "خطوات بسيطة",
    "process.desc": "من الفكرة إلى الإطلاق في أربع خطوات واضحة.",
    "process.step1.title": "أخبرنا بما تحتاج",
    "process.step1.desc": "نتعرف على عملك وأهدافك وخدماتك واحتياجاتك.",
    "process.step2.title": "نبني",
    "process.step2.desc": "نصمم ونبني موقعك بما يناسب عملك وعلامتك التجارية.",
    "process.step3.title": "راجع وعدّل",
    "process.step3.desc": "تراجع الموقع وتطلب أي تعديلات تحتاجها قبل الإطلاق.",
    "process.step4.title": "نطلق موقعك",
    "process.step4.desc": "بعد اعتماد التصميم والمحتوى، نساعدك في إطلاق موقعك.",

    // Pricing
    "pricing.badge": "ابدأ مشروعك",
    "pricing.title": "أخبرنا بما تحتاج",
    "pricing.desc": "كل عمل له احتياجات مختلفة. أخبرنا عن مشروعك وسنراجع متطلباتك ونقدم لك عرضاً مناسباً.",
    "pricing.check1": "نطاق عمل واضح",
    "pricing.check2": "بدون رسوم مخفية",
    "pricing.check3": "مصمم حسب احتياجاتك",
    "pricing.cta": "أرسل طلبك",

    // CTA
    "cta.title": "جاهز لبناء موقعك؟",
    "cta.desc": "خلينا نصنع موقعاً احترافياً يعكس قيمة عملك.",
    "cta.button": "أرسل طلبك",

    // FAQ
    "faq.badge": "أسئلة شائعة",
    "faq.title": "الأسئلة المتكررة",
    "faq.desc": "عندك أسئلة؟ عندنا إجابات.",
    "faq.q1.question": "كم يستغرق بناء الموقع؟",
    "faq.q1.answer": "التوقيت يعتمد على حجم ومتطلبات الموقع. بعد مناقشة مشروعك، سنعطيك جدولاً زمنياً تقديرياً.",
    "faq.q2.question": "هل أحتاج نطاق واستضافة؟",
    "faq.q2.answer": "نعم، الموقع الحي يحتاج عادةً نطاق واستضافة. يمكننا مساعدتك في إعدادهما.",
    "faq.q3.question": "هل يمكنكم بناء موقع لنوع عملي؟",
    "faq.q3.answer": "يمكننا إنشاء مواقع لأنواع عديدة من الأعمال، بما في ذلك المطاعم وخدمات السيارات والنوادي الرياضية والعقارات والخدمات والأعمال الصغيرة.",
    "faq.q4.question": "هل يمكنني طلب تغييرات قبل إطلاق الموقع؟",
    "faq.q4.answer": "نعم. يمكنك مراجعة الموقع وطلب التعديلات التي تحتاجها قبل الإطلاق النهائي.",
    "faq.q5.question": "ماذا يحدث بعد إطلاق الموقع؟",
    "faq.q5.answer": "يمكننا المساعدة في التحديثات والصيانة والتغييرات المستقبلية إذا لزم الأمر.",


    // Contact
    "contact.badge": "تواصل معنا",
    "contact.title": "لنبني موقعك",
    "contact.desc": "أخبرنا عن عملك وما تحتاجه، وسنتواصل معك لمناقشة مشروعك.",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.whatsappLabel": "واتساب",
    "contact.whatsappBtn": "تواصل عبر واتساب",
    "contact.form.name": "الاسم",
    "contact.form.businessName": "اسم العمل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.whatsapp": "رقم واتساب",
    "contact.form.businessType": "ماذا يقدم عملك؟",
    "contact.form.websiteType": "ما نوع الموقع الذي تحتاجه؟",
    "contact.form.selectType": "اختر خياراً",
    "contact.form.optBusiness": "موقع أعمال",
    "contact.form.optLanding": "صفحة هبوط",
    "contact.form.optEcom": "متجر إلكتروني",
    "contact.form.optPortfolio": "معرض أعمال",
    "contact.form.optOther": "أخرى",
    "contact.form.details": "تفاصيل إضافية",
    "contact.form.submit": "إرسال الطلب →",

    // Footer
    "footer.desc": "مواقع حديثة لأعمال حديثة.",
    "footer.linksTitle": "روابط",
    "footer.contactTitle": "تواصل",
    "footer.copyright": "© 2026 YourSit. جميع الحقوق محفوظة."
  }
};

// ===========================
// State
// ===========================
let currentLang = localStorage.getItem("yoursit-lang") || "en";

// ===========================
// i18n Engine
// ===========================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("yoursit-lang", lang);

  const dict = translations[lang];
  if (!dict) return;

  // Update HTML attributes
  document.documentElement.lang = lang;
  if (lang === "ar") {
    document.body.classList.add("rtl");
    document.documentElement.dir = "rtl";
    document.body.style.fontFamily = "'Tajawal', 'Inter', sans-serif";
  } else {
    document.body.classList.remove("rtl");
    document.documentElement.dir = "ltr";
    document.body.style.fontFamily = "'Inter', sans-serif";
  }

  // Update toggle button text
  const langToggle = document.getElementById("langToggle");
  langToggle.textContent = lang === "en" ? "عربي" : "English";

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update meta
  if (lang === "ar") {
    document.title = "YourSit - مواقع إلكترونية للأعمال الحديثة";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = "YourSit تصمم وتبني مواقع إلكترونية حديثة واحترافية تساعد الأعمال على بناء الثقة والتميّز على الإنترنت.";
  } else {
    document.title = "YourSit - Websites Built for Modern Businesses";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = "YourSit designs and builds modern, professional websites that help businesses build trust and stand out online.";
  }
}

// ===========================
// Navbar
// ===========================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  // Scroll effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Mobile menu toggle
  mobileToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const spans = mobileToggle.querySelectorAll("span");
    if (navLinks.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translateY(7px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translateY(-7px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      const spans = mobileToggle.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ===========================
// Language Toggle
// ===========================
function initLangToggle() {
  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "ar" : "en");
  });
}

// ===========================
// Scroll Reveal
// ===========================
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const siblings = entry.target.parentElement?.querySelectorAll(".reveal");
          if (siblings) {
            siblings.forEach((el, i) => {
              if (el.classList.contains("visible")) return;
              el.style.transitionDelay = `${i * 0.1}s`;
            });
          }
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  reveals.forEach(el => observer.observe(el));
}

// ===========================
// FAQ Accordion
// ===========================
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      faqItems.forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-answer").style.maxHeight = "0";
      });

      // Open clicked (if was closed)
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ===========================
// Contact Form — Web3Forms + Validation
// ===========================
function initContactForm() {
  const W3F_ACCESS_KEY = "10182a12-ec99-40e7-832b-627cc5bb1126";

  const form     = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  // ── Helper: show / clear inline field error ────────────────────────
  function setError(inputEl, errId, msg) {
    const errEl = document.getElementById(errId);
    if (!errEl) return;
    if (msg) {
      inputEl.classList.add("input-error");
      errEl.textContent = msg;
      errEl.classList.add("visible");
    } else {
      inputEl.classList.remove("input-error");
      errEl.textContent = "";
      errEl.classList.remove("visible");
    }
  }

  // ── Clear error on input ───────────────────────────────────────────
  ["contactName","businessName","contactEmail","whatsapp","businessType","websiteType","details"]
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", () => {
        el.classList.remove("input-error");
        const err = el.getAttribute("aria-describedby");
        if (err) {
          const errEl = document.getElementById(err);
          if (errEl) { errEl.textContent = ""; errEl.classList.remove("visible"); }
        }
      });
    });

  // ── Status banner ──────────────────────────────────────────────────
  function showStatus(type, msg) {
    statusEl.className = "form-status " + type;
    statusEl.textContent = msg;
    if (type === "error") {
      setTimeout(() => { statusEl.className = "form-status"; statusEl.textContent = ""; }, 7000);
    }
  }

  // ── Validate: returns true if all fields pass ──────────────────────
  function validateForm(f, isAr) {
    let valid = true;

    const m = isAr ? {
      required : "هذا الحقل مطلوب.",
      email    : "يرجى إدخال بريد إلكتروني صحيح.",
      phone    : "يرجى إدخال رقم واتساب صحيح.",
      select   : "يرجى اختيار نوع الموقع."
    } : {
      required : "This field is required.",
      email    : "Please enter a valid email address.",
      phone    : "Please enter a valid WhatsApp number.",
      select   : "Please select a website type."
    };

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRx = /^[+\d][\d\s\-(). ]{5,}$/;

    if (!f.name)         { setError(document.getElementById("contactName"),  "err-name",        m.required); valid = false; }
    else                   setError(document.getElementById("contactName"),  "err-name",        "");

    if (!f.business)     { setError(document.getElementById("businessName"), "err-business",    m.required); valid = false; }
    else                   setError(document.getElementById("businessName"), "err-business",    "");

    if (!f.email)        { setError(document.getElementById("contactEmail"), "err-email",       m.required); valid = false; }
    else if (!emailRx.test(f.email)) { setError(document.getElementById("contactEmail"), "err-email", m.email); valid = false; }
    else                   setError(document.getElementById("contactEmail"), "err-email",       "");

    if (!f.whatsapp)     { setError(document.getElementById("whatsapp"),     "err-whatsapp",    m.required); valid = false; }
    else if (!phoneRx.test(f.whatsapp) || f.whatsapp.replace(/\D/g,"").length < 7)
                         { setError(document.getElementById("whatsapp"),     "err-whatsapp",    m.phone);    valid = false; }
    else                   setError(document.getElementById("whatsapp"),     "err-whatsapp",    "");

    if (!f.businessType) { setError(document.getElementById("businessType"), "err-businesstype",m.required); valid = false; }
    else                   setError(document.getElementById("businessType"), "err-businesstype","");

    if (!f.websiteType)  { setError(document.getElementById("websiteType"),  "err-websitetype", m.select);   valid = false; }
    else                   setError(document.getElementById("websiteType"),  "err-websitetype", "");

    if (!f.details)      { setError(document.getElementById("details"),      "err-details",     m.required); valid = false; }
    else                   setError(document.getElementById("details"),      "err-details",     "");

    return valid;
  }

  // ── Submit handler ─────────────────────────────────────────────────
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.className = "form-status";
    statusEl.textContent = "";

    const isAr = currentLang === "ar";

    // Collect values
    const f = {
      name        : document.getElementById("contactName").value.trim(),
      business    : document.getElementById("businessName").value.trim(),
      email       : document.getElementById("contactEmail").value.trim(),
      whatsapp    : document.getElementById("whatsapp").value.trim(),
      businessType: document.getElementById("businessType").value.trim(),
      websiteType : document.getElementById("websiteType").value,
      details     : document.getElementById("details").value.trim()
    };

    // Validate — abort if any field fails
    if (!validateForm(f, isAr)) {
      const firstErr = form.querySelector(".input-error");
      if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const websiteTypeLabels = {
      "business" : isAr ? "موقع أعمال"    : "Business Website",
      "landing"  : isAr ? "صفحة هبوط"     : "Landing Page",
      "ecommerce": isAr ? "متجر إلكتروني" : "Online Store",
      "portfolio": isAr ? "معرض أعمال"    : "Portfolio",
      "other"    : isAr ? "أخرى"           : "Other"
    };
    const websiteTypeLabel = websiteTypeLabels[f.websiteType] || f.websiteType;

    const btn = form.querySelector(".submit-btn");
    const originalText = btn.textContent;
    btn.textContent = isAr ? "جارٍ الإرسال..." : "Sending...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    const emailBody = [
      "طلب موقع جديد",
      "",
      `الاسم: ${f.name}`,
      `اسم العمل: ${f.business}`,
      `البريد الإلكتروني: ${f.email}`,
      `رقم واتساب: ${f.whatsapp}`,
      `نوع العمل: ${f.businessType}`,
      `نوع الموقع المطلوب: ${websiteTypeLabel}`,
      `التفاصيل الإضافية: ${f.details}`
    ].join("\n");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method : "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body   : JSON.stringify({
          access_key               : W3F_ACCESS_KEY,
          subject                  : "طلب موقع جديد - YourSit",
          from_name                : f.name,
          email                    : "yoursite.jo@gmail.com",
          message                  : emailBody,
          "الاسم"                  : f.name,
          "اسم العمل"              : f.business,
          "البريد الإلكتروني"      : f.email,
          "رقم واتساب"             : f.whatsapp,
          "نوع العمل"              : f.businessType,
          "نوع الموقع المطلوب"     : websiteTypeLabel,
          "التفاصيل الإضافية"      : f.details || "—"
        })
      });

      const result = await response.json();
      btn.textContent = originalText;
      btn.style.opacity = "1";
      btn.disabled = false;

      if (result.success) {
        form.reset();
        form.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
        form.querySelectorAll(".field-error").forEach(el => { el.textContent = ""; el.classList.remove("visible"); });
        showStatus("success",
          isAr
            ? "✓ تم إرسال طلبك بنجاح، سنتواصل معك قريباً."
            : "✓ Your request was sent successfully. We'll be in touch soon."
        );
      } else {
        console.error("Web3Forms error:", result);
        showStatus("error",
          isAr ? "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error("Network error:", err);
      btn.textContent = originalText;
      btn.style.opacity = "1";
      btn.disabled = false;
      showStatus("error",
        isAr ? "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again."
      );
    }
  });
}

// ===========================

// Active nav link highlight
// ===========================
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.style.color = "";
            if (link.getAttribute("href") === `#${id}`) {
              link.style.color = "var(--clr-text)";
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(section => observer.observe(section));
}

// ===========================
// Init Everything
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  initNavbar();
  initLangToggle();
  initScrollReveal();
  initFAQ();
  initContactForm();
  initActiveNavLink();
});
