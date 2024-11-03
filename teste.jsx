// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const sections = [
    {
        id: 1,
        title: "Lógica de Programação",
        content: `
            <p>Calculadora de área de um triângulo utilizando a fórmula de Heron.</p>
            <pre><code>function calcularAreaTriangulo() { ... }</code></pre>
            <img src="./images/image1.jpg" alt="Imagem 1">
        `,
        detalhes: "Este é um excelente conteúdo para aprender lógica de programação.",
    },
    {
        id: 2,
        title: "Conceitos Básicos em C#",
        content: `
            <p>Conceitos básicos de C# incluem programação orientada a objetos...</p>
            <pre><code>using System; class Program { ... }</code></pre>
            <img src="./images/image2.jpg" alt="Imagem 2">
        `,
        detalhes: "Aprenda os conceitos básicos de C# com exemplos práticos.",
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