const message = `Haiiii\n\nIt's getting close but maybe it's still Valentine's Day. i just wanna say thank you for making me happy yesterday. with you, everything feels safe and beautiful. thank you for your kindness. i'm so grateful meet you. I want to say that I still like you, even though we are far apart now, I always wish the best for you.”\n\nI'm sorry if I still like to chat with you, you must be aware of that, I never blame you if you don't reply to my chat because I also know that I could be the source of the problem. but apart from all that, thank you for making me more mature in all my endeavors🙌🏻\n\nhappy valentine's day little mariposa👋🏻.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
