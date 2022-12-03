using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using static ClassLibrary.Class1;

namespace dal
{
    public class Class1
    {

        public async Task<string> GetCityData()
        {
            string str = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://opensky-network.org");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //GET Method
                HttpResponseMessage response = await client.GetAsync(@"/api/states/all");
                if (response.IsSuccessStatusCode)
                {
                    str = await response.Content.ReadAsStringAsync();
                }
                else
                {
                    Console.WriteLine("Internal server Error");
                }
                var s = System.Text.Json.JsonSerializer.Deserialize<RetFromOpenSky>(str);

            }

            return str;
        }
    }
}
