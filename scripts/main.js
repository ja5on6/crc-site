
  // GET API REQUEST
  async function get_visitors() {
      // call post api request function
      //await post_visitor();
      try {
          let response = await fetch('https://soj1ga7zr5.execute-api.ap-southeast-1.amazonaws.com/default/SiteHitCounter', {
              method: 'GET',
              headers: {
                  //'x-api-key': 'JslbDfdt1F8fl7wE4CRIj1Oqidmtmzqw4lZ539Sj',
              }
          });
          let data = await response.json()
          document.getElementById("visitors").innerHTML = data['count'] + " visits since Sept 2021.";
          console.log(data);
          return data;
      } catch (err) {
          console.error(err);
      }
  }
  
  get_visitors();