// Este arquivo pode ser substituído durante a compilação usando o array `Filereplacements`.
// `ng build --prod` substitui` ambiente.ts` com `ambiente.Prod.ts`.
// A lista de substituições de arquivos pode ser encontrada em "Angular.json".

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCzga24obaYfJRSvu26jdv6YD6ADvcxwBo",
    authDomain: "rpsdemateriais.firebaseapp.com",
    projectId: "rpsdemateriais",
    storageBucket: "rpsdemateriais.appspot.com",
    messagingSenderId: "812568535267",
    appId: "1:812568535267:web:759e9c0daa9a0c7a9c25d6"
  }

};


// / *
//  * Para facilitar a depuração no modo de desenvolvimento, você pode importar o seguinte arquivo
//  * Para ignorar quadros de pilha de erro relacionado a zona, como `zone.run`,` zonedelegate.invoketask`.
//  *
//  * Esta importação deve ser comentada no modo de produção porque terá um impacto negativo
//  * No desempenho se um erro for lançado.
//  * /
// Importar 'zona.js / dist / erro de zona';// incluído com cli angular.ular.ular.
