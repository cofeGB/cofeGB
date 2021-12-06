import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quickOrder: [],
    total: {
      totalPrice: 0,
      loyalty: [],
    },
    loyalty: [
      {
        title: 'Кофе в свой стакан',
        guid: 'h124fd3bstfy',
        sale: 15,
        saving: 43,
        path: '/about',
      },
      {
        title: 'Кофе в свой стакан',
        guid: '054ldstfydaw',
        sale: 15,
        saving: 43,
        path: '/menu',
      },
      {
        title: 'День рождения',
        guid: 'hsyfgebstfy',
        sale: 15,
        saving: 43,
        path: '/menu',
      },
      {
        title: 'Годовщина',
        guid: '12syfgewefy',
        sale: 15,
        saving: 43,
        path: null,
      },
      {
        title: 'Первый быстрый заказ',
        guid: '12syf235аыy',
        sale: 15,
        saving: 43,
        path: '/',
      },
    ],
    demobasket: {
      dish: [
        {
          title: 'Блюдо с очень длинным название что бы проверить верстку',
          price: 99999,
          quantity: 99,
          path: '1',
        },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '2' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '3' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '4' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '5' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '6' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '7' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '8' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '9' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '10' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '11' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '12' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '13' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '14' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '15' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '16' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '17' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '18' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '19' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '20' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '21' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '22' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '23' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '24' },
        { title: 'Обычное блюдо из 4 слов', quantity: 1, price: 147, path: '25' },
      ],
      total: {
        totalPrice: 99999,
        loyalty: {
          stock: {
            title: 'Акции',
            items: [
              {
                title: 'Кофе в свой стакан',
                sale: 15,
                saving: 43,
                path: '/about',
              },
              {
                title: 'Кофе в свой стакан',
                sale: 15,
                saving: 43,
                path: null,
              },
            ],
          },
          discounts: {
            title: 'Скидки',
            items: [
              {
                title: 'День рождения',
                sale: 15,
                saving: 43,
                path: null,
              },
              {
                title: 'Годовщина',
                sale: 15,
                saving: 43,
                path: null,
              },
            ],
          },
        },
      },
    },
    access: {
      DEV: {
        site: true,
        newMenu: true,
        schedule: true,
        stopList: true,
        inventory: true,
        siteUpdate: true,
        createAccount: true,
      },
      ADMIN: {
        site: true,
        newMenu: true,
        schedule: true,
        stopList: true,
        inventory: true,
        siteUpdate: true,
        createAccount: true,
      },
      DEMI_ADMIN: {
        site: true,
        newMenu: true,
        schedule: true,
        stopList: true,
        inventory: true,
        siteUpdate: false,
        createAccount: true,
      },
      BARTENDER: {
        site: true,
        newMenu: true,
        schedule: false,
        stopList: true,
        inventory: true,
        siteUpdate: false,
        createAccount: false,
      },
    },
    foodNavMenu: [
      {
        id: 'SANDWICHES',
        title: 'Сэндвичи',
      },
      {
        id: 'SNACKS',
        title: 'Закуски',
      },
      {
        id: 'SALADS',
        title: 'Салаты',
      },
      {
        id: 'DESSERTS',
        title: 'Десерты',
      },
      {
        id: 'DRINKS',
        title: 'Напитки',
      },
    ],
    foodNavMenuSelection: 'SANDWICHES',
    navMenuVisible: false,
    menu: {
      starters: [
        {
          title: 'Оливки Chupadedos',
          quantity: 0,
          price: 100,
          weight: 100,
          calories: 29,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 3.1,
            fromNorma: 4.63,
          },
          carbohydrates: {
            in: 0.7,
            fromNorma: 0.35,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: [
            {
              title: 'Оливки',
            },
          ],
          description:
            'Калорийность на 20 гр. — 29 кКал. Жиры — 3.1 г. Белки — 0.2 г. Углеводы — 0.7 г. В 50 г. В оливках Чупадедос содержатся 0.22% суточной нормы белка, жиров — 4.63% и углеводов — 0.35%.',
        },
        {
          title: 'Оливки',
          quantity: 0,
          price: 100,
          weight: 100,
          calories: 29,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 3.1,
            fromNorma: 4.63,
          },
          carbohydrates: {
            in: 0.7,
            fromNorma: 0.35,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: [
            {
              title: 'Оливки',
            },
          ],
          description:
            'Калорийность на 20 гр. — 29 кКал. Жиры — 3.1 г. Белки — 0.2 г. Углеводы — 0.7 г. В 50 г. В оливках содержатся 0.22% суточной нормы белка, жиров — 4.63% и углеводов — 0.35%.',
        },
      ],
      sandwich: [
        {
          title: 'Стандарт',
          guid: 'jsnfh239rfj9r843rh47fdvew324',
          quantity: 0,
          price: 200,
          weight: 200,
          calories: 0,
          proteins: {
            in: 0,
            fromNorma: 0,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: [],
          description: 'Стандартный',
          composition: [
            {
              title: 'Белый хлеб',
              type: 'white',
              quantity: 1,
              price: 30,
            },
            {
              title: 'Майонез',
              type: 'mayonnaise',
              quantity: 1,
              price: 30,
            },
            {
              title: 'Лоло Россо',
              type: 'loloRosso',
              quantity: 1,
              price: 20,
            },
            {
              type: 'salcico',
              title: 'Салями Сальсичон',
              quantity: 1,
              price: 50,
            },
            {
              type: 'adam',
              title: 'Сыр эдам',
              quantity: 1,
              price: 30,
            },
          ],
        },
        {
          title: 'Стандарт Большой',
          guid: 'jsnfh39d8f74u3hfhvjhvsdfdsfsfdvew324',
          quantity: 0,
          price: 300,
          weight: 300,
          calories: 0,
          proteins: {
            in: 10,
            fromNorma: 0.5,
          },
          fat: {
            in: 20,
            fromNorma: 30,
          },
          carbohydrates: {
            in: 0.2,
            fromNorma: 0.01,
          },
          warning: null,
          composition: [
            {
              title: 'Белый хлеб',
              type: 'white',
              quantity: 1,
              price: 30,
            },
            {
              title: 'Майонез',
              type: 'mayonnaise',
              quantity: 1,
              price: 30,
            },
            {
              title: 'Лоло Россо',
              type: 'loloRosso',
              quantity: 1,
              price: 20,
            },
            {
              type: 'salcico',
              title: 'Салями Сальсичон',
              quantity: 1,
              price: 50,
            },
            {
              type: 'adam',
              title: 'Сыр эдам',
              quantity: 1,
              price: 30,
            },
          ],
          description: 'Большой большой большой бутер',
        },
      ],
      salad: [],
      desserts: [],
    },
    barMenu: {
      coffee: [
        {
          title: 'Латте',
          guid: 'jsnfh239rfвфцауа43кdvew324',
          quantity: 1,
          price: 180,
          coffe: 8,
          milk: 250,
          calories: 274,
          composition: [
            {
              title: 'Молоко',
              type: '',
              quantity: 250,
              price: 50,
            },
            {
              title: 'Кофе',
              type: '',
              quantity: 8,
              price: 0,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: {
            text: 'Содержит лактозу',
            icon: 'lactose',
          },
          loyalty: {
            stock: {
              title: 'Акции',
              items: [
                {
                  title: 'Кофе в свой стакан',
                  sale: 15,
                  saving: 43,
                  path: '/about',
                },
              ],
            },
          },
        },
        {
          title: 'Латте-Макиато',
          guid: 'jsnfh239rfj9adawd32er2w324',
          quantity: 1,
          price: 180,
          coffe: 8,
          milk: 250,
          calories: 274,
          composition: [
            {
              title: 'Молоко',
              type: '',
              quantity: 250,
              price: 50,
            },
            {
              title: 'Кофе',
              type: '',
              quantity: 8,
              price: 0,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: {
            text: 'Содержит лактозу',
            icon: 'lactose',
          },
        },
        {
          title: 'Капучино',
          guid: 'jsnfh239rawd32r3f34t47fdvew324',
          quantity: 1,
          price: 150,
          coffe: 8,
          milk: 200,
          calories: 274,
          composition: [
            {
              title: 'Молоко',
              type: '',
              quantity: 200,
              price: 50,
            },
            {
              title: 'Кофе',
              type: '',
              quantity: 8,
              price: 0,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: {
            text: 'Содержит лактозу',
            icon: 'lactose',
          },
        },
        {
          title: 'Эспресо',
          guid: 'jad32r843rh47fdvew324',
          quantity: 1,
          price: 90,
          coffe: 8,
          calories: 24,
          composition: [
            {
              title: 'Кофе',
              type: '',
              quantity: 8,
              price: 0,
            },
          ],
          proteins: {
            in: 0.7,
            fromNorma: 1.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 0.4,
          },
          carbohydrates: {
            in: 7.5,
            fromNorma: 0.3,
          },
          warning: false,
        },
        {
          title: 'Американо',
          guid: 'jsnfh239rfergr43534ew324',
          quantity: 1,
          price: 90,
          coffe: 8,
          calories: 24,
          composition: [
            {
              title: 'Кофе',
              type: '',
              quantity: 8,
              price: 0,
            },
          ],
          proteins: {
            in: 0.7,
            fromNorma: 1.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 0.4,
          },
          carbohydrates: {
            in: 7.5,
            fromNorma: 0.3,
          },
          warning: false,
        },
      ],
      tea: [
        {
          title: 'Черный чай',
          guid: '2134f435sdcjsnfdawvew324',
          quantity: 0,
          price: 180,
          tea: 2,
          mil: 250,
          calories: 4,
          composition: [
            {
              title: 'Черный чай',
              type: '',
              quantity: 2,
              price: 0,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: false,
        },
        {
          title: 'Зеленый чай',
          guid: 'jsnfh239rfj9r84dadwd32342tr2r',
          quantity: 0,
          price: 180,
          tea: 2,
          mil: 250,
          calories: 4,
          composition: [
            {
              title: 'Зеленый чай',
              type: '',
              quantity: 2,
              price: 0,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: false,
        },
        {
          title: 'Белый чай',
          guid: 'jsnfawdwad9r843rh47fdvew324',
          quantity: 0,
          price: 180,
          tea: 2,
          mil: 250,
          calories: 4,
          composition: [
            {
              title: 'Белый чай',
              type: '',
              quantity: 2,
              price: 0,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: false,
        },
        {
          title: 'Чай матча',
          guid: 'jsnfh239rfj9dawdawdvew324',
          quantity: 0,
          price: 180,
          tea: 2,
          milk: 250,
          calories: 4,
          composition: [
            {
              title: 'Матча',
              type: '',
              quantity: 2,
              price: 0,
            },
            {
              title: 'Молоко',
              type: '',
              quantity: 250,
              price: 50,
            },
          ],
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: {
            text: 'Содержит лактозу',
            icon: 'lactose',
          },
        },
        {
          title: 'Чай из мяты',
          guid: 'jsnfhadwdwar843rh47fdvew324',
          quantity: 0,
          price: 10,
          weight: 1,
          calories: 0,
          composition: [
            {
              title: 'Мята',
              type: '',
              quantity: 2,
              price: 0,
            },
          ],
          proteins: {
            in: 0,
            fromNorma: 0,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: false,
        },
        {
          title: 'Чай из чабреца',
          guid: 'jsnfh239rfj9r84adadwadw324',
          quantity: 0,
          price: 10,
          weight: 1,
          calories: 0,
          proteins: {
            in: 0,
            fromNorma: 0,
          },
          composition: [
            {
              title: 'Чабрец',
              type: '',
              quantity: 1,
              price: 10,
            },
          ],
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: false,
        },
      ],
      option: {
        fruits: [
          {
            title: 'Апельсин',
            quantity: 1,
            price: 30,
            weight: 50,
            calories: 0,
            proteins: {
              in: 0,
              fromNorma: 0,
            },
            fat: {
              in: 0,
              fromNorma: 0,
            },
            carbohydrates: {
              in: 0,
              fromNorma: 0,
            },
            warning: false,
          },
          {
            title: 'Яблоко',
            quantity: 1,
            price: 30,
            weight: 50,
            calories: 0,
            proteins: {
              in: 0,
              fromNorma: 0,
            },
            fat: {
              in: 0,
              fromNorma: 0,
            },
            carbohydrates: {
              in: 0,
              fromNorma: 0,
            },
            warning: false,
          },
          {
            title: 'Груша',
            quantity: 1,
            price: 30,
            weight: 50,
            calories: 0,
            proteins: {
              in: 0,
              fromNorma: 0,
            },
            fat: {
              in: 0,
              fromNorma: 0,
            },
            carbohydrates: {
              in: 0,
              fromNorma: 0,
            },
            warning: false,
          },
        ],
        sugar: {
          title: 'Сахар',
          quantity: 10,
          price: 30,
          calories: 0,
        },
      },
    },
    foodConstructor: {
      bread: {
        black: {
          title: 'Черный',
          quantity: 1,
          price: 30,
          piece: 3,
          weight: 100,
          calories: 274,
          proteins: {
            in: 10.7,
            fromNorma: 14.2,
          },
          fat: {
            in: 4.5,
            fromNorma: 5.4,
          },
          carbohydrates: {
            in: 47.5,
            fromNorma: 15.3,
          },
          warning: {
            text: 'Содержит глютен',
            icon: 'gladly',
          },
          composition: {
            text: 'Мука ржаная обойная, ржаная обдирная, пшеничная 2 сорта, сахар, квасное сусло (солод ячменный, вода, тритикале, солод ржаной ферментированный и неферментированный), патока, солод ржаной, сыворотка творожная, смесь (мука ржаная экструзионная сеяная, кориандр), соль Йодированная, тмин, смесь (мука ржаная обдирная, ржаная экструзионная, солод ржаной, хмель сухой, сахар), вода.',
          },
          description:
            'Калорийность на 100гр. 274 кКал. Жиры — 4.53 г. Белки — 10,67 г. Углеводы — 47,54 г. В 100 г белого пшеничного хлеба содержатся 14% суточной нормы белка, жиров — 5% и углеводов — 15%.',
        },
        white: {
          title: 'Белый',
          quantity: 1,
          price: 30,
          piece: 3,
          weight: 100,
          calories: 210,
          proteins: {
            in: 6.5,
            fromNorma: 8.6,
          },
          fat: {
            in: 1,
            fromNorma: 1.8,
          },
          carbohydrates: {
            in: 43,
            fromNorma: 19.6,
          },
          warning: {
            text: 'Содержит глютен',
            icon: 'gladly',
          },
          composition: {
            text: 'Мука пшеничная, Дрозжи хлебопекарные, яйца куриные, масло сливочное, соль, сахар, вода.',
          },
          description:
            'Калорийность на 100гр. — 210 кКал. Жиры — 1 г. Белки — 6.5 г. Углеводы — 43 г. В 100 г черного хлеба содержатся 6.37% суточной нормы белка, жиров — 1.33% и углеводов — 27.56%.',
        },
        wholegrain: {
          title: 'Зерновой',
          quantity: 1,
          price: 50,
          piece: 3,
          weight: 100,
          calories: 255,
          warning: false,
          proteins: {
            in: 8,
            fromNorma: 10.5,
          },
          fat: {
            in: 5,
            fromNorma: 8.9,
          },
          carbohydrates: {
            in: 41,
            fromNorma: 18.7,
          },
          composition: {
            text: 'Ядра зеленой гречихи, вода питьевая, семена тыквенные, семена льна молотые, кокосовое масло VIRGIN холодного отжима нерафинированное, клетчатка семян подорожника, соль морская, сода пищевая Bobs Red Mill, кардамон, мускатный орех, красный перец острый.',
          },
          description:
            'Калорийность на 100гр. — 255 кКал. Жиры — 8.9 г. Белки — 8 г. Углеводы — 41 г. В 100 г цельнозернового хлеба содержатся 10.5% суточной нормы белка, жиров — 8.9% и углеводов — 18.7%.',
        },
      },
      salad: {
        loloRosso: {
          title: 'Лоло Россо',
          quantity: 1,
          price: 20,
          piece: false,
          weight: 20,
          calories: 3.2,
          warning: false,
          proteins: {
            in: 0.3,
            fromNorma: 0.33,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.4,
            fromNorma: 0.29,
          },
          description:
            'Калорийность на 20гр. — 3.2 кКал. Жиры — 0 г. Белки — 0.3 г. Углеводы — 0.4 г. В 20 г. салата Лоло Россо содержатся 0.33% суточной нормы белка, жиров — 0% и углеводов — 0.29%.',
        },
        loloBiondo: {
          title: 'Лоло Биондо',
          quantity: 1,
          price: 20,
          piece: false,
          weight: 20,
          calories: 3.4,
          warning: false,
          proteins: {
            in: 0.3,
            fromNorma: 0.33,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.4,
            fromNorma: 0.29,
          },
          description:
            'Калорийность на 20гр. — 3.4 кКал. Жиры — 0 г. Белки — 0.3 г. Углеводы — 0.4 г. В 20 г. салата Лоло Биондо содержатся 0.33% суточной нормы белка, жиров — 0% и углеводов — 0.29%.',
        },
        lettuce: {
          title: 'Латук',
          quantity: 1,
          price: 20,
          piece: false,
          weight: 20,
          calories: 3.2,
          warning: false,
          proteins: {
            in: 0.3,
            fromNorma: 0.33,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.4,
            fromNorma: 0.29,
          },
          description:
            'Калорийность на 20гр. — 3.2 кКал. Жиры — 0 г. Белки — 0.3 г. Углеводы — 0.4 г. В 20 г. салата Латук содержатся 0.33% суточной нормы белка, жиров — 0% и углеводов — 0.29%.',
        },
        rucola: {
          title: 'Рукола',
          quantity: 1,
          price: 20,
          piece: false,
          weight: 20,
          calories: 5,
          warning: false,
          proteins: {
            in: 0.3,
            fromNorma: 0.33,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.4,
            fromNorma: 0.29,
          },
          description:
            'Калорийность на 20гр. — 5 кКал. Жиры — 0 г. Белки — 0.3 г. Углеводы — 0.4 г. В 20 г. салата Руккола содержатся 0.33% суточной нормы белка, жиров — 0% и углеводов — 0.29%.',
        },
      },
      sauce: {
        mayonnaise: {
          title: 'Майонез',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 50,
          calories: 314.5,
          proteins: {
            in: 1.4,
            fromNorma: 1.52,
          },
          fat: {
            in: 33.5,
            fromNorma: 50,
          },
          carbohydrates: {
            in: 1.9,
            fromNorma: 1.36,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Яйца курины,Яйца перепелиные, соль, сахар, уксус,масло растительное, масло оливковое, горчица',
          },
          description:
            'Калорийность на 314.5 гр. — 5 кКал. Жиры — 33.5 г. Белки — 1.4 г. Углеводы — 1.9 г. В 50 г. Майонеза содержатся 1.52% суточной нормы белка, жиров — 50% и углеводов — 1.36%.',
        },
        ketchup: {
          title: 'Кетчуп',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 50,
          calories: 50.5,
          proteins: {
            in: 0.5,
            fromNorma: 0.54,
          },
          fat: {
            in: 0.1,
            fromNorma: 0.15,
          },
          carbohydrates: {
            in: 13.6,
            fromNorma: 9.71,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Томаты свежиые, яблоки, крахмал, уксас, сахар, соль.',
          },
          description:
            'Калорийность на 50.5 гр. — 5 кКал. Жиры — 0.1 г. Белки — 0.5 г. Углеводы — 13.6 г. В 50 г. Кетчупа содержатся 0.54% суточной нормы белка, жиров — 0.15% и углеводов — 9.71%.',
        },
        mustard: {
          title: 'Горчица',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 50,
          calories: 71.5,
          proteins: {
            in: 5,
            fromNorma: 5.43,
          },
          fat: {
            in: 2.7,
            fromNorma: 4.03,
          },
          carbohydrates: {
            in: 6.4,
            fromNorma: 4.57,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Горчичный порошок, сахар, соль, вода, масло оливковое, уксус.',
          },
          description:
            'Калорийность на 71.5 гр. — 5 кКал. Жиры — 2.7 г. Белки — 5 г. Углеводы — 6.4 г. В 50 г. Кетчупа содержатся 5.43% суточной нормы белка, жиров — 4.03% и углеводов — 4.57%.',
        },
        сesar: {
          title: 'Цезарь',
          quantity: 1,
          price: 50,
          piece: false,
          weight: 50,
          calories: 220,
          proteins: {
            in: 0.5,
            fromNorma: 0.54,
          },
          fat: {
            in: 21.5,
            fromNorma: 32.09,
          },
          carbohydrates: {
            in: 6,
            fromNorma: 4.29,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Яйца куриные, анчоусы, сыр пармезан, перец белый, соль, сахар, уксус, масло оливковое, масло ростительное, чеснок.',
          },
          description:
            'Калорийность на 220 гр. — 0.5 кКал. Жиры — 21.5 г. Белки — 5 г. Углеводы — 6 г. В 50 г. Соус Цезарь содержатся 0.54% суточной нормы белка, жиров — 32.09% и углеводов — 4.29%.',
        },
        bbq: {
          title: 'BBQ',
          quantity: 1,
          price: 50,
          piece: false,
          weight: 50,
          calories: 60,
          proteins: {
            in: 0.8,
            fromNorma: 0.87,
          },
          fat: {
            in: 0.1,
            fromNorma: 0.15,
          },
          carbohydrates: {
            in: 14.5,
            fromNorma: 10.36,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Ананас, томаты в собственном соку, соус тобаско, соль, сахар, уксус, томатная паста, томатный сок.',
          },
          description:
            'Калорийность на 60 гр. — 0.8 кКал. Жиры — 0.1 г. Белки — 5 г. Углеводы — 14.5 г. В 50 г. Соус BBQ содержатся 0.87% суточной нормы белка, жиров — 0.15% и углеводов — 10.36%.',
        },
      },
      tomato: {
        simple: {
          title: 'Томаты',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 30,
          calories: 7.2,
          proteins: {
            in: 0.3,
            fromNorma: 0.33,
          },
          fat: {
            in: 0.1,
            fromNorma: 0.15,
          },
          carbohydrates: {
            in: 1.1,
            fromNorma: 0.79,
          },
          warning: false,
          composition: {
            text: 'Томаты свежие',
          },
          description:
            'Калорийность на 30 гр. — 7.2 кКал. Жиры — 0.1 г. Белки — 0.3 г. Углеводы — 1.1 г. В 50 г. Томатах свежих содержатся 0.33% суточной нормы белка, жиров — 0.15% и углеводов — 0.79%.',
        },
        cherry: {
          title: 'Черри',
          quantity: 1,
          price: 50,
          piece: false,
          weight: 30,
          calories: 4.5,
          proteins: {
            in: 0.3,
            fromNorma: 0.33,
          },
          fat: {
            in: 0.6,
            fromNorma: 0.9,
          },
          carbohydrates: {
            in: 1.2,
            fromNorma: 0.86,
          },
          warning: false,
          composition: {
            text: 'Томаты Черри',
          },
          description:
            'Калорийность на 30 гр. — 4.5 кКал. Жиры — 0.6 г. Белки — 0.3 г. Углеводы — 1.2 г. В 50 г. Томатах Черри содержатся 0.33% суточной нормы белка, жиров — 0.9% и углеводов — 0.86%.',
        },
      },
      cucumber: {
        fresh: {
          title: 'Огурец свежий',
          quantity: 1,
          price: 20,
          piece: false,
          weight: 30,
          calories: 4.2,
          warning: false,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.8,
            fromNorma: 0.57,
          },
          composition: {
            text: 'Огурцы свежие',
          },
          description:
            'Калорийность на 30 гр. — 4.2 кКал. Жиры — 0 г. Белки — 0.2 г. Углеводы — 0.8 г. В 50 г. В свежих огурцах содержатся 0.22% суточной нормы белка, жиров — 0% и углеводов — 0.57%.',
        },
        marinated: {
          title: 'Огурец бочковой',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 30,
          calories: 3.3,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.5,
            fromNorma: 0.36,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Огурцы бочковые',
          },
          description:
            'Калорийность на 30 гр. — 3.3 кКал. Жиры — 0 г. Белки — 0.2 г. Углеводы — 0.5 г. В 50 г. В бочковых огурцах содержатся 0.22% суточной нормы белка, жиров — 0% и углеводов — 0.36%.',
        },
      },
      olives: {
        black: {
          title: 'Маслины',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 20,
          calories: 29,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 3.1,
            fromNorma: 4.63,
          },
          carbohydrates: {
            in: 0.7,
            fromNorma: 0.35,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Оливки',
          },
          description:
            'Калорийность на 20 гр. — 29 кКал. Жиры — 3.1 г. Белки — 0.2 г. Углеводы — 0.7 г. В 50 г. В маслинах содержатся 0.22% суточной нормы белка, жиров — 4.63% и углеводов — 0.35%.',
        },
        white: {
          title: 'Оливки',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 20,
          calories: 29,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 3.1,
            fromNorma: 4.63,
          },
          carbohydrates: {
            in: 0.7,
            fromNorma: 0.35,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Оливки',
          },
          description:
            'Калорийность на 20 гр. — 29 кКал. Жиры — 3.1 г. Белки — 0.2 г. Углеводы — 0.7 г. В 50 г. В оливках содержатся 0.22% суточной нормы белка, жиров — 4.63% и углеводов — 0.35%.',
        },
        chupadedos: {
          title: 'Оливки Сhupadedos',
          quantity: 1,
          price: 60,
          piece: false,
          weight: 20,
          calories: 29,
          proteins: {
            in: 0.2,
            fromNorma: 0.22,
          },
          fat: {
            in: 3.1,
            fromNorma: 4.63,
          },
          carbohydrates: {
            in: 0.7,
            fromNorma: 0.35,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Оливки',
          },
          description:
            'Калорийность на 20 гр. — 29 кКал. Жиры — 3.1 г. Белки — 0.2 г. Углеводы — 0.7 г. В 50 г. В оливках Чупадедос содержатся 0.22% суточной нормы белка, жиров — 4.63% и углеводов — 0.35%.',
        },
      },
      onion: {
        fresh: {
          title: 'Лук',
          quantity: 1,
          price: 10,
          piece: false,
          weight: 10,
          calories: 4.1,
          proteins: {
            in: 0.1,
            fromNorma: 0.11,
          },
          fat: {
            in: 0,
            fromNorma: 0,
          },
          carbohydrates: {
            in: 0.3,
            fromNorma: 1.5,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Лук белый',
          },
          description:
            'Калорийность на 10 гр. — 4.1 кКал. Жиры — 0 г. Белки — 0.1 г. Углеводы — 0.3 г. В 50 г. В белом луке содержатся 0.11% суточной нормы белка, жиров — 0% и углеводов — 1.5%.',
        },
      },
      salami: {
        salcico: {
          title: 'Салями Сальсичон',
          quantity: 1,
          price: 50,
          piece: false,
          weight: 30,
          calories: 109.8,
          proteins: {
            in: 5.1,
            fromNorma: 5.54,
          },
          fat: {
            in: 10.2,
            fromNorma: 15.22,
          },
          carbohydrates: {
            in: 0.3,
            fromNorma: 0.21,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Мясо птицы, Говядина,жир говяжий, специи, соль, сахар, перец.',
          },
          description:
            'Калорийность на 30 гр. — 109.8 кКал. Жиры — 10.2 г. Белки — 5.1 г. Углеводы — 0.3 г. В 50 г. В белом луке содержатся 5.54% суточной нормы белка, жиров — 15.22% и углеводов — 0.21%.',
        },
        peperoni: {
          title: 'Салями Пеперони',
          quantity: 1,
          price: 60,
          piece: false,
          weight: 30,
          calories: 13.88,
          proteins: {
            in: 5.78,
            fromNorma: 7.7,
          },
          fat: {
            in: 13.88,
            fromNorma: 16.5,
          },
          carbohydrates: {
            in: 0.35,
            fromNorma: 0.1,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Мясо птицы, Говядина,жир говяжий, специи, соль, сахар, перец чили.',
          },
          description:
            'Калорийность на 30 гр. — 13.88 кКал. Жиры — 13.88 г. Белки — 5.78 г. Углеводы — 0.35 г. В 50 г. В белом луке содержатся 7.7% суточной нормы белка, жиров — 16.5% и углеводов — 0.1%.',
        },
      },
      chickenBreast: {
        smoked: {
          title: 'Капченая куриная грудка',
          quantity: 1,
          price: 50,
          piece: false,
          weight: 30,
          calories: 39,
          proteins: {
            in: 6,
            fromNorma: 6.52,
          },
          fat: {
            in: 1.8,
            fromNorma: 2.69,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Мясо птицы, специи, соль, сахар, перец.',
          },
          description:
            'Калорийность на 30 гр. — 39 кКал. Жиры — 1.8 г. Белки — 6 г. Углеводы — 0 г. В 50 г. В копченой куриной грудке содержатся 6.52% суточной нормы белка, жиров — 2.69% и углеводов — 0%.',
        },
        baked: {
          title: 'Запеченая куриная грудка',
          quantity: 1,
          price: 40,
          piece: false,
          weight: 30,
          calories: 33.9,
          proteins: {
            in: 7.1,
            fromNorma: 7.72,
          },
          fat: {
            in: 0.6,
            fromNorma: 0.9,
          },
          carbohydrates: {
            in: 0.1,
            fromNorma: 0,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Мясо птицы, специи, соль, сахар, перец.',
          },
          description:
            'Калорийность на 30 гр. — 33.9 кКал. Жиры — 0.6 г. Белки — 7.1 г. Углеводы — 0.1 г. В 50 г. В запеченой куриной грудке содержатся 7.72% суточной нормы белка, жиров — 0.9% и углеводов — 0%.',
        },
      },
      beef: {
        roastBeef: {
          title: 'Ростбиф',
          quantity: 1,
          price: 80,
          piece: false,
          weight: 30,
          calories: 55,
          proteins: {
            in: 5.7,
            fromNorma: 6.2,
          },
          fat: {
            in: 3.6,
            fromNorma: 5.37,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Говядина, специи, соль, сахар, перец чили, горчица, соевый соус, чеснок',
          },
          description:
            'Калорийность на 30 гр. — 55 кКал. Жиры — 3.6 г. Белки — 5.7 г. Углеводы — 0 г. В 50 г. В ростбифе содержатся 6.2% суточной нормы белка, жиров — 5.37% и углеводов — 0%.',
        },
      },
      pork: {
        hum: {
          title: 'Ветчина',
          quantity: 1,
          price: 60,
          piece: false,
          weight: 30,
          calories: 99,
          proteins: {
            in: 1.8,
            fromNorma: 1.96,
          },
          fat: {
            in: 9.9,
            fromNorma: 14.78,
          },
          carbohydrates: {
            in: 0.9,
            fromNorma: 0.64,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Свиная шея, специи, соль, сахар, перец чили, соевый соус, чеснок',
          },
          description:
            'Калорийность на 30 гр. — 99 кКал. Жиры — 9.9 г. Белки — 1.8 г. Углеводы — 0.9 г. В 50 г. В ветчине содержатся 1.96% суточной нормы белка, жиров — 14.78% и углеводов — 0.64%.',
        },
      },
      cheese: {
        adam: {
          title: 'Эдам',
          quantity: 1,
          price: 30,
          piece: false,
          weight: 20,
          calories: 52.4,
          proteins: {
            in: 2.7,
            fromNorma: 2.93,
          },
          fat: {
            in: 4.6,
            fromNorma: 6.87,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Молоко, сыворотка, ферменты',
          },
          description:
            'Калорийность на 20 гр. — 52.4 кКал. Жиры — 4.6 г. Белки — 2.7 г. Углеводы — 0 г. В 50 г. В сыре Эдам содержатся 2.93% суточной нормы белка, жиров — 6.87% и углеводов — 0%.',
        },
        bree: {
          title: 'Бри',
          quantity: 1,
          price: 80,
          piece: false,
          weight: 20,
          calories: 52.4,
          proteins: {
            in: 2.7,
            fromNorma: 2.93,
          },
          fat: {
            in: 4.6,
            fromNorma: 6.87,
          },
          carbohydrates: {
            in: 0,
            fromNorma: 0,
          },
          warning: {
            text: 'Содержит алергены',
            icon: 'allergens',
          },
          composition: {
            text: 'Молоко, сыворотка, ферменты',
          },
          description:
            'Калорийность на 20 гр. — 52.4 кКал. Жиры — 4.6 г. Белки — 2.7 г. Углеводы — 0 г. В 50 г. В сыре Бри содержатся 2.93% суточной нормы белка, жиров — 6.87% и углеводов — 0%.',
        },
      },
    },
    foodConstructorPatern: {
      title: '',
      quantity: 0,
      price: 0,
      weight: 0,
      calories: 0,
      proteins: {
        in: 0,
        fromNorma: 0,
      },
      fat: {
        in: 0,
        fromNorma: 0,
      },
      carbohydrates: {
        in: 0,
        fromNorma: 0,
      },
      warning: [],
      composition: {
        text: '',
      },
      description: '',
      bread: {
        title: 'Белый',
        type: 'white',
        quantity: 1,
        price: 30,
      },
      sauce: {
        title: 'Майонез',
        type: 'mayonnaise',
        quantity: 1,
        price: 30,
      },
      salad: {
        title: 'Лоло Россо',
        type: 'loloRosso',
        quantity: 1,
        price: 20,
      },
      salami: {
        type: 'salcico',
        title: 'Салями Сальсичон',
        quantity: 1,
        price: 50,
      },
      cheese: {
        type: 'adam',
        title: 'Эдам',
        quantity: 1,
        price: 30,
      },
    },
    barConstructor: {
      coffe: {
        latte: {
          title: 'Латте',
          quantity: 1,
          price: 180,
          coffe: 8,
          milck: 250,
        },
        latteMakiato: {
          title: 'Латте-Макиато',
          quantity: 1,
          price: 180,
          coffe: 8,
          milck: 250,
        },
        cappuccino: {
          title: 'Капучино',
          quantity: 1,
          price: 150,
          coffe: 8,
          milck: 200,
        },
        espresso: {
          title: 'Эспресо',
          quantity: 1,
          price: 90,
          coffe: 8,
        },
        americano: {
          title: 'Американо',
          quantity: 1,
          price: 90,
          coffe: 8,
        },
        bembelbee: {
          title: 'Бамблби',
          quantity: 1,
          price: 180,
          coffe: 8,
          orangeFrash: 200,
          syrup: 20,
        },
        cream: {
          cow: {
            title: 'Сливки',
            quantity: 1,
            price: 30,
            mil: 50,
          },
          vegetable: {
            title: 'Сливки ростительные',
            quantity: 1,
            price: 80,
            mil: 50,
          },
        },
        milck: {
          cow: {
            title: 'Молоко',
            quantity: 1,
            price: 50,
            mil: 150,
          },
          vegetable: {
            title: 'Альтернативное молоко',
            quantity: 1,
            price: 100,
            mil: 150,
          },
        },
        marshmallows: {
          title: 'Маршмелоу',
          quantity: 1,
          price: 30,
          weight: 10,
        },
      },
      tea: {
        baleck: {
          title: 'Черный',
          quantity: 1,
          price: 180,
          tea: 2,
          mil: 250,
        },
        green: {
          title: 'Зеленый',
          quantity: 1,
          price: 180,
          tea: 2,
          mil: 250,
        },
        white: {
          title: 'Белый',
          quantity: 1,
          price: 180,
          tea: 2,
          mil: 250,
        },
        match: {
          title: 'Матча',
          quantity: 1,
          price: 180,
          tea: 2,
          milck: 250,
        },
        grass: {
          mint: {
            title: 'Мята',
            quantity: 1,
            price: 10,
            weight: 1,
          },
          thyme: {
            title: 'Чабрец',
            quantity: 1,
            price: 10,
            weight: 1,
          },
        },
        fruits: {
          orange: {
            title: 'Апельсин',
            quantity: 1,
            price: 30,
            weight: 50,
          },
          apple: {
            title: 'Яблоко',
            quantity: 1,
            price: 30,
            weight: 50,
          },
          pear: {
            title: 'Груша',
            quantity: 1,
            price: 30,
            weight: 50,
          },
        },
      },
      syrup: {
        title: ['Карамель', 'Ваниль', 'Лесной орех', 'Попкорн'],
        quantity: 1,
        price: 20,
        mil: 20,
      },
    },
    barConstructorPatern: {
      coffe: {
        coffe: {
          type: 'espresso',
          quantity: 1,
          price: 20,
        },
        syrup: {
          title: 'Карамель',
          quantity: 1,
          price: 20,
        },
      },
      tea: {
        tea: {
          title: 'Черный',
          quantity: 1,
          price: 180,
        },
      },
    },
  },
  mutations: {
    DELETE_ALL_IN_ORDER(state) {
      state.quickOrder = [];
      state.total.totalPrice = 0;
      state.total.loyalty = [];
    },
    SET_QUICK_ORDER(state, data) {
      state.quickOrder = data;
    },
    SET_FOOD_NAV_MENU_SELECTION: (state, payload) => {
      state.foodNavMenuSelection = payload.id;
    },
    SHOW_NAV_MENU: (state, payload) => {
      state.navMenuVisible = !!payload;
    },
    SET_LOYALTY(state, data) {
      state.quickOrder.loyalty.push(data);
    },
    GET_TOTAL_SUM(state, total) {
      state.total.totalPrice = total;
    },
  },
  actions: {
    GET_TOTAL_SUM({ commit, state }) {
      const basket = state.quickOrder;
      let total = 0;
      basket.forEach(el => {
        total = total + el.price * el.quantity;
        return total;
      });
      commit('GET_TOTAL_SUM', total);
    },
    DELETE_ALL_IN_ORDER_ACTION({ commit }) {
      commit('DELETE_ALL_IN_ORDER');
    },
    ADD_LOYALTY({ commit, state }, payload) {
      const exist = state.quickOrder.loyalty.find(el => el.guid === payload);
      if (exist) {
        commit('SET_LOYALTY', exist);
      }
    },
    ADD_DISH({ state, commit, dispatch }, payload) {
      let order = [...state.quickOrder];
      let find = order.find(d => d.guid == payload.dish.guid);
      if (find) {
        find.quantity += payload.inc;
      } else {
        payload.dish.quantity += payload.inc;
        order.push(payload.dish);
      }
      order.forEach((o, idx) => {
        if (o.quantity === 0) {
          order.splice(idx, 1);
        }
      });
      commit('SET_QUICK_ORDER', order);
      dispatch('GET_TOTAL_SUM');
    },
    SET_FOOD_NAV_MENU_SELECTION: ({ commit }, payload) => {
      commit('SET_FOOD_NAV_MENU_SELECTION', payload);
    },
    SHOW_NAV_MENU: ({ commit }, payload) => {
      commit('SHOW_NAV_MENU', payload);
    },
    addDish({ state, commit }, payload) {
      let order = [...state.quickOrder];
      let find = order.find(d => d.title == payload.dish.title);
      if (find) {
        find.amount += payload.inc;
        // if (find.amount == 0) {
        //   order = order.find(d => d.title != payload.dish.title);
        //   order = order ? order : [];
        // }
      } else {
        order.push({ title: payload.dish.title, price: payload.dish.price, amount: 1 });
      }
      commit('SET_QUICK_ORDER', order);
    },
  },
  getters: {
    TOTAL_SUM: state => {
      return state.total;
    },
    QUICK_ORDER: state => {
      return state.quickOrder;
    },
    FOOD_CONSTRUCTOR: state => {
      return state.foodConstructor;
    },
    BAR_CONSTRUCTOR: state => {
      return state.barConstructor;
    },
    FOOD_CONSTRUCTOR_PATERN: state => {
      return state.foodConstructorPatern;
    },
    BAR_CONSTRUCTOR_PATERN: state => {
      return state.barConstructorPatern;
    },
    ACCESS: state => {
      return state.access;
    },
    MENU: state => {
      return state.menu;
    },
    BAR_MENU: state => {
      return state.barMenu;
    },
    FOOD_NAV_MENU: state => {
      return state.foodNavMenu;
    },
    FOOD_NAV_MENU_SELECTION: state => {
      return state.foodNavMenuSelection;
    },
    NAV_MENU_VISIBLE: state => {
      return state.navMenuVisible;
    },
  },
});
