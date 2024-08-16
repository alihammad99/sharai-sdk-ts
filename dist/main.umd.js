(function(a,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("axios")):typeof define=="function"&&define.amd?define(["exports","axios"],r):(a=typeof globalThis<"u"?globalThis:a||self,r(a["sharai-sdk-ts"]={},a.axios))})(this,function(a,r){"use strict";const p=async e=>{try{await r.delete(`/api/product/delete-one?id=${e}`)}catch(t){console.error(t)}},d=async(e,t,o=!0,n=!1)=>{const c=`/api/product/get-by-category?id=${e}&active=${o}&similar=${n}`;try{const s=await r.get(c),{data:i}=await s.data;return{data:i}}catch(s){console.error(s)}},u=async(e,t=!0)=>{try{const o=await r.post(`/api/product/post-many?active=${t}`,{products:[...e]},{headers:{"Content-Type":"application/json"}}),{result:n}=o.data;return n}catch(o){console.error("There was a problem posting the data:",o)}},y=e=>{const{id:t,category:o,products:n,active:c}=e;return t?l(e):n&&(n==null?void 0:n.length)>0?u(n,c):o?d(o):l(e)},l=async e=>{const{sort:t,page:o,limit:n,active:c}=e,s=t?`/api/product/get-all?sort=${t}&page=${o}&limit=${n}&active=${c}`:`/api/product/get-all?page=${o}&limit=${n}&active=${c}`;try{const i=await r.get(s),{data:w}=await i.data;return{data:w}}catch(i){console.error(i)}},h={DELETE:p,GET:y,POST:async e=>{try{const t=await r.post("/api/products/post-one",{...e},{headers:{"Content-Type":"application/json"}}),{result:o}=t.data;return!0}catch(t){console.error("There was a problem posting the data:",t)}},SEARCH:async e=>{try{return(await r.get(`/api/product/search?phrase=${e}`)).data.result}catch(t){console.error("There was a problem posting the data:",t)}}},g={DELETE:async e=>{try{await r.delete(`/api/invoice/delete-one?id=${e}`)}catch(t){console.error(t)}},GET:async(e=1)=>{try{const t=await r.get(`/api/invoice/get-all?page=${e}`),{data:o}=await t.data;return{data:o}}catch(t){console.error(t)}},POST:async e=>{if(e)try{return await r.post("/api/orders/post-one",e,{headers:{"Content-Type":"application/json"}}),!0}catch(t){return console.error("There was a problem posting the data:",t),!1}},SEARCH:async e=>{try{return(await r.get(`/api/invoice/search?phrase=${e}`)).data.result}catch(t){console.error("There was a problem posting the data:",t)}}},v={DELETE:async e=>{try{await r.delete(`/api/category/delete-one?id=${e}`)}catch(t){console.error(t)}},GET:async()=>{try{const e=await r.get("/api/category/get-all"),{data:t}=await e.data;return{data:t}}catch(e){console.error(e)}},POST:async e=>{if(e)try{await r.post("/api/category/post-one",e,{headers:{"Content-Type":"application/json"}})}catch(t){console.error("There was a problem posting the data:",t)}}};a.Category=v,a.Invoice=g,a.Product=h,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
