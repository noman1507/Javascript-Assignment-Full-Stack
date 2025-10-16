'use strict';
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('formSearch');
  form.addEventListener('submit',async ev=>{
    ev.preventDefault();
    const name=document.getElementById('tvName').value.trim();
    if(!name){console.log('Please type a show name');return;}
    const endpoint=`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(name)}`;
    try{
      const reply=await fetch(endpoint);
      const result=await reply.json();
      console.log(result);
    }catch(err){console.error('Fetch failed',err);}
  });
});