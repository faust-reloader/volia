import { Component } from '@angular/core';

const kokan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

@Component({
  selector: 'app-root',
  template: `
    <header class="w3-display-container w3-content" style="min-width:100%" id="home">
      <img class="w3-image" src="img/kokan/kokan500s.jpg" alt="Комбайн для уборки ягод" width="1920" height="800">
      <div class="w3-display-middle w3-text-white w3-black w3-text-white w3-opacity w3-center" style="padding:0 42px">
        <h1 class="w3-wide w3-xxlarge">Комбайн для уборки ягод</h1>
      </div>
    </header>

    <div id="projects" class="w3-center w3-indigo w3-padding-8"
         style="max-width:1920px;background:url('img/kokan/tag.png') center no-repeat;margin:-1px;">
      <h2 class="w3-margin-0">Воздушно-струйный ягодный комбайн BSK KOKAN 500s</h2>
      <h3 class="w3-margin-0 w3-padding-8">Простой сбор всех ягод без физического контакта и повреждений</h3>
    </div>
    <div class="w3-margin">
      <div class="w3-container w3-padding-32 w3-row">
        <div class="w3-half w3-padding w3-responsive">
          <h3>ПРЕИМУЩЕСТВА</h3>
          <p>На мировом рынке представлены комбайны с механическим способом уборки ягод –
            различные системы тряски, постукиваний и ударов. По сравнению с механической уборкой,
            многофункциональный комбайн KOKAN 500s предлагает <b>воздушный сбор</b> и очистку плодов,
            который имеет много преимуществ:</p>
          <ul>
            <li>простая регулировка рабочих параметров для уборки широкого ассортимента ягод,
              таких как: малина, черника, ежевика, черная смородина;
            <li>селективный сбор только зрелых плодов;
            <li>не вредит самому растению;
            <li>не ломает плодоносящие ветви, что не снижает урожайность;
            <li>возможность сбора урожая с начала сезона;
            <li>собранные ягоды с полей могут сразу идти на рынок.
          </ul>
          <img class="w3-image w3-border-top w3-border-left w3-border-right" src="img/kokan/kokan500s_470.jpg"
               alt="Длинна комбайна для сбора ягод">
          <table class="w3-table-all w3-striped w3-small">
            <tr><td>Длинна (с дышлом)<td>м<td>4.7</tr>
            <tr><td>Длинна (со снятым дышлом)<td>м<td>4.0</tr>
            <tr><td>Ширина (с опущенными платформами)<td>м<td>3.3</tr>
            <tr><td>Ширина (во время транспортировки)<td>м<td>2.5</tr>
            <tr><td>Высота (самое низкое положение)<td>м<td>2.5</tr>
            <tr><td>Вес<td>кг<td>3.250</tr>
            <tr><td>Скорость уборки (макс.)<td>км/ч<td>1,5±10%</tr>
            <tr><td>Производительность (макс.)<td>га/день<td>4</tr>
            <tr><td>Высота подъема комбайна (макс.)<td>мм<td>500</tr>
            <tr><td>Количество ящиков<td>штук<td>50</tr>
            <tr><td>Количество людей обслуживающих комбайн (мин.)<td>человек<td>2</tr>
            <tr><td>Высота тоннеля (мин.)<td>м<td>2.0</tr>
            <tr><td>Высота тоннеля (макс.)<td>м<td>2.5</tr>
            <tr><td>Ширина входя в тоннель<td>м<td>1.4</tr>
            <tr><td>Ширина выхода с тоннеля<td>мм<td>850</tr>
            <tr><td>Шины<td>inc<td>10.0/75-15.3</tr>
          </table>
        </div>
        <div class="w3-half w3-padding">
          <div class="myvideo">
            <iframe type="text/html" width="563" height="317"
                    src="https://www.youtube.com/embed/1-4wNoRVvoI?autoplay=0&rel=0&modestbrending=0"
                    frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="w3-display-container w3-padding-top w3-padding-bottom">
            <p>KOKAN 500s буксируется позади трактора, эффективно собирает малину, ежевику,
              чернику, голубику, черную смородину и другие ягоды. При сборе ягод данным комбайном используется технология
              пульсирующих (вибрирующих) воздушных струй регулируемой скорости и частоты, которые трясут кусты
              растений и отрывают плоды, после чего, ягоды способом «задержки свободного падения» попадают на
              систему транспортировки плодов к ящикам.	При этом листья и сухие веточки убираются интенсивным потоком воздуха.</p>
            <p>KOKAN 500s обеспечивает инновационный, уникальный и проверенный способ эффективной
              уборки широкого ассортимента ягод, в том числе: малины, черники, ежевики и черной смородины.</p>
            <p>В отличии от других доступных комбайнов, механизм тряски кустов, по существу, бесконтактный,
              гарантирует минимальную степень ушиба ягод и повреждений кустарника. KOKAN 500s применяет проверенные и
              усовершенствованные методы сбора ягод, транспортировки и очистки. Задержка свободного падения оторванных
              и собранных плодов является еще одной особенностью отличительного дизайна KOKAN 500s, что обеспечивает
              дополнительное снижение повреждений плодов.</p>
            <p>Неотъемлемой частью данного комбайна есть универсальность, которая достигается с помощью простой и
              удобной для пользователя регулировкой рабочих параметров машины, таких как: независимая регулировка
              пульсирующей скорости воздушных струй и частоты.</p>
          </div>
          <div class="w3-content w3-display-container w3-light-grey w3-padding-16" style="max-width:100%">
            <span style="cursor:pointer" class="w3-button w3-display-left w3-padding w3-green" (click)="plusDivs(-1)">&#10094;</span>
            <span style="cursor:pointer" class="w3-button w3-display-right w3-padding w3-green" (click)="plusDivs(+1)">&#10095;</span>
            <div class="w3-row-padding kokanSlide" [class.w3-hide]="i > 0 ? true : false" *ngFor="let i of kokanRows">
              <div class="w3-col l6 m6 w3-padding" *ngFor="let img of kokan | slice:(i*2):(i+1)*2">
                <img src="img/kokan/{{ img }}.jpg" (click)="kokanModal(img)" class="w3-image w3-hover-opacity" style="cursor:pointer">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w3-container w3-padding-32">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-12">Комбайн для сбора малины, черники, смородины</h3>
        <p>Универсальный комбайн может использоваться как малиноуборочный, черникоуборочный и так далее.
          Это позволит Вам иметь всего один вид техники, что в свою очередь значительно удешевит уход за ней,
          сократит расходы на запасные части, позволит быстрее разобраться с настройками и приступить к уборке урожая ягод.</p>
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-12">Гарантия и обслуживание</h3>
        <p>Предоставляется гарантия на один сезон работы комбайна, а также послегарантийное
          сервисное обслуживание, поставка запасных частей и бесплатное обучение комбайнеров на протяжении 20 часов.
          Период поставки техники 90 дней. Возможна оплата частями.</p>
        <p>Вас также могут заинтересовать
          <a routerLink="/переработка_ягод_фруктов_овощей" title="мини цех по переработке ягод">линии по переработке ягод</a>
          или <a routerLink="/комбайны_для_уборки_бобовых" title="горохоуборочные, фасолеуборочные комбайны">техника для уборки бобовых</a>
        </p>
      </div>
    </div>

    <div id="modalKokan" class="w3-modal w3-center">
      <span class="w3-padding w3-yellow w3-hover-red w3-display-topright" style="cursor:pointer"
            onclick="this.parentNode.style.display='none'">&times;</span>
      <img id="kokanImg" src='' class="w3-animate-zoom w3-image">
    </div>
    `
})
export class KokanComponent {
  slideIndex = 1;
  kokan = kokan;
  kokanRows = Array.from(Array(Math.ceil(kokan.length / 2)).keys());
  kokanModal (img: string) {
    (<HTMLImageElement>document.querySelector('#kokanImg')).src = 'img/kokan/' + img + '.jpg';
    document.getElementById('modalKokan').style.display = 'block';
  }
  plusDivs (n: number) {
    this.showDivs(this.slideIndex += n);
  }
  showDivs (n: number) {
    let x = document.querySelectorAll('.kokanSlide');
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].className = 'w3-row-padding kokanSlide w3-hide';
    }
    x[this.slideIndex - 1].className = 'w3-row-padding kokanSlide w3-show';
  }
}
