import { action } from 'typesafe-actions'

import * as ACTION_TYPES from './constants';

export const login = () => action(ACTION_TYPES.LOGIN);
