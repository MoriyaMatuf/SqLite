import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
<Seeimage/>
    </div>
   
  );
}
function Seeimage(){
  var arr=['https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.photo-art.co.il/wp-content/uploads/2015/06/BY1A65881.jpg','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.google.com/search?q=%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA+%D7%A0%D7%95%D7%A3&sxsrf=ALiCzsapJBdOPbwaIZ-s1G2Kvj7txCBNTg:1652779295863&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiissjWmub3AhXnRvEDHbZnCF0Q_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=npimr3oiJgxlGM','https://www.photo-art.co.il/wp-content/uploads/2015/06/BY1A65881.jpg'];
  var li=arr.map((x)=>{return((<li> <img src={x}/></li>))});
  var ul=<ul>{li}</ul>
  return ul;
}
export default App;
