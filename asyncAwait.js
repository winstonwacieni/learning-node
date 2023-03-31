const axios = require('axios');

const connectToUrl = (url)=>{
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        let listOfEntries = resp.data.entries;
        listOfEntries.forEach((entry)=>{
            console.log(entry.Category);
        });
    })
    .catch(err => {
        console.log(err.toString())
    });
}
console.log("Before connect URL")
connectToUrl('https://api.publicapis.org/entries');
console.log("After ConnectUrl")

// acomplished with async / await

const axios = require('axios');
const connectToURL2 = async(url)=>{
    const outcome = axios.get(url);
    let listOfEntries = (await outcome).data.entries;
    listOfEntries.forEach((entry)=>{
      console.log(entry.Category);
    });
}
console.log("Before connect URL")
connectToURL2('https://api.publicapis.org/entries');
console.log("After connect URL")

const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category. Finally print them all out. We are using axios get, which returns a promise. 
*/
const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about 
each of the category. Finally print them all out. We are using axios get, which returns a promise. 
*/
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfEntries = resp.data.entries;
      return listOfEntries.map((entry)=>{
          return entry.Category
      })
    }).then((categories)=>{
      let Categories = categories.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
        Categories.forEach((category)=>{
            const req = axios.get("https://api.publicapis.org/entries?Category="+category);
            req.then(resp=>{
                console.log(category+" - "+resp.data.count);
            }).catch(err => {
              
            })
        });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
connectToURL('https://api.publicapis.org/entries');

// The same objective is attained using async/await.

const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category starting with 'A'. Finally print the API counts of the category. We are using axios get, which returns a promise. 
*/
const axios = require('axios');
async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfEntries = resp.data.entries;
    let Categories = listOfEntries.map((entry)=>{
          return entry.Category
    });
    Categories = [...new Set(Categories)];
    Categories.forEach(async (Category)=>{
      if (Category.startsWith("A")) {
              try {
                const resp = await axios({
                  method: 'get',
                  url: "https://api.publicapis.org/entries?Category="+Category,
                  responseType: 'json'
                })
                console.log(Category+"   "+resp.data.count);
              } 
              catch(e) {
                console.log(e);
              }
      }
    });
}
connectToURL('https://api.publicapis.org/entries').catch(err => {
    console.log(err.toString())
});