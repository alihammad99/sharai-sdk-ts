(function(s,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("axios")):typeof define=="function"&&define.amd?define(["exports","axios"],o):(s=typeof globalThis<"u"?globalThis:s||self,o(s["sharai-sdk-ts"]={},s.axios))})(this,function(s,o){"use strict";const c={store_id:null,token:null,"Content-Type":"application/json"},u=({store_id:e,token:t})=>{e&&(c.store_id=e),t&&(c.token=t)},n="https://sharai-server.onrender.com",p=async e=>{try{await o.delete(`${n}/api/product/${e}`,{headers:c})}catch(t){console.error(t)}},y=async(e,t,r=!0,a=!1)=>{const l=`${n}/api/product/get-by-category?id=${e}&active=${r}&similar=${a}`;try{const d=await o.get(l,{headers:c}),{data:v}=await d;return v}catch(d){console.error(d)}},h=async(e,t=!0)=>{try{const r=await o.post(`${n}/api/product/post-many?active=${t}`,{products:[...e]},{headers:c}),{result:a}=r.data;return a}catch(r){console.error("There was a problem posting the data:",r)}},g=e=>{if(e){const{id:t,category:r,products:a,active:l}=e;return t?i():a&&(a==null?void 0:a.length)>0?h(a,l):r?y(r):i()}else return i()},i=async e=>{const t=`${n}/api/product`;try{const r=await o.get(t,{headers:c}),{data:a}=await r;return a}catch(r){console.error(r)}},f={DELETE:p,GET:g,POST:async e=>{try{const t=await o.post(`${n}/api/products`,{...e},{headers:c}),{id:r}=t.data;return r}catch(t){console.error("There was a problem posting the data:",t)}},SEARCH:async e=>{try{return(await o.get(`${n}/api/product/search?phrase=${e}`,{headers:c})).data.result}catch(t){console.error("There was a problem posting the data:",t)}}},w={DELETE:async e=>{try{await o.delete(`${n}/api/order/${e}`,{headers:c})}catch(t){console.error(t)}},GET:async e=>{try{const t=await o.get(`${n}/api/order?page=${e==null?void 0:e.page}`,{headers:c}),{data:r}=await t;return r}catch(t){console.error(t)}},POST:async e=>{if(e)try{return await o.post(`${n}/api/order`,e,{headers:c}),!0}catch(t){return console.error("There was a problem posting the data:",t),!1}},SEARCH:async e=>{try{return(await o.get(`${n}/api/invoice/search?phrase=${e}`,{headers:c})).data.result}catch(t){console.error("There was a problem posting the data:",t)}}},$={DELETE:async e=>{try{await o.delete(`${n}/api/category/${e}`,{headers:c})}catch(t){console.error(t)}},GET:async()=>{try{const e=await o.get(`${n}/api/category`,{headers:c}),{data:t}=await e;return t}catch(e){console.error(e)}},POST:async e=>{if(e)try{await o.post(`${n}/api/category`,e,{headers:c})}catch(t){console.error("There was a problem posting the data:",t)}}};s.Category=$,s.Invoice=w,s.Product=f,s.config=u,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
