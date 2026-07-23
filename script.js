(function(){
  "use strict";
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- translations ---- */
  var translations = {
    ar: {
      pageTitle:"الحب غير المتبادل - الكتاب", brandName:"الحب غير المتبادل",
      navHome:"الرئيسية", navAbout:"عن الكتاب", navPreview:"معاينة", navChapters:"الفصول", navTestimonials:"الآراء", navFaq:"الأسئلة", navDownload:"التحميل",
      headerCta:"حمّل الكتاب",
      tag1:"رسائل لم تُرسَل", tag2:"لحظات صمت", tag3:"انتظار طويل", tag4:"ذكريات محفوظة",
      openBookBtn:"افتح الكتاب",
      heroTitle:"مساحة صغيرة لحبٍّ لم يُقَل", heroSubtitle:"مخصص للشخص الذي أعطى للحياة معنىً جديدًا وأكثر دفئًا.",
      scrollCueText:"مرّر للأسفل",
      marquee:["حب","ذكريات","انتظار","صدق","رسائل","حب"],
      aboutLabel:"عن الكتاب", aboutTitle1:"أكثر من مجرد ", aboutTitle2:"كتاب",
      aboutDescription:"هذا الموقع ليس مجرد مجموعة صفحات، بل مساحة جمعت فيها كل الكلمات التي لم تستطع السطور وحدها أن تلتقطها بالكامل. هنا كتبت لك كتابًا يخلّد تفاصيلنا، وأوقاتنا المشتركة، وكل مشاعرنا التي عشناها معًا.",
      aboutButton:"اكتشف المزيد", floatingQuote:"كل حرف هنا... قصة لم تُكتب بعد",
      stat1Label:"صفحة مكتوبة", stat2Label:"قصة وحكاية", stat3Label:"شخص مخصص له", stat4Label:"من القلب",
      previewLabel:"معاينة", previewHeading1:"اقرأ ", previewHeading2:"مقطعًا",
      previewDesc:"اقلب الصفحة عشان تاخد فكرة عن أسلوب الكتاب، قبل ما تحمّل النسخة كاملة.",
      previewFrontText:"في كل مرة كنت أهمّ فيها بالكلام، كانت الكلمات تتراجع كخطوة خائفة، وتبقى محبوسة بين ضلوعي تكبر بصمت.",
      previewBackText:"ربما لم تعرفي أبدًا، لكن حبًا لم يُقل يبقى حبًا رغم كل شيء، وهذا الكتاب هو المكان الذي اخترته أخيرًا ليقول ما لم أقله.",
      previewFlipLabel:"اقلب الصفحة", previewFlipBackLabel:"الصفحة السابقة",
      servicesLabel:"الخدمات", servicesHeading1:"ما يميز ", servicesHeading2:"تجربتك",
      serviceTitle1:"كتابة أدبية راقية", serviceText1:"نصوص مكتوبة بعناية فائقة، بأسلوب أدبي هادئ يلامس القارئ ويبقى في الذاكرة.",
      serviceTitle2:"تصميم أنيق", serviceText2:"تنسيق بصري متكامل لكل صفحة، يجمع بين البساطة والفخامة في آن واحد.",
      serviceTitle3:"نسخة رقمية وطباعة", serviceText3:"احصل على الكتاب كملف PDF فوري التحميل، أو اطلب نسخة مطبوعة فاخرة.",
      serviceTitle4:"تجربة لا تُنسى", serviceText4:"كل تفصيلة في الكتاب صُممت لتصنع تجربة قراءة مختلفة عن أي كتاب آخر.",
      galleryLabel:"لحظات", galleryHeading1:"معرض ", galleryHeading2:"الذكريات",
      gallery:[
        {icon:"☕", cap:"أول لقاء"},
        {icon:"💌", cap:"رسالة لم تُرسَل"},
        {icon:"🌙", cap:"سهرة صمت"},
        {icon:"💫", cap:"لحظة لا تُنسى"}
      ],
      matchTitle:"هل أنت مستعد لتقرأ<br><b>ما لم يُقل؟</b>",
      matchSub:"إن كنت تؤمن أن بعض المشاعر تستحق أن تُكتب حتى لو لم تُقل، فهذا الكتاب لك. كل صفحة هنا كُتبت بصدق، بلا رتوش وبلا تجميل.",
      ideaTitle:"دعنا نخبرك كيف بدأت الفكرة",
      ideaText:"أردنا أن نمنح كل مشاعر لم تُقل مكانًا تستحقه، بدل أن تبقى حبيسة الذاكرة فقط. فولدت فكرة هذا الكتاب: مساحة صغيرة، صادقة، وخالية من أي تصنّع.",
      chaptersLabel:"الفصول", chaptersHeading1:"تصفّح ", chaptersHeading2:"الفصول",
      chaptersMore:"اضغط لقراءة الفصل",
      testimonialsLabel:"آراء القراء", testimonialsHeading1:"كلمات ", testimonialsHeading2:"قالوها",
      testimonials:[
        {text:"قرأته في جلسة واحدة، وحسّيت إن حد كتب كل اللي جوايا وأنا مقدرتش أقوله.", name:"سارة م."},
        {text:"أسلوب الكتابة هادئ وصادق، مش متكلّف خالص. حسّيت إني بعيش القصة مش بس باقرأها.", name:"يوسف ك."},
        {text:"من أجمل الهدايا اللي ممكن حد يقدّمها لحد يهمه. تصميم وكلام في قمة الرقي.", name:"مريم ع."}
      ],
      faqLabel:"أسئلة شائعة", faqHeading1:"عندك ", faqHeading2:"سؤال؟",
      faq:[
        {q:"هل الكتاب مجاني؟", a:"نعم، النسخة الرقمية بصيغة PDF متاحة للتحميل المجاني مباشرة من قسم التحميل."},
        {q:"هل يوجد نسخة مطبوعة؟", a:"يمكن طلب نسخة مطبوعة فاخرة بشكل منفصل، تواصل معنا عبر وسائل التواصل الموجودة بالفوتر."},
        {q:"بأي صيغة يفتح الكتاب؟", a:"الكتاب متاح بصيغة PDF، يفتح على أي جهاز كمبيوتر أو موبايل بدون الحاجة لبرنامج خاص."},
        {q:"هل يمكنني ترك رسالة بعد القراءة؟", a:"بالتأكيد، فيه قسم 'اترك ذكرى' أسفل الصفحة يمكنك الكتابة فيه بحرية."}
      ],
      downloadHeading1:"حمّل نسختك ", downloadHeading2:"الآن", downloadText:"جاهز؟ حمّل الكتاب وابدأ رحلتك مع صفحاته الأولى.",
      downloadBtnLabel:"تحميل نسخة PDF",
      footerBrand:"الحب غير المتبادل", footerTagline:"كتاب صغير، أثر كبير.",
      guestbookHeading:"اترك ذكرى", guestbookSubmit:"إرسال الرسالة ✨",
      footerBottom:"© 2026 الحب غير المتبادل. كل الحقوق محفوظة.",
      toastDownload:"تم بدء تحميل الكتاب، استمتع بالقراءة! 💌",
      toastGuestbook:"تم إرسال رسالتك بنجاح 💌"
    },
    en: {
      pageTitle:"Unrequited Love - The Book", brandName:"Unrequited Love",
      navHome:"Home", navAbout:"About", navPreview:"Preview", navChapters:"Chapters", navTestimonials:"Reviews", navFaq:"FAQ", navDownload:"Download",
      headerCta:"Get the book",
      tag1:"Unsent messages", tag2:"Quiet moments", tag3:"Long waiting", tag4:"Kept memories",
      openBookBtn:"Open the book",
      heroTitle:"A small space for a love never said", heroSubtitle:"Dedicated to the one who gave life a warmer meaning.",
      scrollCueText:"Scroll down",
      marquee:["Love","Memories","Waiting","Truth","Letters","Love"],
      aboutLabel:"About the book", aboutTitle1:"More than just a ", aboutTitle2:"book",
      aboutDescription:"This site isn't just a set of pages — it's a space where every word that lines alone couldn't fully hold finally found a home. Here, a book was written to keep our details, our shared moments, and everything we felt.",
      aboutButton:"Discover more", floatingQuote:"Every letter here... a story not yet written",
      stat1Label:"pages written", stat2Label:"stories told", stat3Label:"person it's for", stat4Label:"from the heart",
      previewLabel:"Preview", previewHeading1:"Read an ", previewHeading2:"excerpt",
      previewDesc:"Flip the page to get a feel for the book's style, before downloading the full copy.",
      previewFrontText:"Every time I almost spoke, the words retreated like a frightened step, staying locked between my ribs, growing in silence.",
      previewBackText:"Maybe you never knew, but a love left unsaid is still love. This book is the place I finally chose to say what I never said.",
      previewFlipLabel:"Flip the page", previewFlipBackLabel:"Previous page",
      servicesLabel:"Services", servicesHeading1:"What makes ", servicesHeading2:"your experience",
      serviceTitle1:"Refined writing", serviceText1:"Carefully crafted text, in a calm literary style that touches the reader and stays with them.",
      serviceTitle2:"Elegant design", serviceText2:"A cohesive visual layout for every page, blending simplicity with warmth.",
      serviceTitle3:"Digital & print", serviceText3:"Get the book as an instant PDF download, or order a beautiful printed copy.",
      serviceTitle4:"An experience to remember", serviceText4:"Every detail was designed to make this reading experience unlike any other.",
      galleryLabel:"Moments", galleryHeading1:"A gallery of ", galleryHeading2:"memories",
      gallery:[
        {icon:"☕", cap:"The first meeting"},
        {icon:"💌", cap:"An unsent letter"},
        {icon:"🌙", cap:"A quiet night"},
        {icon:"💫", cap:"An unforgettable moment"}
      ],
      matchTitle:"Ready to read<br><b>what was never said?</b>",
      matchSub:"If you believe some feelings deserve to be written even if they were never spoken, this book is for you. Every page here is honest, with no filters.",
      ideaTitle:"Let us tell you how this idea came up",
      ideaText:"We wanted to give unspoken feelings a place they deserve, instead of leaving them trapped in memory. That's how this small, honest book was born.",
      chaptersLabel:"Chapters", chaptersHeading1:"Browse the ", chaptersHeading2:"chapters",
      chaptersMore:"Tap to read the chapter",
      testimonialsLabel:"Reader reviews", testimonialsHeading1:"Words ", testimonialsHeading2:"they said",
      testimonials:[
        {text:"I read it in one sitting — it felt like someone wrote everything I could never say myself.", name:"Sara M."},
        {text:"The writing style is calm and honest, never forced. I felt like I was living the story, not just reading it.", name:"Youssef K."},
        {text:"One of the most beautiful gifts you could give someone who matters. The design and words are both first-class.", name:"Mariam A."}
      ],
      faqLabel:"FAQ", faqHeading1:"Got a ", faqHeading2:"question?",
      faq:[
        {q:"Is the book free?", a:"Yes, the digital PDF version is free to download directly from the download section."},
        {q:"Is there a printed copy?", a:"A premium printed copy can be ordered separately — reach out via the social links in the footer."},
        {q:"What format does the book open in?", a:"The book is available as a PDF, opening on any computer or phone without special software."},
        {q:"Can I leave a message after reading?", a:"Of course — there's a 'Leave a memory' section at the bottom of the page for that."}
      ],
      downloadHeading1:"Get your copy ", downloadHeading2:"now", downloadText:"Ready? Download the book and start your journey with its first pages.",
      downloadBtnLabel:"Download PDF",
      footerBrand:"Unrequited Love", footerTagline:"A small book, a lasting mark.",
      guestbookHeading:"Leave a memory", guestbookSubmit:"Send message ✨",
      footerBottom:"© 2026 Unrequited Love. All rights reserved.",
      toastDownload:"Download started, enjoy reading! 💌",
      toastGuestbook:"Your message was sent successfully 💌"
    }
  };

  var currentLang = 'ar';

  function buildMarquee(lang){
    var t = translations[lang];
    var track = document.getElementById('marqueeTrack');
    var itemHtml = t.marquee.map(function(word){
      return '<span class="marquee-item"><b>' + word + '</b><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span>';
    }).join('');
    track.innerHTML = itemHtml + itemHtml;
  }

  function buildGallery(lang){
    var t = translations[lang];
    var grid = document.getElementById('galleryGrid');
    grid.innerHTML = t.gallery.map(function(item){
      return '<div class="gallery-card"><div class="gcard-bg">' + item.icon + '</div><div class="gcard-caption">' + item.cap + '</div></div>';
    }).join('');
    grid.querySelectorAll('.gallery-card').forEach(function(card){ galleryObs.observe(card); });
  }

  function buildTestimonials(lang){
    var t = translations[lang];
    var grid = document.getElementById('testimonialGrid');
    grid.innerHTML = t.testimonials.map(function(item){
      var initials = item.name.split(' ').map(function(w){ return w.charAt(0); }).join('').slice(0,2);
      return '<div class="testimonial-card"><div class="testimonial-stars">★★★★★</div><p class="testimonial-text">' + item.text + '</p>' +
        '<div class="testimonial-person"><div class="testimonial-avatar">' + initials + '</div><span class="testimonial-name">' + item.name + '</span></div></div>';
    }).join('');
  }

  function buildFaq(lang){
    var t = translations[lang];
    var list = document.getElementById('faqList');
    list.innerHTML = t.faq.map(function(item, i){
      return '<div class="faq-item" data-index="' + i + '">' +
        '<button class="faq-question" type="button"><span>' + item.q + '</span>' +
        '<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg></button>' +
        '<div class="faq-answer"><div class="faq-answer-inner">' + item.a + '</div></div></div>';
    }).join('');
    list.querySelectorAll('.faq-item').forEach(function(item){
      var btn = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      btn.addEventListener('click', function(){
        var isOpen = item.classList.contains('open');
        list.querySelectorAll('.faq-item.open').forEach(function(openItem){
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        });
        if (!isOpen){
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  function applyLanguage(lang){
    currentLang = lang;
    var t = translations[lang];
    var dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = t.pageTitle;

    var simpleIds = ['brandName','navHome','navAbout','navPreview','navChapters','navTestimonials','navFaq','navDownload','headerCta',
      'tag1','tag2','tag3','tag4','heroTitle','heroSubtitle','scrollCueText','aboutLabel',
      'aboutDescription','floatingQuote','stat1Label','stat2Label','stat3Label','stat4Label',
      'previewLabel','previewDesc','previewFrontText','previewBackText','previewFlipLabel','previewFlipBackLabel',
      'servicesLabel','serviceTitle1','serviceText1','serviceTitle2','serviceText2','serviceTitle3','serviceText3',
      'serviceTitle4','serviceText4','galleryLabel','matchSub','ideaTitle','ideaText','chaptersLabel',
      'testimonialsLabel','faqLabel','downloadText','downloadBtnLabel','footerBrand','footerTagline',
      'guestbookHeading','guestbookSubmit','footerBottom'];
    simpleIds.forEach(function(id){
      var el = document.getElementById(id);
      if (el && t[id] !== undefined) el.textContent = t[id];
    });

    document.querySelector('#openBookBtn span').textContent = t.openBookBtn;
    document.getElementById('aboutTitle').innerHTML = t.aboutTitle1 + '<span>' + t.aboutTitle2 + '</span>';
    var aboutBtnSpan = document.querySelector('#aboutButton span');
    if (aboutBtnSpan) aboutBtnSpan.textContent = t.aboutButton;
    document.getElementById('previewHeading').innerHTML = t.previewHeading1 + '<span>' + t.previewHeading2 + '</span>';
    document.getElementById('servicesHeading').innerHTML = t.servicesHeading1 + '<span>' + t.servicesHeading2 + '</span>';
    document.getElementById('galleryHeading').innerHTML = t.galleryHeading1 + '<span>' + t.galleryHeading2 + '</span>';
    document.getElementById('matchTitle').innerHTML = t.matchTitle;
    document.getElementById('chaptersHeading').innerHTML = t.chaptersHeading1 + '<span>' + t.chaptersHeading2 + '</span>';
    document.getElementById('testimonialsHeading').innerHTML = t.testimonialsHeading1 + '<span>' + t.testimonialsHeading2 + '</span>';
    document.getElementById('faqHeading').innerHTML = t.faqHeading1 + '<span>' + t.faqHeading2 + '</span>';
    document.getElementById('downloadHeading').innerHTML = t.downloadHeading1 + '<span>' + t.downloadHeading2 + '</span>';

    document.getElementById('langToggle').textContent = lang === 'ar' ? 'EN' : 'AR';
    buildMarquee(lang);
    buildGallery(lang);
    buildTestimonials(lang);
    buildFaq(lang);
    renderTimeline(lang);
  }

  document.getElementById('langToggle').addEventListener('click', function(){
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  /* ---- header scroll state + reading progress ---- */
  var header = document.getElementById('siteHeader');
  var progressFill = document.getElementById('progressFill');
  function updateHeaderAndProgress(){
    header.classList.toggle('scrolled', window.scrollY > 40);
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    progressFill.style.width = Math.min(Math.max(pct, 0), 100) + '%';
  }
  window.addEventListener('scroll', updateHeaderAndProgress, { passive:true });

  /* ---- mobile nav ---- */
  var nav = document.getElementById('mainNav');
  var menuBtn = document.getElementById('menuToggle');
  var backdrop = document.getElementById('navBackdrop');
  function closeNav(){
    nav.classList.remove('open'); menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded','false'); backdrop.classList.remove('show');
  }
  menuBtn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    menuBtn.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', open);
    backdrop.classList.toggle('show', open);
  });
  backdrop.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(function(link){ link.addEventListener('click', closeNav); });

  /* ---- cursor glow (desktop only) ---- */
  var glow = document.getElementById('cursorGlow');
  if (!reduceMotion && window.matchMedia('(min-width:901px)').matches && window.matchMedia('(hover:hover)').matches){
    window.addEventListener('mousemove', function(e){
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.classList.add('active');
    }, { passive:true });
    document.addEventListener('mouseleave', function(){ glow.classList.remove('active'); });
  }

  /* ---- hero heart tilt on mousemove (applied to the img, not the floating wrapper) ---- */
  var stage = document.getElementById('heartStage');
  var heroHeart = document.getElementById('heroHeartImg');
  var tiltX = 0, tiltY = 0;
  if (!reduceMotion){
    stage.addEventListener('mousemove', function(e){
      var rect = stage.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      tiltX = x * 18; tiltY = -y * 18;
      applyHeroHeartTransform();
    });
    stage.addEventListener('mouseleave', function(){ tiltX = 0; tiltY = 0; applyHeroHeartTransform(); });
  }

  /* ---- scroll-linked hero parallax / shrink-fade ----
     Fixed bug: the idle float animation now lives on a wrapper
     (.hero-heart-float) so it no longer fights this JS-driven
     transform, which is applied directly to the <img>. */
  var heroGlow = document.getElementById('heroGlow');
  var heroSection = document.getElementById('hero');
  var scrollProgress = 0;
  function applyHeroHeartTransform(){
    if (!heroHeart) return;
    var scale = 1 - scrollProgress * 0.22;
    var fade = 1 - scrollProgress * 1.1;
    var rise = -scrollProgress * 60;
    heroHeart.style.opacity = Math.max(fade, 0);
    heroHeart.style.transform = 'translateY(' + rise + 'px) scale(' + scale + ') rotate(' + (scrollProgress * -8 + tiltY * 0.15) + 'deg) rotateY(' + tiltX + 'deg)';
  }
  var ticking = false;
  function updateScrollFx(){
    var y = window.scrollY;
    var heroH = heroSection.offsetHeight || 800;
    scrollProgress = Math.min(y / heroH, 1);
    if (heroGlow) heroGlow.style.transform = 'translateY(' + (y * 0.25) + 'px)';
    applyHeroHeartTransform();
    updateTimelineFill();
    ticking = false;
  }
  if (!reduceMotion){
    window.addEventListener('scroll', function(){
      if (!ticking){ window.requestAnimationFrame(updateScrollFx); ticking = true; }
    }, { passive:true });
  }

  /* ---- reveal-triggered image entrances ---- */
  var aboutCard = document.getElementById('aboutCard');
  var downloadHeart = document.getElementById('downloadHeartImg');
  var imgObs = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){ entry.target.classList.add('in'); imgObs.unobserve(entry.target); }
    });
  }, { threshold:0.3 }) : null;
  if (imgObs){
    if (aboutCard) imgObs.observe(aboutCard);
    if (downloadHeart) imgObs.observe(downloadHeart);
  } else {
    if (aboutCard) aboutCard.classList.add('in');
    if (downloadHeart) downloadHeart.classList.add('in');
  }

  /* ---- gallery card reveal ---- */
  var galleryObs = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){ entry.target.classList.add('in'); galleryObs.unobserve(entry.target); }
    });
  }, { threshold:0.2 }) : { observe:function(el){ el.classList.add('in'); } };

  /* ---- book preview flip ---- */
  var previewPage = document.getElementById('previewPage');
  document.getElementById('previewFlipBtn').addEventListener('click', function(){ previewPage.classList.add('flipped'); });
  document.getElementById('previewFlipBackBtn').addEventListener('click', function(){ previewPage.classList.remove('flipped'); });

  /* ---- chapters timeline ---- */
  var chapters = [
    {
      ar:{ title:"الفصل الأول: اللقاء الأول ☕", text:"بعد ظهر عادي، بخار يتصاعد من فنجانين قهوة، لم يكن أيٌّ منّا يعلم أن صدفة صغيرة على وشك أن تصبح ذكرى سأعاود إليها مئة مرة." },
      en:{ title:"Chapter One: The First Meeting ☕", text:"It was an ordinary afternoon, steam rising from two cups of coffee, and neither of us knew a small coincidence was about to become a memory I'd return to a hundred times over." },
      date:"14 January 2024"
    },
    {
      ar:{ title:"الفصل الثاني: البدايات الجميلة 💖", text:"بدأت الأشياء الصغيرة تصبح كبيرة في ذهني... رسالة عابرة، ضحكة مشتركة، ولحظة صمت لم تكن محرجة على الإطلاق." },
      en:{ title:"Chapter Two: Beautiful Beginnings 💖", text:"Small things started becoming big in my mind... a passing message, a shared laugh, and a moment of silence that wasn't awkward at all." },
      date:"20 February 2024"
    },
    {
      ar:{ title:"الفصل الثالث: وعود وذكريات للأبد ⭐", text:"لم أعدك بشيء، ولم تعديني بشيء، لكن قلبي احتفظ بكل التفاصيل وكأنها وعود. هذه الذكريات صارت لي وحدي الآن، لكنها تستحق مكانًا هنا." },
      en:{ title:"Chapter Three: Promises & Forever Memories ⭐", text:"I made you no promises, and you made me none, but my heart kept every detail as if they were vows. These memories are mine alone now, but they deserve a place here." },
      date:"05 March 2024"
    }
  ];

  var timelineEl = document.getElementById('timeline');
  var timelineFill = document.getElementById('timelineFill');
  var timelineObs = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){ entry.target.classList.add('in'); timelineObs.unobserve(entry.target); }
    });
  }, { threshold:0.25 }) : { observe:function(el){ el.classList.add('in'); } };

  function renderTimeline(lang){
    timelineEl.querySelectorAll('.timeline-node').forEach(function(n){ n.remove(); });
    var moreLabel = translations[lang].chaptersMore;
    chapters.forEach(function(ch, i){
      var body = lang === 'ar' ? ch.ar : ch.en;
      var node = document.createElement('div');
      node.className = 'timeline-node';
      node.innerHTML = '<span class="timeline-dot"></span>' +
        '<div class="timeline-card" data-index="' + i + '">' +
        '<span class="timeline-date">' + ch.date + '</span>' +
        '<h4 class="timeline-title">' + body.title + '</h4>' +
        '<p class="timeline-text">' + body.text + '</p>' +
        '<span class="timeline-more">' + moreLabel + '</span>' +
        '</div>';
      timelineEl.appendChild(node);
      timelineObs.observe(node);
      node.querySelector('.timeline-card').addEventListener('click', function(){
        this.classList.toggle('active');
      });
    });
  }

  function updateTimelineFill(){
    if (!timelineFill || !timelineEl) return;
    var rect = timelineEl.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height;
    if (total <= 0) return;
    var visible = vh * 0.75 - rect.top;
    var pct = Math.min(Math.max(visible / total, 0), 1) * 100;
    timelineFill.style.height = pct + '%';
  }

  /* ---- toast ---- */
  var toastEl = document.getElementById('toast');
  var toastTimer;
  function showToast(message){
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toastEl.classList.remove('show'); }, 3200);
  }
  document.getElementById('downloadBookBtn').addEventListener('click', function(){
    showToast(translations[currentLang].toastDownload);
  });
  document.getElementById('guestbookForm').addEventListener('submit', function(e){
    e.preventDefault();
    showToast(translations[currentLang].toastGuestbook);
    e.target.reset();
  });

  /* ---- counters ---- */
  function animateCounter(el){
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 1600;
    var step = target / (duration / 16);
    var current = 0;
    var timer = setInterval(function(){
      current += step;
      if (current >= target){ el.textContent = target; clearInterval(timer); }
      else { el.textContent = Math.floor(current); }
    }, 16);
  }
  if (!reduceMotion){
    var statsRow = document.querySelector('.about-stats-row');
    if (statsRow){
      var statsObs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting){
            entry.target.querySelectorAll('.about-stat-number').forEach(animateCounter);
            statsObs.unobserve(entry.target);
          }
        });
      }, { threshold:0.5 });
      statsObs.observe(statsRow);
    }
  } else {
    document.querySelectorAll('.about-stat-number').forEach(function(el){ el.textContent = el.getAttribute('data-target'); });
  }

  /* ---- scroll reveal (sections) ---- */
  if ('IntersectionObserver' in window && !reduceMotion){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold:0.12 });
    document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
  }

  buildMarquee(currentLang);
  buildGallery(currentLang);
  buildTestimonials(currentLang);
  buildFaq(currentLang);
  renderTimeline(currentLang);
  updateHeaderAndProgress();
  updateScrollFx();

  /* ---- MEMORIES LIGHTBOX ---- */
  var lightbox      = document.getElementById('lightbox');
  var lightboxImg   = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev  = document.getElementById('lightboxPrev');
  var lightboxNext  = document.getElementById('lightboxNext');
  var photos        = [];
  var currentIdx    = 0;

  document.querySelectorAll('.memories-item img').forEach(function(img, i){
    photos.push(img.src);
    img.addEventListener('click', function(){
      currentIdx = i;
      lightboxImg.src = photos[currentIdx];
      lightbox.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e){ if(e.target===lightbox) closeLightbox(); });

  lightboxPrev.addEventListener('click', function(e){
    e.stopPropagation();
    currentIdx = (currentIdx - 1 + photos.length) % photos.length;
    lightboxImg.src = photos[currentIdx];
  });
  lightboxNext.addEventListener('click', function(e){
    e.stopPropagation();
    currentIdx = (currentIdx + 1) % photos.length;
    lightboxImg.src = photos[currentIdx];
  });

  document.addEventListener('keydown', function(e){
    if(!lightbox.classList.contains('show')) return;
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowLeft'){ lightboxNext.click(); }
    if(e.key==='ArrowRight'){ lightboxPrev.click(); }
  });

  function closeLightbox(){
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
  }
})();