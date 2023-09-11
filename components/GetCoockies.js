"use client"
import pb from "./Auth";

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    // const first = JSON.parse(res)
    // const mod = {model:first.record, token: first.token}
    // const mod2 = JSON.stringify(mod)
    // localStorage.setItem("pocketbase_auth", mod2)

    return res
  }

export default getCookie