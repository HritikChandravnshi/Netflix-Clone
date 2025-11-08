let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



//Full bilingual translations (English <-> Hindi)
const translations = {
  english: {
    signin: "Sign In",
    heroTitle: "Unlimited Movies, TV Shows and More.",
    heroSubtitle: "Watch anywhere and cancel anytime.",
    heroDescription:
      "Ready to watch? Enter your email to create or restart your membership.",
    emailLabel: "Email Address",
    getStarted: "Get Started",

    feature1Title: "Enjoy on your TV.",
    feature1Sub:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    feature2Title: "Download your shows to watch offline.",
    feature2Sub:
      "Save your favourites easily and always have something to watch.",
    feature3Title: "Watch everywhere.",
    feature3Sub:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    feature4Title: "Create profiles for children.",
    feature4Sub:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",

    faqHeading: "Frequently Asked Questions",
    faq1Title: "What is Netflix?",
    faq1Body: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    faq2Title: "How much does Netflix cost?",
    faq2Body:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹199 to ₹799 a month. No extra costs, no contracts.",
    faq3Title: "Where can I watch?",
    faq3Body: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
    You can also download your favourite shows with the iOS, Android, or Windows 10 app.`,
    faq4Title: "How do I cancel?",
    faq4Body:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. No cancellation fees.",
    faq5Title: "What can I watch from Netflix?",
    faq5Body:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
    faq6Title: "Is Netflix good for kids?",
    faq6Body:
      "The Netflix Kids experience gives parents control while kids enjoy family-friendly TV shows and films in their own space.",

    readyText:
      "Ready to watch? Enter your email to create or restart your membership.",
    footerQ: "Questions? Call 000-800-040-1843",
    footerNote: "Netflix India",
    footerLinks: [
      "FAQ",
      "Investor Relations",
      "Privacy",
      "Speed Test",
      "Help Centre",
      "Jobs",
      "Cookie Preferences",
      "Legal Notices",
      "Account",
      "Ways to Watch",
      "Corporate Information",
      "Only on Netflix",
      "Media Centre",
      "Terms of Use",
      "Contact Us",
    ],

  },

  hindi: {
    signin: "साइन इन करें",
    heroTitle: "अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ।",
    heroSubtitle: "कहीं भी देखें, कभी भी रद्द करें।",
    heroDescription:
      "देखना शुरू करने के लिए, अपना ईमेल दर्ज करें या अपनी सदस्यता फिर से शुरू करें।",
    emailLabel: "ईमेल पता",
    getStarted: "शुरू करें",

    feature1Title: "अपने टीवी पर आनंद लें।",
    feature1Sub:
      "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर और अधिक पर देखें।",
    feature2Title: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें।",
    feature2Sub:
      "अपनी पसंदीदा चीज़ों को आसानी से सहेजें और हमेशा देखने के लिए कुछ रखें।",
    feature3Title: "हर जगह देखें।",
    feature3Sub:
      "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें।",
    feature4Title: "बच्चों के लिए प्रोफ़ाइल बनाएं।",
    feature4Sub:
      "बच्चों को उनके पसंदीदा किरदारों के साथ रोमांच पर भेजें—आपकी सदस्यता के साथ मुफ़्त।",

    faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
    faq1Title: "नेटफ्लिक्स क्या है?",
    faq1Body: `नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्री और बहुत कुछ प्रदान करती है। आप जितना चाहें देख सकते हैं, कभी भी और कहीं भी। कोई विज्ञापन नहीं, बस एक साधारण मासिक शुल्क।`,
    faq2Title: "नेटफ्लिक्स की कीमत कितनी है?",
    faq2Body:
      "स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें। योजनाएं ₹199 से ₹799 प्रति माह हैं। कोई अतिरिक्त शुल्क या अनुबंध नहीं।",
    faq3Title: "मैं कहाँ देख सकता हूँ?",
    faq3Body: `कहीं भी, कभी भी, किसी भी डिवाइस पर देखें। नेटफ्लिक्स ऐप के साथ यात्रा करते समय अपने पसंदीदा शो डाउनलोड करें और ऑफ़लाइन देखें।`,
    faq4Title: "मैं कैसे रद्द करूँ?",
    faq4Body:
      "नेटफ्लिक्स लचीला है। कोई अनुबंध नहीं, कोई शुल्क नहीं। आप किसी भी समय ऑनलाइन अपना खाता रद्द कर सकते हैं।",
    faq5Title: "मैं नेटफ्लिक्स पर क्या देख सकता हूँ?",
    faq5Body:
      "नेटफ्लिक्स में फ़िल्में, डॉक्यूमेंट्री, टीवी शो, ऐनिमे और नेटफ्लिक्स ओरिजिनल्स का विशाल संग्रह है।",
    faq6Title: "क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?",
    faq6Body:
      "नेटफ्लिक्स किड्स अनुभव बच्चों को परिवार-अनुकूल शो और फ़िल्मों का आनंद देता है और माता-पिता को नियंत्रण प्रदान करता है।",

    readyText:
      "देखना शुरू करने के लिए, अपना ईमेल दर्ज करें या अपनी सदस्यता फिर से शुरू करें।",
    footerQ: "प्रश्न हैं? कॉल करें 000-800-040-1843",
    footerNote: "नेटफ्लिक्स इंडिया",
    footerLinks: [
      "सामान्य प्रश्न",
      "निवेशक संबंध",
      "गोपनीयता",
      "गति परीक्षण",
      "सहायता केंद्र",
      "नौकरियां",
      "कुकी प्राथमिकताएँ",
      "कानूनी नोटिस",
      "खाता",
      "देखने के तरीके",
      "कॉर्पोरेट जानकारी",
      "केवल नेटफ्लिक्स पर",
      "मीडिया केंद्र",
      "उपयोग की शर्तें",
      "हमसे संपर्क करें",
    ],

  },
};

//Function to switch all visible text
function switchLanguage(lang) {
  const t = translations[lang];

  // Navbar
  document.querySelector(".signin__button").textContent = t.signin;

  // Hero section
  document.querySelector(".hero__title").innerHTML = t.heroTitle;
  document.querySelector(".hero__subtitle").textContent = t.heroSubtitle;
  document.querySelector(".hero__description").textContent = t.heroDescription;
  document
    .querySelectorAll(".email__label")
    .forEach((el) => (el.textContent = t.emailLabel));
  document
    .querySelectorAll(".primary__button")
    .forEach((btn) => (btn.firstChild.textContent = t.getStarted + " "));

  // Features
  const features = document.querySelectorAll(".feature");
  if (features.length >= 4) {
    features[0].querySelector(".feature__title").textContent = t.feature1Title;
    features[0].querySelector(".feature__sub__title").textContent =
      t.feature1Sub;
    features[1].querySelector(".feature__title").textContent = t.feature2Title;
    features[1].querySelector(".feature__sub__title").textContent =
      t.feature2Sub;
    features[2].querySelector(".feature__title").textContent = t.feature3Title;
    features[2].querySelector(".feature__sub__title").textContent =
      t.feature3Sub;
    features[3].querySelector(".feature__title").textContent = t.feature4Title;
    features[3].querySelector(".feature__sub__title").textContent =
      t.feature4Sub;
  }

  // FAQ Section
  document.querySelector(".FAQ__heading").textContent = t.faqHeading;

  const faqTitles = document.querySelectorAll(".FAQ__title");
  const faqBodies = document.querySelectorAll(".FAQ__visible");

  const faqData = [
    [t.faq1Title, t.faq1Body],
    [t.faq2Title, t.faq2Body],
    [t.faq3Title, t.faq3Body],
    [t.faq4Title, t.faq4Body],
    [t.faq5Title, t.faq5Body],
    [t.faq6Title, t.faq6Body],
  ];

  faqData.forEach(([title, body], i) => {
    if (faqTitles[i]) faqTitles[i].childNodes[0].textContent = title;
    if (faqBodies[i])
      faqBodies[i].querySelector("p").textContent = body.split("\n")[0];
  });

  // Footer
  document.querySelector(".FAQ__get__started__email h3").textContent =
    t.readyText;
  document.querySelector(".footer__row__1 h4").textContent = t.footerQ;
  document.querySelector(".footer__row__4 p").textContent = t.footerNote;
  // 🌐 Footer link translations
const footerTexts = document.querySelectorAll(".footer__row__2 p");
footerTexts.forEach((p, index) => {
  if (t.footerLinks[index]) {
    p.textContent = t.footerLinks[index];
  }
});

}

// Dropdown listener
const languageSelect = document.getElementById("languagesSelect");
languageSelect.addEventListener("change", (e) => switchLanguage(e.target.value));

// Remember selected language
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "english";
  languageSelect.value = savedLang;
  switchLanguage(savedLang);
});

languageSelect.addEventListener("change", (e) => {
  localStorage.setItem("language", e.target.value);
});

