const express = require("express");
const app = express();

const questions = [
  {
    question: "১. Closure কী?",
    answer:
      "Closure হলো একটি ফাংশন যা তার বাইরের স্কোপের ভেরিয়েবলগুলিকে অ্যাক্সেস করতে পারে।",
  },
  {
    question: "২. Promise কী?",
    answer:
      "Promise হলো asynchronous অপারেশনগুলির জন্য একটি অবজেক্ট, যা ভবিষ্যতে একটি মান প্রদান করবে।",
  },
  {
    question: "৩. `this` কীভাবে কাজ করে?",
    answer:
      "`this` বর্তমান কনটেক্সটের উপর নির্ভর করে। ফাংশন কলের সময় এটি ভিন্ন হতে পারে।",
  },
  {
    question: "৪. `map` এবং `forEach` এর মধ্যে পার্থক্য কী?",
    answer: "`map` নতুন অ্যারে রিটার্ন করে, আর `forEach` কিছু রিটার্ন করে না।",
  },
  {
    question: "৫. Async/Await কী?",
    answer:
      "Async/Await হলো Promise-এর উপর ভিত্তি করে asynchronous কোড লেখার একটি সোজা উপায়।",
  },
  {
    question: "৬. Prototype কী?",
    answer:
      "Prototype হলো অবজেক্টের একটি বিশেষ বৈশিষ্ট্য যা মেথড এবং প্রোপার্টি ইনহেরিট করতে ব্যবহৃত হয়।",
  },
  {
    question: "৭. Event Delegation কী?",
    answer:
      "Event Delegation হলো একটি প্যাটার্ন যেখানে ইভেন্ট লিসেনার প্যারেন্টে যুক্ত করা হয় এবং ইভেন্টের প্রোপাগেশন ব্যবহার করে চাইল্ড এলিমেন্টে কাজ করা হয়।",
  },
  {
    question: "৮. `debounce` এবং `throttle` এর মধ্যে পার্থক্য কী?",
    answer:
      "Debounce একটি ফাংশনকে একটি নির্দিষ্ট সময়ের পরে কল করে, যখন throttle একটি ফাংশনকে নির্দিষ্ট সময় অন্তর অন্তর কল করে।",
  },
  {
    question: "৯. Higher-order function কী?",
    answer:
      "Higher-order function হলো একটি ফাংশন যা অন্য একটি ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে অথবা একটি ফাংশনকে রিটার্ন করে।",
  },
  {
    question: "১০. Spread operator কীভাবে কাজ করে?",
    answer:
      "Spread operator (...) একটি অ্যারে বা অবজেক্টের উপাদানগুলিকে পৃথক করে দেয় এবং নতুন অ্যারে বা অবজেক্ট তৈরি করতে ব্যবহৃত হয়।",
  },
  {
    question: "১১. Destructuring assignment কী?",
    answer:
      "Destructuring assignment হলো একটি সিনট্যাক্স যা একটি অ্যারে বা অবজেক্ট থেকে ভ্যালুগুলোকে আলাদাভাবে বের করে আনতে সাহায্য করে।",
  },
  {
    question: "১২. JSON কী?",
    answer:
      "JSON হলো একটি ফর্ম্যাট যা ডেটা স্টোরেজ এবং ট্রান্সফার করার জন্য ব্যবহৃত হয়।",
  },
  {
    question: "১৩. CORS কী?",
    answer:
      "CORS (Cross-Origin Resource Sharing) হলো একটি নিরাপত্তা ফিচার যা ব্রাউজারকে একাধিক ডোমেইন থেকে রিসোর্স অ্যাক্সেস করার অনুমতি দেয়।",
  },
  {
    question: "১৪. `null` এবং `undefined` এর মধ্যে পার্থক্য কী?",
    answer:
      "`null` একটি ভ্যালু হিসেবে ব্যবহার করা হয়, আর `undefined` বোঝায় যে একটি ভ্যারিয়েবল ঘোষিত হয়েছে কিন্তু তার কোন মান নেই।",
  },
  {
    question: "১৫. Hoisting কী?",
    answer:
      "Hoisting হলো একটি আচরণ যেখানে ফাংশন এবং ভ্যারিয়েবল ডেক্লারেশনগুলি তাদের স্কোপের শীর্ষে স্থানান্তরিত হয়।",
  },
  {
    question: "১৬. Template literals কী?",
    answer:
      "Template literals হলো ES6-এর একটি ফিচার যা মাল্টিলাইন স্ট্রিং এবং ইন্টারপোলেশন করতে সাহায্য করে।",
  },
  {
    question:
      "১৭. Function expression এবং Function declaration এর মধ্যে পার্থক্য কী?",
    answer:
      "Function declaration হলো ফাংশনকে সরাসরি ডিফাইন করা, আর function expression হলো একটি ভ্যারিয়েবলের মধ্যে ফাংশন সংরক্ষণ করা।",
  },
  {
    question: "১৮. `setTimeout` এবং `setInterval` কী?",
    answer:
      "`setTimeout` একটি ফাংশনকে নির্দিষ্ট সময় পরে একবার চালায়, আর `setInterval` একটি ফাংশনকে নির্দিষ্ট সময় অন্তর অন্তর চালায়।",
  },
  {
    question: "১৯. Module কী?",
    answer:
      "Module হলো কোডের একটি ইউনিট যা অন্য কোডের সাথে পুনরায় ব্যবহার করা যায়।",
  },
  {
    question: "২০. Callback function কী?",
    answer:
      "Callback function হলো একটি ফাংশন যা অন্য একটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয় এবং পরে কল করা হয়।",
  },
  {
    question: "২১. `Object.create()` কী?",
    answer:
      "`Object.create()` একটি নতুন অবজেক্ট তৈরি করে যা একটি নির্দিষ্ট অবজেক্টের প্রোটোটাইপ হিসাবে কাজ করে।",
  },
  {
    question: "২২. `bind()` মেথড কী?",
    answer:
      "`bind()` মেথড একটি নতুন ফাংশন তৈরি করে যার `this` মান নির্দিষ্ট করে।",
  },
  {
    question: "২৩. `call()` এবং `apply()` এর মধ্যে পার্থক্য কী?",
    answer:
      "`call()` এবং `apply()` উভয়ই একটি ফাংশনকে নির্দিষ্ট `this` কনটেক্সট সহ কল করে, তবে `apply()` একটি অ্যারে আর্গুমেন্ট নেয়।",
  },
  {
    question: "২৪. `instanceof` কী?",
    answer:
      "`instanceof` অপারেটর একটি অবজেক্টের একটি নির্দিষ্ট কনস্ট্রাক্টরের উদাহরণ কি না তা পরীক্ষা করে।",
  },
  {
    question: "২৫. `set` এবং `map` এর মধ্যে পার্থক্য কী?",
    answer:
      "`Set` একটি ইউনিক ভ্যালু সংগ্রহ করে, আর `Map` key-value জোড় সংগ্রহ করে।",
  },
  {
    question: "২৬. `let` এবং `const` এর মধ্যে পার্থক্য কী?",
    answer:
      "`let` পরিবর্তনযোগ্য ভ্যারিয়েবল ঘোষণা করে, আর `const` অপরিবর্তনীয় ভ্যারিয়েবল ঘোষণা করে।",
  },
  {
    question: "২৭. Arrow function কী?",
    answer:
      "Arrow function হলো একটি সংক্ষিপ্ত ফাংশন ডিফিনিশন যার মধ্যে `this` প্রাসঙ্গিক কনটেক্সটের উপর নির্ভর করে।",
  },
  {
    question: "২৮. Async function কী?",
    answer:
      "Async function এমন একটি ফাংশন যা স্বয়ংক্রিয়ভাবে Promise রিটার্ন করে।",
  },
  {
    question: "২৯. Fetch API কী?",
    answer:
      "Fetch API হলো একটি আধুনিক উপায় HTTP রিকোয়েস্ট করার জন্য, যা Promise ব্যবহার করে।",
  },
  {
    question: "৩০. `typeof` কী?",
    answer: "`typeof` অপারেটর একটি ভ্যারিয়েবলের ডেটা টাইপ নির্ধারণ করে।",
  },
  {
    question: "৩১. Immediately Invoked Function Expression (IIFE) কী?",
    answer:
      "IIFE হলো একটি ফাংশন যা ডিফাইন করার সাথে সাথে স্বয়ংক্রিয়ভাবে কল হয়।",
  },
  {
    question: "৩২. `async` ও `await` একসাথে কীভাবে কাজ করে?",
    answer:
      "`async` ফাংশন একটি Promise রিটার্ন করে এবং `await` Promise রেজাল্ট পাওয়ার জন্য অপেক্ষা করে।",
  },
  {
    question: "৩৩. `slice()` মেথড কী?",
    answer:
      "`slice()` মেথড একটি অ্যারে বা স্ট্রিং থেকে একটি নতুন অ্যারে বা স্ট্রিং তৈরি করে।",
  },
  {
    question: "৩৪. `splice()` মেথড কী?",
    answer:
      "`splice()` মেথড একটি অ্যারের নির্দিষ্ট ইনডেক্স থেকে উপাদানগুলি মুছে ফেলে এবং নতুন উপাদান যোগ করে।",
  },
  {
    question: "৩৫. `filter()` মেথড কী?",
    answer:
      "`filter()` মেথড একটি অ্যারের ফিল্টার করা উপাদানগুলোর নতুন অ্যারে রিটার্ন করে।",
  },
  {
    question: "৩৬. `reduce()` মেথড কী?",
    answer:
      "`reduce()` মেথড একটি অ্যারের উপাদানগুলিকে একটিতে রূপান্তরিত করে, যেমন সংখ্যা যোগ করা।",
  },
  {
    question: "৩৭. `every()` মেথড কী?",
    answer:
      "`every()` মেথড একটি অ্যারের সব উপাদান একটি নির্দিষ্ট শর্ত পূরণ করে কিনা তা পরীক্ষা করে।",
  },
  {
    question: "৩৮. `some()` মেথড কী?",
    answer:
      "`some()` মেথড একটি অ্যারের যেকোনো উপাদান একটি নির্দিষ্ট শর্ত পূরণ করে কিনা তা পরীক্ষা করে।",
  },
  {
    question: "৩৯. `find()` মেথড কী?",
    answer:
      "`find()` মেথড প্রথম উপাদানটি রিটার্ন করে যা একটি নির্দিষ্ট শর্ত পূরণ করে।",
  },
  {
    question: "৪০. `includes()` মেথড কী?",
    answer:
      "`includes()` মেথড একটি স্ট্রিং বা অ্যারের মধ্যে একটি নির্দিষ্ট ভ্যালু আছে কিনা তা পরীক্ষা করে।",
  },
  {
    question: "৪১. `join()` মেথড কী?",
    answer: "`join()` মেথড একটি অ্যারের সব উপাদানকে একটি স্ট্রিংয়ে যুক্ত করে।",
  },
  {
    question: "৪২. `shift()` মেথড কী?",
    answer:
      "`shift()` মেথড একটি অ্যারের প্রথম উপাদান মুছে ফেলে এবং সেটি রিটার্ন করে।",
  },
  {
    question: "৪৩. `unshift()` মেথড কী?",
    answer:
      "`unshift()` মেথড একটি অ্যারের শুরুতে নতুন উপাদান যোগ করে এবং নতুন লেংথ রিটার্ন করে।",
  },
  {
    question: "৪৪. `pop()` মেথড কী?",
    answer:
      "`pop()` মেথড একটি অ্যারের শেষ উপাদান মুছে ফেলে এবং সেটি রিটার্ন করে।",
  },
  {
    question: "৪৫. `push()` মেথড কী?",
    answer:
      "`push()` মেথড একটি অ্যারের শেষের দিকে নতুন উপাদান যোগ করে এবং নতুন লেংথ রিটার্ন করে।",
  },
  {
    question: "৪৬. `Object.keys()` কী?",
    answer:
      "`Object.keys()` একটি অবজেক্টের সমস্ত কী-এর একটি অ্যারে রিটার্ন করে।",
  },
  {
    question: "৪৭. `Object.values()` কী?",
    answer:
      "`Object.values()` একটি অবজেক্টের সমস্ত ভ্যালুর একটি অ্যারে রিটার্ন করে।",
  },
  {
    question: "৪৮. `Object.entries()` কী?",
    answer:
      "`Object.entries()` একটি অবজেক্টের কী-ভ্যালু জোড়গুলোর অ্যারে রিটার্ন করে।",
  },
  {
    question: "৪৯. `Array.from()` কী?",
    answer:
      "`Array.from()` একটি Array-like অবজেক্ট বা iterable থেকে একটি নতুন অ্যারে তৈরি করে।",
  },
  {
    question: "৫০. `Array.isArray()` কী?",
    answer:
      "`Array.isArray()` একটি ভ্যারিয়েবল একটি অ্যারে কিনা তা পরীক্ষা করে।",
  },
  {
    question: "৫১. `String.split()` কী?",
    answer:
      "`String.split()` একটি স্ট্রিংকে একটি নির্দিষ্ট সেপারেটরের ভিত্তিতে উপাদানগুলোতে ভাগ করে।",
  },
  {
    question: "৫২. `String.replace()` কী?",
    answer:
      "`String.replace()` একটি স্ট্রিংয়ের মধ্যে একটি নির্দিষ্ট ভ্যালুকে অন্য একটি ভ্যালু দিয়ে প্রতিস্থাপন করে।",
  },
  {
    question: "৫৩. `String.charAt()` কী?",
    answer:
      "`String.charAt()` একটি স্ট্রিংয়ের একটি নির্দিষ্ট ইনডেক্সের অক্ষর রিটার্ন করে।",
  },
  {
    question: "৫৪. `String.indexOf()` কী?",
    answer:
      "`String.indexOf()` একটি স্ট্রিংয়ের মধ্যে একটি নির্দিষ্ট ভ্যালুর প্রথম ইনডেক্স রিটার্ন করে।",
  },
  {
    question: "৫৫. `String.slice()` কী?",
    answer: "`String.slice()` একটি স্ট্রিং থেকে একটি সাবস্ট্রিং রিটার্ন করে।",
  },
  {
    question: "৫৬. `String.trim()` কী?",
    answer:
      "`String.trim()` একটি স্ট্রিংয়ের দুই প্রান্ত থেকে অপ্রয়োজনীয় স্পেস সরিয়ে দেয়।",
  },
  {
    question: "৫৭. `String.toLowerCase()` কী?",
    answer:
      "`String.toLowerCase()` একটি স্ট্রিংয়ের সব অক্ষরকে ছোট অক্ষরে রূপান্তর করে।",
  },
  {
    question: "৫৮. `String.toUpperCase()` কী?",
    answer:
      "`String.toUpperCase()` একটি স্ট্রিংয়ের সব অক্ষরকে বড় অক্ষরে রূপান্তর করে।",
  },
  {
    question: "৫৯. `Math.random()` কী?",
    answer: "`Math.random()` ০ এবং ১ এর মধ্যে একটি এলোমেলো সংখ্যা রিটার্ন করে।",
  },
  {
    question: "৬০. `Math.floor()` কী?",
    answer: "`Math.floor()` একটি সংখ্যাকে নীচের দিকে গোল করে।",
  },
  {
    question: "৬১. `Math.ceil()` কী?",
    answer: "`Math.ceil()` একটি সংখ্যাকে উপরের দিকে গোল করে।",
  },
  {
    question: "৬২. `Math.round()` কী?",
    answer: "`Math.round()` একটি সংখ্যাকে নিকটতম পূর্ণসংখ্যায় গোল করে।",
  },
  {
    question: "৬৩. `Math.max()` কী?",
    answer:
      "`Math.max()` একটি সংখ্যা তালিকার মধ্যে সর্বাধিক সংখ্যা রিটার্ন করে।",
  },
  {
    question: "৬৪. `Math.min()` কী?",
    answer:
      "`Math.min()` একটি সংখ্যা তালিকার মধ্যে সর্বনিম্ন সংখ্যা রিটার্ন করে।",
  },
  {
    question: "৬৫. `Math.abs()` কী?",
    answer: "`Math.abs()` একটি সংখ্যার অস্বাভাবিক ভ্যালু রিটার্ন করে।",
  },
  {
    question: "৬৬. `Math.pow()` কী?",
    answer: "`Math.pow()` একটি সংখ্যাকে একটি নির্দিষ্ট শক্তিতে রূপান্তর করে।",
  },
  {
    question: "৬৭. `Math.sqrt()` কী?",
    answer: "`Math.sqrt()` একটি সংখ্যার বর্গমূল রিটার্ন করে।",
  },
  {
    question: "৬৮. `setImmediate()` কী?",
    answer:
      "`setImmediate()` একটি ফাংশনকে বর্তমান ইভেন্ট লুপের পরবর্তী টিকের জন্য কল করে।",
  },
  {
    question: "৬৯. `setInterval()` এবং `clearInterval()` কী?",
    answer:
      "`setInterval()` একটি ফাংশনকে নির্দিষ্ট সময় অন্তর অন্তর চালায়, আর `clearInterval()` সেটিকে থামায়।",
  },
  {
    question: "৭০. `setTimeout()` এবং `clearTimeout()` কী?",
    answer:
      "`setTimeout()` একটি ফাংশনকে নির্দিষ্ট সময় পরে একবার চালায়, আর `clearTimeout()` সেটিকে থামায়।",
  },
  {
    question: "৭১. `localStorage` কী?",
    answer:
      "`localStorage` হলো একটি ক্লায়েন্ট সাইড স্টোরেজ যেখানে ডেটা ব্রাউজারের মধ্যে সংরক্ষিত থাকে।",
  },
  {
    question: "৭২. `sessionStorage` কী?",
    answer:
      "`sessionStorage` হলো একটি ক্লায়েন্ট সাইড স্টোরেজ যেখানে ডেটা শুধুমাত্র বর্তমান সেশন-এর জন্য সংরক্ষিত থাকে।",
  },
  {
    question: "৭৩. `window.onload` কী?",
    answer: "`window.onload` একটি ইভেন্ট যা তখন ঘটে যখন সম্পূর্ণ পেজ লোড হয়।",
  },
  {
    question: "৭৪. `DOMContentLoaded` ইভেন্ট কী?",
    answer:
      "`DOMContentLoaded` ইভেন্টটি ঘটে যখন সম্পূর্ণ HTML ডকুমেন্ট লোড হয়, তবে চিত্র বা স্টাইলশিট নয়।",
  },
  {
    question: "৭৫. `window.alert()` কী?",
    answer:
      "`window.alert()` একটি পপ-আপ ডায়ালগ দেখায় যা ব্যবহারকারীর কাছে একটি বার্তা প্রদান করে।",
  },
  {
    question: "৭৬. `window.confirm()` কী?",
    answer:
      "`window.confirm()` একটি পপ-আপ ডায়ালগ দেখায় যা ব্যবহারকারীকে একটি নিশ্চিতকরণের জন্য জিজ্ঞাসা করে।",
  },
  {
    question: "৭৭. `window.prompt()` কী?",
    answer:
      "`window.prompt()` একটি পপ-আপ ডায়ালগ দেখায় যা ব্যবহারকারীর থেকে ইনপুট সংগ্রহ করে।",
  },
  {
    question: "৭৮. `console.log()` কী?",
    answer: "`console.log()` ডেভেলপার কনসোলে তথ্য লগ করার জন্য ব্যবহৃত হয়।",
  },
  {
    question: "৭৯. `console.error()` কী?",
    answer: "`console.error()` কনসোলে একটি ত্রুটি বার্তা লগ করে।",
  },
  {
    question: "৮০. `console.warn()` কী?",
    answer: "`console.warn()` কনসোলে একটি সতর্কতা বার্তা লগ করে।",
  },
  {
    question: "৮১. `console.table()` কী?",
    answer: "`console.table()` একটি টেবিলের ফরম্যাটে তথ্য প্রদর্শন করে।",
  },
  {
    question: "৮২. `fetch()` ফাংশন কী?",
    answer:
      "`fetch()` ফাংশনটি API কল করার জন্য ব্যবহৃত হয় এবং এটি Promise রিটার্ন করে।",
  },
];

app.use(express.json());

// সমস্ত প্রশ্ন পেতে
app.get("/api/user/questions", (req, res) => {
  res.json(questions);
});

app.get("/api/user/questions/:id", (req, res) => {
  const id = req.params.id;
  const question = questions[id - 1];
  indexing;
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ message: "প্রশ্ন পাওয়া যায়নি" });
  }
});

app.post("/api/user/questions", (req, res) => {
  const { question, answer } = req.body;
  questions.push({ question, answer });
  res.status(201).json({ message: "প্রশ্ন সফলভাবে যোগ করা হয়েছে" });
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello this is home router</h1>`);
});

app.use((req, res) => {
  res.send(`<h1> 404!! Router not found </h1>`);
});

const PORT = 3000;
const HostName = "127.0.0.1";

app.listen(PORT, HostName, () => {
  console.log(`Server is running at http://${HostName}:${PORT}`);
});
