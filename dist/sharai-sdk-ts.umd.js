(function(s,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("axios")):typeof define=="function"&&define.amd?define(["exports","axios"],o):(s=typeof globalThis<"u"?globalThis:s||self,o(s["sharai-sdk-ts"]={},s.axios))})(this,function(s,o){"use strict";const n={store_id:null,token:null,"Content-Type":"application/json"},d=({store_id:t,token:e})=>{t&&(n.store_id=t),e&&(n.token=e)},c="https://sharai-server.onrender.com",p=async t=>{try{await o.delete(`${c}/api/product/${t}`,{headers:n})}catch(e){console.error(e)}},y=async(t,e,r=!0,a=!1)=>{const l=`${c}/api/product/get-by-category?id=${t}&active=${r}&similar=${a}`;try{const u=await o.get(l,{headers:n}),{data:v}=await u;return{data:v}}catch(u){console.error(u)}},h=async(t,e=!0)=>{try{const r=await o.post(`${c}/api/product/post-many?active=${e}`,{products:[...t]},{headers:n}),{result:a}=r.data;return a}catch(r){console.error("There was a problem posting the data:",r)}},g=t=>{if(t){const{id:e,category:r,products:a,active:l}=t;return e?i():a&&(a==null?void 0:a.length)>0?h(a,l):r?y(r):i()}else return i()},i=async t=>{const e=`${c}/api/product`;try{const r=await o.get(e,{headers:n}),{data:a}=await r;return a}catch(r){console.error(r)}},f={DELETE:p,GET:g,POST:async t=>{try{const e=await o.post(`${c}/api/products`,{...t},{headers:n}),{result:r}=e.data;return r}catch(e){console.error("There was a problem posting the data:",e)}},SEARCH:async t=>{try{return(await o.get(`${c}/api/product/search?phrase=${t}`,{headers:n})).data.result}catch(e){console.error("There was a problem posting the data:",e)}}},w={DELETE:async t=>{try{await o.delete(`${c}/api/order/${t}`,{headers:n})}catch(e){console.error(e)}},GET:async(t=1)=>{try{const e=await o.get(`${c}/api/order?page=${t}`,{headers:n}),{data:r}=await e;return{data:r}}catch(e){console.error(e)}},POST:async t=>{if(t)try{return await o.post(`${c}/api/order`,t,{headers:n}),!0}catch(e){return console.error("There was a problem posting the data:",e),!1}},SEARCH:async t=>{try{return(await o.get(`${c}/api/invoice/search?phrase=${t}`,{headers:n})).data.result}catch(e){console.error("There was a problem posting the data:",e)}}},$={DELETE:async t=>{try{await o.delete(`${c}/api/category/${t}`,{headers:n})}catch(e){console.error(e)}},GET:async()=>{try{const t=await o.get(`${c}/api/category`,{headers:n}),{data:e}=await t;return{data:e}}catch(t){console.error(t)}},POST:async t=>{if(t)try{await o.post(`${c}/api/category`,t,{headers:n})}catch(e){console.error("There was a problem posting the data:",e)}}};s.Category=$,s.Invoice=w,s.Product=f,s.config=d,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
