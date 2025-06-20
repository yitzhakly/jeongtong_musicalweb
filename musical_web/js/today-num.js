document.addEventListener('DOMContentLoaded', () => {
  
    /*랜덤 */
    const pick = TODAY_NUM_DATA[Math.floor(Math.random() * TODAY_NUM_DATA.length)];
  
    /* 뮤지컬 넘버명 */
    document.getElementById('title').textContent =
      `${pick['뮤지컬명']} - 「${pick['넘버명']}」`;
    document.getElementById('lyric').textContent =
      `“${pick['가사한구절']}”`;
  
    /*유튜브주소 변환 */
    function toEmbed(url) {
      if (url.includes('youtu.be/')) {
        return 'https://www.youtube.com/embed/' + url.split('youtu.be/')[1].split('?')[0];
      }
      if (url.includes('watch?v=')) {
        return 'https://www.youtube.com/embed/' + url.split('watch?v=')[1].split('&')[0];
      }
      return url;
    }
    const embedURL = toEmbed(pick['유튜브링크']);
  
    /* 영상 넣기*/
    document.getElementById('video-wrap').innerHTML =
      `<iframe src="${embedURL}?rel=0"
               frameborder="0"
               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
               style="position:absolute;inset:0;width:100%;height:100%;"></iframe>`;
  });
  
  