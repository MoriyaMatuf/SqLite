using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static ClassLibrary.Class1;

namespace entities
{
    public class Class1
    {
        dal.Class1 db = new dal.Class1();
        RetFromOpenSky s;
        public void Run()
        {
            while(true)
            {
                db.GetCityData();
                System.Threading.Thread.Sleep(5000);
                
            }
        }


    }
}
