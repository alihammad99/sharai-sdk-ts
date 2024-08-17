(function(s,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("axios")):typeof define=="function"&&define.amd?define(["exports","axios"],r):(s=typeof globalThis<"u"?globalThis:s||self,r(s["sharai-sdk-ts"]={},s.axios))})(this,function(s,r){"use strict";const c={store_id:null,token:null,"Content-Type":"application/json"},u=({store_id:e,token:t})=>{e&&(c.store_id=e),t&&(c.token=t)},n="https://sharai-server.onrender.com",y=async e=>{try{await r.delete(`${n}/api/product/delete-one?id=${e}`,{headers:c})}catch(t){console.error(t)}},h=async(e,t,o=!0,a=!1)=>{const i=`${n}/api/product/get-by-category?id=${e}&active=${o}&similar=${a}`;try{const l=await r.get(i,{headers:c}),{data:d}=await l.data;return{data:d}}catch(l){console.error(l)}},g=async(e,t=!0)=>{try{const o=await r.post(`${n}/api/product/post-many?active=${t}`,{products:[...e]},{headers:c}),{result:a}=o.data;return a}catch(o){console.error("There was a problem posting the data:",o)}},$=e=>{const{id:t,category:o,products:a,active:i}=e;return t?p(e):a&&(a==null?void 0:a.length)>0?g(a,i):o?h(o):p(e)},p=async e=>{const{sort:t,page:o,limit:a,active:i}=e,l=t?`${n}/api/product/get-all?sort=${t}&page=${o}&limit=${a}&active=${i}`:`${n}/api/product/get-all?page=${o}&limit=${a}&active=${i}`;try{const d=await r.get(l,{headers:c}),{data:P}=await d.data;return{data:P}}catch(d){console.error(d)}},v={DELETE:y,GET:$,POST:async e=>{try{const t=await r.post(`${n}/api/products/post-one`,{...e},{headers:c}),{result:o}=t.data;return o}catch(t){console.error("There was a problem posting the data:",t)}},SEARCH:async e=>{try{return(await r.get(`${n}/api/product/search?phrase=${e}`,{headers:c})).data.result}catch(t){console.error("There was a problem posting the data:",t)}}},f={DELETE:async e=>{try{await r.delete(`${n}/api/invoice/delete-one?id=${e}`,{headers:c})}catch(t){console.error(t)}},GET:async(e=1)=>{try{const t=await r.get(`${n}/api/invoice/get-all?page=${e}`,{headers:c}),{data:o}=await t.data;return{data:o}}catch(t){console.error(t)}},POST:async e=>{if(e)try{return await r.post(`${n}/api/orders/post-one`,e,{headers:c}),!0}catch(t){return console.error("There was a problem posting the data:",t),!1}},SEARCH:async e=>{try{return(await r.get(`${n}/api/invoice/search?phrase=${e}`,{headers:c})).data.result}catch(t){console.error("There was a problem posting the data:",t)}}},w={DELETE:async e=>{try{await r.delete(`${n}/api/category/delete-one?id=${e}`)}catch(t){console.error(t)}},GET:async()=>{try{const e=await r.get(`${n}/api/category/get-all`),{data:t}=await e.data;return{data:t}}catch(e){console.error(e)}},POST:async e=>{if(e)try{await r.post(`${n}/api/category/post-one`,e,{headers:c})}catch(t){console.error("There was a problem posting the data:",t)}}};s.Category=w,s.Invoice=f,s.Product=v,s.config=u,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
