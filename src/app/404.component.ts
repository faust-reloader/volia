import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header class="w3-display-container w3-content" style="min-width:100%" id="home">
      <img class="w3-image" src="img/kokan/kokan500s.jpg" alt="Комбайн для уборки ягод" width="1920" height="800">
      <div class="w3-display-middle w3-text-white w3-black w3-text-white w3-opacity w3-center" style="padding:0 42px">
        <h1 class="w3-wide w3-xxlarge">Страница не найдена</h1>
      </div>
    </header>`
})

export class PageNotFoundComponent { }
