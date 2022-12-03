using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Class1
    {

        public void CreateFile()
        {
            string f = @"C:\Users\rasko\Desktop\Lehav.Task\files\";
            Random r = new Random();
            string filefull = "";
          
            Task.Factory.StartNew(() =>
            {
                for (int i = 0; i < 10; i++)
                {
                    filefull = f;
                    filefull+=$"{r.Next(1,10)}.txt";
                    System.IO.File.WriteAllText(filefull, string.Concat(Enumerable.Repeat("*",10000000)));
                    //System.Threading.Thread.Sleep(1000);
                }
               
            });
        }
        
        public void Delete(string path)
        {
            File.Delete(path);
        }
        public Task<string> Func()
        {
            string path = @"C:\Users\rasko\Desktop\Lehav.Task\files\";
            string f = path + "lol.txt";  
            FileInfo fi = new FileInfo(f);
        
            Task<string> task =Task.Factory.StartNew(() =>
            {
                System.IO.File.WriteAllText(f,string.Concat(Enumerable.Repeat("*",300000000)));
                return fi.FullName;
            });
            return task;
        }
        

    }
}
