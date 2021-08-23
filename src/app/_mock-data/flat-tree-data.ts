import { TreeData } from "../_models/tree-data.model";

export const FLAT_TREE_DATA : BaseResponse<TreeData[]> = {
   success: true,
   message: '',
   data: [
      {
         checked: false,
         iconId: '',
         id: 1,
         name: "رابط کاربری",
         parentId: 0,
         write: false
      },
      {
         checked: false,
         iconId: '',
         id: 2,
         name: "اطلاعات پایه",
         parentId: 1,
         write: false
      },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 3,
      //    name: "زیر سیستم ها",
      //    parentId: 1,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 4,
      //    name: "سطوح دسترسی و کاربران",
      //    parentId: 1,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 5,
      //    name: "تنظیمات",
      //    parentId: 1,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 6,
      //    name: "گزارشات",
      //    parentId: 1,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 7,
      //    name: "تنظیمات کاربری",
      //    parentId: 1,
      //    write: false
      // },
      {
         checked: true,
         iconId: '',
         id: 8,
         name: "بخش ها",
         parentId: 2,
         write: false
      },
      {
         checked: false,
         iconId: '',
         id: 9,
         name: "پرسنل",
         parentId: 2,
         write: false
      },
      {
         checked: true,
         iconId: '',
         id: 10,
         name: "ایستگاه های کنترل",
         parentId: 2,
         write: true
      },
      {
         checked: false,
         iconId: '',
         id: 11,
         name: "دستگاه ها",
         parentId: 2,
         write: false
      },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 12,
      //    name: "اکسس کنترل",
      //    parentId: 3,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 13,
      //    name: "ارباب رجوع",
      //    parentId: 3,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 14,
      //    name: "صندوق امانات",
      //    parentId: 3,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 15,
      //    name: "پارکینگ",
      //    parentId: 3,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 16,
      //    name: "مدیریت باشگاه های ورزشی",
      //    parentId: 3,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 17,
      //    name: "گروه های دسترسی",
      //    parentId: 12,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 18,
      //    name: "درب ها",
      //    parentId: 12,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 19,
      //    name: "آسانسور ها",
      //    parentId: 12,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 20,
      //    name: "مراجعین",
      //    parentId: 13,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 21,
      //    name: "آفیش",
      //    parentId: 13,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 22,
      //    name: "اقلام همراه",
      //    parentId: 13,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 23,
      //    name: "لیست سیاه",
      //    parentId: 13,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 24,
      //    name: "کاربران",
      //    parentId: 4,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 25,
      //    name: "نقش ها",
      //    parentId: 4,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 26,
      //    name: "سرور",
      //    parentId: 5,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 27,
      //    name: "سایر نرم افزار ها",
      //    parentId: 5,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 28,
      //    name: "پایه",
      //    parentId: 6,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 29,
      //    name: "اکسس کنترل",
      //    parentId: 6,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 30,
      //    name: "ارباب رجوع",
      //    parentId: 6,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 31,
      //    name: "صندوق امانات",
      //    parentId: 6,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 32,
      //    name: "پارکینگ",
      //    parentId: 6,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 33,
      //    name: "کاربران",
      //    parentId: 6,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 34,
      //    name: "تغییر کلمه عبور",
      //    parentId: 7,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 35,
      //    name: "شخصی سازی",
      //    parentId: 7,
      //    write: false
      // },
      // {
      //    checked: false,
      //    iconId: '',
      //    id: 36,
      //    name: "جریان کاری",
      //    parentId: 13,
      //    write: false
      // }
   ],

};

export interface BaseResponse<T> {
   success: boolean;
   message: string;
   data: T;
}