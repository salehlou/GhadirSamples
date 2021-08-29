import { TreeData } from "../_models/tree-data.model";
const saeedicon = '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'
export const FLAT_TREE_DATA: BaseResponse<TreeData[]> = {
   success: true,
   message: '',
   data: [
      {
         read: false,
         iconId: 'data:image/png;base64,' + saeedicon,
         id: 1,
         name: "رابط کاربری",
         parentId: 0,
         write: false
      },
      {
         read: false,
         iconId: 'data:image/png;base64,' + saeedicon,
         id: 2,
         name: "اطلاعات پایه",
         parentId: 1,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 3,
         name: "زیر سیستم ها",
         parentId: 1,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 4,
         name: "سطوح دسترسی و کاربران",
         parentId: 1,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 5,
         name: "تنظیمات",
         parentId: 1,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 6,
         name: "گزارشات",
         parentId: 1,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 7,
         name: "تنظیمات کاربری",
         parentId: 1,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 8,
         name: "بخش ها",
         parentId: 2,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 9,
         name: "پرسنل",
         parentId: 2,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 10,
         name: "ایستگاه های کنترل",
         parentId: 2,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 11,
         name: "دستگاه ها",
         parentId: 2,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 12,
         name: "اکسس کنترل",
         parentId: 3,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 13,
         name: "ارباب رجوع",
         parentId: 3,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 14,
         name: "صندوق امانات",
         parentId: 3,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 15,
         name: "پارکینگ",
         parentId: 3,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 16,
         name: "مدیریت باشگاه های ورزشی",
         parentId: 3,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 17,
         name: "گروه های دسترسی",
         parentId: 12,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 18,
         name: "درب ها",
         parentId: 12,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 19,
         name: "آسانسور ها",
         parentId: 12,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 20,
         name: "مراجعین",
         parentId: 13,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 21,
         name: "آفیش",
         parentId: 13,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 22,
         name: "اقلام همراه",
         parentId: 13,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 23,
         name: "لیست سیاه",
         parentId: 13,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 24,
         name: "کاربران",
         parentId: 4,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 25,
         name: "نقش ها",
         parentId: 4,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 26,
         name: "سرور",
         parentId: 5,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 27,
         name: "سایر نرم افزار ها",
         parentId: 5,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 28,
         name: "پایه",
         parentId: 6,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 29,
         name: "اکسس کنترل",
         parentId: 6,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 30,
         name: "ارباب رجوع",
         parentId: 6,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 31,
         name: "صندوق امانات",
         parentId: 6,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 32,
         name: "پارکینگ",
         parentId: 6,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 33,
         name: "کاربران",
         parentId: 6,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 34,
         name: "تغییر کلمه عبور",
         parentId: 7,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 35,
         name: "شخصی سازی",
         parentId: 7,
         write: false
      },
      {
         read: false,
         iconId: '',
         id: 36,
         name: "جریان کاری",
         parentId: 13,
         write: false
      }
   ],

};

export interface BaseResponse<T> {
   success: boolean;
   message: string;
   data: T;
}