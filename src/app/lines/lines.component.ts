import { Component } from '@angular/core';

const lines = [
  {
    name: 'Шнековый конвейер PT-50',
    img: 'shnekovyi_konveer_pt-50',
    imgNum: 1,
    desc: 'Предотвращает рассыпание ягод при транспортировке, позволяет равномерно подавать их в последующие агрегаты',
    list: `
      Название устройства: Шнековый конвейер
      Тип устройства: PT-50
      Цель устройства: Равномерная подача плодов в следующие агрегаты.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: на четырех колесах; без привязки к фундаменту
      Габариты устройства: 3520x1250x3170 мм
      Высота приема: 965 мм 
      Высота подачи: 2146 мм
      Уровень автоматизации: автоматический
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь
      Материал листов, которые контактируют с плодами: кислотоупорный лист из нержавеющей стали WN 1.4301
      Приводное устройство: електромотор P=1,1kW
      Рабочее напряжение: 380 V`,
    text: `Шнековый транспортер предотвращает рассыпание ягод в период транспортировки,
     позволяет равномерно подавать их в последующие агрегаты. Простота и доступность в обслуживании.`
  },
  {
    name: 'Роликовый транспортер (Ролганг) RG-01',
    img: 'rolang_rg-01',
    imgNum: 1,
    desc: 'Перемещает продукцию',
    list: `
      Название устройства: Роликовый транспортер (Ролганг) 
      Тип устройства: RG-01
      Цель устройства: перемещение продукции под своим весом или с помощью усилий человека.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства (ДхШхВ): 1240x460x155 мм
      Вес устройства: 11 кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.`,
    text: `Используется для перемещения продукции под своим весом или с помощью усилий человека.`
  },
  {
    name: 'Роликовый транспортер (Ролганг) RG-02',
    img: 'rolang_rg-02',
    imgNum: 1,
    desc: 'Перемещает коробоки, ящики под тяжестью товара или с помощью усилий человека',
    list: `
      Название устройства: Роликовый транспортер (Ролганг) 
      Тип устройства: RG-02
      Цель устройства: перемещение продукции под своим весом или с помощью усилий человека.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства (ДхШхВ): 3240x360x40 мм
      Вес устройства: 20 кг
      Опорная конструкция: Жесть / Сварные профили
      Базовый модуль: Нержавеющая сталь`,
    text: `Ролганг используется для перемещения коробок, ящиков и пр. Роликовый конвейер состоит из роликов и подшипников,
      в которых они вращаются. Ролики устанавливаются под углом благодаря чему они свободно вращаются
      под тяжестью груза или с помощью усилий человека.`
  },
  {
    name: 'Роликовый транспортер (Ролганг) RG-50',
    img: 'rolang_rg-50',
    imgNum: 1,
    desc: 'Перемещает плоды',
    list: `
      Название устройства: Роликовый транспортер (Ролганг) 
      Тип устройства: RG-50
      Цель устройства: перемещение продукции под своим весом или с помощью усилий человека.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства: 1240x460x800 мм
      Угол уклона: от 0 до 45º
      Вес устройства: 22 кг
      Опорная конструкция: Жесть / сварные профили
      Базовый модуль: Нержавеющая сталь`,
    text: `Используется для перемещения продукции под своим весом или с помощью усилий человека.`
  },
  {
    name: 'Веялка D-01',
    img: 'vejalka_d-01',
    imgNum: 2,
    desc: 'Очищает от мелких, легких вкраплений и мусора',
    list: `
      Название устройства: Веялка 
      Тип устройства: D-01
      Цель устройства: Выдувает с плодов нежелательную примесь.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Регулируемые опоры.
      Габариты устройства (ДхШхВ): 1570x700x1110 мм
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь
      Мощность двигателя: P=0.75 kW
      Обороты двигателя: 2800 о/мин 
      Рабочее напряжение: U= 380 V`,
    text: `Веялки предназначены для очистки продукта от мелких и легких вкраплений и мусора.
      Например, при очистке замороженных ягод веялки применяются для отделения листьев, засохших ягод, отделенной плодоножки.
      При очистке орехов, веялки отделяют шелуху и другие легкие добавки.`
  },
  {
    name: 'Вибрационный калибратор VG-08',
    img: 'vibratsionnyi_kalibrator_vg-08',
    imgNum: 1,
    desc: 'Удаляет мусор, распределяет плоды на 3 фракции',
    list: `
      Название устройства: Вибрационный калибратор
      Тип устройства: VG-08
      Цель устройства: Удаление мусора и нежелательных примесей, распределение плодов на 3 фракции.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Восемь регулируемых опор, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3365x1240x1960мм
      Опорная конструкция: Жесть / Сварные профили
      Базовый модуль: Нержавеющая сталь
      Приводное устройство: Трехфазный вибромотор VM-1. 80B-4a
      Скорость вибромотора: nmax=1375 о/мин 
      Рабочее напряжение: U=220V`,
    text: `Вибрационный калибратор позволяет быстро и качественно убрать ненужную примесь,
     а также распределить поступающие плоды на 3 фракции для подальшей переработки продукции.`
  },
  {
    name: 'Барботажная моечная машина BR-02',
    img: 'barbotazhnaja_moechnaja_mashyna_br-02',
    imgNum: 4,
    desc: 'Моет ягоды, фрукты и овощи',
    list: `
      Название устройства: Барботажная моечная машина 
      Тип устройства: BR-02
      Цель устройства: Мойка фруктов и овощей
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3960x1060x2045±30мм
      Высота ванны: Hu=1045±30мм
      Высота выгрузки барботажной моечной машины: Hi=1495±30мм
      Материал листов, которые контактируют с плодами: Кислотоупорный лист из нержавеющей стали WN 1.4301
      Тип конвейера: Секционный M2533 Ячейка сетки 1″
      Ширина конвейерной ленты: 600мм 
      Подключение к водопроводу: G2ʺ; pmax=5bar
      Привод вентилятора:
      Мощность электродвигателя P=2,2 kW,
      Скорость вентилятора: n = 2800 о/мин
      Привод элеватора:
      Мощность электродвигателя P=0,37kW,
      Скорость вращения выходной шестерни: n = 28 о/мин`,
    text: `Барботажная моечная машина эфективно моет фрукты, овощи, ягоды (вишни, абрикосы, сливы, смородина и тд.)`
  },
  {
    name: 'Вальчатый калибратор CK-01',
    img: 'valchatyi_kalibrator_sk-01',
    imgNum: 2,
    desc: 'Автоматически калибрует ягоды по размерам на 3 фракции',
    list: `
      Название устройства: Вальчатый калибратор
      Тип устройства: CK-01
      Цель устройства: Калибровка плодов (сливы, вишни, черешни, клубники, ежевики, малины и тд.)
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 4350x2540x119555мм 
      Вес устройства: 1000 кг
      Материал листов, которые контактируют с плодами: Кислотоупорный лист из нержавеющей стали WN 1.4301
      Несущая конструкция: Жесть, сварные профили
      Количество секций: 3, возможно регулировать расстояние между вальцами в секциях
      Диаметр калибровки: От 6 до 40 мм
      Производительность: 2,5-3 т/ч
      Количество выгрузных лент: 3
      Привод калибратора: Электромотор P=1,5 kW
      Привод ленточных конвейеров: Электромотор P=0,25 kW x 3 
      Рабочее напряжение: U= 380V`,
    text: `Предназначен для автоматической калибровки ягодной продукции по размерам на 3 фракции.
      Минимальный размер ягод  – 6 мм, максимальный до 40 мм (отсортированный).
      Отсортированный продукт попадает в специальную тару или на отводящие транспортеры.
      Можем сделать калибратор любых размеров по требованию заказчика.`
  },
  {
    name: 'Вибростол V-2',
    img: 'vibrostol_v-2',
    imgNum: 1,
    desc: 'Калибрует и выравниванивает поток на линиях замороженных ягод',
    list: `
      Название устройства: Вибростол
      Тип устройства: V-2
      Цель устройства: Удаление фруктов меньше, чем 12 мм 
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 1800x890x1200мм 
      Вес устройства: 175 кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Приводное устройство: Трехфазный вибромотор VM-1. 80B-4a
      Скорость вибромотора: nmax=1400о/мин 
      Рабочее напряжение: U=380V`,
    text: `
      Вибростолы изготавливаются из кислотоупорной нержавеющей стали с пищевым допуском и являются важным компонентом
      в составе линии переработки ягодной продукции. Применяется для калибровки и выравнивания потока
      на линиях замороженных ягод. Отличаются надежностью, простотой в обслуживыании и большим ресурсом работы.`
  },
  {
    name: 'Вертикальный экстрактор VP-01',
    img: 'vertikalnyi_ekstraktor_vp-01',
    imgNum: 1,
    desc: 'Удаляет с косточек остатки ягод, без их повреждения',
    list: `
      Название устройства: Вертикальный экстрактор
      Тип устройства: VP-01
      Цель устройства: Удаление остатков вишни, сливы и черешни с косточки.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 1000x810x840±30мм
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Рабочее напряжение: 380V
      Приводное устройство:
      Мощность электромотора: P=4kW
      Обороты электромотора: n=1400 о/мин`,
    text: `
      Экстрактор создан для удаления с косточек остатков ягод. Может использоваться для вишни, черешни, сливы, малины
      и других косточковых ягод. Обеспечивает полную очистку косточек. Косточки не повреждаются и не разламываются
      в процессе работы, как следствие, фрагменты косточек не смешиваются с ягодной массой.`
  },
  {
    name: 'Машина для удаления черенков P-01',
    img: 'mashina_udalenija_cherenkov_p-01',
    imgNum: 3,
    desc: 'Удаляет черенки с ягод',
    list: `
      Название устройства: Черенкователь 
      Тип устройства: P-01
      Цель устройства: Удаление черенков с вишни, сливы и черешни.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 2470x1310x1460±30мм
      Высота загрузки: Hu=1227±30мм 
      Высота выгрузки: Hi=1070±30мм
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Рабочее напряжение: 380V
      Подключение к водопроводу: 3xØ20мм; pmax=5bar
      Приводное устройство: Електромотор P1=3kW, n1 = 700о/мин; 
      Электродвигатель редуктора: P2=0,55kW/NMRV50 i=7,5; регулировка скорости с помощью преобразователя частоты.`,
    text: `Удаление черенков с вишни, сливы и черешни.`
  },
  {
    name: 'Машина для грубой очистки черники, смородины, шиповника B1-01',
    img: 'mashina_gruboi_ochistki_b1-01',
    imgNum: 3,
    desc: 'Выполняет грубую очистку ягод',
    list: `
      Название устройства: Машина для грубой очистки черники, смородины, шиповника
      Тип устройства: B1-01
      Цель устройства: Грубая очистка черники, смородины, шиповника
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3650x700x187525 мм 
      Вес устройства: 315 кг
      Уровень автоматизации: Автоматический
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Приводное устройство:
      Винтовой конвейер: муфта редукторного мотора, P=1.5kW, n=2 800min-1, i=10; 
      Разбивка мороженых плодов: муфта редукторного мотора, P=1.5kW, n=2 800min-1, i=10
      Рабочее напряжение: U=380V`,
    text: `Грубая очистка черники, смородины, шиповника.`
  },
  {
    name: 'Машина для тонкой очистки черники и смородины B2-01',
    img: 'mashina_tonkoi_ochistki_b2-01',
    imgNum: 3,
    desc: 'Выполняет тонкую очистку ягод',
    list: `
      Название устройства: Машина для тонкой очистки черники и смородины
      Тип устройства: B2-01
      Цель устройства: Тонкая очистка черники и смородины
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 3540x700x1835мм 
      Вес устройства: 310 кг
      Уровень автоматизации: Автоматический.
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Приводное устройство:
      Винтовой конвейер.: P=1.5kW, n=280min-1,
      Разбивка мороженых плодов: P=1.5kW, n=280min-1,
      Рабочее напряжение: U=380V`,
    text: `Тонкая очистка черники и смородины.`
  },
  {
    name: 'Инспекционный транспортер IT-01',
    img: 'inspekcionnyi_transporter_it-01',
    imgNum: 1,
    desc: 'Перемещает продукцию',
    list: `
      Название устройства: Инспекционный транспортер 
      Тип устройства: IT-01
      Цель устройства: Транспортировка и контроль плодов.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили 
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 4800x1100x2000 мм 
      Вес устройства: 300 кг
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь.
      Материал листов, которые контактируют с плодами: Кислотоупорный лист из нержавеющей стали Č.4580
      Осветление: Три лампы дневного света 2x36W и одна лампа дневного света 2x18W
      Тип конвейера: NAB 10 
      Ширина конвейера: 800 мм
      Регулирование скорости полосы: Частотным преобразователем.
      Скорость конвейера: V = 4,66 – 14,14 м/мин 
      Диаметр приводного и натяжного ролика: Ø150 мм
      Приводное устройство: Червячные редуктора.
      Мощность главного двигателя: P=0,55kW
      Частота вращения выходного вала редуктора: n2=30 о/мин 
      Рабочее напряжение: U=380V`,
    text: `Инспекционный транспортер оснащен осветительными приборами,
      обеспечивающими хорошую освещенность проверяемого продукта, а также имеются перегородки для отсортировки брака.`
  },
  {
    name: 'Инспекционный транспортер IT-03',
    img: 'inspekcionnyi_transporter_it-03',
    imgNum: 1,
    desc: 'Позволяет быстро и качественно сортировать продукцию',
    list: `
      Название устройства: Инспекционный транспортер IT-03
      Цель устройства: Транспортировка и контроль плодов
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили 
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 4210x1160x2040 мм
      Вес устройства: 240 кг
      Опорная конструкция: Жесть, сварные профили.
      Базовый модуль: Нержавеющая сталь.
      Материал листов, которые контактируют с сырьем:  Кислотоупорный лист из нержавеющей стали 1.4301
      Осветление: лампа дневного света 2x36W и лампа дневного света 2x18W.
      Тип конвейера: NAB 10
      Ширина ленты: 800 мм
      Регулирование скорости ленты: преобразователем частоты
      Скорость конвейера: V = 5 – 13.5 м/мин
      Диаметр приводного и натяжного ролика: Ø150 мм 
      Приводное устройство: винтовой редуктор
      Мощность главного двигателя: P=0,55kW 
      Рабочее напряжение: U=380V`,
    text: `Инспекционный транспортер для сортировки ягод (малина, голубика, ежевика, смородина и тд.)
      позволяет быстро, а самое главное – качественно отсортировать продукцию. Транспортировочная лента – 
      полеуритановая, пищевая, ее ширина – 800 мм. Также имеются перегородки для отсортировки брака.`
  },
  {
    name: 'Ленточный транспортер TT-01',
    img: 'lentochnyi_transporter_tt-01',
    imgNum: 1,
    desc: 'Транспортирует продукт',
    list: `
      Название устройства: Ленточный транспортер
      Тип устройства: TT-01
      Цель устройства: Транспортировка плодов и деление на три равных потока для последующей переработки.
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили.
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 5360x1330x124530 мм 
      Вес устройства: 260кг
      Опорная конструкция: Жесть, сварные профили 
      Базовый модуль: Нержавеющая сталь.
      Тип конвейера: NAB 10 
      Ширина конвейера: 800 мм
      Скорость конвейера: V = 11,73 м/мин
      Диаметр приводного и натяжного ролика: Ø150 мм
      Мощность главного двигателя: P=0,55Kw 
      Рабочее напряжение: U=380V`,
    text: `Оснащен тремя перегородками, для деления продукта на потоки.`
  },
  {
    name: 'Ленточный транспортер TT-33',
    img: 'lentochnyi_transporter_tt-33',
    imgNum: 2,
    desc: 'Транспортирует фрукты и овощи в приемный бункер',
    list: `
      Название устройства: Ленточный транспортер.
      Тип устройства: TT-33
      Цель устройства: Транспортировка фруктов и овощей.
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры
      Габариты устройства (ДхШхВ): 1900x740x1580 мм
      Угол наклона конвейера: 45º
      Вес устройства: 130 кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь
      Tип конвейера: NAB – 10, с лопастями
      Диаметр приводного и натяжного ролика: Ø150 мм
      Мощность двигателя: P=0.37 kW
      Рабочее напряжение: U= 380 V`,
    text: `Оснащен лентой с шевронами, а также приемным бункером.`
  },
  {
    name: 'Ленточный транспортер TT-50',
    img: 'lentochnyi_transporter_tt-50',
    imgNum: 4,
    desc: 'Доставляет плоды',
    list: `
      Название устройства: Ленточный транспортер
      Тип устройства: TT-50
      Цель устройства: Транспортировка фруктов и овощей
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 3110x1020x1330±30 мм
      Высота загрузки: Hu=1330±30мм
      Высота выгрузки: Hi=1045±30мм
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Тип конвейера: Модульная лента M2533
      Диаметр звездочки привода и натяжения: Ø146.9мм 
      Ширина конвейерной ленты: 650мм
      Мощность двигателя: P=0.37 kW
      Рабочее напряжение: U= 380 V`,
    text: `Транспортировка фруктов и овощей`
  },
  {
    name: 'Ленточный транспортер TT-83',
    img: 'lentochnyi_transporter_tt-83',
    imgNum: 2,
    desc: 'Транспортирует продукцию',
    list: `
      Название устройства: Ленточный транспортер
      Тип устройства: TT-83
      Цель устройства: Транспортировка фруктов и овощей
      Цвет устройства: Неокрашенные лист из нержавеющей стали и профили
      Состояние устройства: Новое
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: Четыре регулируемых опоры.
      Габариты устройства (ДхШхВ): 2330x920x2650 мм
      Вес устройства: 220кг
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Тип конвейера: Модульная лента M2533
      Диаметр звездочки привода и натяжения: Ø146,9мм
      Ширина конвейерной ленты: 650 мм
      Мощность двигателя: P=0.55 kW
      Рабочее напряжение: U= 380 V`,
    text: `Транспортировка фруктов и овощей`
  },
  {
    name: 'Запайщик пленки ПВХ',
    img: 'zapaischik_plenki_pvh',
    imgNum: 2,
    desc: 'Сваривает различные полотна полимерных материалов для изготовление герметичных пакетов',
    list: `
      Название устройства: Запайщик пленки ПВХ
      Тип устройства: PVC -01
      Цель устройства: Сварка пленки ПВХ
      Цвет устройства: Неокрашенные листы из нержавеющей стали и профили 
      Состояние устройства: Новое.
      Поддерживаемые стандарты: SRPS, DIN, ISO
      Опора устройства: На четырех регулируемых опорах, без привязки к фундаменту
      Габариты устройства (ДхШхВ): 500x650x1075 мм 
      Вес устройства: 25 кг
      Уровень автоматизации: Полуавтоматический
      Опорная конструкция: Жесть, сварные профили
      Базовый модуль: Нержавеющая сталь.
      Рабочее напряжение: U=220V`,
    text: `Запайщики (свариватели) пленки предназначены для сварки различных полотен полимерных материалов друг с другом.
      С помощью запайщика можно быстро изготовить пакет из пленки и герметично запечатать его.`
  },
  {
    name: 'Настил для установки линии',
    img: 'nastil_dlia_ustanovki_linii',
    imgNum: 1,
    desc: 'Повышает безопасность при работе на линии, предотвращает скольжение',
    list: '',
    text: `Настил для установки линии, Материал ПВХ(PVC), перфорированный. Противоскользящее покрытие.
      Применяется для повышения безопасности при работе на линии, для предотвращения скольжения и падения людей.`
  }
];

@Component({
  selector: 'app-root',
  templateUrl: 'lines.component.html'
})

export class LinesComponent {
  lines = lines;
  linesRows = Array.from(Array(Math.ceil(lines.length / 4)).keys());
  linesModal (line: any) {
    document.getElementById('modalLine').style.display = 'block';
    document.getElementById('lineImg').innerHTML = '<img id=img1 src="assets/lines/' + line.img + '_1.jpg"' +
      ' style="width:100%;max-height:400px">';
    if (line.imgNum > 1) {
      for (let i = 1; i <= line.imgNum; i++) {
        document.getElementById('lineImg').innerHTML += '<img src="assets/lines/' + line.img + '_' + i + '.jpg"' +
          ' style="width:33.333%;cursor:pointer" onclick="document.getElementById(\'img1\').src=this.src">';
      }
    }
    document.getElementById('lineText').innerHTML = '<ul>' + line.list.split(`     `).join('<li><b>').
      split(':').join(':</b>') + '</ul>' + line.text;
  }
}
