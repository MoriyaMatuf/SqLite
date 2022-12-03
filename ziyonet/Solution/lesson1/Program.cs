using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace lesson1
{
    class Program  
    {
        static void Main(string[] args)
        { 
            Person p = new Person() { Name = "moria", Number = 2338768 };

            string s = JsonSerializer.Serialize(p);

        }
    }
}
