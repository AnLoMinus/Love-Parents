document.addEventListener("DOMContentLoaded", function () {
  const poem = document.getElementById("poem");
  const verses = [
    {
      title: "פתיחה",
      theme: "opening",
      lines: [
        "לאמא ואבא שלי היקרים 🌟",
        "כמה מילים שיוצאות מהלב, פנימה חודרים, 💌",
        "על כל מה שנתתם, על מי שאתם,",
        "על הבית, החום, ועל כוחכם. 🏠✨",
        "אמא שלי, את אור שבעיניים, 🌷",
        "תמיד שם לתמוך, כמו חוף לשניים. 🌊",
      ],
    },
    {
      title: "חיבוק של אהבה",
      theme: "love",
      lines: [
        "חיבוקך מרפא כל כאב ופחד, 🤗",
        "בלעדייך אין שמיים, אין גם גשם שירד. 🌧️💖",
        "אבא יקר, עמוד התווך החזק, 💪",
        "בידך כל משקל העולם נהיה קליל ונחבק. 🌎",
        "למדת אותי ללכת ישר במסלול, 🚶‍♂️",
        "ועכשיו אני הולך בגאווה עם גב זקוף כמו פסל עמוד. 🗿",
      ],
    },
    {
      title: "בית של חלומות",
      theme: "dreams",
      lines: [
        "יחד יצרתם לי עולם של חלום, 🌈",
        "מקום לחייך, מקום להיות בו מקום. 😊🏡",
        "עם צחוק בארוחות וסיפורים בלילות, 📖🍴",
        "למדתי מכם איך להיות באמת, בלי מסכות. 🎭💝",
      ],
    },
    {
      title: "תודה מכל הלב",
      theme: "gratitude",
      lines: [
        "אני מודה לכם על כל שיחה קטנה, 📞",
        "על כל עצה, כל מבט, כל מילה חמה. 🥰",
        "אתם המגדלור כשסוער בים, 🌊",
        "אתם הבית שאיתו אני תמיד קם. 🛏️☀️",
        "אז תודה על חום, על תמיכה אין קץ, 🙏",
        "על היותכם ההורים הכי טובים בארץ. 🇮🇱",
      ],
    },
    {
      title: "אהבה נצחית",
      theme: "eternal",
      lines: [
        "אני אוהב אתכם יותר משאפשר לומר, ❤️",
        "וכתבתי את זה כי רציתי שתדעו, ישר מהלב, אל המחר. 🌟",
        "אמא ואבא, אתם שלי, לנצח נצחים, 🔗",
        "הורים מדהימים עם לב זהב וקסמים. ✨",
        "מאחל לכם ימים מלאים באור ואושר, 🌞",
        "כי בזכותכם, החיים שלי הם שיר. 🎶",
      ],
    },
    {
      title: "ברכת הלב",
      theme: "blessing",
      lines: [
        "וכעת ברכה לכם, יקרים מכל 🌟",
        "כדי לאחל לכם טוב שימשיך לגלול. 🕊️",
        "שתזכו תמיד לשמחה ושלווה, 😊",
        "שהלב יתמלא באור ואהבה. ❤️",
        "אמא, שתמיד יישאר לך הכוח לתת, 💐",
        "ואבא, שהחיוך שלך יאיר כל אמת. 🌞",
      ],
    },
    {
      title: "איחולים מתוקים",
      theme: "wishes",
      lines: [
        "שיהיו לכם ימים מתוקים כמו דבש, 🍯",
        "שנים של בריאות, בלי דאגה או חשש. 🌿",
        "שהמשפחה תמיד תישאר כה קרובה, 🤝",
        "ואיתנו יחד נחגוג כל חוויה. 🎉",
        "שתמיד תזכו לנחת ולחיבוק חם, 🤗",
        "ושמחה תמלא כל פינה בעולם. 🌎✨",
      ],
    },
    {
      title: "סיום",
      theme: "ending",
      lines: [
        "לכם, ההורים, מגיע הכל,",
        "שיהיה לכם רק טוב – היום ובכל מחול. 🎶",
        "אתם הלב, הכוח, הבית החם,",
        "ואני מאחל לכם אושר לעולם. 🏡💖",
      ],
    },
  ];

  verses.forEach((verse) => {
    const verseElement = document.createElement("div");
    verseElement.className = `verse ${verse.theme}`;

    const titleElement = document.createElement("h3");
    titleElement.className = "verse-title";
    titleElement.textContent = verse.title;
    verseElement.appendChild(titleElement);

    const linesElement = document.createElement("div");
    linesElement.className = "verse-lines";

    verse.lines.forEach((line) => {
      const lineElement = document.createElement("div");
      lineElement.className = "verse-line";
      lineElement.textContent = line;
      linesElement.appendChild(lineElement);
    });

    verseElement.appendChild(linesElement);
    poem.appendChild(verseElement);
  });
});
