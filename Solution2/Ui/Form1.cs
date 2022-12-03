using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Ui
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
       
        private async void button1_Click(object sender, EventArgs e)
        {
            Dal.Class1 d = new Dal.Class1();
            string s = await d.GetCityData(); 
          
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
