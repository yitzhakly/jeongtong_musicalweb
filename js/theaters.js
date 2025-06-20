const list     = document.getElementById('theater-list');
const input    = document.getElementById('t-search');
const modal    = document.getElementById('modal');
const mName    = document.getElementById('m-name');
const mAddr    = document.getElementById('m-addr');
const mHome    = document.getElementById('m-home');
const mImg     = document.getElementById('m-img');
const mNote    = document.getElementById('m-note');
const btnClose = document.getElementById('modal-close');

/*목록*/
function render(filter = '') {
  list.innerHTML = '';
  THEATERS
    .filter(t => t.name.includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name, 'ko'))
    .forEach(t => {
      const li = document.createElement('li');
      li.className = 't-item';
      li.textContent = '▶ ' + t.name;
      li.addEventListener('click', () => openModal(t));
      list.appendChild(li);
    });
}

/*모달*/
function openModal(t) {
  mName.textContent = t.name;
  mAddr.textContent = '📍 ' + t.addr;
  mHome.href        = t.home;
  mImg.src          = t.img;
  mImg.alt          = t.name + ' 좌석배치도';
  mNote.textContent = t.note;
  modal.classList.add('show');
}
function closeModal() { modal.classList.remove('show'); }

/* 모달닫기*/
btnClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
input.addEventListener('input', e => render(e.target.value.trim()));

render();
