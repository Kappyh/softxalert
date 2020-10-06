import html from '../templates/alert.html';
import { Options } from '../types/options';

export const softAlert = (options: Options) => {
  let body: HTMLBodyElement = document.querySelector('body');
  body.innerHTML += html;
  const title: HTMLDivElement = document.querySelector('#soft-alert-title');
  const message: HTMLDivElement = document.querySelector('#soft-alert-message');
  const actions: HTMLDivElement = document.querySelector('#soft-alert-actions');
  title.innerText += options.title;
  message.innerText += options.message;
  actions.style.display = options.actions ? 'block' : 'none';
};
