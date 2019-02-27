import { FormikHandlers } from 'formik';

export interface IFormField {
  onChange: FormikHandlers['handleChange'];
  value: any;
  name: string;
};
