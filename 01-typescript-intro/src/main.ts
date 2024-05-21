import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import './topics/01-basic-types'
// import './topics/02-object-interface'
// import './topics/03-functions'
// import './topics/04-homework-types'
// import './topics/05-basic-destructuring'
// import './topics/06-function-destructuring'
// import './topics/07-import-export'
// import './topics/08-classes'
// import './topics/09-generics'
// import './topics/10-decorators'
import './topics/11-optional-chaining'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo desde Vite</h1>
    <img src="${viteLogo}" alt="Vite logo" width="200" />
    <h2>Con TypeScript</h2>
    <img src="${typescriptLogo}" alt="TypeScript logo" width="200" />
  </div>
`


