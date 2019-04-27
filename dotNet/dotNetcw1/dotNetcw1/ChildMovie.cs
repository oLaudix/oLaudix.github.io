using System;
using System.Collections.Generic;
using System.Text;

namespace dotNetcw1
{
    class ChildMovie : Movie
    {
        public ChildMovie(string name, int year, int agelimit) : base (name, year, agelimit)
        {
            this.Name = name;
            this.Year = year;
            this.AgeLimit = agelimit;
            this.Genre = Genre.Animated;
        }
    }
}
