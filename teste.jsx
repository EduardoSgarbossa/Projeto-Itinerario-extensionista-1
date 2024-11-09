// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const sections = [
    {
        id: 1,
        title: "Lógica de Programação",
        content: `
            <p>Calculadora de área de um triângulo utilizando a fórmula de Heron.</p>
            <pre><code>function calcularAreaTriangulo(base, altura) { return (base * altura) / 2; }</code></pre>
            <img src="./images/image1.jpg" alt="Imagem 1">
        `,
        detalhes: "Este é um excelente conteúdo para aprender lógica de programação.",
    },
    {
        id: 2,
        title: "Conceitos Básicos em C#",
        content: `
            <p>Conceitos básicos de C# incluem programação orientada a objetos e sintaxe fundamental.</p>
            <pre><code>using System; class Program { static void Main() { Console.WriteLine("Olá, Mundo!"); }}</code></pre>
            <img src="./images/image2.jpg" alt="Imagem 2">
        `,
        detalhes: "Aprenda os conceitos básicos de C# com exemplos práticos.",
    },
    {
        id: 3,
        title: "Programação Orientada a Objetos",
        content: `
            <p>A Programação Orientada a Objetos (POO) é um paradigma que utiliza 'objetos' para representar dados e métodos.</p>
            <p>Principais conceitos incluem:</p>
            <ul>
                <li>Encapsulamento</li>
                <li>Herança</li>
                <li>Polimorfismo</li>
            </ul>
            <pre><code>public class Animal { public void FazerSom() { Console.WriteLine("Som de animal"); }}</code></pre>
            <img src="./images/image3.jpg" alt="Imagem 3">
        `,
        detalhes: "Entenda os princípios da POO e melhore sua capacidade de desenvolver software.",
    },
    {
        id: 4,
        title: "Usando ASP.NET",
        content: `
            <p>ASP.NET é uma estrutura de desenvolvimento web da Microsoft que permite criar aplicações web dinâmicas.</p>
            <p>Com ASP.NET, você pode construir aplicações que são rápidas, seguras e fáceis de manter.</p>
            <pre><code>public class HomeController : Controller { public IActionResult Index() { return View(); }}</code></pre>
            <img src="./images/image4.jpg" alt="Imagem 4">
        `,
        detalhes: "Aprenda a utilizar ASP.NET para desenvolver aplicações web robustas e escaláveis.",
    },
];

const Home = () => {
    return (
        <div>
            <h2>Página Principal</h2>
            {sections.map(section => (
                <div key={section.id}>
                    <Link to={`/secao/${section.id}`}>
                        <h3>{section.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

const SectionDetail = ({ match }) => {
    const section = sections.find(s => s.id === parseInt(match.params.id));
    if (!section) return <h2>Seção não encontrada</h2>;

    return (
        <div>
            <h2>{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
            <p>{section.detalhes}</p>
            <Link to="/">Voltar para a Página Principal</Link>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/secao/:id" component={SectionDetail} />
            </Switch>
        </Router>
    );
};

export default App;