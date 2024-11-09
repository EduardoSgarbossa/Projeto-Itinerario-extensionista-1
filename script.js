// script.js
import { useState } from 'react';

// Custom hook para gerenciar estado
export const useCustomState = () => {
    const [state, setState] = useState(null);
    return [state, setState];
};

// Definição das seções com conteúdo
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
            <p>Conceitos básicos de C# incluem programação orientada a objetos...</p>
            <pre><code>using System; class Program { static void Main() { Console.WriteLine("Hello, World!"); }}</code></pre>
            <img src="./images/image2.jpg" alt="Imagem 2">
        `,
        detalhes: "Aprenda os conceitos básicos de C# com exemplos práticos.",
    },
    {
        id: 3,
        title: "Programação Orientada a Objetos",
        content: `
            <p>A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza objetos e classes.</p>
            <p>Em C#, a POO é implementada através de classes e objetos, permitindo a criação de modelos que representam entidades do mundo real.</p>
            <pre><code>class Carro { 
    public string Marca { get; set; }
    public string Modelo { get; set; }

    public Carro(string marca, string modelo) {
        Marca = marca;
        Modelo = modelo;
    }

    public void ExibirInfo() {
        Console.WriteLine($"Marca: {Marca}, Modelo: {Modelo}");
    }
}</code></pre>
            <p>Exemplo de uma classe Carro em C# com propriedades e um método para exibir informações.</p>
            <img src="./images/image3.jpg" alt="Imagem 3">
        `,
        detalhes: "Aprenda os fundamentos da POO em C# e como aplicá-los em seus projetos.",
    },
    {

        id: 4,

        title: "ASP.NET Core",

        content: `

            <p>ASP.NET Core é um framework open-source para a construção de aplicações web modernas, que podem ser executadas em múltiplas plataformas.</p>

            <p>Ele é projetado para ser leve, modular e de alto desempenho, permitindo a criação de APIs RESTful e aplicações web dinâmicas.</p>

            <pre><code>using Microsoft.AspNetCore.Mvc;


[ApiController]

[Route("[controller]")]

public class HelloWorldController : ControllerBase

{

    [HttpGet]

    public ActionResult<string> Get() => "Hello, World!";

}</code></pre>

            <p>Exemplo de um controlador simples em ASP.NET Core que retorna uma string.</p>

            <img src="./images/image4.jpg" alt="Imagem 4">

        `,

        detalhes: "Descubra como criar aplicações web e APIs utilizando ASP.NET Core.",

    },
];

// Componente principal do App
const App = () => {
    const [selectedSection, setSelectedSection] = useCustomState();
    const [isOverlayVisible, setOverlayVisible] = useCustomState();

    // Função para exibir detalhes da seção
    const verDetalhes = (sectionId) => {
        const section = sections.find(s => s.id === sectionId);
        if (section) {
            setSelectedSection(section); // Atualiza a seção selecionada
            setOverlayVisible(true); // Exibe o overlay
        } else {
            console.error('Seção não encontrada');
        }
    }

    // Função para fechar o overlay
    const closeOverlay = () => {
        setOverlayVisible(false); // Oculta o overlay
        setSelectedSection(null); // Limpa a seção selecionada
    }

    return (
        <div>
            <h2>Página Principal</h2>
            <div className="sidebar">
                <ul>
                    {sections.map(section => (
                        <li key={section.id}>
                            <a href="#" onClick={(e) => { e.preventDefault(); verDetalhes(section.id); }}>
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isOverlayVisible && selectedSection && (
                <div id="overlay" style={{ display: 'block' }}>
                    <div className="overlay-content">
                        <div className="card">
                            <h5 className="card-title">{selectedSection.title}</h5>
                            <div className="card-text" dangerouslySetInnerHTML={{ __html: selectedSection.content }} />
                            <p className="card-text">{selectedSection.detalhes}</p>
                            <button type="button" className="btn btn-secondary" onClick={closeOverlay}>Voltar</button>
                            <button type="button" className="btn btn-secondary close-button" onClick={closeOverlay}>X</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App;