// 행사 & 셔틀버스 공용 데이터 — 이 파일만 수정하면 메인·셔틀 페이지에 함께 반영됩니다
const EVENTS = [
  {id:"ulsan-forum", poster:"images/banner-ban.jpg", programs:null, ko:"제4회 지속가능한 마이스·관광 울산포럼", en:"4th Sustainable MICE & Tourism Ulsan Forum",
   s:"2026-07-15", e:"2026-07-15", vko:"유에코", ven:"UECO", month:7,
   shuttle:null},
  {id:"kalgs", poster:"images/banner-hya.jpg", programs:[{id:"trevier", days:"8. 28.(금)", daysEn:"Aug 28 (Fri)", time:"16:50 ~ 18:10", timeEn:"16:50 – 18:10"}], moreComing:true, ko:"한국지방정부학회 하계학술대회", en:"KALGS Summer Conference",
   s:"2026-08-28", e:"2026-08-28", vko:"유에코", ven:"UECO", month:8,
   shuttle:{
     stops:[{ko:"울산역 (KTX)",en:"KTX Ulsan Station",c:[35.551431,129.138506],icon:"train",dir:"bottom"},{ko:"UECO",en:"UECO",hub:true,c:[35.555695,129.131635],icon:"hub",dir:"top"}],
     hoursKo:"오전 11:30 ~ 오후 8:20 (행사 기간 중)", hoursEn:"11:30 AM – 8:20 PM (during the event)",
     table:[
       {dko:"울산역(KTX) → UECO", den:"Ulsan Stn (KTX) → UECO", t:["11:30","11:50","12:10","12:30"]},
       {dko:"UECO → 울산역(KTX)", den:"UECO → Ulsan Stn (KTX)", t:["18:20","18:40","20:00","20:20"]}
     ]
   }},
  {id:"expo", poster:"images/banner-tre.jpg", programs:null, ko:"WAVE 2026 (World Advanced Vision Expo)", en:"WAVE 2026 (World Advanced Vision Expo)",
   s:"2026-09-10", e:"2026-09-12", vko:"유에코", ven:"UECO", month:9,
   shuttle:null},
  {id:"ummff", poster:"images/banner-bok.jpg", programs:null, ko:"제11회 울산울주세계산악영화제", en:"11th Ulsan Ulju Mountain Film Festival",
   s:"2026-09-18", e:"2026-09-22", vko:"영남알프스 복합웰컴센터", ven:"Yeongnam Alps Welcome Center", month:9,
   shuttle:null},
  {id:"insight", poster:"images/banner-cen.jpg", programs:null, ko:"울산 인사이트 포럼", en:"Ulsan Insight Forum",
   s:"2026-10-31", e:"2026-10-31", vko:"유에코", ven:"UECO", month:10,
   shuttle:null},
  {id:"kso", poster:"images/banner-ban.jpg", programs:null, ko:"한국해양학회 추계학술대회", en:"KSO Fall Conference",
   s:"2026-11-18", e:"2026-11-20", vko:"유에코", ven:"UECO", month:11,
   shuttle:null}
];
