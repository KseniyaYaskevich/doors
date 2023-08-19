import '../../src/styles/style.scss';
import '../../node_modules/normalize.css';

import { menu } from './modules/menu';
import { popupCall } from './modules/popupCall';
import { phoneMask } from './modules/phoneMask';
import { sendForm } from './modules/sendForm';

import { categoriesTabs } from './modules/categoriesTabs';
import { renderCards } from './modules/renderCards';
import { addItem } from './modules/addItem';
import { changeCartItem } from './modules/changeCartItem';

menu();
popupCall();
phoneMask();
sendForm();

categoriesTabs();
renderCards();
addItem();
changeCartItem();
