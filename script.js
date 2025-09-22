// Efeito para quando clicar no menu, rolar suave até a seção
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

function abrirDescricao(id) {
  const descricao = document.getElementById("descricao");
  descricao.classList.add("ativo"); // ARRUMADO: classe correta

  const projetos = {
    1: {titulo: "Meu primeiro Site", texto: "Esse foi meu primeiro projeto, onde nós tinhamos que fazer ele em HTML, e tinha que ter, um cor de fundo, uma imagem, uma segunda página e um Rodapé.", link: "file:///E:/IW/Robin/index.html"},
    2: {titulo: "SoudPulse", texto: "Esse projeto o principal objetivo dele, era fazer um site sobre música usando FlexBox, esse foi um projeto em grupo de 5 pessoas, e eu fiquei responsável pela Home, a parte do Eminem e do Queen, nesse site foi utilizado HTML e CSS.", link: "file:///E:/IW/Site%20-%20FlexBox/index.html"},
    3: {titulo: "QUIZHUB", texto: "Esse foi um projeto em quarteto, onde tinhamos que fazer um quiz, ele foi utilizado HTML, CSS e JavaScript.", link: "file:///E:/fi/QUIZ%20FI%20-%20IW%20I/testee/index.html"},
    4: {titulo: "Sweet Pudding", texto: "Esse foi um projeto bem extenso, onde tinhamos que fazer um site sobre pudim, primeiro tive que fazer a logo, depois fazer o protótipo do site e do App, e por ultimo nós tivemos que progamar ele.", link: "file:///E:/APW/Pudim/Versadus/index.html"},
    5: {titulo: "Celeste Hotel", texto: "Esse Projeto tinhamos que fazer um protótipo de um App da nossa escolha utilizando o Figma.", link: "https://www.figma.com/proto/rBYMteP5dmyV9yDpwbFhyu/Untitled?node-id=3-16&starting-point-node-id=3%3A16&t=msILqcsNlY8lRpNW-1"},
    6: {titulo: "InovaTI", texto: "Esse é um projeto de Banco de Dados, onde tive que fazer um banco de dados de uma faculdade de TI, primeiro tive que fazer a documentação dele, e depois fazer ele no Access.", link: "https://seulink6.com"},
    7: {titulo: "Whatsapp", texto: "Esse projeto tive que fazer o desing do Whatsapp no Figma, usando apenas imagens vetorizadas.", link: "https://www.figma.com/proto/N2IEZkTobGLdRN36E8Ns8S/Untitled?node-id=1-2&starting-point-node-id=29%3A98&t=mywuAD8XRaBP9Gy4-1"},
    8: {titulo: "Imaginação Criativa", texto: "Esse nos tivemos que fazer com um grupo de 10 pessoas, o seu objetivo era fazer um protótipo de um site com tema: Imaginação Criativa.", link: "https://www.figma.com/proto/MGMhWdrTjBO7I4WvxRxTkA/Untitled?node-id=37-3&t=kQii4w7U9sTPugSs-1"},
    9: {titulo: "Amor Açucarado", texto: "Esse projeto foi em trio, onde tivemos que fazer uma Visual Novel, eu fiquei responsável pelos desenhos de personagens, e coloquei algumas falas dos personagens no jogo, ele foi feito no Figma.", link: "https://www.figma.com/proto/MbnceNa4Le7R6kE2bVfhW2/Untitled?node-id=1-2&starting-point-node-id=1%3A2&t=2dQqkya5ox2xDTS3-1"},
  };

  document.getElementById("titulo-projeto").innerText = projetos[id].titulo;
  document.getElementById("texto-projeto").innerText = projetos[id].texto;
  document.getElementById("link-projeto").href = projetos[id].link;
}

function fecharDescricao() {
  const descricao = document.getElementById("descricao");
  descricao.classList.remove("ativo"); // ARRUMADO: mesma classe usada no CSS
}

