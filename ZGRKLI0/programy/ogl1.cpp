#include <windows.h> // nie w ka�dym kompilatorze potrzebne, 
                     //wymagane np. w DevC++
										 
#include <GL/glut.h> // do��czenie nag��wka biblioteki glut; 
                     //nie ma potrzeby do��cznia nag��wk�w gl.h i glu.h, 
                     //gdy� s� one do��czane w kodzie glut.h
                     
void display() //nazwa tej funkcji mo�e by� dowolona
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT);
gluPerspective(45.0, 1.0, 0.1, 10.0);
gluLookAt(0.0, 0.0, 3.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);
glBegin(GL_POLYGON);
  glColor3f(1.0, 0.0, 0.0); 
  glVertex3f(0.0, 0.0, 0.0);
  glColor3f(0.0, 1.0, 0.0); 
  glVertex3f(1.0, 0.0, 0.0);
  glColor3f(0.0, 0.0, 1.0); 
  glVertex3f(0.0, 1.0, 0.0);
glEnd();  
glFlush();
} 

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  

  //inicjacja wszystkich "stan�w" bie��cych biblioteki GLUT (tzn. warto�ci 
  //pocz�tkowych zmiennych, kt�rymi si� pos�uguje). Dop�ki nie zmieni si� 
  //kt�rego� stanu, jawnie wywo�uj�c dan� funkcj�, obowi�zuje jego warto��
  //bie��ca; stanami s� np. ilo�� bajt�w opisuj�ca kolor piksela, rozdzielczo��
  //okna ekranowego, po�o�enie okna na ekranie
  //(wszyskie funkcje biblioteki GLUT maj� prefix glut)
                          
  glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);
  
  //Wszystkie sta�e  biblioteki GLUT maj� prefix GLUT_. W funkcjach kt�re
  //ich u�ywaj� s� one ��czone przez operacj� sumy bitowej | w jedn� wsp�ln�
  //sta��. Warto�ci sta�ych podstawowych s� na tyle unikalne, �e suma 
  //bitowa dowolnej ich ilo�ci daje now�, r�wnie� unikaln� warto��. 
  //Zapewnia to jednoznaczno�� opisu. 
  //GLUT_RGB - okno b�dzie u�ywa�o tr�jskladnikowego opisu koloru we 
  //wsp�lrz�dnych r,g,b (zak�adam, �e zasada tego opisu jest znana)
  //GLUT_SINGLE - okno b�dzie mia�o przydzielon� pami�� na pojedynczy
  //obraz (wielko�c pami�ci to ilo�� pikseli okna razy pami�� na jeden 
  //piksel - zob. te� wywo�ania ni�ej). W przypadku animacji, dla 
  //unikni�cia "migotania" potrzebujemy dw�ch p�aszczyzn obrazu - 
  //przydzielamy w�wczas podw�jn� pami�� - GLUT_DOUBLE
  
  glutInitWindowSize(400,300);
  
  //okre�lnie rozmiaru okna w pikselach (szeroko��, wysoko��)
  
  glutInitWindowPosition(100,100);
  
  //okre�lnie po�o�enia lewego, g�rnego naro�nika okna na ekranie   
  //obie powy�sze wielko�ci maj� (jak wszystko w OpenGL) warto�ci
  //domy�lne ustawione na starcie, ale kilka z nich warto ustawi�
  //jawnie, np. �eby nie potrzeba pami�ta� ustawie� domy�lnych
  
  glutCreateWindow("Scena testowa");
  
  //przygotowanie struktury okna w pami�ci RAM - okno nie jest jeszcze
  //wy�wietlone na ekranie ("scena testowa" to przyklad nazwy 
  //pokazuj�cej si� na g�rnej belce okna)
  //ponadto nast�puje inicjacja wszystkich "`stan�w" bie��cych biblioteki OpenGl (tzn. warto�ci 
  //pocz�tkowych zmiennych, kt�rymi si� pos�uguje). Dop�ki nie zmieni si� 
  //kt�rego� stanu, jawnie wywo�uj�c dan� funkcj�, obowi�zuje jego warto��
  //bie��ca; stanami s� np. kolor rysowania bie��cego obiektu, jego materia�,
  //po�o�enie obserwatora itp.
  
  glutDisplayFunc(display);
  
  //funkcja ta pobiera nazw� funkcji opisuj�cej scen� ,kt�ra ma
  //by� wy�wietlona w zdefiniowanym oknie - w tym przypadku
  //funkcja nazywa si�: display
 
  glutMainLoop();
  
  //uruchomienie p�tli obs�ugi zdarze�. tzn. w szczeg�lno�ci
  // - wy�wietlenie zdefinowangeo wcze�niej okna na ekranie
  // - za�adowanie do okna obrazu sceny, przez wywolanie 
  //   funkcji display
  // - oczekiwanie na kolejne zdarzenia (np. exit)
}