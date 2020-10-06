// import html from '../templates/alert.html';
import { Options } from '../types/options';

export const softAlert = (options: Options) => {
  let body: HTMLBodyElement = document.querySelector('body');
  body.innerHTML += `
  <style scoped>
    @import url('../templates/css/style.css');
  </style>
  <div
  class="soft-alert"
  style="
    background-color: burlywood;
    border: 1px solid black;
    position: fixed;
    height: 300px;
    width: 300px;
    top: 0;
    margin: 0 auto;
  "
  id="soft-alert"
  >
    <div class="soft-alert-title" id="soft-alert-title"></div>
    <div class="soft-alert-message" id="soft-alert-message"></div>
    <div class="soft-alert-actions" id="soft-alert-actions">
      <button>OK</button>
    </div>
  </div>  
  `;
  const title: HTMLDivElement = document.querySelector('#soft-alert-title');
  const message: HTMLDivElement = document.querySelector('#soft-alert-message');
  const actions: HTMLDivElement = document.querySelector('#soft-alert-actions');
  title.innerText += options.title;
  message.innerText += options.message;
  actions.style.display = options.actions ? 'block' : 'none';
};
