import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [imgName, setImgName] = useState();
  const [name, setName] = useState();
  const [descr, setDescr] = useState();
  const [artistId, setArtistId] = useState();
  const [signed, setSigned] = useState();
  const [rarety, setRarety] = useState();
  const [variant, setVariant] = useState();
  const [resolution, setResolution] = useState();
  const [format, setFormat] = useState();
  const [pseudo, setPseudo] = useState();
  const [aName, setaName] = useState();
  const [firstname, setFirstname] = useState();
  const [collecName, setCollecName] = useState();
  const [collecDescr, setCollecDescr] = useState();
  const [creationDate, setCreationDate] = useState();
  const [result, setResult] = useState({});

  const handler = (e, foo) => {
    foo(e);
    load();
  }

  const handleDate = (e) => {
    let tmp = new Date(e).getTime() / 1000 ;
    setCreationDate(tmp);
    load();
  }

  const yesOrNo = (str) => {
    if(str === 'yes'){
      return true;
    }else if(str === 'no'){
      return false;
    }else{
      return "error";
    }
  }
  
  const load = () => {
    let tmpSigned = yesOrNo(signed);
    let obj = {   
      'name':name,
      'description':descr,
      'artist-id':artistId,
      "attributes": [
          {
            "trait_type": "artwork-signed", 
            "value": tmpSigned
          },
          {
              "trait_type": "rarety", 
              "value": rarety
          }, 
          {
            "trait_type": "variant", 
            "value": variant
          }, 
          {
              "trait_type": "artwork-resolution", 
              "value": resolution
          },
          { 
              "trait_type": "artwork-format", 
              "value": format
          },
          { 
              "trait_type": "artist-pseudo", 
              "value": pseudo
          },
          { 
              "trait_type": "artist-name", 
              "value": aName
          },
          { 
              "trait_type": "artist-firstName", 
              "value": firstname
          },
          { 
              "trait_type": "collection-name", 
              "value": collecName
          },
          { 
              "trait_type": "collection-description", 
              "value": collecDescr
          },
          { 
              "trait_type": "tradeMark", 
              "value": "The Gallery TM"
          },
          {
              "display_type": "date", 
              "trait_type": "Creation date", 
              "value": creationDate
          }
        ]
  }
  setResult(obj);
  }

  useEffect(() => {
    load();
  }, [name, descr, artistId, signed, rarety, variant, resolution, format, pseudo, aName, firstname, collecName, collecDescr, creationDate])

  console.log(result)
  
  return (
    <div className="App">
      <form id='form'>
        <h1>The Gallery - Metadata</h1>
        <label className='labels' htmlFor='imgName'>Nom du fichier image(sans l'extension)</label>
        <input onChange={(e)=>{handler(e.target.value, setImgName)}} name='imgName' className='inputs' type='text'/>

        <label className='labels' htmlFor='name'>Nom de l'oeuvre</label>
        <input onChange={(e)=>{handler(e.target.value, setName)}} name='name' className='inputs' type='text'/>

        <label className='labels' htmlFor='description'>description</label>
        <input onChange={(e)=>{handler(e.target.value, setDescr)}} name='description' className='inputs' type='text'/>

        <label className='labels' htmlFor='artistID'>artist ID</label>
        <input onChange={(e)=>{handler(e.target.value, setArtistId)}} name='artistID' className='inputs' type='text'/>

        <label className='labels' htmlFor='signed'>Signed ? (yes or no)</label>
        <input onChange={(e)=>{handler(e.target.value, setSigned)}} name='signed' className='inputs' type='text'/>

        <label className='labels' htmlFor='rarety'>Rarety</label>
        <input onChange={(e)=>{handler(e.target.value, setRarety)}} name='rarety' className='inputs' type='text'/>

        <label className='labels' htmlFor='variant'>Variant</label>
        <input onChange={(e)=>{handler(e.target.value, setVariant)}} name='variant' className='inputs' type='text'/>

        <label className='labels' htmlFor='resolution'>Artwork resolution</label>
        <input onChange={(e)=>{handler(e.target.value, setResolution)}} name='resolution' className='inputs' type='text'/>

        <label className='labels' htmlFor='format'>Format</label>
        <input onChange={(e)=>{handler(e.target.value, setFormat)}} name='format' className='inputs' type='text'/>

        <label className='labels' htmlFor='pseudo'>Artist pseudo</label>
        <input onChange={(e)=>{handler(e.target.value, setPseudo)}} name='pseudo' className='inputs' type='text'/>

        <label className='labels' htmlFor='artist-name'>Artist name</label>
        <input onChange={(e)=>{handler(e.target.value, setaName)}} name='artist-name' className='inputs' type='text'/>

        <label className='labels' htmlFor='artist-firstname'>Artist firstname</label>
        <input onChange={(e)=>{handler(e.target.value, setFirstname)}} name='artist-firstname' className='inputs' type='text'/>
        
        <label className='labels' htmlFor='collection-name'>Collection name</label>
        <input onChange={(e)=>{handler(e.target.value, setCollecName)}} name='collection-name' className='inputs' type='text'/>

        <label className='labels' htmlFor='collection-description'>Collection description</label>
        <input onChange={(e)=>{handler(e.target.value, setCollecDescr)}} name='collection-description' className='inputs' type='text'/>

        <label className='labels' htmlFor='date'>Date de création de l'oeuvre</label>
        <input onChange={(e)=>{handleDate(e.target.value, setCreationDate)}} name='date' className='inputs' type='date'/>

        <a id='dlBTN' href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(result)
          )}`} download={imgName + '_metadatas.json'}>Créer '{imgName}_metadatas.json'</a>
      </form>
      <div id='displayJSON'>
        <h2>Aperçu : {imgName + '_metadatas.json'}</h2>
        <img src='fleche.png' id='fleche'/>
       <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
