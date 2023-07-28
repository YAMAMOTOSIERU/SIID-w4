// 変数
let Hello = "Hello World";
// Hello = "Hello World2";

// 定数
const text = "He..Hell..Hello World!";

// 配列
let inoki = ["いーち", "にーい", "さーん", "ダーーー！"];

// ループ文
// let index = 0;
// while (index < inoki.length) {
//   // 繰り返し命令
//   console.log(inoki[index]);
//   index++;
// }

// if / else
// if (inoki.length > 5) {
//   console.log("ボンバイエ");
// } else {
//   console.log ('ボンバ...!');
// }

// 関数
const test = () => {
  // ここに実行したい命令を書く
  if (inoki.length > 5) {
    console.log("ボンバイエ");
  } else {
    console.log("ボンバ...!");
  }
};

test();

// 引数
const test2 = (arg) => {
  if (inoki.length > arg) {
    console.log("ボンバイエ");
  } else {
    console.log("ボンバ...!");
  }
};

test2(3);

// オブジェクト
const unko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("Hello world");
  },
};

console.log(unko2.goToilet);

// 元から入っているオブジェクト window編
// window.alert("Hello workd!");
// 開発の確認などをする際に使用することがある。

// 元から入っているオブジェクト document編
// console.log(document.getElementsByTagName("button")[0]);

// event
console.log(
  document.getElementsByTagName("button")[0].addEventListener("click", () => {
    // ボタンを押した時の命令
    window.alert("Hello World");
  })
);
