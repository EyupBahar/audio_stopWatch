let counter = 0;
for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    document.querySelector("section").style.backgroundColor = "lightgreen";
    setTimeout(() => {
      document.querySelector("section").style.backgroundColor = "red";
      setTimeout(() => {
        document.querySelector("section").style.backgroundColor = "blue";
        setTimeout(() => {
          document.querySelector("section").style.backgroundColor = "gray";
          setTimeout(() => {
            document.querySelector("section").style.backgroundColor = "lime";
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);

  console.log(counter++);
}
