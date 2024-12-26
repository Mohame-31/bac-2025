let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let toggleLang = document.getElementById("toggle-lang");
let titles = {
  en: {
    title1: "g.m0h1",
    title2: "Countdown Till",
    mainTitle: "BAC 2025",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
  ar: {
    title1: "جي. موهي",
    title2: "العد التنازلي حتى",
    mainTitle: "الباك 2025",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني",
  },
};
let currentLang = "en";

toggleLang.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  document.getElementById("title1").textContent = titles[currentLang].title1;
  document.getElementById("title2").textContent = titles[currentLang].title2;
  document.getElementById("main-title").textContent =
    titles[currentLang].mainTitle;
  document.getElementById("day-text").textContent = titles[currentLang].days;
  document.getElementById("hr-text").textContent = titles[currentLang].hours;
  document.getElementById("min-text").textContent = titles[currentLang].minutes;
  document.getElementById("sec-text").textContent = titles[currentLang].seconds;
  toggleLang.textContent =
    currentLang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية";
});

let endDate = new Date(2025, 5, 9, 00, 00); // تاريخ شهادة البكالوريا
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>${currentLang === "en" ? "Countdown Has Expired" : "انتهى العد التنازلي"}</h1>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();