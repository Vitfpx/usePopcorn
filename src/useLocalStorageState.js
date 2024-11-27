import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState; // Não vai mais retornar null, mas sim uma string vazia
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

/*
  Quando o componente inicializa:
    *O hook verifica se há um valor armazenado com a chave "key".
    *Se houver, o valor é usado como estado inicial.
    *Caso contrário, o estado inicial será "Guest".

  Ao digitar no campo de entrada:
    *setName atualiza o estado name e, por meio do useEffect, o valor também é salvo no localStorage.

  Quando o usuário recarrega a página:
    *O valor salvo no localStorage é usado para inicializar o estado name, garantindo que o nome do usuário persista.
*/
