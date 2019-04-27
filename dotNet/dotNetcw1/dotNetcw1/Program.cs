using System;
using System.Collections.Generic;

namespace dotNetcw1
{
    class Program
    {
        static void Main(string[] args)
        {
            int tempYear;
            int tempAgeLimit;
            Console.WriteLine("Hello World!");            
            List<Movie> MovieList = new List<Movie>();
            MovieList.Add(new ChildMovie("Toy Story", 1995, 8));
            MovieList.Add(new ChildMovie("Toy Story 2", 1999, 8));
            MovieList.Add(new ChildMovie("Toy Story 3", 2010, 8));
            MovieList.Add(new Movie("Forrest Gump", 1994, 13));
            MovieList.Add(new Movie("The Good, the Bad and the Ugly", 1966, 13));
            Console.WriteLine("Podaj tytul filmu");
            string tempTitle = Console.ReadLine();
            Console.WriteLine("Podaj rok produkcji filmu");
            while (true)
            {
                if (!int.TryParse(Console.ReadLine(), out tempYear))
                    Console.WriteLine("Musisz podać liczbę");
                else
                    break;
            }
            Console.WriteLine("Podaj limit wieku filmu");
            while (true)
            {
                if (!int.TryParse(Console.ReadLine(), out tempAgeLimit))
                    Console.WriteLine("Musisz podać liczbę");
                else
                    break;
            }
            Console.WriteLine("Podaj gatunek filmu");
            string tempGenre = Console.ReadLine();
            Movie tempMovie = new Movie(tempTitle, tempYear, tempAgeLimit);
            if (tempMovie.CheckYear()) { Console.WriteLine("Rok produkcji poprawny"); } else { Console.WriteLine("Rok produkcji niepoprawny"); }
            if (tempMovie.CheckAgeLimit()) { Console.WriteLine("Limit wieku poprawny"); } else { Console.WriteLine("Limit wieku niepoprawny"); }
            if (tempMovie.CheckGenre(tempGenre)) { Console.WriteLine("Gatunek filmu poprawny"); } else { Console.WriteLine("Gatunek filmu niepoprawny"); }
            Console.ReadLine();
        }
    }
}
