import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('ناو پێویستە بۆ پڕکردنەوە.'),
  tel: Yup.number()
    .required('ژمارەی مۆبایل پێویستە بۆ پڕکردنەوە.')
    .positive('ژمارەی مۆبایل پێویستە بۆ پڕکردنەوە.')
    .integer('ژمارەی مۆبایل پێویستە بۆ پڕکردنەوە.'),
  gender: Yup.string().required('ڕەگەز پێویستە بۆ پڕکردنەوە.'),
  bloodtype: Yup.string()
    .matches(/^(A|B|AB|O)[+-]$/)
    .required('جۆری خوێن پێویستە بۆ پڕکردنەوە'),
  location: Yup.string().required('شارەکەت پێویستە بۆ پڕکردنەوە.'),
  age: Yup.number()
    .required('تەمەنت پێویستە بۆ پڕکردنەوە.')
    .positive('تەمەنت پێویستە بۆ پڕکردنەوە.')
    .integer('تەمەنت پێویستە بۆ پڕکردنەوە.').min(17, "دەبێت تەمەنت ١٧ ساڵ یان زیاتر بێت").max(50, "دەبێت تەمەنت ٥٠ ساڵ یان کەمتر بێت"),
});

