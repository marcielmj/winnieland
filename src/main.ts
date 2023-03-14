import './scss/style.scss'

import typescriptLogo from './typescript.svg'
import { setupCounter } from '@/counter/counter'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container py-4 px-3 mx-auto">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">Vite + TypeScript</h1>
        <p class="card-text">Click on the Vite and TypeScript logos to learn more</p>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" alt="Vite logo" />
            </a>
          </li>
          <li class="list-group-item">
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img src="${typescriptLogo}" alt="TypeScript logo">
            </a>
          </li>
        </ul>

        <button class="btn btn-primary" id="counter" type="button"></button>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
