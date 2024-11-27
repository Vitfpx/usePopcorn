import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={6}
      size={24}
      color="orangered"
      className="test"
      defaultRating={3}
    />

    <Test /> */}
  </React.StrictMode>
);

///////////////////////////////////////
// How to Split a UI Into Components?
/* 
  Slides: 117 - 124 ****IMPORTANTE
*/

/////////////////////////
// Component Categories
/* 
  Slides: 125 - 127

  Stateless / Presentation Component
  Stateful Components
  Structural Components
*/

//////////////////////////
// Component Composition
/* 
  Slides: 128 - 131

  Components Composition VS. Child Components

  Qual escolher?
    **Use component composition quando:

    * Precisa de flexibilidade e reutilização.
    * Quer evitar passar muitas props desnecessárias (evitando prop drilling).

    **Use child components sem composition quando:

    * O componente é simples e não precisa de flexibilidade.
    * A estrutura e o conteúdo são sempre os mesmos.
*/

////////////////////////////////////////////////////////
// Passing Elements As Props (Alternativa to Children)

// Utilizado em Router. Porém, em React, é preferível utilizar Childrens...

/* <Box element={<MovieList movies={movies} />} />
   <Box element={
      <>
        <WatchedSummary watched={watched} />
        <WatchedMovieList watched={watched} />
      </>
    }
   /> 
*/

/////////////////////////////
// Props as a Component API
/*
  Slides: 132 - 133

  EXPLICAÇÃO (APAGUE ESSA EXPLICAÇÃO QUANDO O SLIDE FICAR CLARO):

### **Component Props = Public API**
- **Component Creator**: A pessoa que desenvolve o componente React cria uma abstração 
    que encapsula a interface do usuário (UI) e a lógica. Essa abstração é exposta por 
    meio das props do componente.
- **Component Consumer**: A pessoa que consome o componente (normalmente em outro 
    arquivo ou parte do aplicativo) interage com ele usando essas props, como se 
    fossem uma API.

### **Problema do equilíbrio**
O slide utiliza uma escala para explicar como as props podem ser problemáticas se 
configuradas de maneira inadequada:

1. **Poucas props (Too Little Props)**:
   - O componente não é **flexível o suficiente**, o que pode torná-lo limitado e 
     inadequado para atender a diferentes cenários.
   - Pode não ser **útil**, já que os consumidores não conseguem personalizar ou 
     adaptar o comportamento do componente.

2. **Muitas props (Too Many Props)**:
   - Torna o componente **difícil de usar**, pois o consumidor precisa lidar com uma 
     API complexa.
   - Pode expor **muita complexidade**, indo contra o princípio de abstração.
   - O código se torna **difícil de escrever e manter**.
   - **Valores padrão** (default values) devem ser considerados para simplificar o uso
     do componente.

### **A necessidade do equilíbrio**
O ponto central do slide é destacar que precisamos encontrar o **equilíbrio certo** 
entre **poucas e muitas props**. Isso significa projetar props suficientes para permitir
flexibilidade e controle para o consumidor, mas sem sobrecarregá-lo com complexidade 
desnecessária.

---

### **Boas práticas sugeridas**
1. Forneça props claras e intuitivas.
2. Use **valores padrão** para evitar que o consumidor precise definir todas as props.
3. Simplifique ao máximo a interface pública, mantendo a complexidade dentro do componente.

Em resumo, as props devem funcionar como uma API bem projetada: fácil de usar, flexível e 
suficientemente poderosa para lidar com as necessidades de personalização, mas sem expor a 
complexidade interna do componente.

*/

/*

import { useState } from "react";
import "./styles.css";

export default function App({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
}) {
  return (
    <div>
      <TextExpander
        expanded={expanded}
        collapsedNumWords={collapsedNumWords}
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        collapsedNumWords={collapsedNumWords}
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
        expanded={true}
        className="box"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  expanded,
  children,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleCollapseWords() {
    setIsExpanded((e) => !e);
  }

  function handleDisplayChildren() {
    let splitText;
    return isExpanded
      ? (splitText = children)
      : (splitText =
          children.split(" ").slice(0, collapsedNumWords).join(" ") + "...");
  }

  return (
    <div className={className ? className : ""}>
      {handleDisplayChildren()}{" "}
      <p
        onClick={handleCollapseWords}
        style={{ color: buttonColor, display: "inline", cursor: "pointer" }}
      >
        {!isExpanded ? expandButtonText : collapseButtonText}
      </p>
    </div>
  );
}

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Effects And Data Fetching

/////////////////////////////
// The Component Lifecycle
/*
  Slides: 204 - 207
*/

//////////////////////////////
// Effects and Data Fetching
/*
  Slides: 208 - 211

  REVIEW: A side effect is basically any “interaction between a React component and the world outside the component”.
  We can also think of a side as “code that actually does something”. Examples: Data fetching, setting up subscriptions,
  setting up timers, manually accessing the DOM, etc.
*/

///////////////////////////////////
// The useEffect Dependency Array
/*
  Slides: 212 - 217

  RESUMO: 

  ### Ciclo de vida dos efeitos:
  1. **Mount (renderização inicial)**:
    - Após o componente ser montado no DOM, o navegador pinta a tela.
    - Em seguida, os **efeitos normais (`useEffect`)** são executados.
    - Se o efeito atualiza o estado, pode causar outra renderização.

  2. **Atualização (quando props ou estados mudam)**:
    - Quando o estado ou as props mudam, o componente é re-renderizado.
    - Após a re-renderização e o navegador pintar a tela novamente:
      - **Efeitos normais (`useEffect`)** são executados.
    - Caso seja necessário manipular o DOM imediatamente após a renderização:
      - **Efeitos de layout (`useLayoutEffect`)** são executados **antes** da pintura do navegador.

  3. **Unmount (quando o componente é desmontado)**:
    - O React executa a função de limpeza dos efeitos (`return` do `useEffect` ou `useLayoutEffect`).

  ---

  ### Diferença entre `useEffect` e `useLayoutEffect`:
  - **`useEffect`**: Executa após a pintura da tela. Geralmente usado para lógica assíncrona (ex.: fetch de dados).
  - **`useLayoutEffect`**: Executa **antes da pintura do navegador**. Usado raramente, apenas quando mudanças imediatas no layout são necessárias.

  ---

  ### Conclusão:
  O React otimiza o momento de execução dos efeitos para melhorar o desempenho. **`useEffect`** é usado na maioria dos casos, enquanto **`useLayoutEffect`** só deve ser usado em situações críticas relacionadas ao layout.
*/

/*
  Diferença de useEffect e onClick, onChange, etc:

  Similaridade:

  Ambos os cenários monitoram algo:

    useEffect monitora mudanças em uma dependência (estado ou prop).
    Botões monitoram eventos específicos do usuário.

  A diferença fundamental é o gatilho da execução:

    useEffect: gatilho = mudança no valor de query.
    Botão (onClick): gatilho = clique do usuário.
    Se quisermos que ambos executem a mesma lógica (exemplo: buscar filmes ao clicar), podemos combinar as abordagens!
*/

//////////////////////////////////
// The useEffect Cleanup Function
/*
  Slides: 218 - 221
*/

/////////////////////////////
// Cleaning Up Data Fetching
/*
  Ao utilizar um fetch que faça muitos requests, utilize o cleaner up ensinado nessa lecture,
  no projeto desta section precisou dessa feature nos filmes que foram requisitados, mas não
  ao mostrar os detalhes dos filmes, pois utiliza apenas um request por Id selecionado...
*/

/////////////////////////////////
// React Hooks and Their Rules
/*
  Slides: 223 - 229 (Foco no 228)
*/

///////////////////////////////////
// useState Summary
/*
  Slides: 230 - 232 ****(RESUMÃO)****
*/

/////////////////////////////////////
// Introducing Another Hook: useRef
/*
  Slides: 233 - 236
*/
