import * as Yup from 'yup';

const ONE_LOWERCASE_LETTER_REGEXP = new RegExp('[a-z]');
const ONE_UPPERCASE_LETTER_REGEXP = new RegExp('[A-Z]');
const ONE_NUMBER_REGEXP = new RegExp('\\d');
const ONE_SPECIAL_SYMBOL_REGEXP = new RegExp('\\W');

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters')
    .matches(ONE_UPPERCASE_LETTER_REGEXP, 'Password must contain at least one uppercase character')
    .matches(ONE_UPPERCASE_LETTER_REGEXP, 'Password must contain at least one lowercase character')
    .matches(ONE_NUMBER_REGEXP, 'Password must contain at least one number')
    .matches(ONE_SPECIAL_SYMBOL_REGEXP, 'Password must contain at least one special symbol'),
});
