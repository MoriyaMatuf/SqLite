using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task
{
    class HardWork
    {

        public static void Work()
        {
            for (int i = 0; i < 10; i++)
            {
                System.IO.File.WriteAllText($@"C:\Users\rasko\Desktop\ziyonet\Solution\Filetask\txt.{i}","*****");
              
            }
        }
        public static void Run()
        {
            Task t = Task.Factory.StartNew(Work);

        }
    }
}
