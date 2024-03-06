const troca = document.querySelector(".btn");

troca.addEventListener("click", function () {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  const className = document.body.className;
  if (className == "light") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
  console.log(className);
});

/*
O '.toggle()' atua de modo distinto. Se o elemento existe, tal comando irá excluí-lo. Se não existe, irá adicioná-lo.
A condicional avalia o nome da classe do body. Se estiver como light, aplicar o texto "Dark" NO BOTÃO, se não, aplicar "Light".
--> Lembrar que o elemento foco é o botão. 
*/
