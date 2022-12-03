using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            ClassLibrary1.Class1 run = new ClassLibrary1.Class1();
            run.CreateFile();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            ClassLibrary1.Class1 run = new ClassLibrary1.Class1();

            for (int i = 0; i < 5; i++)
            {
                run.CreateFile();
            }
        }

        private async void button3_Click(object sender, EventArgs e)
        {
            ClassLibrary1.Class1 run = new ClassLibrary1.Class1();
            string c =await run.Func();
            run.Delete(c);
       

        }

        private void button4_Click(object sender, EventArgs e)
        {

        }

        private void button4_Click_1(object sender, EventArgs e)
        {

        }
    }
}
