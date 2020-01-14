import React from 'react';

export default () => {
    // const imgs = ['1.jpg', '2.jpg'];
    function importAll(r) {
      console.log(r.keys());
      return r.keys();
    }
    
    const images = importAll(require.context('../image', true, /\.(png|jpe?g|svg)$/));
    return (
      <div>
        {images.map((value, index) => {
          console.log(value.replace('./',''));
          var usethis = value.replace('./','');
          return <img style={{width: '100%', height: '100%'}} key={index} src={require(`../image/${usethis}`)} alt={index}/> 
        })}
      </div>
    );
  };

