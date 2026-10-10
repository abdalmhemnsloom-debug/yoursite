/**
 * YourSite - Main JavaScript
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
    "nav.cta": "Get a Quote",

    // Hero
    "hero.badge": "Now Accepting New Clients",
    "hero.title1": "Website Design Jordan",
    "hero.title2": "Professional Web Design & Growth",
    "hero.desc": "YourSite designs professional websites for businesses and small businesses in Jordan, with responsive layouts and WhatsApp integration.",
    "hero.ctaPrimary": "Start Your Project",
    "hero.ctaSecondary": "View Our Work",
    "hero.vp1": "Modern Web Design",
    "hero.vp2": "Responsive Web Design",
    "hero.vp3": "Business Websites & Growth",
    "hero.float1": "Fast Loading",
    "hero.float2": "Responsive",
    "hero.float3": "Secure",

    // Services
    "services.badge": "What We Do",
    "services.title": "Website Design & Web Development in Jordan",
    "services.desc": "From concept to launch, we deliver professional web design, high-converting business websites, and tailored solutions for companies across Jordan.",
    "services.s1.title": "Small Business Website Design",
    "services.s1.desc": "Custom web design and business websites built for companies, shops, and emerging startups with a strong visual identity.",
    "services.s2.title": "Responsive Web Design",
    "services.s2.desc": "100% responsive web design optimized to look stunning and load fast on mobile devices, tablets, and desktops.",
    "services.s3.title": "WhatsApp Integration & Contact Setup",
    "services.s3.desc": "Seamless WhatsApp integration and direct contact forms making customer inquiries fast, simple, and effective.",
    "services.s4.title": "Domain & Fast Hosting Setup",
    "services.s4.desc": "Complete setup of custom domains and high-speed cloud hosting so your website goes live effortlessly.",
    "services.s5.title": "Maintenance & Support",
    "services.s5.desc": "Continuous support, security updates, and performance tuning ensuring your business website stays fast and secure.",

    // Portfolio
    "portfolio.badge": "Our Work",
    "portfolio.title": "Website Design Concepts",
    "portfolio.desc": "Explore tailored concepts and demo projects created for modern business websites and commercial brands.",
    "portfolio.conceptLabel": "CONCEPT / DEMO",
    "portfolio.p1.title": "AutoCare",
    "portfolio.p1.desc": "Commercial website concept for an automotive service center",
    "portfolio.p2.title": "Brew House",
    "portfolio.p2.desc": "Website concept for a modern cafe and retail shop",
    "portfolio.p3.title": "FitZone",
    "portfolio.p3.desc": "High-converting landing page for a fitness club",
    "portfolio.p4.title": "Prime Properties",
    "portfolio.p4.desc": "Professional website concept for a real estate agency",

    // Process
    "process.badge": "How We Work",
    "process.title": "A Simple Process",
    "process.desc": "From idea to launch in four clear steps.",
    "process.step1.title": "Tell Us What You Need",
    "process.step1.desc": "We learn about your business, goals, services, and customers.",
    "process.step2.title": "We Design & Build",
    "process.step2.desc": "We design and build your website around your business and brand.",
    "process.step3.title": "You Review",
    "process.step3.desc": "You review the website and request any necessary adjustments.",
    "process.step4.title": "We Launch",
    "process.step4.desc": "Once everything is approved, we get your website live online.",

    // Pricing
    "pricing.badge": "Pricing & Costs",
    "pricing.title": "Clear, Honest Website Pricing",
    "pricing.desc": "Website design Jordan pricing depends on your requirements and scope. Whether you need small business website design or a corporate platform, we provide a clear, tailored quote.",
    "pricing.check1": "Clear Scope & Pricing",
    "pricing.check2": "No Hidden Fees",
    "pricing.check3": "Built Around Your Needs",
    "pricing.cta": "Get a Quote",

    // CTA
    "cta.title": "Ready for Professional Website Design in Jordan?",
    "cta.desc": "Whether you need small business website design, responsive web design, or corporate business websites with WhatsApp integration, YourSite is ready to build it.",
    "cta.button": "Start Your Project Now",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.desc": "Got questions? We've got answers.",
    "faq.q1.question": "How long does it take to design and launch a website?",
    "faq.q1.answer": "It depends on the size and type of the website. A landing page can take just a few days, while full business websites may take a bit longer. We will provide an accurate timeline after discussing your project.",
    "faq.q2.question": "Do you handle domain and hosting setup?",
    "faq.q2.answer": "Yes, we handle every step of web design and launch, from domain registration to reliable hosting setup.",
    "faq.q3.question": "Do you design websites for companies, shops, and small businesses?",
    "faq.q3.answer": "Yes, we specialize in small business website design and business websites across Jordan, including retail shops, cafes, fitness centers, and promotional landing pages.",
    "faq.q4.question": "How much does website design in Jordan cost?",
    "faq.q4.answer": "Website design Jordan pricing varies based on features and page count. We believe in complete transparency and provide an upfront, itemized quote tailored to your budget.",
    "faq.q5.question": "Can I request revisions before and after the website launches?",
    "faq.q5.answer": "Yes, you can review and request changes before the official launch, and we offer maintenance and support for any future updates you need.",

    // Contact
    "contact.badge": "Get In Touch",
    "contact.title": "Let's Build Your Website with YourSite",
    "contact.desc": "Looking for top-tier website design in Jordan or need professional business websites with WhatsApp integration? Contact us to discuss your project.",
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
    "contact.form.optBusiness": "Business / Corporate Website",
    "contact.form.optLanding": "Landing Page",
    "contact.form.optEcom": "Online Store / Shop",
    "contact.form.optPortfolio": "Portfolio / Project Showcase",
    "contact.form.optOther": "Other",
    "contact.form.details": "Additional Details",
    "contact.form.submit": "Send Request →",

    // Footer
    "footer.desc": "YourSite designs professional websites for businesses and small businesses in Jordan, with responsive layouts and WhatsApp integration.",
    "footer.linksTitle": "Links",
    "footer.contactTitle": "Contact",
    "footer.copyright": "© 2026 YourSite. All rights reserved."
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
    "hero.title1": "تصميم مواقع إلكترونية",
    "hero.title2": "احترافية تليق بعملك",
    "hero.desc": "YourSite لتصميم مواقع إلكترونية احترافية للشركات والمحلات والمشاريع في الأردن، مع تصميم متجاوب للهواتف وربط واتساب ووسائل التواصل.",
    "hero.ctaPrimary": "أرسل طلبك",
    "hero.ctaSecondary": "شاهد أعمالنا",
    "hero.vp1": "تصميم حديث ومتقن",
    "hero.vp2": "تصميم مواقع متجاوبة",
    "hero.vp3": "تصميم مواقع للشركات والمحلات",
    "hero.float1": "سرعة فائقة",
    "hero.float2": "متجاوب",
    "hero.float3": "آمن",

    // Services
    "services.badge": "ماذا نقدم",
    "services.title": "خدمات تصميم مواقع إلكترونية وإنشاء مواقع ويب",
    "services.desc": "من الفكرة والتصميم إلى الإطلاق، نتخصص في إنشاء مواقع ويب وتصميم مواقع للشركات والمحلات في الأردن بحلول رقمية متطورة تلبي طموحاتك.",
    "services.s1.title": "تصميم مواقع للشركات والمحلات",
    "services.s1.desc": "تصميم مواقع إلكترونية مبتكرة للمحلات والشركات والمشاريع التجارية بهوية بصرية مميزة وسرعة تصفح فائقة.",
    "services.s2.title": "تصميم مواقع متجاوبة 100%",
    "services.s2.desc": "تصميم مواقع متجاوبة تعمل بانسيابية وتظهر بشكل مثالي على كافة مقاسات الهواتف الذكية والأجهزة اللوحية والحواسيب.",
    "services.s3.title": "ربط المواقع بواتساب ووسائل التواصل",
    "services.s3.desc": "ربط المواقع بواتساب وأزرار الاتصال المباشرة لتسهيل تفاعل الزبائن وحجز الخدمات أو طلب المنتجات فورياً.",
    "services.s4.title": "إعداد النطاق والاستضافة السريعة",
    "services.s4.desc": "نساعدك في كافة خطوات إنشاء مواقع ويب متكاملة؛ من حجز الدومين المناسب إلى توفير استضافة سريعة وآمنة ومستقرة.",
    "services.s5.title": "الصيانة والدعم الفني المستمر",
    "services.s5.desc": "تحديثات دورية ودعم فني مستمر لضمان أداء موقعك التجاري واستقراره وحمايته على مدار الساعة.",

    // Portfolio
    "portfolio.badge": "أعمالنا",
    "portfolio.title": "نماذج مواقع إلكترونية",
    "portfolio.desc": "استكشف نماذج أعمال ومشاريع توضح جودة تصميم المواقع للشركات والمحلات في الأردن لمختلف القطاعات.",
    "portfolio.conceptLabel": "نموذج / عرض توضيحي",
    "portfolio.p1.title": "أوتو كير",
    "portfolio.p1.desc": "تصميم موقع تجاري لمركز خدمات وصيانة سيارات",
    "portfolio.p2.title": "برو هاوس",
    "portfolio.p2.desc": "تصميم موقع للمحلات والمقاهي العصرية",
    "portfolio.p3.title": "فت زون",
    "portfolio.p3.desc": "تصميم صفحة هبوط Landing Page لنادٍ رياضي",
    "portfolio.p4.title": "برايم بروبرتيز",
    "portfolio.p4.desc": "تصميم موقع لشركة عقارات واستثمار",

    // Process
    "process.badge": "كيف نعمل",
    "process.title": "طريقة عمل واضحة",
    "process.desc": "خطوات عملية بسيطة من أول فكرة وحتى إطلاق موقعك على الإنترنت.",
    "process.step1.title": "أخبرنا بما تحتاج",
    "process.step1.desc": "نتعرف على طبيعة عملك، أهدافك، وما تريده في موقعك الإلكتروني الجديد.",
    "process.step2.title": "نصمم ونبني",
    "process.step2.desc": "نقوم بتصميم وبرمجة موقعك بما يناسب هويتك التجارية وتطلعات عملائك.",
    "process.step3.title": "تراجع وتعدّل",
    "process.step3.desc": "تطلع على النموذج الأولي وتطلب التعديلات التي تراها مناسبة قبل الاعتماد.",
    "process.step4.title": "إطلاق الموقع",
    "process.step4.desc": "نطلق موقعك على الإنترنت ونربطه بالنطاق ليصبح متاحاً للجميع.",

    // Pricing
    "pricing.badge": "الأسعار والتكلفة",
    "pricing.title": "تكلفة تصميم مواقع إلكترونية واضحة وبدون تعقيد",
    "pricing.desc": "تعتمد تكلفة تصميم مواقع في الأردن على متطلبات عملك وحجم الموقع. سواء كنت تريد موقعاً لشركتك أو لمحلك، شاركنا ما تحتاجه وسنقدم لك عرض سعر مدروس وواضح.",
    "pricing.check1": "نطاق عمل وتكلفة محددة",
    "pricing.check2": "بدون أي رسوم خفية",
    "pricing.check3": "مصمم خصيصاً لمشروعك",
    "pricing.cta": "أرسل طلبك",

    // CTA
    "cta.title": "جاهز للبدء في إنشاء مواقع ويب لمشروعك؟",
    "cta.desc": "إذا كنت تبحث عن تصميم مواقع في الأردن أو تصميم مواقع للشركات والمحلات مع ربط المواقع بواتساب، فريق YourSite جاهز لنقل عملك إلى المستوى التالي.",
    "cta.button": "ابدأ مشروعك الآن",

    // FAQ
    "faq.badge": "أسئلة شائعة",
    "faq.title": "الأسئلة المتكررة",
    "faq.desc": "إجابات واضحة ومباشرة حول خدماتنا وكيف نساعدك.",
    "faq.q1.question": "كم يستغرق تصميم موقع إلكتروني حتى يصبح جاهزاً؟",
    "faq.q1.answer": "يعتمد الوقت على حجم ونوع الموقع؛ فمثلاً تصميم صفحة هبوط (Landing Page) يستغرق أياماً معدودة، بينما إنشاء مواقع ويب متكاملة للشركات قد يستغرق وقتاً أطول قليلاً. بعد مناقشة متطلباتك نعطيك موعداً تقديرياً دقيقاً.",
    "faq.q2.question": "هل تتكفلون بإعداد النطاق والاستضافة؟",
    "faq.q2.answer": "نعم، نتولى جميع خطوات إنشاء مواقع ويب؛ من حجز اسم النطاق (الدومين) وتوفير الاستضافة السريعة وضبط الإعدادات ليعمل موقعك مباشرة.",
    "faq.q3.question": "هل تقدمون تصميم مواقع للشركات والمحلات والمشاريع الصغيرة؟",
    "faq.q3.answer": "نعم بالتأكيد، نتخصص في تصميم مواقع للشركات والمحلات في الأردن لمختلف القطاعات؛ سواء كان موقعاً لشركة، متجراً لمحلك، مركز خدمات، أو صفحة هبوط ترويجية لمشروع ناشئ.",
    "faq.q4.question": "كم تكلفة تصميم مواقع في الأردن؟",
    "faq.q4.answer": "تختلف أسعار تصميم مواقع في الأردن باختلاف حجم الصفحات والوظائف المطلوبة. في YourSite نحرص على تقديم أسعار واضحة ومناسبة لميزانيتك، ونزودك بعرض سعر مفصل قبل البدء بالعمل.",
    "faq.q5.question": "هل يمكنني طلب تعديلات قبل وبعد إطلاق الموقع؟",
    "faq.q5.answer": "بالتأكيد، يمكنك مراجعة الموقع وإجراء التعديلات قبل الإطلاق الرسمي، كما نوفر خدمة الدعم الفني والصيانة لأي تحديثات مستقبلية يحتاجها عملك.",

    // Contact
    "contact.badge": "تواصل معنا",
    "contact.title": "لنبني موقعك الإلكتروني مع YourSite",
    "contact.desc": "سواء كنت تبحث عن تصميم مواقع في الأردن أو تصميم مواقع للشركات والمحلات والمشاريع، تواصل معنا وسنرد عليك لمناقشة التفاصيل وتحديد التكلفة.",
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
    "contact.form.optBusiness": "موقع أعمال وشركات",
    "contact.form.optLanding": "تصميم صفحة هبوط (Landing Page)",
    "contact.form.optEcom": "متجر إلكتروني لمحل أو تجارة",
    "contact.form.optPortfolio": "معرض أعمال لمشروع",
    "contact.form.optOther": "أخرى",
    "contact.form.details": "تفاصيل إضافية",
    "contact.form.submit": "إرسال الطلب ←",

    // Footer
    "footer.desc": "YourSite لتصميم مواقع إلكترونية احترافية للشركات والمحلات والمشاريع في الأردن، مع تصميم متجاوب للهواتف وربط واتساب ووسائل التواصل.",
    "footer.linksTitle": "روابط",
    "footer.contactTitle": "تواصل",
    "footer.copyright": "© 2026 YourSite. جميع الحقوق محفوظة."
  }
};

// ===========================
// State
// ===========================
let currentLang = localStorage.getItem("yoursite-lang") || "ar";

// ===========================
// i18n Engine
// ===========================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("yoursite-lang", lang);

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
  if (langToggle) {
    langToggle.textContent = lang === "en" ? "عربي" : "English";
  }

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update Page Title and SEO Meta dynamically
  const metaDesc = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  const twitterUrl = document.querySelector('meta[name="twitter:url"]');

  const siteUrl = "https://www.yoursiteuae.online/";
  if (ogUrl) ogUrl.content = siteUrl;
  if (twitterUrl) twitterUrl.content = siteUrl;

  if (lang === "ar") {
    document.title = "YourSite | تصميم مواقع إلكترونية في الأردن";
    const arDesc = "YourSite لتصميم مواقع إلكترونية احترافية للشركات والمحلات والمشاريع في الأردن، مع تصميم متجاوب للهواتف وربط واتساب ووسائل التواصل.";
    if (metaDesc) metaDesc.content = arDesc;
    if (ogTitle) ogTitle.content = "YourSite | تصميم مواقع إلكترونية في الأردن";
    if (ogDesc) ogDesc.content = arDesc;
    if (ogLocale) ogLocale.content = "ar_JO";
    if (twitterTitle) twitterTitle.content = "YourSite | تصميم مواقع إلكترونية في الأردن";
    if (twitterDesc) twitterDesc.content = arDesc;
  } else {
    document.title = "YourSite | Website Design in Jordan";
    const enDesc = "YourSite designs professional websites for businesses and small businesses in Jordan, with responsive layouts and WhatsApp integration.";
    if (metaDesc) metaDesc.content = enDesc;
    if (ogTitle) ogTitle.content = "YourSite | Website Design in Jordan";
    if (ogDesc) ogDesc.content = enDesc;
    if (ogLocale) ogLocale.content = "en_US";
    if (twitterTitle) twitterTitle.content = "YourSite | Website Design in Jordan";
    if (twitterDesc) twitterDesc.content = enDesc;
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
      "business" : isAr ? "موقع أعمال وشركات"             : "Business / Corporate Website",
      "landing"  : isAr ? "تصميم صفحة هبوط (Landing Page)" : "Landing Page",
      "ecommerce": isAr ? "متجر إلكتروني لمحل أو تجارة"    : "Online Store / Shop",
      "portfolio": isAr ? "معرض أعمال لمشروع"              : "Portfolio",
      "other"    : isAr ? "أخرى"                           : "Other"
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
          subject                  : "طلب موقع جديد - YourSite",
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
