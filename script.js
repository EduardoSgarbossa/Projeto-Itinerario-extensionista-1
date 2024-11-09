const dashboardItems = document.querySelectorAll('.sidebar ul li a');

const dashboardCards = [
  {
      id: 1,
      title: "Programming logic",
      content: `
        <p>Calculadora de área de um triângulo utilizando a fórmula de Heron</p>
        <p>Função para calcular a área do triângulo:</p>
        <p>function calcularAreaTriangulo() {</p>
        <p>  const <code>ladoA</code> = parseFloat(prompt("Informe o lado A do triângulo: "));</p>
        <p>  const <code>ladoB</code> = parseFloat(prompt("Informe o lado B do triângulo: "));</p>
        <p>  const <code>ladoC</code> = parseFloat(prompt("Informe o lado C do triângulo: "));</p>
        <p>  const <code>semiPerimetro</code> = (<code>ladoA</code> + <code>ladoB</code> + <code>ladoC</code>) / 2;</p>
        <p>  const <code>area</code> = Math.sqrt(<code>semiPerimetro</code> * (<code>semiPerimetro</code> - <code>ladoA</code>) * (<code>semiPerimetro</code> - <code>ladoB</code>) * (<code>semiPerimetro</code> - <code>ladoC</code>));</p>
        <p>  alert(\`A área do triângulo é: \${<code>area</code>.toFixed(2)} unidades quadradas\`);</p>
        <p>}</p>
        <p>Chamada da função para calcular a área do triângulo:</p>
        <p><code>calcularAreaTriangulo()</code>;</p>
        <img src="./images/image1.jpg" alt="Image 1">
      `,
      detalhes: "Este é um excelente conteúdo para aprender lógica de programação.",
      image: "image1.jpg"
  },
  {
    id: 2,
    title: "Basic Concepts in C#",
    content: "Basic Concepts in C# content",
    detalhes: "Aprenda os conceitos básicos de C# e comece a desenvolver suas habilidades.",
    image: "image2.jpg"
  },
  {
    id: 3,
    title: "Programação Orientada a Objetos",
    content: "A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza 'objetos' para representar dados e métodos. Os principais conceitos da POO incluem encapsulamento, herança e polimorfismo.",
    detalhes: "Entenda os princípios da programação orientada a objetos e melhore sua capacidade de desenvolver software. A POO permite que você modele seu software de forma mais intuitiva e modular, facilitando a manutenção e a escalabilidade.",
    exemplos: [
        {
            conceito: "Encapsulamento",
            descricao: "O encapsulamento é o princípio que protege os dados de um objeto, permitindo acesso controlado através de métodos públicos.",
            exemplo: "No C#, você pode usar modificadores de acesso como 'private' e 'public' para controlar a visibilidade dos membros da classe.",
            codigo: "public class ContaBancaria {\n    private double saldo;\n\n    public void Depositar(double valor) {\n        saldo += valor;\n    }\n\n    public double ObterSaldo() {\n        return saldo;\n    }\n}"
        },
        {
            conceito: "Herança",
            descricao: "A herança permite que uma classe herde características de outra classe, promovendo a reutilização de código.",
            exemplo: "Em C#, você pode criar uma classe base 'Animal' e uma classe derivada 'Cachorro' que herda de 'Animal'.",
            codigo: "public class Animal {\n    public void FazerSom() {\n        Console.WriteLine(\"Som de animal\");\n    }\n}\n\npublic class Cachorro : Animal {\n    public void Latir() {\n        Console.WriteLine(\"Au Au\");\n    }\n}"
        },
        {
            conceito: "Polimorfismo",
            descricao: "Polimorfismo permite que métodos com o mesmo nome se comportem de maneira diferente em classes diferentes.",
            exemplo: "Você pode ter um método 'FazerSom' em várias classes que herdam de 'Animal', cada uma implementando seu próprio som.",
            codigo: "public class Gato : Animal {\n    public override void FazerSom() {\n        Console.WriteLine(\"Miau\");\n    }\n}\n\npublic class Program {\n    public static void Main() {\n        Animal meuGato = new Gato();\n        meuGato.FazerSom(); // Saída: Miau\n    }\n}"
        }
    ],
    image: "image3.jpg"
},
{
    id: 4,
    title: "Usando ASP.NET",
    content: "ASP.NET é uma estrutura de desenvolvimento web da Microsoft que permite criar aplicações web dinâmicas e escaláveis. É amplamente utilizado para desenvolver APIs, aplicações web e serviços.",
    detalhes: "Aprenda a utilizar ASP.NET para desenvolver aplicações web robustas e escaláveis. Com ASP.NET, você pode construir aplicações que são rápidas, seguras e fáceis de manter.",
    exemplos: [
        {
            conceito: "Criando uma Aplicação ASP.NET",
            descricao: "Você pode criar uma aplicação ASP.NET usando o modelo MVC (Model-View-Controller), que separa a lógica de negócios da interface do usuário.",
            exemplo: "Para criar uma nova aplicação ASP.NET MVC, você pode usar o Visual Studio e escolher o template 'ASP.NET Web Application'.",
            codigo: "public class HomeController : Controller {\n    public IActionResult Index() {\n        return View();\n    }\n}"
        },
        {
            conceito: "Roteamento",
            descricao: "O roteamento em ASP.NET permite que você defina URLs amigáveis e ligue-as a ações em seus controladores.",
            exemplo: "Você pode configurar rotas no arquivo 'Startup.cs'.",
            codigo: "app.UseEndpoints(endpoints => {\n    endpoints.MapControllerRoute(\n        name: 'default',\n        pattern: '{controller=Home}/{action=Index}/{id?}');\n});"
        },
        {
            conceito: "Acesso a Dados",
            descricao: "ASP.NET facilita o acesso a dados usando Entity Framework, uma biblioteca ORM que simplifica a interação com bancos de dados.",
            exemplo: "Você pode usar o Entity Framework para realizar operações CRUD (Create, Read, Update, Delete) em sua aplicação.",
            codigo: "public class Produto {\n    public int Id { get; set; }\n    public string Nome { get; set; }\n    public double Preco { get; set; }\n}\n\npublic class AppDbContext : DbContext {\n    public DbSet<Produto> Produtos { get; set; }\n}"
        },
        {
            conceito: "Autenticação e Autorização",
            descricao: "ASP.NET oferece suporte integrado para autenticação e autorização, permitindo que você proteja sua aplicação e controle o acesso a recursos.",
            exemplo: "Você pode usar a identidade do ASP.NET para gerenciar usuários e suas permissões.",
            codigo: "services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)\n    .AddCookie(options => {\n        options.LoginPath = \"/Account/Login\";\n    });"
        }
    ],
    image: "image4.jpg"
}
];

function verDetalhes(cardId) {
  const card = dashboardCards.find(c => c.id === cardId);
  const overlayDiv = document.getElementById('overlay');

  if (card && overlayDiv) {
    overlayDiv.innerHTML = `
      <div class="card">
        <img src="${card.image}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.content}</p>
          <p class="card-text">${card.detalhes}</p>
          <button type="button" class="btn btn-secondary" onclick="voltar()">Voltar</button>
          <button type="button" class="btn btn-secondary close-button" onclick="closeButtonClick()">X</button>
        </div>
      </div>
    `;
  
    // Verifica se a barra de tarefas está presente
    if (document.fullscreenElement || document.msFullscreenElement) {
      // Se não estiver presente, seta o padding inferior para 0
      overlayDiv.querySelector('.card-body').style.paddingBottom = '0px';
    } else {
      // Se estiver presente, seta o padding inferior para 40px
      overlayDiv.querySelector('.card-body').style.paddingBottom = '40px';
    }
  
    overlayDiv.style.display = 'block';
  }
}

function voltar() {
  document.getElementById('overlay').style.display = 'none';
}
function closeButtonClick() {
  voltar();
}

dashboardItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const clickedItem = event.target;
    const cardId = parseInt(clickedItem.id.replace('dashboard-', ''));
    verDetalhes(cardId);
  });
});
function close() {
  document.getElementById('overlay').style.display = 'none';
}