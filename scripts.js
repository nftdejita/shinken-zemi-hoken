document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "ご提出いただきありがとうございます。すぐに情報を処理させていただきます。"
    );
    // フォームをリセットする
    event.target.reset();
  });
