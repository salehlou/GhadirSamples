import { FoodNode } from "../_models/food-node.model";


export const NESTED_TREE_DATA: FoodNode[] =
   [
      {
         checked: true,
         iconId: '',
         id: 1,
         name: "رابط کاربری",
         level: 0, write: true,
         children: [
            {
               checked: true,
               iconId: '',
               id: 2,
               name: "اطلاعات پایه",
               level: 0, write: true,
               children: [

                  {
                     checked: true,
                     iconId: '',
                     id: 9,
                     name: "پرسنل",
                     children: [],
                     level: 0, write: true
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 10,
                     name: "ایستگاه های کنترل",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: true,
                     iconId: '',
                     id: 11,
                     name: "دستگاه ها",
                     children: [],
                     level: 0, write: false
                  },

               ]
            },
            {
               checked: true,
               iconId: '',
               id: 3,
               name: "زیر سیستم ها",
               level: 0, write: true,
               children: [
                  {
                     checked: false,
                     iconId: '',
                     id: 12,
                     name: "اکسس کنترل",
                     children: [
                        {
                           checked: true,
                           iconId: '',
                           id: 17,
                           name: "گروه های دسترسی",
                           children: [],
                           level: 0, write: false
                        },
                        {
                           checked: false,
                           iconId: '',
                           id: 18,
                           name: "درب ها",
                           children: [],
                           level: 0, write: false
                        },
                        {
                           checked: false,
                           iconId: '',
                           id: 19,
                           name: "آسانسور ها",
                           children: [],
                           level: 0, write: false
                        },
                     ],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 13,
                     name: "ارباب رجوع",
                     children: [
                        {
                           checked: true,
                           iconId: '',
                           id: 20,
                           name: "مراجعین",
                           children: [],
                           level: 0, write: false
                        },
                        {
                           checked: true,
                           iconId: '',
                           id: 21,
                           name: "آفیش",
                           children: [],
                           level: 0, write: false
                        },
                        {
                           checked: true,
                           iconId: '',
                           id: 22,
                           name: "اقلام همراه",
                           children: [],
                           level: 0, write: false
                        },
                        {
                           checked: false,
                           iconId: '',
                           id: 23,
                           name: "لیست سیاه",
                           children: [],
                           level: 0, write: false
                        },
                        {
                           checked: false,
                           iconId: '',
                           id: 36,
                           name: "جریان کاری",
                           children: [],
                           level: 0, write: false
                        }
                     ],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 14,
                     name: "صندوق امانات",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 15,
                     name: "پارکینگ",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: true,
                     iconId: '',
                     id: 16,
                     name: "مدیریت باشگاه های ورزشی",
                     children: [],
                     level: 0, write: false
                  },
               ],
            },
            {
               checked: false,
               iconId: '',
               id: 4,
               name: "سطوح دسترسی و کاربران",
               level: 0, write: false,
               children: [
                  {
                     checked: false,
                     iconId: '',
                     id: 24,
                     name: "کاربران",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: true,
                     iconId: '',
                     id: 25,
                     name: "نقش ها",
                     children: [],
                     level: 0, write: false
                  },
               ],
            },
            {
               checked: true,
               iconId: '',
               id: 5,
               name: "تنظیمات",
               level: 0, write: false,
               children: [
                  {
                     checked: true,
                     iconId: '',
                     id: 26,
                     name: "سرور",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 27,
                     name: "سایر نرم افزار ها",
                     children: [],
                     level: 0, write: true
                  },
               ],
            },
            {
               checked: false,
               iconId: '',
               id: 6,
               name: "گزارشات",
               level: 0, write: true,
               children: [
                  {
                     checked: false,
                     iconId: '',
                     id: 28,
                     name: "پایه",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 29,
                     name: "اکسس کنترل",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 30,
                     name: "ارباب رجوع",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 31,
                     name: "صندوق امانات",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 32,
                     name: "پارکینگ",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 33,
                     name: "کاربران",
                     children: [],
                     level: 0, write: false
                  },
               ],
            },
            {
               checked: false,
               iconId: '',
               id: 7,
               name: "تنظیمات کاربری",
               level: 0, write: false,
               children: [
                  {
                     checked: false,
                     iconId: '',
                     id: 34,
                     name: "تغییر کلمه عبور",
                     children: [],
                     level: 0, write: false
                  },
                  {
                     checked: false,
                     iconId: '',
                     id: 35,
                     name: "شخصی سازی",
                     children: [],
                     level: 0, write: false
                  },
               ],
            },
         ]
      },

   ];


