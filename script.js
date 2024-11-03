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
    };

    // Função para fechar o overlay
    const closeOverlay = () => {
        setOverlayVisible(false); // Oculta o overlay
        setSelectedSection(null); // Limpa a seção selecionada
    };

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
    );
};
{isOverlayVisible && selectedSection && (
    <div id="overlay" className={isOverlayVisible ? 'show' : ''}>
        ...
    </div>
)}

export default App;