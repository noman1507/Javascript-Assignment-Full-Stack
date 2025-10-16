'use strict';
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('showForm');
  const container=document.getElementById('list');
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    container.innerHTML='';
    const text=document.getElementById('searchText').value.trim();
    if(!text){container.textContent='Enter a title first';return;}
    const api=`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(text)}`;
    try{
      const res=await fetch(api);
      const shows=await res.json();
      if(shows.length===0){container.textContent='No results found';return;}
      for(const item of shows){
        const info=item.show;
        const card=document.createElement('article');
        const title=document.createElement('h2');
        title.textContent=info.name;
        const link=document.createElement('a');
        link.href=info.url;
        link.target='_blank';
        link.textContent='More info';
        const img=document.createElement('img');
        img.src=info.image?.medium||'';
        img.alt=info.name;
        const details=document.createElement('div');
        details.innerHTML=info.summary||'Summary missing';
        card.append(title,link,img,details);
        container.append(card);
      }
    }catch(e){
      container.textContent='Unable to load data';
    }
  });
});