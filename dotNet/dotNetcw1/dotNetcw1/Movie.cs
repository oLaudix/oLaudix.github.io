using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace dotNetcw1
{
    class Movie
    {
        protected string Name;
        protected int Year;
        protected int AgeLimit;
        protected Genre Genre;
        public Movie(string name, int year, int agelimit)
        {
            this.Name = name;
            this.Year = year;
            this.AgeLimit = agelimit;
        }
        protected int GetMovieAge()
        {
            return DateTime.Now.Year - this.Year;
        }
        public bool CheckYear()
        {
            return (this.Year >= 1900) && (GetMovieAge() >= 0);
        }

        public bool CheckAgeLimit()
        {
            return this.AgeLimit >= 0 && this.AgeLimit <= 100;
        }

        public bool CheckGenre(string genre)
        {
            return Enum.GetNames(typeof(Genre)).Contains(genre);
        }

        /*public void setGenre(string genre)
        {
            if (Enum.GetNames(typeof(Genre)).Contains(genre))
            {
                this.Genre = (Genre)Enum.Parse(typeof(Genre), genre);
            }
        }*/
    }
}
