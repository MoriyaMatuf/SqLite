using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Text.Json;

namespace Lehava
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        static List<Person> db = new List<Person>();
        private void label1_Click(object sender, EventArgs e)
        {

        }
        
        private void button1_Click(object sender, EventArgs e)
        {
            Person p = new Person();
            p.Name = textBox1.Text;
            p.Num =textBox2.Text;
            db.Add(p);
            textBox1.Text = "";
            textBox2.Text = "";
           
        }

        private void button2_Click(object sender, EventArgs e)
        {
           List<Person> p= JsonSerializer.Deserialize <List<Person>>(@"person.txt");
        
     

        }

        private void button3_Click(object sender, EventArgs e)
        {
           
            string str = JsonSerializer.Serialize(db);
            System.IO.File.WriteAllText(@"person.txt",str);

        }
    }
}
