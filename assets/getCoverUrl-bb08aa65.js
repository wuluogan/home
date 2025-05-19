const t=(t,p=null)=>{if(!t)return"/img/music/pic/default.png";const e=p?`?param=${p}y${p}`:"",n=t.replace(/^http:/,"https:");return n.endsWith(".jpg")?n+e:n};export{t as g};
