let konerNam = prompt('কনের নাম লেখ ');
let konerBabarNam = prompt('কনের বাবার নাম লেখ ');
let borerNam = prompt('বরের নাম লেখ ');
let borerbabarNam = prompt('বরের বাবার নাম লেখ ');
let sakkhi_1 = prompt('প্রথম সাক্ষী ');
let sakkhi_2 = prompt('দ্বিতীয় সাক্ষী ');
let sakkhi_3 = prompt('তৃতীয় সাক্ষী ');
let biboron = ` কনে মোসা ঃ ${konerNam}, বাব মো ঃ ${konerBabarNam}.
 বর মো ঃ ${borerNam},বাবা মো ঃ ${borerbabarNam} এর সাথে বিবাহের আয়োযন।
 প্রথম সাক্ষী মো ঃ ${sakkhi_1}, দ্বিতীয় সাক্ষী মো ঃ ${sakkhi_2} এবং তৃতীয় সাক্ষী মো ঃ ${sakkhi_3} ।
 তিন জন সাক্ষী উপস্থিত থাকিয়া বিবাহ হইল ! `
let sommoti = confirm('ছেলে এবং মেয়ে কি রাজি আছে ?');
if(sommoti == true){
    console.log(biboron);
}
else{
    console.log('বিবাহ হবে না কারন কেউ রাজি না !');
}